#!/bin/bash

if [ -z ${NODE_NAME} ]; then echo "NODE_NAME is unset";exit;  fi
if [ -z ${CONSULURL} ]; then echo "CONSULURL is unset"; exit; fi

MADIS="/root/exareme/lib/madis/src/mterm.py"
LOCAL_DATASET="/root/exareme/datasets/datasets.csv"

DATASETS=$(echo "select distinct __val from (file header:t file:$LOCAL_DATASET) where __colname = 'dataset';" | $MADIS | \
	 sed '1d ; $d' | jq .[]  | sed 's/^\"//g ; s/\"$//g' | printf %s "$(cat)"| jq -R -c -s 'split("\n")')
	 
curl -X PUT -d @- $CONSULURL/v1/kv/datasets/$NODE_NAME <<< $DATASETS