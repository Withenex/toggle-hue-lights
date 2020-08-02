FROM node:12.18
WORKDIR /usr/src/lights-toggle-api
COPY . .
RUN npm install
CMD ["npm","run","start"]