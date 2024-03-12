FROM node:20-alpine as installer
RUN apk add --no-cache libc6-compat && apk update
WORKDIR /app
RUN npm install -g pnpm@^8 turbo@^1.6.3
COPY . .
RUN turbo prune --scope=ui --docker

FROM node:20-alpine as builder
WORKDIR /app
RUN npm install -g pnpm@^8 turbo@^1.6.3
COPY --from=installer /app/out/json .
COPY tsconfig.json tsconfig.*.json ./
RUN pnpm install
COPY --from=installer /app/out/full .
RUN pnpm --filter=ui ladle:build

FROM nginx:latest as runner
COPY --from=builder /app/packages/ui/build /usr/share/nginx/html
