FROM node:18.16.0-alpine3.17
COPY / .
RUN npm install
EXPOSE 7777
CMD [ "node", "index.js"]