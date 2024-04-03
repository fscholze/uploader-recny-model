FROM node:20.11.1-bookworm
MAINTAINER Daniel Sobe <daniel.sobe@sorben.com>

# docker build -t offline_transcription .
# docker build -t offline_transcription . --no-cache

RUN touch CCC

RUN git clone https://github.com/ZalozbaDev/uploader-recny-model

RUN cd uploader-recny-model && npm install

COPY docker/startme.sh /

CMD ["/bin/bash", "-c", "/startme.sh"] 
