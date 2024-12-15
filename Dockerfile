FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install && npm install -g json-server concurrently

COPY . .

EXPOSE 5173 3001

CMD ["concurrently", "\"npm run dev -- --host 0.0.0.0\"", "\"json-server --watch db.json --port 3001\""]
