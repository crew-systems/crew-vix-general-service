# Multi-stage Docker build for Easypanel / Docker deployments
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency files
COPY package*.json bun.lock* ./

# Install the exact versions pinned in bun.lock (as the old Nixpacks build did).
# There is no package-lock.json, so a plain `npm install` resolved "latest" at
# build time and failed when the registry briefly 404'd a just-published package.
RUN npm install -g bun@1 && bun install --frozen-lockfile

# Copy application source
COPY . .

# Build production assets into /app/dist
RUN bun run build

# Prerender: open every sitemap route (+ utility routes) in Chromium and save
# the rendered HTML as dist/<route>/index.html, so crawlers get real content.
FROM node:20-bookworm-slim AS prerender

RUN apt-get update \
 && apt-get install -y --no-install-recommends chromium fonts-liberation \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /prerender
COPY prerender/package.json ./
RUN npm install --omit=dev
COPY prerender/prerender.mjs ./
COPY --from=builder /app/dist /app/dist
RUN CHROME_PATH=/usr/bin/chromium node prerender.mjs /app/dist

# Production server using lightweight Caddy
FROM caddy:2-alpine

WORKDIR /app

# Copy compiled + prerendered production assets
COPY --from=prerender /app/dist /app/dist

# Copy Caddyfile
COPY Caddyfile /etc/caddy/Caddyfile

# Expose HTTP port
EXPOSE 80

# Run Caddy
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
