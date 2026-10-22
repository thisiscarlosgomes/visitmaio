# VisitMaio

Source: [thisiscarlosgomes/visitmaio](https://github.com/thisiscarlosgomes/visitmaio). Vercel project: `visitmaio` in the `forkctokcs-projects` team.

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

1. Build and inspect a preview deployment, including `/`, `/places`, `/experiences`, `/api/places`, `/api/mcp`, and the service worker/offline assets.
2. Deploy the verified commit to the `visitmaio` Vercel project, which is connected to this repository and has the Guide environment variables.
3. Move the public Guide domains from the old `guide` Vercel project to `visitmaio` only after the new deployment is ready and the routes pass checks. Keep the old project available for rollback during the cutover.
4. Once production is confirmed, remove the old `apps/guide` workspace from `maioazul` and its root `*:guide` scripts. The Maio API already imports its own checked-in copy of the four Guide datasets; update that copy when Guide editorial data changes.

This repository was created from the `apps/guide` Git history.
