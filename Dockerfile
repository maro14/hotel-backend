FROM node:14

WORKDIR /app

RUN yarn install

CMD ["yarn", "start"]

EXPOSE 3000