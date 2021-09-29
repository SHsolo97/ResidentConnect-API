FROM node:alpine

WORKDIR /app
COPY announcements-api/package.json ./
RUN npm install
COPY announcements-api/ ./

CMD ["npm","start"]