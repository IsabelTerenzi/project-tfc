FROM node:16.14-alpine

WORKDIR /app-frontend

EXPOSE 3000

COPY . .

COPY package.json .

RUN npm install

CMD ["npm", "start"]
