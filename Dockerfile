# Usa un'immagine Node.js come base
FROM node:21

# Imposta la directory di lavoro
WORKDIR /src/app

# Copia i file del tuo progetto nell'immagine
COPY . .

# Entra nella directory dell'app Next.js
WORKDIR /src/app/

# Installa le dipendenze di Prisma
RUN npm install prisma
RUN npx prisma generate

# Torna alla directory principale
WORKDIR /src/app

# Installa le dipendenze del progetto Next.js
RUN npm install

# Espone la porta 3000
EXPOSE 3000

# Avvia l'applicazione
CMD ["npm", "run", "dev"]
