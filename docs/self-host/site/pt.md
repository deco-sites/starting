---
description: Arquitetura Self-host
since: 2.0
---

## Deploy do site (Docker)

O estado e a configuração do sistema são totalmente definidos no sistema de
arquivos. Assim, o estado do site é auto-contido no próprio sistema de arquivos,
sem a necessidade de comunicação com sistemas externos por padrão. No entanto, o
site pode acessar bancos de dados, serviços SaaS ou outros serviços web,
conforme o código implementado pelo desenvolvedor, mas isso não é um requisito
obrigatório do runtime da Deco.

Para facilitar o processo de deploy, oferecemos uma estratégia simples
utilizando um Dockerfile.

## Dockerfile

Para realizar o deploy em Docker, copie o código abaixo para um arquivo
Dockerfile na raiz do seu projeto. É necessário configurar, no mínimo, a
variável de ambiente `ENV DECO_SITE_NAME` para refletir o nome do seu site ou
projeto.

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

### Explicação do Dockerfile

Aqui estão alguns detalhes importantes sobre o `Dockerfile` acima, que podem
precisar de personalização conforme o seu caso de uso:

- `FROM denoland/deno:alpine`
  - Define a imagem base do Docker. Você pode especificar uma versão exata, como
    `FROM denoland/deno:2.0.1.`

- `EXPOSE 8000`
  - Expõe a porta onde a aplicação estará disponível.

- `RUN echo -e ... >> _docker_deps.ts`
  - Define as dependências que serão cacheadas para evitar a busca por pacotes
    externos durante a execução.

- `RUN deno cache --allow-import --frozen main.ts dev.ts _docker_deps.ts`
  - Realiza o cache das dependências do projeto.

- `ARG GIT_REVISION=1`
  - Permite definir um argumento de build para identificar revisões do projeto.

- `ENV DECO_SITE_NAME=yoursitename`
  - Define uma variável de ambiente usada para identificar o site no runtime
    Deco.

- `ENV DENO_DEPLOYMENT_ID=$GIT_REVISION`
  - Variável usada para gerenciar o cache dos assets do site, devendo ser
    alterada a cada novo build.

- `CMD ["run", "--cached-only", "-A", "--unstable-kv", "main.ts"]`
  - Comando que executa o servidor com as permissões necessárias.

### Deploy docker

Para criar a imagem Docker com base no seu projeto, execute o seguinte comando
no diretório raiz:

- `docker build -t site_image .`

Se necessário, você pode passar o argumento `GIT_REVISION` para identificar uma
revisão específica do build:

- `docker build --build-arg GIT_REVISION=2 -t site_image .`

Finalmente, crie e execute o container Docker:

- `docker run -p 8000:8000 --name site_container site_image`

Com isso, seu site estará rodando em um container Docker, pronto para uso.
