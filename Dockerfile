FROM node:lts-alpine
WORKDIR /newtab-example
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
