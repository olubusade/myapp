FROM node:alpine as BUILD
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
CMD npm run build

FROM nginx
EXPOSE 80
COPY --from=BUILD /app/dist/myapp /usr/share/nginx/html
