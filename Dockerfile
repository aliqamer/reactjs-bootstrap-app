FROM node:13.8-alpine3.10 as builder

ENV NODE_VERSION 13.8.0

WORKDIR /app
COPY . .
RUN npm install react-scripts -g --silent
RUN yarn install
RUN yarn run build

FROM node:13.8-alpine3.10
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "80", "-s", "."]doc
