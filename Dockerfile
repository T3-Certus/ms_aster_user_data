FROM node:18-alpine

RUN mkdir -p /home/app
WORKDIR /home/app

COPY package*.json ./
COPY tsconfig.json ./

COPY src ./src

RUN ls -a
RUN npm install

COPY . /home/app

EXPOSE 3000-3001

CMD [ "npm", "start" ]