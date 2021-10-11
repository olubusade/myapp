FROM node:alpine
WORKDIR '/app'
COPY package.json .
RUN npm cache clean
RUN npm install
COPY . .
EXPOSE 4200

CMD npm run start