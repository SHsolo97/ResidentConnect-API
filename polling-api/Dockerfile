FROM node:alpine

WORKDIR /app
COPY polling-api/package.json ./
RUN npm install
COPY polling-api/ ./

CMD ["npm","start"]