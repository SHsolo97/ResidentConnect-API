FROM node:alpine

WORKDIR /app
COPY contactinfo-api/package.json ./
RUN npm install
COPY contactinfo-api/ ./

CMD ["npm","start"]