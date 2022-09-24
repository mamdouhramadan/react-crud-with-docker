FROM node:14-alpine as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --silent

ARG REACT_APP_SERVER_URL 

ENV REACT_APP_SERVER_URL $REACT_APP_SERVER_URL

COPY . .

RUN npm run --silent build

EXPOSE 8080

CMD ["npm", "start"]

