FROM node:6

ENV RUNNER_UID 0
ENV RUNNER_GID 0

RUN mkdir -p /code
ADD package.json /code

WORKDIR /code
RUN npm install

ADD . /code
ADD ci_tasks/build_dist/run.sh /code/run.sh

VOLUME ["/code/build/"]
CMD ["bash", "/code/run.sh"]