FROM node:latest

WORKDIR /usr/src/app

COPY . .
RUN npm i

RUN npm run build

EXPOSE 3000
RUN npx prisma generate
RUN npx prisma db push

CMD ["npm", "start"]