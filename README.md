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

## Deployment

Pushing `main` deploys this repository to the `visitmaio` Vercel project. The production domains are `www.visit-maio.com`, `www.visitmaio.com`, and `guide.maioazul.com`; `visitmaio.com` redirects to `www.visitmaio.com`.

The previous `guide` Vercel project retains its last working deployment for rollback, with future builds skipped. The old `apps/guide` workspace has been removed from `maioazul`. The Maio API imports its own checked-in copy of four Guide datasets; update that copy when editorial data changes, then run its data sync.

This repository was created from the `apps/guide` Git history.
