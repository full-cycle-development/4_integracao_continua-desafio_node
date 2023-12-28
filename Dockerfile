FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i --omit=dev

COPY ./ ./

RUN npm run start


