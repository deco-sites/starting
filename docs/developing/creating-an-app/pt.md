---
description: Desenvolvendo um App
since: 1.23.3
---

# Pré-requisitos

Antes de começar, certifique-se de ter os seguintes itens instalados em seu sistema:

- [Deno](https://deno.land/)
- [Deco CLI](https://deco.cx/docs/en/developing/getting-started#installation)

## Passo 1: Inicializando o App Deco

Para começar o desenvolvimento do seu App Deco, execute o seguinte comando em seu terminal:

```bash
deno run -A https://deco.cx/init
```

Esse comando irá inicializar um novo projeto de App Deco no diretório atual. Escolha um nome significativo para o seu app quando solicitado.

## Passo 2: Navegando até o Diretório do App Deco

Após a inicialização ser concluída, navegue até o diretório do seu App Deco usando o seguinte comando:

```bash
cd $NOME_DO_SEU_APP
```

Substitua `$NOME_DO_SEU_APP` pelo nome que você escolheu para o seu App Deco durante a inicialização.

## Passo 3: Entendendo os Arquivos

Agora, vamos dar uma olhada nos arquivos do seu App Deco:

### `state.ts`

```ts
export interface State {
  url: string;
}
```

Neste arquivo, você define o estado compartilhado do seu app. A interface `State` especifica as propriedades e seus tipos que serão utilizados por outros componentes dentro do seu App Deco. Por exemplo, nos exemplos anteriores, o arquivo `state.ts` foi definido com uma única propriedade `url`.

### `mod.ts`

Este arquivo é gerado automaticamente pelo Deco. Ele contém configurações e importações importantes que fazem seu App Deco funcionar perfeitamente. O tipo `AppContext` deve ser importado deste arquivo, permitindo que você acesse as propriedades definidas em `state.ts`.

### `loaders/bin.ts`

```ts
import { AppContext } from "../mod.ts";
export interface Props {
  status: number;
}
export default function GetBin(
  { status }: Props,
  _req: Request,
  ctx: AppContext,
): Promise<Response> {
  return fetch(`${ctx.url}/${status}`);
}
```

Este é um exemplo de arquivo que representa um dos componentes que você pode criar no seu App Deco. Neste exemplo, temos um loader chamado `GetBin`, que busca dados de uma API usando o `ctx.url` definido no estado compartilhado. O loader recebe uma prop `status` e realiza uma busca com base no status fornecido.

## Passo 4: Desenvolvendo sua App

Agora que você entende a estrutura básica do seu App Deco, pode começar a desenvolvê-lo. Sinta-se à vontade para adicionar mais componentes, como seções, ações, fluxos de trabalho ou manipuladores, para aprimorar a funcionalidade do seu app.

## Passo 5: Buildando sua App

Para ver o seu App Deco em ação, execute o seguinte comando:

```bash
deno task start
```

Este comando iniciará o seu app e gerará automaticamente os arquivos necessários para que ele seja utilizado por qualquer site Deco.

## Conclusão

Parabéns! Você criou e desenvolveu com sucesso a seu própria App. Você aprendeu sobre os arquivos importantes no seu App Deco e como acessar as propriedades do estado compartilhado em outros componentes. Os Apps Deco oferecem uma maneira poderosa de agrupar e compartilhar capacidades empresariais, facilitando a manutenção e a escalabilidade de seus projetos Deco. Feliz codificação e sinta-se à vontade para explorar mais recursos do Deco para aprimorar ainda mais seus apps! 🚀

## Leitura adicional

- [Tornar um App Instalável](/docs/pt/developing/installing-an-app)
