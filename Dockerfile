# Frontend Stage 1 - Build with Yarn
FROM node:lts
WORKDIR /app
COPY ./package*.json ./
RUN yarn install
COPY . .
RUN yarn run build
COPY ./build ./app/build
EXPOSE 5000
CMD [ "node", "server.js" ]