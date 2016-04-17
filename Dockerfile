FROM node:4

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

EXPOSE 3000

RUN npm install --production

CMD ["npm", "start"]
