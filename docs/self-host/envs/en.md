---
description: Self-host your envs
since: 2.0
---

## Deploying Environments (Docker)

An environment represents a space for modifying code or content. It stores files
and their changes, and communicates with Git to download files and publish
changes.

To simplify the deployment process, we offer a Docker strategy for publishing
images.

In the admin, create a **local** environment before deploying and capture the
environment name (`DECO_ENV_NAME`).

## Dockerfile

To deploy in Docker, create and publish the Dockerfile below. No additional
files are needed, except for the Git keys to be used in the project.

The Git key is necessary for the image to publish changes. In the example below,
we will use two files:

- `ssh/id_ed25519`: generated private key
- `ssh/id_ed25519.pub`: public key associated with the private key above and the
  Git repository

Additionally, we have variables that can be changed according to your needs:

- `DECO_ENV_NAME`: Name of the environment added in the admin
- `DECO_SITE_NAME`: Project name
- `DECO_REPO_URL`: SSH access URL to your Git repository

```dockerfile
# Use the specified Docker image
FROM ghcr.io/deco-cx/deco:latest

# Set environment variables
ENV DECO_ENV_NAME=test-env \
    DECO_SITE_NAME=selfhostmgr \
    DECO_TRACKING_BRANCH=main \
    DECO_APP_NAME=site \
    DECO_REPO_URL=git@github.com:deco-sites/selfhostmgr.git

# Create .ssh directory and add GitHub known hosts
RUN mkdir -p /home/deno/.ssh && \
    ssh-keyscan github.com >> /home/deno/.ssh/known_hosts

# Copy the SSH key into the container (assuming you have it locally)
# Replace "id_rsa" with the actual filename of your private key
COPY ssh/id_ed25519 /home/deno/.ssh/

COPY ssh/id_ed25519.pub /home/deno/.ssh/
USER root
RUN chmod -R 700 /home/deno/.ssh
RUN chown -R deno /home/deno/.ssh
USER deno

# Additional commands for your application (if needed)
# e.g., cloning the repository, setting up dependencies, etc.
# RUN git clone $DECO_REPO_URL /app

CMD DENO_DIR_RUN=/app/deno DENO_DIR=/daemon-deno-dir deno run -A --unstable-http jsr:@deco/deco/scripts/run --build-cmd "deno task build" -- deno run --lock=deno.lock --unstable-http --lock-write --inspect --node-modules-dir=false --allow-ffi=$DENO_DIR"npm/registry.npmjs.org/@libsql" --allow-env --allow-net --allow-sys --allow-hrtime --allow-read --allow-run --allow-write=$HOME/.cache,/tmp,/deno-dir/npm,/deno-dir/deno_esbuild,/deno-dir/deno_esbuild_tmp, --unstable --unstable-hmr --unstable-kv --unstable-cron main.ts
```

### Deploy Docker

To create the Docker image based on your project, run the following command in
the root directory:

- `docker build -t env_image .`

Finally, create and run the Docker container:

- `docker run -p 8000:8000 --name env_container env_image`

With this, your environment will be running in a Docker container, ready for
use.

### Important Considerations

By default, the environment will be publicly accessible at the address provided
in the admin. If you have privacy considerations, you will need to create a
tunnel between the environment and the repository.
