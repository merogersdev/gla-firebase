# Frontend Stage 1 - Build with Yarn
FROM node:lts-slim as build
WORKDIR /client
ENV PATH /client/node_modules/.bin:$PATH
COPY ./package*.json ./
RUN yarn install
COPY . .
RUN yarn run build

# Frontend Stage 2 - Take Vite build folder and copy to NGINX
FROM nginx:stable
COPY --from=build /client/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]