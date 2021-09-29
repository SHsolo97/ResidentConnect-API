FROM node:alpine

WORKDIR /app
COPY classifieds-api/package.json ./
RUN npm install
COPY classifieds-api/ ./

CMD ["npm","start"]