# Multi-stage Docker build for Easypanel / Docker deployments
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency files
COPY package*.json bun.lock* ./

# Install dependencies
RUN npm install

# Copy application source
COPY . .

# Build production assets into /app/dist
RUN npm run build

# Production server using lightweight Caddy
FROM caddy:2-alpine

WORKDIR /app

# Copy compiled production assets
COPY --from=builder /app/dist /app/dist

# Copy Caddyfile
COPY Caddyfile /etc/caddy/Caddyfile

# Expose HTTP port
EXPOSE 80

# Run Caddy
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
