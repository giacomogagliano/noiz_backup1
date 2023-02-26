FROM node:14-alpine
WORKDIR /app
COPY packages/new-ui /app/packages/new-ui
RUN npm i
COPY . .
CMD ["npm", "run", "start"]

