FROM node:14-alpine
WORKDIR /
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8081
CMD [ "node", "index.js" ]
