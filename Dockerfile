FROM node:18 as build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18

WORKDIR /app

RUN npm install -g serve

COPY --from=build /app/dist /app/dist

EXPOSE 5173

CMD ["serve", "-s", "dist", "-l", "5173"]
