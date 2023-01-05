FROM node:16.10.0-alpine

WORKDIR /app

# set up nginx
RUN apk add --update nginx && rm -rf /var/cache/apk/*
COPY config/nginx.conf /etc/nginx/nginx.conf
COPY config/vhost.conf /etc/nginx/conf.d/vhost.conf

COPY client/public ./public


# forward request and error logs to docker log collector
RUN ln -svf /dev/stdout /var/log/nginx/access.log \
  && ln -svf /dev/stderr /var/log/nginx/error.log

CMD ["nginx", "-g", "daemon off;"]
