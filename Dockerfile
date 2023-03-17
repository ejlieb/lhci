FROM node

WORKDIR /usr/src/app

COPY ./build ./

COPY lighthouserc.js ./

COPY entrypoint.sh ./

