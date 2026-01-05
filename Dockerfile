# Build stage
FROM node:20-alpine AS build
WORKDIR /app

# Install build tools
RUN apk add --no-cache python3 make g++
RUN npm install -g npm@11.7.0

# Copy dependencies and install
COPY package*.json ./
RUN npm ci --legacy-peer-deps

# Copy source
COPY . .

# Copy production env for Vite
COPY .env.production .env

# Build frontend
RUN npm run build

# Runtime image
FROM node:20-alpine AS runtime
WORKDIR /app

RUN apk add --no-cache curl
RUN npm install -g serve

COPY --from=build /app/dist ./dist

ENV PORT=8080
EXPOSE 8080
CMD ["serve", "-s", "dist", "-l", "8080"]
