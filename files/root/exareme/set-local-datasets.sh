#!/bin/bash

if [ -z ${NODE_NAME} ]; then echo "NODE_NAME is unset";exit;  fi
if [ -z ${CONSULURL} ]; then echo "CONSULURL is unset"; exit; fi

MADIS="/root/exareme/lib/madis/src/mterm.py"
DATASETS_PATH="datasets"
RAW_UDF=$(cat /root/mip-algorithms/properties.json | jq ."local_engine_default"."name" | sed 's/^\"//g ; s/\"$//g')

DATASETS=$(echo "select  distinct val from ($RAW_UDF dataset);" | $MADIS | \
	 sed '1d ; $d' | jq .[]  | sed 's/^\"//g ; s/\"$//g' | printf %s "$(cat)"| jq -R -c -s 'split("\n")')


curl -X PUT -d @- $CONSULURL/v1/kv/$DATASETS_PATH/$NODE_NAME <<< $DATASETS