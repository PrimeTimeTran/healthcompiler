# Use a small Node image
FROM node:20-alpine AS runtime
WORKDIR /app

# Copy package.json & install dependencies (needed for `serve`)
COPY package*.json ./
RUN npm ci --only=production

# Copy your built frontend
COPY dist ./dist

# Install a simple static server
RUN npm install -g serve

# Set environment variable for runtime if needed
ENV PORT=8080
ENV VITE_STRAPI_URL=https://strapi-app-890407456021.us-east1.run.app

# Expose port
EXPOSE 8080

# Serve the static frontend
CMD ["serve", "-s", "dist", "-l", "8080"]
