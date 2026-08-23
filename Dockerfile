FROM node:20-alpine
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY server.js ./
COPY src ./src

RUN npm run build:email
RUN npm prune --omit=dev

EXPOSE 3000
CMD ["node", "server.js"]
