# stage 1 - build react app first 
FROM node:12.16.1-alpine3.9 as react-build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

# # stage 2 - build the final image and copy the react build files
# FROM nginx:1.17.8-alpine
# COPY --from=react-build /app /usr/share/nginx/html
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx/nginx.conf /etc/nginx/conf.d
# EXPOSE 8080
# CMD ["nginx", "-g", "daemon off;"]
