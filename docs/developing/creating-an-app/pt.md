---
description: Desenvolvendo um App
since: 1.24.0
---

# Pré-requisitos

Antes de começar, verifique se você possui os seguintes itens instalados no seu sistema:

- [Deno](https://deno.land/)

## Passo 1: Inicializando o App deco

Para iniciar o desenvolvimento do seu App deco, execute o seguinte comando no seu terminal:

```bash
deno run -A -r https://deco.cx/init
```

Este comando inicializará um novo projeto de App deco no diretório atual. Escolha um nome significativo para o seu app quando solicitado.

## Passo 2: Navegando até o Diretório do App deco

Após a inicialização ser concluída, navegue até o diretório do seu App deco usando o seguinte comando:

```bash
cd $NOME_DO_SEU_APP
```

Substitua `$NOME_DO_SEU_APP` pelo nome que você escolheu para o seu App deco durante a inicialização.

## Passo 3: Entendendo o Arquivo `mod.ts`

Agora, vamos dar uma olhada no arquivo `mod.ts` do seu App deco:

```ts
import manifest from "./manifest.gen.ts";
import type { Manifest } from "./manifest.gen.ts";
import type { App, AppContext as AC } from "deco/mod.ts";

export interface State {
  url: string;
}
export type MyApp = App<Manifest, State>;
export default function App(
  state: State,
): MyApp {
  return {
    manifest,
    state,
  };
}

export type AppContext = AC<MyApp>;
```

O arquivo `mod.ts` é o coração do seu App deco e é escrito pelo desenvolvedor. Neste arquivo, você importa o `manifest` gerado automaticamente e define a interface `State`, que representa as propriedades do seu app. Pode ser usado para configurar API keys para uma chamada a alguma dada API.

A função `App` é exportada e recebe o objeto `state` como argumento, representando o estado do seu app. Em seguida, ela retorna um objeto contendo o `manifest` e o `state` definidos. Essa função é fundamental para que o seu app funcione corretamente.

Por fim, é exportado o tipo `AppContext`, que representa o contexto do seu app e permite acessar as propriedades definidas no `mod.ts`.

## Passo 4: Desenvolvendo o seu App deco

Agora que você entende a estrutura básica do seu App deco, você pode começar a desenvolvê-lo. Sinta-se à vontade para adicionar mais componentes, como seções, ações, fluxos de trabalho ou manipuladores, para aprimorar a funcionalidade do seu app.

## Passo 5: Construindo o seu App deco

Para ver o seu App deco em ação, execute o seguinte comando:

```bash
deno task start
```

<img width="466" alt="image" src="https://github.com/deco-sites/starting/assets/5839364/a0dfa130-91e0-4542-84e6-29d4539c7cff">

Este comando iniciará o seu app e automaticamente gerará os arquivos necessários para torná-lo utilizável em qualquer site deco.

## Conclusão

Parabéns! Você criou e desenvolveu com sucesso o seu próprio App deco. Você aprendeu sobre o arquivo `mod.ts`, o coração do seu app, que permite que você defina o `manifest` e o `state` do seu app. Os Apps deco oferecem uma maneira poderosa de agrupar e compartilhar capacidades empresariais, tornando mais fácil a manutenção e escalabilidade dos seus projetos deco. Divirta-se codificando e sinta-se à vontade para explorar mais recursos do deco para aprimorar ainda mais os seus apps! 🚀

## Leitura Adicional

- [Tornando um App Instalável](/docs/en/getting-started/installing-an-app)
