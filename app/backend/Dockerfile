FROM node:16.14-alpine

WORKDIR /app-backend

EXPOSE 3001

COPY . .

COPY package.json .

RUN npm install

CMD ["npm", "start"]
