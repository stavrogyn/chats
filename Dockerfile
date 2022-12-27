FROM node:16.10.0-alpine

# set up nginx
RUN apk add --update nginx && rm -rf /var/cache/apk/*
COPY config/nginx.conf /etc/nginx/nginx.conf
COPY config/vhost.conf /etc/nginx/conf.d/vhost.conf

# set up node client
RUN apk add --update nodejs nodejs-npm
COPY client ./client
RUN cd client && yarn install
RUN cd client && yarn build

# set up node server
COPY .env ./
COPY package.json ./
COPY yarn.lock ./
COPY tsconfig.json ./
COPY src ./src
RUN yarn install

# forward request and error logs to docker log collector
RUN ln -svf /dev/stdout /var/log/nginx/access.log \
  && ln -svf /dev/stderr /var/log/nginx/error.log

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
