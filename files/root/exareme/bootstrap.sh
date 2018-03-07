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

    if [ "$MASTER_FLAG" != "master" ]; then #this is a worker
        while [ "$(curl -s ${CONSULURL}/v1/health/state/passing | jq -r '.[].Status')" != "passing" ]; do
		    sleep 2
	    done
	    #if active workers exist, the system was already running
        if [ "$(curl -o -i -s -w "%{http_code}\n" ${CONSULURL}/v1/kv/${EXAREME_ACTIVE_WORKERS_PATH}/?keys)" = "200" ]; then
           echo $NODE_NAME > /root/exareme/etc/exareme/name
           curl -s $CONSULURL/v1/kv/$EXAREME_MASTER_PATH/$(curl -s $CONSULURL/v1/kv/$EXAREME_MASTER_PATH/?keys | jq -r '.[]' | sed "s/$EXAREME_MASTER_PATH\///g")?raw > /root/exareme/etc/exareme/master
           SH=$(cat /root/exareme/etc/exareme/master)
           IP=$(/sbin/ifconfig $1 | grep "inet " | awk -F: '{print $2}' | grep '10.20' | awk '{print $1;}' | head -n 1)
           . ~/exareme/start_worker.sh
           curl -X PUT -d @- $CONSULURL/v1/kv/$EXAREME_ACTIVE_WORKERS_PATH/$NODE_NAME <<< $IP
           echo $IP | ssh -oStrictHostKeyChecking=no $SH "cat >> ~/exareme/etc/exareme/workers"     #write workers's IP into master's worker file
           while [ ! -f "/tmp/exareme/var/log/exareme-*.log" ]; do
            sleep 2
           done
        else    #the system just created
           MY_OLIP=$(/sbin/ifconfig $1 | grep "inet " | awk -F: '{print $2}' | grep '10.20' | awk '{print $1;}' | head -n 1)
           curl -X PUT -d @- $CONSULURL/v1/kv/$EXAREME_WORKERS_PATH/$MY_OLIP <<< $NODE_NAME
           echo $NODE_NAME > /root/exareme/etc/exareme/name
           while [ ! -f "/tmp/exareme/var/log/exareme-*.log" ]; do
            sleep 2
               done
	    fi
    else #this is the master
        while [ "$(curl -s ${CONSULURL}/v1/health/state/passing | jq -r '.[].Status')" != "passing" ]; do			#sleep 2
            sleep 2
        done
        /sbin/ifconfig $1 | grep "inet " | awk -F: '{print $2}' | grep '10.20' | awk '{print $1;}' | head -n 1 > etc/exareme/master
        MY_OLIP=$(/sbin/ifconfig $1 | grep "inet " | awk -F: '{print $2}' | grep '10.20' | awk '{print $1;}' | head -n 1)
        curl -X PUT -d @- $CONSULURL/v1/kv/$EXAREME_MASTER_PATH/$NODE_NAME <<< $MY_OLIP
        WORKERS_UP=0
        while [ $WORKERS_UP != $EXA_WORKERS_WAIT ]; do		#for test $EXA_WORKERS_WAIT ==1
            sleep 2
            curl -s $CONSULURL/v1/kv/$EXAREME_WORKERS_PATH/?keys | jq -r '.[]' | sed "s/$EXAREME_WORKERS_PATH\///g"  \
            | head -n $EXA_WORKERS_WAIT > etc/exareme/workers
                WORKERS_UP=`cat etc/exareme/workers | wc -l`
                echo "Waiting for " $((EXA_WORKERS_WAIT-WORKERS_UP)) " more exareme workers..."
        done
        for i in `cat etc/exareme/workers` ; do
            ssh -oStrictHostKeyChecking=no $i date
            curl -X PUT -d @- $CONSULURL/v1/kv/$EXAREME_ACTIVE_WORKERS_PATH/$(curl -s $CONSULURL/v1/kv/$EXAREME_WORKERS_PATH/$i?raw) <<< $i
            curl -X DELETE $CONSULURL/v1/kv/$EXAREME_WORKERS_PATH/$i
        done
	    echo $NODE_NAME > /root/exareme/etc/exareme/name
        ./bin/exareme-admin.sh --update
        sleep 3
        ./bin/exareme-admin.sh --start
fi

if [ -e "/tmp/exareme/var/log/exareme-*.log" ]
then
    tail -f /tmp/exareme/var/log/exareme-*.log
else
    sleep 2
    tail -f /tmp/exareme/var/log/exareme-*.log
fi

