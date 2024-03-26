FROM node:14-alpine
WORKDIR /
COPY package*.json ./
RUN npm install
RUN npm install pm2 -g
COPY . .
EXPOSE 8080
CMD [ "pm2","start", "index.js" ]
