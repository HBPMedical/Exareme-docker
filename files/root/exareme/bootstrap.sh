#!/usr/bin/env bash

if [ -z ${RAWUSERNAME} ]; then echo "RAWUSERNAME is unset"; exit;  fi
if [ -z ${RAWPASSWORD} ]; then echo "RAWPASSWORD is unset";exit;  fi
if [ -z ${RAWHOST} ]; then echo "RAWHOST is unset";exit;  fi
if [ -z ${RAWPORT} ]; then echo "RAWPORT is unset";exit;  fi
if [ -z ${RAWENDPOINT} ]; then echo "RAWENDPOINT is unset";exit;  fi
if [ -z ${RAWRESULTS} ]; then echo "RAWRESULTS is unset"; exit;  fi
if [ -z ${RAWDATAKEY} ]; then echo "RAWDATAKEY is unset";exit;  fi
if [ -z ${MODE} ]; then echo "MODE is unset";exit;  fi
if [ -z ${NODE_NAME} ]; then echo "NODE_NAME is unset";exit;  fi
if [ -z ${RAWDB} ]; then echo "RAWDB is unset";exit;  fi


sed -i "/<raw_username>/c{ \"name\" : \"username\", \"desc\" : \"\", \"value\":\"`echo $RAWUSERNAME`\" }," /root/mip-algorithms/properties.json
sed -i "/<raw_password>/c{ \"name\" : \"password\", \"desc\" : \"\", \"value\":\"`echo $RAWPASSWORD`\" }," /root/mip-algorithms/properties.json
sed -i "/<raw_host>/c{ \"name\" : \"host\", \"desc\" : \"\", \"value\":\"`echo $RAWHOST`\" }," /root/mip-algorithms/properties.json
sed -i "/<raw_port>/c{ \"name\" : \"port\", \"desc\" : \"\", \"value\":\"`echo $RAWPORT`\" }," /root/mip-algorithms/properties.json
sed -i "/<raw_endpoint>/c{ \"name\" : \"api\", \"desc\" : \"\", \"value\":\"`echo $RAWENDPOINT`\" }," /root/mip-algorithms/properties.json
sed -i "/<raw_resultsperpage>/c{ \"name\" : \"resultsPerPage\", \"desc\" : \"\", \"value\":\"`echo $RAWRESULTS`\" }," /root/mip-algorithms/properties.json
sed -i "/<raw_datakey>/c{ \"name\" : \"datakey\", \"desc\" : \"\", \"value\":\"`echo $RAWDATAKEY`\" }," /root/mip-algorithms/properties.json
sed -i "/<raw_db>/c{ \"name\" : \"db\", \"desc\" : \"\", \"value\":\"`echo $RAWDB`\" }" /root/mip-algorithms/properties.json

mkdir -p  /tmp/demo/db/
if [ -z ${CONSULURL} ]; then echo "CONSULURL is unset"; exit; fi

EXAREME_WORKERS_PATH="available_workers"
EXAREME_ACTIVE_WORKERS_PATH="active_workers"
EXAREME_MASTER_PATH="master"

service ssh restart

while [ "$(curl -s ${CONSULURL}/v1/health/state/passing | jq -r '.[].Status')" != "passing" ]; do	#wait until CONSUL is up and running
    sleep 2
done

