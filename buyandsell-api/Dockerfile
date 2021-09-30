FROM node:alpine

WORKDIR /app
COPY buyandsell-api/package.json ./
RUN npm install
COPY buyandsell-api/ ./

CMD ["npm","start"]