FROM node:16.10.0-alpine as build

WORKDIR /app

COPY client/package.json ./
COPY client/yarn.lock ./
COPY client/vite.config.js ./
COPY client/tsconfig.json ./
COPY client/tsconfig.node.json ./
COPY client/index.html ./
COPY client/src ./src

RUN yarn install
RUN yarn build



FROM nginx:1.12-alpine

RUN apk add --update nginx && rm -rf /var/cache/apk/*

COPY config/nginx.conf /etc/nginx/nginx.conf
COPY config/vhost.conf /etc/nginx/conf.d/vhost.conf

COPY --from=build /app/public /app/public

RUN ln -svf /dev/stdout /var/log/nginx/access.log \
  && ln -svf /dev/stderr /var/log/nginx/error.log

CMD ["nginx", "-g", "daemon off;"]
