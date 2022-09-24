FROM node:14-alpine as builder

WORKDIR /usr/app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 9000

CMD ["npm", "start"]
# CMD ["npm", "run" ,"start-dev"]