---
description: Arquitetura Self-host
since: 2.0
---

## Deployando seu site (Docker)

```dockerfile
FROM denoland/deno:alpine

# The port that your application listens to.
EXPOSE 8000

WORKDIR /app

RUN mkdir -p /home/deno && chown -R deno:deno /home/deno && mkdir /app/deno && chown -R deno:deno /app && mkdir -p /deno-dir && chown -R deno:deno /deno-dir

# Prefer not to run as root.
USER deno

# These steps will be re-run upon each file change in your working directory:
COPY --chown=deno:deno . deco

WORKDIR /app/deco

RUN echo -e 'import "$fresh/src/build/deps.ts";\nimport "$fresh/src/runtime/entrypoints/main.ts";\nimport "$fresh/src/runtime/entrypoints/deserializer.ts";\nimport "$fresh/src/runtime/entrypoints/signals.ts";' >> _docker_deps.ts

RUN deno cache --allow-import --frozen main.ts dev.ts _docker_deps.ts

ARG GIT_REVISION=1

ENV DECO_SITE_NAME=selfhostmgr

ENV DENO_DEPLOYMENT_ID=$GIT_REVISION

CMD ["run", "--cached-only", "-A", "--unstable-kv", "main.ts"]
```

Para deployar no fly.io...

`flyctl lauch`
