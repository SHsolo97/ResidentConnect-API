FROM node:alpine

WORKDIR /app
COPY apartments-api/package.json ./
RUN npm install
COPY apartments-api/ ./

CMD ["npm","start"]