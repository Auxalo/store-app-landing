# syntax=docker/dockerfile:1
#
# Image for self-hosting the landing page. Vercel and Cloudflare Pages ignore this file.
# Built by GitHub Actions (.github/workflows/docker.yml), never on the server.

FROM node:22-slim AS base
ENV PNPM_HOME=/pnpm \
    PATH=/pnpm:$PATH \
    NEXT_TELEMETRY_DISABLED=1
RUN corepack enable
WORKDIR /app

FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm install --frozen-lockfile

FROM deps AS build
COPY . .
# Optional contact details shown in the footer, baked into the pages at build time.
ARG SUPPORT_WHATSAPP
ARG SUPPORT_EMAIL
ENV SUPPORT_WHATSAPP=$SUPPORT_WHATSAPP \
    SUPPORT_EMAIL=$SUPPORT_EMAIL \
    DOCKER_BUILD=1
RUN pnpm build

FROM node:22-slim AS runner
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0
WORKDIR /app
COPY --from=build --chown=node:node /app/.next/standalone ./
COPY --from=build --chown=node:node /app/.next/static ./.next/static
COPY --from=build --chown=node:node /app/public ./public
USER node
EXPOSE 3000
CMD ["node", "server.js"]
