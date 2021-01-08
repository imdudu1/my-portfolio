FROM node:alpine

RUN apk update && apk add --update python3 make gcc g++

WORKDIR /usr/app

COPY ./package*.json ./

RUN npm install --production

RUN npm install --save-dev typescript @types/node

COPY ./ ./

RUN npm run build

EXPOSE 3000

USER node

CMD [ "npm", "start" ]
