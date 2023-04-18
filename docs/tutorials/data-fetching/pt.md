---
description: Aprenda como carregar dados usando Loaders e Sections, permitindo que usuários de negócios personalizem a busca.
since: 1.0.0
---

## Leitura sugerida

- [Tech Stack](/docs/pt/introduction/tech-stack)
- [Conceitos básicos: Section](/docs/pt/concepts/section)

Buscar dados de APIs é um requisito comum ao criar sites ou aplicações. A
_deco.cx_ oferece uma solução de _data-fetching_ que ocorre **no server-side** e
é flexível para permitir que os usuários de negócios configurem como os dados
são buscados, da mesma forma que configuram `props` das Sections.

Neste tutorial, você aprenderá como buscar dados de uma API externa e injetá-los
em uma Section usando [Loaders](/docs/pt/concepts/loader).

## O que vamos construir

O exemplo que usaremos é simples, mas tem complexidades
comuns à outros casos:

- Fazer _fetch_ de fatos sobre cachorros usando a [Dog API](https://dogapi.dog/)
  **permitindo ao usuário configurar quantos fatos serão retornados** no
  Admin da _deco.cx_.
- Apresentar esses fatos em uma Section.

<img width="1512" alt="Dados de renderização de Section obtidos da API" src="https://user-images.githubusercontent.com/18706156/225758802-7277e774-921d-46e5-b384-bc9245b8eef1.png">

_Visualização da Section DogFacts mostrando os dados retornados da API_

<img width="941" alt="Dados retornados da API Dog Facts" src="https://user-images.githubusercontent.com/18706156/225752374-0882d0ec-966b-4074-a49d-d18ffc17d8b9.png">

_Dados retornados da API Dog Facts sendo chamada no browser_

## Criando a Section

Se executarmos um http request para a API da Dog Fact veremos que ele retorna um
JSON no seguinte formato,

> Abra no seu browser: https://dogapi.dog/api/facts?number=1

```json
{
  "facts": [
    "The Labrador is so popular, in 2006 there were approximately 3-5 times more Labs as there were German Shepherds or Golden Retrievers."
  ],
  "success": true
}
```

Perceba que a única coisa que nos importa são os facts, logo vamos criar nossa
section preparada para receber esses facts re renderiza-los da maneira que
desejarmos.

Para isso, vamos criar um tipo `DoctFact` que contém apenas uma propriedade
chamada `fact` que é a `string` representada pela mensagem.

Vamos ver isso em ação criando uma nova Section:

1. Crie a Section `DogFacts.tsx` na pasta `sections/` do seu projeto.
2. Cole o seguinte código:

```tsx
export interface DogFact {
  fact: string;
}

export interface Props {
  title: string;
  dogFacts: string[];
}

export default function DogFacts({ title, dogFacts }: Props) {
  return (
    <div class="p-4">
      <h1 class="font-bold">{title}</h1>
      <ul>
        {dogFacts.map((fact) => <li>{fact}</li>)}
      </ul>
    </div>
  );
}
```

> Nesse momento podemos rodar o `deno task start` e verificar no nosso admin que
> esse componente já consegue ser utilizado com dados estáticos, oque não faz
> muito sentido para nosso caso de uso.

## Criando o Loader e testando a section

Os Loaders permitem que você defina como os dados são buscados e transformados
antes de serem repassado a uma Section. Eles são **funções Typescript
regulares** que podem usar funções _async_ como `fetch`. Os Loaders podem ser
"conectados" a uma Section por meio de uma das `props` da Section, e isso
acontece com base no **tipo de retorno do Loader**.

1. Defina qual será as `Props` de input do seu loader.
2. Exporte uma função chamada `loader` dentro do mesmo arquivo da sua section.

No nosso caso, vamos deixar configurável qual número de facts que vamos mostrar
no nosso componente. Perceba que agora, o que aparecerá parece ser configurado
não será mais as props da section mas sim as props do seu loader.

```ts
import type { LoaderContext } from "$live/types.ts";
import type { SectionProps } from "$live/mod.ts";

// Props type that will be configured in deco.cx's Admin
export interface Props {
  title: string;
  numberOfFacts?: number;
}

export async function loader(
  _req: Request,
  { state: { $live: { numberOfFacts, title } } }: LoaderContext<Props>,
) {
  const { facts: dogFacts } = (await fetch(
    `https://dogapi.dog/api/facts?number=${numberOfFacts ?? 1}`,
  ).then((r) => r.json())) as { facts: string[] };
  return { dogFacts, title };
}

export default function DogFacts(
  { title, dogFacts }: SectionProps<typeof loader>,
) {
  return (
    <div class="p-4">
      <h1 class="font-bold">{title}</h1>
      <ul>
        {dogFacts.map((fact) => <li>{fact}</li>)}
      </ul>
    </div>
  );
}
```

3. Execute `deno task start` se ainda não o fez.
4. Assumindo que `deno task start` está rodando, acesse https://deco.cx/admin e
   selecione seu Site.
5. Certifique-se de que `localhost:8000` esteja selecionado no Seletor de
   Ambiente em no canto superior direito do Admin.
6. Vá para `Library` e procure por `DogFacts` na barra lateral esquerda.
7. Configure as `props` do Loader selecionado (`numberOfFacts`) com um número
   desejado (_ex:_ 4).

<img width="1510" alt="Library showing the DogFacts Section rendering data fetched from the API" src="https://user-images.githubusercontent.com/5839364/230696322-33137a3f-052b-416b-880a-19fcbf091908.png">

_Biblioteca mostrando os dados de renderização da Section DogFacts obtidos da
API_

**É isso!** Agora você criou uma Section que exibe os dados obtidos de um API
externa usando um Loader, tornando tudo configurável por usuários de negócios
como desejado. Recomendamos exportar filtros e _sort_ nos `props` do Loader para
torná-lo mais reutilizável no Admin da _deco.cx_.

## Leitura adicional

Os loaders são componentes poderosos para lidar com dados dinâmicos e resolvem a
maior parte dos requisitos quando lidamos com dados vindos de API. A plataforma
da `deco.cx` possui uma outra infinidade de casos de usos relacionados com dados
dinâmicos que podemos utilizar.

- [Carregador de Propriedades](/docs/pt/tutorials/props-loader)
- [Componentes Universais](/docs/pt/tutorials/universal-components)
- [Conceitos básicos: Loaders](/docs/pt/concepts/loader)
