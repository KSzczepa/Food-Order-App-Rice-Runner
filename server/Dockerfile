FROM node:14 AS Production

ENV NODE_ENV=production
 
WORKDIR /usr/src/serv

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 4000

ENV PORT 4000

CMD ["sh", "-c", "npm start"]
# CMD ["sh", "-c", "npm run start:production"]

