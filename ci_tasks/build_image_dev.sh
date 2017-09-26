#!/bin/bash

set -e

VERSION=`git describe --tags`

echo "Building version ${VERSION}"

REPOSITORY_V2="siema/boilerplate/frontend"

docker build -t boilerplate_frontend_build -f ci_tasks/build_dist/Dockerfile .
docker run --rm -v `pwd`/build:/code/build --env RUNNER_UID=`id -u` --env RUNNER_GID=`id -g` boilerplate_frontend_build

docker build -t ${REPOSITORY_V2} -f ci_tasks/build_img/Dockerfile .
docker tag ${REPOSITORY_V2} ${REPOSITORY_V2}:latest
docker push ${REPOSITORY_V2}:latest