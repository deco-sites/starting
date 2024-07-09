---
description: Defira computação do navegador para o servidor
since: 1.0.0
---

# Fresh Partials: Revolucionando o Desenvolvimento Web com Deno

Partials capacita os desenvolvedores a otimizar as interações na web,
descarregando determinadas tarefas do dispositivo do usuário para os Servidores
Edge da Deco. Essa abordagem inovadora reduz significativamente a quantidade de
JavaScript necessária para executar websites, resultando em tempos de
carregamento de página mais rápidos e melhores taxas de conversão.

## Introdução aos Partials

Partials, inspirados em [htmx](https://htmx.org/docs/), operam interceptando
interações do usuário em elementos de botão, âncora e formulário. Essas
interações são automaticamente transferidas para nosso servidor, onde geram um
novo estado da Interface do Usuário (UI). Esse novo estado fresco é transmitido
como HTML puro de volta para o navegador do usuário. Nosso tempo de execução
substitui e hidrata o novo estado da UI, criando a ilusão de interatividade do
lado do cliente. Na realidade, todo o processo de computação ocorre em
milissegundos em nossos Servidores Edge. Para obter informações mais detalhadas
sobre Partials, consulte a
[documentação](https://github.com/denoland/fresh/issues/1609) do Fresh.

## Simplificando o Desenvolvimento

Embora os Fresh Partials introduzam um novo domínio de otimização de desempenho,
também trazem complexidade adicional ao ciclo de desenvolvimento. Agora, os
desenvolvedores precisam considerar vários modos de renderização, seu impacto
nos tamanhos de pacote e HTML, latências de interação e como navegar
corretamente em páginas parcialmente renderizadas. Para simplificar esse
processo, a Deco integrou os Partials em uma camada de abstração mais alta do
nosso framework, eliminando a necessidade de os desenvolvedores lidarem com
essas complexidades.

## Usando Partials nas Section

Na Deco, todas as [Sections](/docs/en/concepts/section) são tratadas como
parciais. Isso significa que você pode incorporar facilmente interatividade do
lado do cliente em qualquer Section sem comprometer os tamanhos de pacote ou os
carregamentos iniciais da página. Isso é especialmente benéfico para a criação
de componentes de IU comuns, como seletores de SKU, recursos de rolagem infinita
e abas. Nas Sections a seguir, vamos aprofundar como aproveitar todo o potencial
dos Partials criando um seletor de SKU super-rápido.

## Exemplo: Seletor de SKU

Os seletores de SKU permitem que os compradores explorem diferentes variações de
um produto, cada um com seu conjunto único de preços, imagens e disponibilidade.
Considere o exemplo a seguir:
![sku-selector](https://github.com/site/assets/1753396/cdaca2fc-34cd-404b-8679-d159872f7faa)

Como demonstrado, a alteração do SKU selecionado pode resultar em alterações
significativas na página. Uma abordagem direta é criar um sinal para armazenar o
SKU atualmente selecionado e atualizá-lo a cada clique:

```tsx
// sections/ProductDetails.tsx
export default function DetalhesDoProduto ({ skus }) {
  const skuSelecionado = useSignal(skus[0]);
  
  return (
    <div>
      <ImageSlider sku={skuSelecionado} />
      <ProductPrice sku={skuSelecionado}>

      Cor:
      <ul>
        <li>
          <button onClick={() => { skuSelecionado.value = skus[0] }}>Vermelho</button>
        </li>
        <li>
          <button onClick={() => { skuSelecionado.value = skus[1] }}>Azul</button>
        </li>
        <li>
          <button onClick={() => { skuSelecionado.value = skus[2] }}>Verde</button>
        </li>
      </ul>
    </div>
  )
}
```

No entanto, essa implementação tem uma desvantagem. Para habilitar a
interatividade, toda a Section, incluindo todos os dados de SKU e o código do
componente, é enviada para o navegador, resultando em um desempenho reduzido do
site.

> Observação: Se você isolar apenas os botões como ilhas, a seleção de um SKU
> não atualizará seu preço ou imagem, levando a uma IU inconsistente.

Uma abordagem alternativa é transformar os botões em tags de âncora, acionando
um novo carregamento de página a cada seleção de SKU:

```tsx
// sections/ProductDetails.tsx
export default function DetalhesDoProduto ({ skus }) {
  return (
    <div>
      <ImageSlider sku={skuSelecionado} />
      <ProductPrice sku={skuSelecionado}>

      Cor:
      <ul>
        <li>
          <a href={skus[0].url}>Vermelho</a>
        </li>
        <li>
          <a href={skus[1].url}>Azul</a>
        </li>
        <li>
          <a href={skus[2].url}>Verde</a>
        </li>
      </ul>
    </div>
  )
}
```

Embora essa abordagem ofereça um desempenho ideal, eliminando a necessidade de
ilhas, ela tem um custo em termos de experiência do usuário (UX). A cada seleção
de SKU, a página é recarregada e o usuário é levado de volta ao topo da página.
Para encontrar um equilíbrio entre UX e desempenho, vamos refatorar esse
componente usando Partials.

### Aprimorando UX e Desempenho com Partials

```tsx
// sections/ProductDetails.tsx
import { usePartialSection } from "deco/hooks/usePartialSection.ts";

export default function DetalhesDoProduto ({ skus }) {
  return (
    <div>
      <ImageSlider sku={skuSelecionado} />
      <ProductPrice sku={skuSelecionado}>

      Cor:
      <ul>
        <li>
          <button {...usePartialSection({ href: skus[0].url })}>Vermelho</button>
        </li>
        <li>
          <button {...usePartialSection({ href: skus[1].url })}>Azul</button>
        </li>
        <li>
          <button {...usePartialSection({ href: skus[2].url })}>Verde</button>
        </li>
      </

ul>
    </div>
  )
}
```

A mágica aqui está no gancho `usePartial` combinado com a tag `button`. Este
gancho aceita um parâmetro `href` e aprimora a tag do botão. Quando o usuário
clica no botão, ele desencadeia a navegação do lado do cliente e aplica
atualizações de diferenças de HTML. Essa abordagem elimina a necessidade de
ilhas, aumentando o desempenho, ao mesmo tempo em que mantém a posição de
rolagem para uma experiência do usuário aprimorada.

## Exemplo: Abas

Embora tenhamos explorado como aproveitar os Partials para seletores de SKU, a
navegação por abas apresenta um desafio único. As abas não possuem URLs
canônicos, tornando difícil gerenciar transições de estado. No entanto, o gancho
`usePartial` nos permite substituir as props que uma Section usa para
renderização, simplificando o processo:

```tsx
import { usePartialSection } from "deco/hooks/usePartialSection.ts";

interface Props {
  activeIndex: number;
}

const SectionDeAbas = ({ activeIndex }) => {
  return (
    <div>
      <button
        class={activeIndex === 0 && "active"}
        {...usePartialSection<typeof SectionDeAbas>({
          props: { activeIndex: 0 },
        })}
      >
        Aba 1
      </button>
      <button
        class={activeIndex === 1 && "active"}
        {...usePartialSection<typeof SectionDeAbas>({
          props: { activeIndex: 1 },
        })}
      >
        Aba 2
      </button>
      <button
        class={activeIndex === 2 && "active"}
        {...usePartialSection<typeof SectionDeAbas>({
          props: { activeIndex: 2 },
        })}
      >
        Aba 3
      </button>
    </div>
  );
};
```

Neste exemplo, a prop `activeIndex` é substituída a cada chamada de
`usePartialSection`, simplificando o uso de Partials e eliminando a necessidade
de gerenciar URLs e parâmetros de pesquisa em nossas Sections.
