---
description: useSection API reference
---

O hook `useSection` no deco.cx é uma ferramenta poderosa projetada para gerar
automaticamente links para atualização e renderização de seções. Com este hook,
você pode usar os Partials do HTMX ou Fresh para renderizar estados específicos
de seções. Abaixo está uma explicação detalhada de seu uso, parâmetros e
exemplos.

## Importando o Hook useSection

Para usar o hook useSection, você precisa importá-lo do arquivo
deco/hooks/useSection.ts:

```tsx
import { useSection } from "deco/hooks/useSection.ts";
```

## Parâmetros

O hook useSection aceita um objeto de opções com as seguintes propriedades:

1. **props**: Um objeto contendo as propriedades da seção a serem substituídas.
   Isso permite que você especifique novos valores para as propriedades que
   serão usadas para renderizar a seção. Lembre-se de que as propriedades são
   mescladas com aquelas da instância atual da seção.
2. **href**: Uma string que representa a nova URL para avaliar esta seção. Esta
   URL será usada para o parâmetro `Request` em todos os loaders/actions dos
   quais esta seção pode depender.

## Valor de Retorno

O hook useSection retorna uma string de URL da seção com as propriedades
aplicadas parcialmente.

## Exemplo de Uso

Vamos construir um componente que imprime um número inteiro e nos permite ver o
próximo número inteiro. Aqui está uma ilustração:

![1234](https://github.com/deco-cx/community/assets/1753396/f4abdeaf-9801-4f4a-8f57-2f3eaa22804e)

Este componente pode ser construído com o seguinte código:

```tsx
import { useSection } from "deco/hooks/useSection.ts";

export default function Section({ count = 0 }: { count: number }) {
  return (
    <div class="flex items-center justify-center gap-4">
      <span>{count}</span>
      <a href={useSection({ props: { count: count + 1 } })}>
        Ver próximo número inteiro
      </a>
    </div>
  );
}
```

Onde useSection retorna um link para o próximo número inteiro.

## Avisos

1. **Limites de Tamanho de URL**: Esteja atento aos limites de tamanho da URL ao
   passar propriedades para useSection. Tente manter os payloads pequenos e use
   tipos de dados leves, como booleanos e IDs.
2. **Segurança**: Garanta que quaisquer dados sensíveis passados como
   propriedades estejam devidamente protegidos e não exponham vulnerabilidades
   através da URL.
