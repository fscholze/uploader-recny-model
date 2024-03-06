#!/bin/bash

pushd uploader-recny-model
echo "REACT_APP_SERVER_URL=$BACKEND_URL" > .env
popd

cd uploader-recny-model && npm start
