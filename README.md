# Welcome to Health Compiler's Website

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## Getting Started

- `git clone`
- Create `.env.local`
- `npm install`
- `npm run dev`

## Deploying

- Ensure `.env.production` is created with proper env variables. Check `./src/lib/constants.ts` to see required vars
- Start Docker
- Run build, push, gcp deploy commands

```sh
docker buildx build \
  --platform linux/amd64 \
  -t us-east1-docker.pkg.dev/system-design-123/health-compiler-client/strapi/app:latest \
  --load . && \
docker push us-east1-docker.pkg.dev/system-design-123/health-compiler-client/strapi/app:latest && \
gcloud run deploy health-compiler-frontend \
  --image us-east1-docker.pkg.dev/system-design-123/health-compiler-client/strapi/app:latest \
  --region us-east1 \
  --platform managed \
  --allow-unauthenticated
```
