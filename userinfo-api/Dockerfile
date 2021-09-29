FROM node:alpine

WORKDIR /app
COPY userinfo-api/package.json ./
RUN npm install
COPY userinfo-api/ ./

CMD ["npm","start"]