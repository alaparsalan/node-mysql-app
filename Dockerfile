FROM node:14

WORKDIR /usr/src/app2

COPY package*.json ./

RUN npm install
RUN npm i @nestjs/cli
COPY . .

# EXPOSE 8005 


CMD [ "npm", "start" ]

