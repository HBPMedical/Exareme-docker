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
if [ -z ${CONSULURL} ]; then echo "CONSULURL is unset"; exit; fi

sed -i "/<raw_username>/c{ \"name\" : \"username\", \"desc\" : \"\", \"value\":\"`echo $RAWUSERNAME`\" }," /root/mip-algorithms/properties.json
sed -i "/<raw_password>/c{ \"name\" : \"password\", \"desc\" : \"\", \"value\":\"`echo $RAWPASSWORD`\" }," /root/mip-algorithms/properties.json
sed -i "/<raw_host>/c{ \"name\" : \"host\", \"desc\" : \"\", \"value\":\"`echo $RAWHOST`\" }," /root/mip-algorithms/properties.json
sed -i "/<raw_port>/c{ \"name\" : \"port\", \"desc\" : \"\", \"value\":\"`echo $RAWPORT`\" }," /root/mip-algorithms/properties.json
sed -i "/<raw_endpoint>/c{ \"name\" : \"api\", \"desc\" : \"\", \"value\":\"`echo $RAWENDPOINT`\" }," /root/mip-algorithms/properties.json
sed -i "/<raw_resultsperpage>/c{ \"name\" : \"resultsPerPage\", \"desc\" : \"\", \"value\":\"`echo $RAWRESULTS`\" }," /root/mip-algorithms/properties.json
sed -i "/<raw_datakey>/c{ \"name\" : \"datakey\", \"desc\" : \"\", \"value\":\"`echo $RAWDATAKEY`\" }," /root/mip-algorithms/properties.json
sed -i "/<raw_db>/c{ \"name\" : \"db\", \"desc\" : \"\", \"value\":\"`echo $RAWDB`\" }" /root/mip-algorithms/properties.json
