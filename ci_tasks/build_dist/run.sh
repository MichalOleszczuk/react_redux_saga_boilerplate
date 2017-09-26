#!/bin/bash

cd /code
cp /code/src/configuration/config_prod.js /code/src/configuration/config.js
npm run build
chown -R ${RUNNER_UID}:${RUNNER_GID} /code/build