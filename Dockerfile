# Step 1: Build
FROM node:12.16.1-alpine3.11 AS Build

## Copy build resources
COPY . .

RUN yarn
RUN NODE_ENV=production yarn build

# Step 2: Run nginx
FROM nginx:alpine AS Deploy

## Copy build artifacts and environment file
COPY --from=Build /build /var/www

## Copy nginx configuration template
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 3000

## Keep nginx in the foreground so that Docker can track the process properly
## (otherwise your container will stop immediately after starting).
## See https://blog.phusion.nl/2015/01/20/docker-and-the-pid-1-zombie-reaping-problem/
ENTRYPOINT ["nginx", "-g", "daemon off;"]