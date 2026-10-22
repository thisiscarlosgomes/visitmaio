# Maio Guide

Standalone Next.js app for [visit-maio.com](https://www.visit-maio.com).

## Local development

Requires Node.js 20.9 or newer and pnpm. From this repository root:

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm build
```

Copy the required deployment secrets into a local `.env.local` file or configure them in the hosting project. Never commit that file. The app uses `MONGODB_URI` and `MONGODB_DB` for place and analytics data, `OPENAI_API_KEY` for chat, and optional provider credentials for voice and data management scripts.

## Deployment migration

1. Connect this repository to the existing Guide hosting project. Set its root directory to the repository root and keep the current environment variables, domain, and project settings.
2. Build and inspect a preview deployment, including `/`, `/places`, `/experiences`, `/api/places`, `/api/mcp`, and the service worker/offline assets.
3. Switch production deployments to this repository after the preview passes. Keep `www.visit-maio.com` on the same hosting project so public URLs stay stable.
4. Once production is confirmed, remove the old `apps/guide` workspace from `maioazul` and its root `*:guide` scripts. The Maio API already imports its own checked-in copy of the four Guide datasets; update that copy when Guide editorial data changes.

This repository was created from the `apps/guide` Git history. It has no remote until one is explicitly configured.
