
# build
FROM node:alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# prod
FROM node:22-alpine

WORKDIR /app

RUN npm i -g serve
ENV path="/user/local/bin:$PATH"

COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD [ "serve", "-s", "dist", "-l", "3000" ]
