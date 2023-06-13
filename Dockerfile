FROM node:18-alpine

RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/
COPY package.json ./
RUN npm install
ENV PATH /opt/node_modules/.bin:$PATH

ENV HOST 0.0.0.0
ENV PORT 1337

WORKDIR /opt/app
COPY . .
RUN chown -R node:node /opt/app
USER node
RUN ["npm", "run", "build"]

ENV DATABASE_HOST postgres
ENV DATABASE_CLIENT postgres
ENV DATABASE_NAME strapi
ENV DATABASE_USERNAME strapi
ENV DATABASE_PASSWORD strapi

EXPOSE 1337
CMD ["npm", "run", "develop"]