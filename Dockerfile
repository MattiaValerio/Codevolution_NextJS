FROM node:latest

WORKDIR /usr/src/app

COPY . .
RUN npm install --production --ignore-scripts
RUN npm run bild

CMD ["npm", "run"]