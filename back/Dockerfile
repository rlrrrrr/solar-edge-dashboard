FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build -- --ignore-ts-errors

EXPOSE 3333

CMD ["./start.sh"]
