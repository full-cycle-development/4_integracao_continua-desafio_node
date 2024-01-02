FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i --omit=dev

COPY ./ ./

EXPOSE 3333

CMD [ "node", "./src/index.js" ] 


