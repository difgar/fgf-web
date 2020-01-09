# Stage 1 - the build process
FROM node as build-deps
# Versions
RUN npm -v
RUN node -v

WORKDIR /Users/difgar/Develop/fgf/fgf-web
COPY package.json ./
RUN yarn
COPY . ./
RUN npm install
RUN yarn build

# Stage 2 - the production environment
FROM nginx:alpine
COPY --from=build-deps /Users/difgar/Develop/fgf/fgf-web/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]