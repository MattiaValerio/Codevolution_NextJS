FROM node:latest

WORKDIR /usr/src/app

COPY . .
RUN npm i
RUN npx prisma generate
RUN npx prisma db push
RUN npm run build

CMD ["npm", "start"]