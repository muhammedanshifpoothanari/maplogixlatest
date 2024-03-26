FROM node:14-alpine
WORKDIR /
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8082
CMD [ "node", "index.js" ]
