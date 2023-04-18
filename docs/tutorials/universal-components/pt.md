---
description: Aprenda como criar componentes universais para que possam ser usados em qualquer lugar
since: 1.0.0
---

Componentes universais são componentes que não dependente de uma _fonte_
específica de dado para determinar seu comportamento. A única coisa que lhes
importa é o `formato` do dado, isso geralmente acontece quando o componente é
feito para ser usado em vários lugares diferentes (inclusive há possibilidade
entre usa-lo entre sites distintos) sem que seja necessário ler de alguma API
específica, ou seja, sem nenhuma dependência externa (a.k.a implicit
dependency).

Um exemplo de um componente universal é a
[ProductShelf da loja Fashion](https://github.com/deco-sites/fashion/blob/main/components/product/ProductShelf.tsx#L15),
vamos dar uma olhada nele;

```tsx
export interface Props {
  title: string;
  products: Product[] | null;
  itemsPerPage?: number;
}

function ProductShelf({
  title,
  products,
}: Props) {
  // ...implementation
}
```

Perceba que, apesar da ProductShelf depender de uma lista de "Product" pra
funcionar, ela não depende de qual é a fonte do dado que vai prover essa
informação. Isso só é possível porque o tipo `Product` é um tipo criado por uma
entidade central no `schema.org`. Uma outra forma possível de pensar nossa
ProductShelf seria escrever um [Inline Loader](/docs/pt/tutorials/data-fetching)
e fazer com que esse inline loader leia os dados da API de um e-commerce em
específico (e.g Shopify) e só então renderizar a ProductShelf.

Isso é totalmente possível e factível, no entanto, deve-se atentar que quando
isso é feito, o nosso usuário de negócio perde a possibilidade de, por exemplo,
trocar a fonte de dados de Shopify para VTEX, o que é uma feature bastante
poderosa para evitar lock-in em uma plataforma especifica. Nesse sentido, um
component universal faz com que as dependencias nos tipo sejam invertidas, ao
invés do componente depender da API, na verdade o componente depende apenas do
`formato` do dado e permite com que `loaders` sejam implementados de forma a
retornarem esse tipo em comum, fazendo com que seja possível escolher o dado
loader ao configurar as propriedades do componente no Editor Admin.

<img width="699" alt="image" src="https://user-images.githubusercontent.com/5839364/230793613-5671c042-99ef-469e-be5c-6503be3b6889.png">

De fato, nossa ProductShelf possui ao menos quatro implementações distintas para
ler produtos de APIs e até mesmo plataformas de e-commerce distintas, são elas:
[VNDAProductList](https://github.com/deco-sites/std/blob/c99ccad64e350b4e4775f98232394486e18b4715/functions/vndaProductList.ts#L1),
[VTEXProductList](https://github.com/deco-sites/std/blob/c99ccad64e350b4e4775f98232394486e18b4715/functions/vtexProductList.ts#L1),
[VTEXLegacyProductList](https://github.com/deco-sites/std/blob/c99ccad64e350b4e4775f98232394486e18b4715/functions/vtexLegacyProductList.ts#L1),
e
[ShopifyProductList](https://github.com/deco-sites/std/blob/c99ccad64e350b4e4775f98232394486e18b4715/functions/shopifyProductList.ts#L1)

Isso faz com que Universal Components sejam algo que tem um valor e usabilidade
muito grande comparado a componentes que dependem de dados de APIs!

## Leitura sugerida

Componentes universais faz com que a interoperabilidade entre plataformas seja
possível e o mais fácil possível. Leia mais sobre como criar loaders abaixo nos
nossos tutoriais;

- [Carregador de Propriedades](/docs/pt/tutorials/props-loader)
- [Conceitos básicos: Loaders](/docs/pt/concepts/loader)
