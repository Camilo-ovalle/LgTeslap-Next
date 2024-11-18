FROM node:22.9.0

WORKDIR /app

RUN npm install

COPY package*.json ./

EXPOSE 3001

CMD ["npm", "run", "dev"]

