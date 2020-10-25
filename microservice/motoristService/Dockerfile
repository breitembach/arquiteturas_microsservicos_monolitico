FROM node:11.15.0-slim

RUN mkdir -p /usr/app

WORKDIR /usr/app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

COPY . ./

RUN npm run buildSucrase  

CMD ["npm", "run", "start"]


