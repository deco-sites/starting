---
description: Criando loaders
---

Agora que você aprendeu mais sobre loaders e como eles podem ser usados junto
com uma seção, vamos criar um loader que pode ser usado em diferentes seções.

## 1. Criando um Loader

Para fazer isso, vamos criar um loader separado da seção, na pasta `loaders/` do
seu projeto.

Crie o arquivo `DogFactsLoader.ts` na pasta `loaders/` do seu projeto. Ele terá
a mesma lógica do loader que criamos no tutorial anterior, mas temos que lembrar
de definir a interface Props e exportar o loader como padrão.

```tsx
export type DogFacts = string[];

export interface Props {
  numberOfFacts?: number;
}

async function loader(
  { numberOfFacts = 1 }: Props,
  _req: Request,
): Promise<DogFacts> {
  const { facts } = await fetch(
    `https://dogapi.dog/api/facts?number=${numberOfFacts ?? 1}`,
  ).then((r) => r.json());

  return facts;
}

export default loader;
```

## 2. Usando o Loader em uma Seção

Agora que criamos o loader, podemos usá-lo em uma seção. O importante aqui é que
uma das props da seção deve corresponder ao tipo de retorno do loader.

Modifique o arquivo `DogFacts.tsx` na pasta `sections/` do seu projeto.

```tsx
import type { DogFacts } from "../loaders/DogFactsLoader.ts";

// Tipo de Props que será configurado no Admin do deco.cx
export interface Props {
  title: string;
  dogFacts?: DogFacts;
}

export default function DogFactsSection(
  { title, dogFacts }: Props,
) {
  return (
    <div class="p-4">
      <h1 class="font-bold">{title}</h1>
      <ul>
        {dogFacts?.map((fact) => <li>{fact}</li>)}
      </ul>
    </div>
  );
}
```

Agora, em vez de ter um loader embutido, a seção recebe os dados como uma prop,
e como o loader retorna o mesmo tipo que a prop dogFacts da seção, o Admin
reconhece o loader dogFacts como o loader para a seção DogFacts.

![Seção DogFacts no Admin](/docs/developing-guide/creating-loaders/dog-facts-section.png)

## É isso!

Você criou com sucesso um loader que pode ser usado em diferentes seções.
Continue lendo para ver o que mais você pode desenvolver com deco.
