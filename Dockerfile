# Stage 1: Build React app
FROM node:18-alpine as build

# Accept build-time environment variable
ARG REACT_APP_BACKEND_URL
ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Build React app with env var baked in
RUN npm run build


# Stage 2: Serve with Nginx
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
