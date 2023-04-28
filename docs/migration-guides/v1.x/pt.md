---
description: |
   Migre de live.ts v0.x para live.ts v1.x
---

## tl;dr

Quer pular o tutorial? Rode o comando abaixo para faze-la automaticamente e nos
mantenha informado caso encontre algum problema.

```sh
deno run -A https://denopkg.com/deco-cx/live@1.0.0/scripts/upgrade.ts
```

Quer ver um exemplo de migração? Confira esse
[pull request](https://github.com/deco-sites/fashion/pull/123) no Fashion
starter.

Fique por dentro de todos os detalhes dessa release
[através do nosso blog announcement](https://www.deco.cx/blog/live.ts-1.x.md).

Se você estiver usando live.ts v0.x e quiser migrar para v1.x, é isso que você
precisa fazer:

# Atualize a versão do live.ts

Em primeiro lugar, atualize a versão do live.ts no seu arquivo `import_map.json`
de 0.x para 1.x. Você também pode precisar atualizar o pacote std, que já usa o
live.ts v1.x.

A diferença deve ficar parecida com isso:

```diff
{
  "imports": {
    "$store/": "./",
-   "$live/": "https://deno.land/x/live@0.11.2/",
+   "$live/": "https://deno.land/x/live@1.x/",
-   "deco-sites/std/": "https://denopkg.com/deco-sites/std@0.2.1/",
+   "deco-sites/std/": "https://denopkg.com/deco-sites/std@1.x/",
    "partytown/": "https://deno.land/x/partytown@0.2.1/",
    "$fresh/": "https://deno.land/x/fresh@1.1.3/",
    "preact": "https://esm.sh/preact@10.11.0",
    "preact/": "https://esm.sh/preact@10.11.0/",
    "preact-render-to-string": "https://esm.sh/*preact-render-to-string@5.2.4",
    "@preact/signals": "https://esm.sh/*@preact/signals@1.0.3",
    "@preact/signals-core": "https://esm.sh/*@preact/signals-core@1.0.1",
    "twind": "https://esm.sh/v96/twind@0.16.17",
    "twind/": "https://esm.sh/v96/twind@0.16.17/",
    "std/": "https://deno.land/std@0.162.0/",
    "prefetch": "https://deno.land/x/prefetch@0.0.6/mod.ts"
  }
}
```

Depois de atualizar o arquivo, execute `deno task start` para garantir que as
dependências estejam instaladas. Você pode encontrar erros, mas eles serão
corrigidos na próxima seção.

```sh
deno task start
```

Você deve ver alguns erros, mas não se preocupe, eles serão corrigidos em breve.

# Site JSON

Crie um `site.json` que serve para especificar onde configurar o siteId do seu
site. Ao invés de defini-lo dentro do antigo `./routes/_middleware.ts` arquivo
você deve criar esse json no diretório raiz do seu projeto chamado `site.json`,
com o seguinte conteúdo:

```json
{
  "siteId": YOUR_SITE_ID
}
```

> Troque o `YOUR_SITE_ID` pelo seu siteId

# Altere os imports

Agora que a versão do live.ts foi atualizada, altere as importações para apontar
para o novo manifesto `live.gen.ts`

1. Remova o módulo `fresh.gen.ts`
2. Utilize o módulo `live.gen.ts` no seu main.

```diff
#!/usr/bin/env -S deno run -A --watch=static/
import dev from "$live/dev.ts";
-import liveManifest from "$live/fresh.gen.ts";
-import liveStdManifest from "deco-sites/std/fresh.gen.ts";
+import liveManifest from "$live/live.gen.ts";
+import liveStdManifest from "deco-sites/std/live.gen.ts";

await dev(import.meta.url, "./main.ts", {
  imports: {
    "$live": liveManifest,
    "deco-sites/std": liveStdManifest,
  },
});
```

Também:

1. mude a referencia do import no `main.ts` de `./fresh.gen.ts` para
   `./live.gen.ts`
2. adicione um novo import do `$live` de `$live/mod.ts` passando o manifesto
   como parâmetro.
3. Import o `site.json` e use como parâmetro do `$live`

```diff
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="deno.ns" />
/// <reference lib="esnext" />

-import manifest from "./fresh.gen.ts";
+import manifest from "./live.gen.ts";
+import { $live } from "$live/mod.ts";
import { start } from "$fresh/server.ts";
import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";
import prefetchPlugin from "prefetch";
import partytownPlugin from "partytown/mod.ts";
+import site from "./site.js" assert { type : "json" };

-await start(manifest, {
+await start($live(manifest, site), {
  plugins: [
    partytownPlugin(),
    prefetchPlugin(),
    twindPlugin({
      ...twindConfig,
      selfURL: new URL("./twind.config.ts", import.meta.url).href,
    }),
  ],
});
```

Vamos tentar rodar novamente,

```sh
deno task start
```

Observe que uma nova entrada pode ter aparecido em seu arquivo `import_map.json`
que mapeia seu repositório para o diretório local que é o `namespace` do seu
pacote, agora temos um novo conceito chamado de `namespace` de pacote. O
`namespace` do pacote não é nada mais do que o nome do org+repo no Github.
Então, por exemplo, o repositório `deco-sites/fashion` tem o mesmo `namespace`
que seu repositório `deco-sites/fashion`.

> Check nossa documentação para mais detalhes

```diff
{
  "imports": {
+   "deco-sites/fashion/": "./",
    "$store/": "./",
    "$live/": "../live/",
    "deco-sites/std/": "https://denopkg.com/deco-sites/std@8eb7468440d77a1d8a32e71d81eb7f6ad976622a/",
    "partytown/": "https://deno.land/x/partytown@0.2.1/",
    "$fresh/": "https://deno.land/x/fresh@1.1.3/",
    "preact": "https://esm.sh/preact@10.11.0",
    "preact/": "https://esm.sh/preact@10.11.0/",
    "preact-render-to-string": "https://esm.sh/*preact-render-to-string@5.2.4",
    "@preact/signals": "https://esm.sh/*@preact/signals@1.0.3",
    "@preact/signals-core": "https://esm.sh/*@preact/signals-core@1.0.1",
    "twind": "https://esm.sh/v96/twind@0.16.17",
    "twind/": "https://esm.sh/v96/twind@0.16.17/",
    "std/": "https://deno.land/std@0.162.0/",
    "prefetch": "https://deno.land/x/prefetch@0.0.6/mod.ts"
  }
}
```

Daqui para frente, você deve ver erros relacionados à importação de arquivos que
não existem na nova versão, portanto, vamos removê-los na próxima seção.

# Removendo rotas

Nossas rotas agora são adicionadas automaticamente pela função de
desenvolvimento live.ts, o que significa que você pode remover completamente o
arquivo `./routes/_middleware.ts` e o arquivo `./routes/[...catchall].tsx`.
Observe que o antigo `LivePage.tsx` não está mais disponível para ser usado como
antes.

À medida que você navega pelo seu código, você deve perceber um novo arquivo
`schemas.gen.json` que está sendo usado em vez de estar dentro do manifesto em
si. Além disso, você deve receber uma mensagem de sucesso que diz o seguinte:

```
Watcher Process started.
The manifest has been generated.
Githooks setup successfully: pre-commit
Listening on http://localhost:8000/
```

Agora que você implementou com sucesso o live.ts v1.x, esperamos que você
aproveite seus recursos e funcionalidades. Por favor, não hesite em nos contatar
se você tiver algum problema inesperado!
