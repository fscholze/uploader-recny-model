#!/bin/bash

pushd uploader-recny-model
echo "REACT_APP_RECOG_SERVER_URL=$BACKEND_URL_RECOG" > .env
echo "REACT_APP_DICT_SERVER_URL=$BACKEND_URL_DICT" >> .env
popd

cd uploader-recny-model && npm start
