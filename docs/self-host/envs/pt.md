---
description: Self-host seus envs
since: 2.0
---

## Deploy de Envs (Docker)

Uma env representa um ambiente de modificação de código ou conteúdo. Ela
armazena os arquivos e suas alterações, além de se comunicar com o Git para
baixar arquivos e publicar alterações.

Para facilitar o processo de deploy, oferecemos uma estratégia Docker para
publicação de imagens.

No admin, crie uma env **local** antes de fazer o deploy e capture o nome do
ambiente (`DECO_ENV_NAME`).

## Dockerfile

Para realizar o deploy em Docker, crie e publique o Dockerfile abaixo. Não é
necessário nenhum arquivo adicional, exceto as chaves Git a serem utilizadas no
projeto.

A chave Git é necessária para que a imagem possa publicar alterações. No exemplo
abaixo, utilizaremos dois arquivos:

- `ssh/id_ed25519`: chave privada gerada
- `ssh/id_ed25519.pub`: chave pública associada à chave privada acima e ao
  repositório Git

Além disso, temos variáveis que podem ser alteradas conforme sua necessidade:

- `DECO_ENV_NAME`: Nome do ambiente adicionado no admin
- `DECO_SITE_NAME`: Nome do projeto
- `DECO_REPO_URL`: Endereço de acesso via SSH ao seu repositório Git

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

### Deploy docker

Para criar a imagem Docker com base no seu projeto, execute o seguinte comando
no diretório raiz:

- `docker build -t env_image .`

Por fim, crie e execute o container Docker:

- `docker run -p 8000:8000 --name env_container env_image`

Com isso, sua env estará rodando em um container Docker, pronto para uso.

### Considerações importante

Por padrão, o env será acessíevel publicamente no endereço oferecido no admin.
Caso tenha considerações de privacidade, será preciso criar um túnel entre a env
e o repositório.
