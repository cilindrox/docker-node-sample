FROM node:6.10-alpine

RUN apk --no-cache add \
  curl

ENV NODE_ENV=production
ENV DUMB_INIT_VERSION=1.2.0

RUN curl -sSLo /usr/local/bin/dumb-init \
  https://github.com/Yelp/dumb-init/releases/download/v${DUMB_INIT_VERSION}/dumb-init_${DUMB_INIT_VERSION}_amd64 && \
  chmod +x /usr/local/bin/dumb-init

ENTRYPOINT ["/usr/local/bin/dumb-init", "--"]

COPY . /home/node/app
WORKDIR /home/node/app
RUN npm install --production && \
    npm cache clean

EXPOSE 3000
USER node

CMD ["npm", "start"]
