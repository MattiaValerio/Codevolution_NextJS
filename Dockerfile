# Usa un'immagine Node.js come base
FROM node:14

# Imposta la directory di lavoro
WORKDIR /usr/src/app

# Copia i file del tuo progetto nell'immagine
COPY . .

# Entra nella directory dell'app Next.js
WORKDIR /usr/src/app/nextjs_app

# Installa le dipendenze di Prisma
RUN npm install @prisma/cli
RUN npx prisma generate

# Torna alla directory principale
WORKDIR /usr/src/app

# Installa le dipendenze del progetto Next.js
RUN npm install

# Espone la porta 3000
EXPOSE 3000

# Avvia l'applicazione
CMD ["npm", "start"]
