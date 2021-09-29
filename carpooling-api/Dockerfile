FROM node:alpine

WORKDIR /app
COPY carpooling-api/package.json ./
RUN npm install
COPY carpooling-api/ ./

CMD ["npm","start"]