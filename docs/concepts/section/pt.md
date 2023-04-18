---
description: Uma Section representa um elemento de UI configurável para um Site deco.cx.
---

As Sections são **componentes de UI criados com
[Preact](https://preactjs.com/)** que pode receber `props` configuradas por
usuários no Admin da _deco.cx_. As implementações locais de Section vivem na
pasta `sections/` no código do Site, porém é possível
[importar Sections de outros Sites](/docs/pt/tutorials/importing-other-sites).

Alguns exemplos de Section para uma loja de ecomemerce seriam:

- **ProductShelf.tsx:** exibe uma prateleira com imagem, título e preço.
- **Header.tsx:** exibe o cabeçalho padrão da loja, contendo logotipo,
  categorias de menu e links para carrinho e login.
- **Banner.tsx:** exibe imagem, texto e alguns _Call to action_ para campanha ou
  departamento específico.

## Interatividade

Observe que as seções são executadas **somente no lado do servidor**, portanto,
gerenciamento de estado e ciclo de vida como como `useState`, `useEffect` e
callbacks como `onClick`, `onInput` não irão funcionar. Para que funcionem, você
precisará usar [Islands](https://fresh.deno.dev/docs/concepts/islands).

No Admin da _deco.cx_ é possível interagir com as Sections em dois locais:

- **Library:** permite que desenvolvedores configurem as propriedades das
  Section e visualizaem automaticamente a UI renderizada. (Funciona semelhante
  ao [Storybook](https://storybook.js.org/))
- **Pages:** Permite que a Section seja adicionada à Pages no Site, sendo também
  configuráveis por lá.

## Leitura adicional

- [Tutorial: Codificando uma nova seção](docs/en/tutorials/creating-a-section)
- [Receita: Seções personalizáveis](docs/en/recipes/customizable-sections)
