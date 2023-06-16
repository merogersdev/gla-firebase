# Build
FROM node:18.16.0 AS build

ARG VITE_API_KEY
ARG VITE_AUTH_DOMAIN
ARG VITE_PROJECT_ID
ARG VITE_STORAGE_BUCKET
ARG VITE_MESSAGING_SENDER_ID
ARG VITE_APP_ID
ARG VITE_QUERY_DEVTOOLS

WORKDIR /app
COPY . .
RUN yarn install
RUN yarn run build

# Host
FROM nginx:stable
COPY --from=build /app/build /usr/share/nginx/html/
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx","-g","daemon off;"]