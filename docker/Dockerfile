FROM node:20.11.1-bookworm
MAINTAINER Daniel Sobe <daniel.sobe@sorben.com>

# docker build -t offline_transcription .
# docker build -t offline_transcription . --no-cache

RUN mkdir -p /uploader-recny-model/public
RUN mkdir -p /uploader-recny-model/src

COPY public                                       /uploader-recny-model/public
COPY src                                          /uploader-recny-model/src
COPY package.json package-lock.json tsconfig.json /uploader-recny-model

RUN cd uploader-recny-model && npm install

COPY docker/startme.sh /

CMD ["/bin/bash", "-c", "/startme.sh"] 
