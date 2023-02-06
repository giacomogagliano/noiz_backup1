FROM node:lts-alpine3.17
WORKDIR /app
COPY docker/package.json .
COPY packages/ui /app/packages/ui
COPY . .
RUN npm i
CMD ["npm","run","dev"]