if [ "$MASTER_FLAG" != "master" ]; then #this is a worker
    DESC="exareme-worker"
    echo -n $NODE_NAME > /root/exareme/etc/exareme/name
    while [ "$(curl -o -i -s -w "%{http_code}\n" ${CONSULURL}/v1/kv/${EXAREME_MASTER_PATH}/?keys)" != "200" ]; do
        echo "Waiting for master node to be initialized...."
        sleep 2
    done
    curl -s $CONSULURL/v1/kv/$EXAREME_MASTER_PATH/$(curl -s $CONSULURL/v1/kv/$EXAREME_MASTER_PATH/?keys | jq -r '.[]' | sed "s/$EXAREME_MASTER_PATH\///g")?raw > /root/exareme/etc/exareme/master
    MASTER_NAME=$(curl -s $CONSULURL/v1/kv/$EXAREME_MASTER_PATH/?keys | jq -r '.[]' | sed "s/$EXAREME_MASTER_PATH\///g")
    SH=$(cat /root/exareme/etc/exareme/master)
    IP=$(/sbin/ifconfig $1 | grep "inet " | awk -F: '{print $2}' | grep '10.20' | awk '{print $1;}' | head -n 1)
    SPACE=' '
    . /root/exareme/start-worker.sh
    if [ "$(curl -o -i -s -w "%{http_code}\n" ${CONSULURL}/v1/kv/${EXAREME_ACTIVE_WORKERS_PATH}/{$NODE_NAME}?keys)" = "200" ]; then
        ssh -oStrictHostKeyChecking=no $SH """sed -i  "/`echo $NODE_NAME`/d" /root/exareme/etc/exareme/workers; curl localhost:9091/remove/worker?IP=$IP"""       #sed -i == delete line from etc/exareme/worker
        curl -X DELETE $CONSULURL/v1/kv/$EXAREME_ACTIVE_WORKERS_PATH/$NODE_NAME
    fi
    curl -X PUT -d @- $CONSULURL/v1/kv/$EXAREME_ACTIVE_WORKERS_PATH/$NODE_NAME <<< $IP
    echo $IP$SPACE$NODE_NAME | ssh -oStrictHostKeyChecking=no $SH "cat >> /root/exareme/etc/exareme/workers"     #write workers's IP into master's worker file
    while [ ! -f /tmp/exareme/var/log/$DESC.log ]; do
        echo "Trying to connect to master with IP "$SH" and NAME "$MASTER_NAME"."
        sleep 2             #catch log file, match error "unable to connect to master re-run start-worker.sh
    done
   # while [ $(cat /tmp/exareme/var/log/$DESC.log | grep *"Worker node started."*) ]; do
    #  echo "Waiting to establish connection" #sleep ${SLEEP_TIME}
    #done
    tail -f /tmp/exareme/var/log/$DESC.log | while read LOGLINE
    do
        [[ "${LOGLINE}" == *"Worker node started."* ]] && pkill -P $$ tail
        echo " Waiting to establish connection with master's IP "$SH" and name "$MASTER_NAME".."
        sleep 2
        if [[ "${LOGLINE}" == *"Cannot connect to"* ]]; then
            echo "Can not establish connection with master node. Is master node running? Terminating worker node "$NODE_NAME"..."
            if [ -f /tmp/exareme/var/run/*.pid ]; then
                kill -9 $( cat /tmp/exareme/var/run/*.pid)
                rm /tmp/exareme/var/run/*.pid
                echo "Stopped."
            else
                echo "Already stopped, no action taken."
            fi
            break
        fi
    done
    echo -e "\nConnected to master with IP "$SH" and name "$MASTER_NAME"."

#this is the master
else
    DESC="exareme-master"
    echo -n $NODE_NAME > /root/exareme/etc/exareme/name
    /sbin/ifconfig $1 | grep "inet " | awk -F: '{print $2}' | grep '10.20' | awk '{print $1;}' | head -n 1 > /root/exareme/etc/exareme/master
    MY_IP=$(/sbin/ifconfig $1 | grep "inet " | awk -F: '{print $2}' | grep '10.20' | awk '{print $1;}' | head -n 1)
    #Master re-booted
    if [ "$(curl -o -i -s -w "%{http_code}\n" ${CONSULURL}/v1/kv/${EXAREME_MASTER_PATH}/?keys)" = "200" ]; then
        if [ "$(curl -o -i -s -w "%{http_code}\n" ${CONSULURL}/v1/kv/${EXAREME_ACTIVE_WORKERS_PATH}/?keys)" = "200" ]; then
            for i in `curl -s $CONSULURL/v1/kv/${EXAREME_ACTIVE_WORKERS_PATH}/?keys | jq -r '.[]' | sed "s/${EXAREME_ACTIVE_WORKERS_PATH}\///g"` ; do
                IP=$(curl -s $CONSULURL/v1/kv/${EXAREME_ACTIVE_WORKERS_PATH}/$i?raw)
                SPACE=' '
                echo $IP$SPACE$i >> /root/exareme/etc/exareme/workers
                ssh -oStrictHostKeyChecking=no $IP date
            done
            ./bin/exareme-admin.sh --stop
            ./bin/exareme-admin.sh --update
            sleep 2
            ./bin/exareme-admin.sh --start
        #else mipws oi workers den exoun prolavei na einai active kai einai available?
        fi
    #Master just created
    else
        ./bin/exareme-admin.sh --start
        echo "Initializing master node with IP "$MY_IP" and NAME " $NODE_NAME"..."
        while [ ! -f /tmp/exareme/var/log/$DESC.log ]; do
            echo "Initializing master node with IP "$MY_IP" and NAME " $NODE_NAME"..."
        done
    fi
    curl -X PUT -d @- $CONSULURL/v1/kv/$EXAREME_MASTER_PATH/$NODE_NAME <<< $MY_IP
fi

if [ -e "/tmp/exareme/var/log/exareme-*.log" ]
then
    tail -f /tmp/exareme/var/log/exareme-*.log
else
    sleep 2
    tail -f /tmp/exareme/var/log/exareme-*.log
fi