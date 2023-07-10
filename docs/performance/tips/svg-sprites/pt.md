---
description: Aprenda a usar a técnica de SVG sprites para otimizar a performance do seu site
---

> TL;DR: Use um arquivo único SVG e identifique cada símbolo com um `id`. Onde
> você quiser usar o SVG, utilize a tag `use` apontando pra o ID específico

## Versão em vídeo

Para assistir o conteúdo desse artigo, clique
[aqui](https://www.loom.com/share/e34d5d715f7c4efaae18e4eca799edca)

## SVG

SVG (Scalable Vector Graphics, ou Vetores Gráficos Escaláveis) é um formato
gráfico comumente utilizando em aplicações para representar ícones, logomarcas
ou elementos que precisam ser escalados sem perder qualidade. Contudo, o seu uso
pode impactar negativamente a performance de uma página web em diversas
métricas, como: tempo de carregamento da página (speed index), tempo para exibir
o primeiro conteúdo visível (FCP), tempo para exibir o último conteúdo visível
(LCP).

Este post vai descrever como utilizar a técnica de SVG sprites para diminuir o
impacto na performance de uma página causado por SVGs.

#### O que é a técnica SVG Sprites?

SVG sprites consiste em você ter um arquivo svg que seja acessível pela internet
e nele tenha as as símbolos de cada svg utilizando a tag `<symbol>` e
adicionando a propriedade `id` em cada um dos elementos que deseja utilizar -
pode utilizar outras tags como: `<defs>` , `<g>` dentre outras.

Segue um exemplo de arquivo svg com um símbolo e id **XMark**

```html
<svg style="display:none">
  <symbol id="XMark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></symbol>
</svg>
```

#### Como utilizar SVG Sprites para melhorar a performance do seu site?

Para utilizar um svg que está dentro de um arquivo, é possível referencia-lo
através do endereço do arquivo e do id do símbolo que foi definido no arquivo
através da tag `<use>`.

Segue um exemplo:

Digamos que o nome do arquivo svg é `icons.svg` e ele está disponível no path
`meudominio.com/icons.svg`

```html
<!-- icons.svg -->
<svg style="display:none">
 <symbol id="XMark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></symbol>
</svg>
```

Você pode referenciar o símbolo **XMark** dentro do seu html desta forma:

```html
<svg>
  <use href="//meudominio.com/icons.svg#XMark" />
</svg>
```

Desta forma, o tamanho do documento da sua página não será incrementado com o
tamanho do SVG **XMark**, dado que ele não faz parte do seu documento, pois ele
está em outro arquivo. No caso de uso de SVG dentro de ilhas, a quantidade de
JavaScript gerado no bundle será menor.

#### Quando utilizar a técnica?

> :warning: Não é sempre que é válido utilizar a técnica, porém é valido testar.

Considerando que existirá um ou vários arquivos svgs, com o intuito de melhorar
a performance do seu site e manter uma ótima usabilidade, é sugerido que utilize
desta abordagem nos seguintes casos:

- SVG é exibido abaixo do "Fold";
- SVG é exibido através de interação do usuário na página, por exemplo: hover,
  dentro de dialogs, ao clicar em botões;
- No caso de aplicações que utilizam jsx ou afins, que é o caso do Fresh, pois a
  quantidade de Javascript gerado por svg é consideravelmente grande.

**Extra:**

É possível definir um símbolo dentro do próprio documento e referencia-lo
posteriormente no mesmo document. Esta abordagem é válida para os casos de onde
um único svg é repetido várias vezes na página e pode ser utilizada para svgs
que são exibidos acima do "Fold".

#### Quais métricas de performance pode ser melhorada com esta técnica?

- Speed Index -
  <https://developer.chrome.com/docs/lighthouse/performance/speed-index/>;
- First Contentful Paint (FCP) - <https://web.dev/fcp/>;
- Largest Contentful Paint (LCP) - [https://web.dev/lcp](https://web.dev/fcp/) ;
