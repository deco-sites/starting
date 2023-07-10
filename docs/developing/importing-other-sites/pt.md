---
description: Aprenda como importar Sections e Loaders de outros Sites na deco.cx
---

Como uma agência ou time responsável por vários sites, você provavelmente busca
maneiras de simplificar o processo de desenvolvimento e, ao mesmo tempo,
fornecer resultados de alta qualidade. Uma maneira de conseguir isso é
**importando [Sections](/docs/pt/concepts/section) e
[Loaders](/docs/pt/concepts/loader)** de outros sites em seus projetos deco.cx.
Isso não apenas economiza tempo e esforço, mas também permite que você ofereça
soluções mais personalizadas para seus clientes enquanto ainda trabalha com
eficiência.

Para fazer isso é simples: Um Site deco.cx pode depender de outro Site e
**automaticamente ter suas Sections e Loaders disponíveis para uso.**

## Como importar outro Site

O [Fashion starter](https://github.com/deco-sites/fashion) é um exemplo de Site
_deco.cx_ que importa Sections e Loaders de outro Site
(https://github.com/deco-sites/std). Vamos usar esse exemplo:

1. Certifique-se de que o Site que você deseja importar **está disponível no
   Github**. (ex: `deco-sites/std`)
2. Abra a pasta do seu Site e vá até `import_map.json`.
3. Adicione a seguinte entrada:
   `"deco-sites/std/": "https://denopkg.com/deco-sites/std@0.1.4/",`
4. Vá para `dev.ts`, importe o manifesto do Site `std` e passe-o como parâmetro
   para o objeto `imports` na chamada da função `dev`:

```ts
// Other imports ...

import decoStdManifest from "deco-sites/std/fresh.gen.ts";

await dev(import.meta.url, "./main.ts", {
  imports: {
    // Other imports ...
    "deco-sites/std": decoStdManifest,
  },
});
```

5. Execute `deno task start` e vá para o Admin da _deco.cx_.
6. **Pronto!** Agora você pode usar Sections e Loaders de `deco-sites/std` em
   seu Site.

> Você pode verificar o código do `dev.ts` na Fashion
> [aqui](https://github.com/deco-sites/fashion/blob/349f0a56c9e9a376c89d2ddf9c45d1513fb53112/dev.ts)

![As Sections importadas já estão disponíveis para serem adicionadas nas Páginas do site](https://user-images.githubusercontent.com/18706156/225990468-74ce1f95-60e3-4b12-81d5-f7ab5a95a702.png)
_As Sections importadas já estão disponíveis para serem adicionadas nas Páginas
do site_
