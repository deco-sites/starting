---
description: Self-host your site deco
since: 2.0
---

## Site Deployment (Docker)

The state and configuration of the system are entirely defined in the file
system. Thus, the site's state is self-contained within the file system itself,
without the need for communication with external systems by default. However,
the site can access databases, SaaS services, or other web services, as
implemented by the developer, but this is not a mandatory requirement of the
Deco runtime.

To facilitate the deployment process, we offer a simple strategy using a
Dockerfile.

## Dockerfile

To deploy in Docker, copy the code below to a Dockerfile in the root of your
project. It is necessary to configure at least the environment variable
`ENV DECO_SITE_NAME` to reflect the name of your site or project.

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

ENV DECO_SITE_NAME=yoursitename

ENV DENO_DEPLOYMENT_ID=$GIT_REVISION

CMD ["run", "--cached-only", "-A", "--unstable-kv", "main.ts"]
```

### Dockerfile Explanation

Here are some important details about the `Dockerfile` above, which may need
customization according to your use case:

- `FROM denoland/deno:alpine`
  - Defines the base Docker image. You can specify an exact version, such as
    `FROM denoland/deno:2.0.1.`

- `EXPOSE 8000`
  - Exposes the port where the application will be available.

- `RUN echo -e ... >> _docker_deps.ts`
  - Defines the dependencies that will be cached to avoid fetching external
    packages during execution.

- `RUN deno cache --allow-import --frozen main.ts dev.ts _docker_deps.ts`
  - Caches the project's dependencies.

- `ARG GIT_REVISION=1`
  - Allows defining a build argument to identify project revisions.

- `ENV DECO_SITE_NAME=yoursitename`
  - Sets an environment variable used to identify the site in the Deco runtime.

- `ENV DENO_DEPLOYMENT_ID=$GIT_REVISION`
  - Variable used to manage the site's asset cache, which should be changed with
    each new build.

- `CMD ["run", "--cached-only", "-A", "--unstable-kv", "main.ts"]`
  - Command that runs the server with the necessary permissions.

### Docker Deployment

To create the Docker image based on your project, run the following command in
the root directory:

- `docker build -t site_image .`

If necessary, you can pass the `GIT_REVISION` argument to identify a specific
build revision:

- `docker build --build-arg GIT_REVISION=2 -t site_image .`

Finally, create and run the Docker container:

- `docker run -p 8000:8000 --name site_container site_image`

With this, your site will be running in a Docker container, ready for use.
