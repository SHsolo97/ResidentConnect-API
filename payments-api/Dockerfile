FROM node:alpine

WORKDIR /app
COPY payments-api/package.json ./
RUN npm install
COPY payments-api/ ./

CMD ["npm","start"]