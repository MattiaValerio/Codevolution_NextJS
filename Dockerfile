FROM node:latest

WORKDIR /usr/src/app

COPY . .
RUN npm i
RUN npx prisma generate
RUN npm run build

CMD ["npm", "start"]