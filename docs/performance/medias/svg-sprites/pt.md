---
description: Aprenda a usar a técnica de SVG sprites para otimizar a performance do seu site
---

### Resumo

<iframe width="640" height="339" src="https://www.loom.com/embed/e34d5d715f7c4efaae18e4eca799edca" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

> Para reutilizar elementos SVG e diminuir o tamanho do HTML de páginas:
>
> 1. Use um arquivo único SVG (ex.: `sprites.svg`) e identifique cada símbolo
   > com um``id`.
> 2. Para usar o SVG, utilize a tag `use` apontando pra o ID específico
> 3. Faça isso especialmente para os SVG que <u>não estão visíveis em tela</u>.

# SVG

SVG (Scalable Vector Graphics, ou Vetores Gráficos Escaláveis) é um formato
gráfico comumente utilizando em aplicações para representar ícones, logomarcas
ou elementos que precisam ser escalados sem perder qualidade. Contudo, o seu uso
pode impactar negativamente a performance de uma página web em diversas
métricas, como: tempo de carregamento da página (speed index), tempo para exibir
o primeiro conteúdo visível (FCP), tempo para exibir o último conteúdo visível
(LCP).

# A técnica SVG Sprites

SVG sprites consiste em você ter um arquivo svg que seja cacheável e acessível
pela internet (exemplo: na sua pasta `static`), e nele tenha as as símbolos de
cada svg utilizando a tag `<symbol>` e adicionando a propriedade `id` em cada um
dos elementos que deseja utilizar.

Segue um exemplo de arquivo svg com um símbolo e id **XMark**

```html
<svg style="display:none">
  <symbol id="XMark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></symbol>
</svg>
```

# SVG Sprites para melhorar a performance do seu site

Para utilizar um svg que está dentro de um arquivo, é possível referencia-lo
através do endereço do arquivo e do id do símbolo que foi definido no arquivo
através da tag `<use>`.

Segue um exemplo:

Digamos que o nome do arquivo svg é `icons.svg` e ele está disponível no path
`example.com/icons.svg`

```html
<!-- icons.svg -->
<svg style="display:none">
 <symbol id="XMark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></symbol>
</svg>
```

Você pode referenciar o símbolo **XMark** dentro do seu html desta forma:

```html
<svg>
  <use href="/icons.svg#XMark" />
</svg>
```

Desta forma, o tamanho do documento da sua página não será incrementado com o
tamanho do SVG **XMark**, dado que ele não faz parte do seu documento, pois ele
está em outro arquivo. No caso de uso de SVG dentro de ilhas, a quantidade de
JavaScript gerado no bundle será menor.

# Quando utilizar a técnica?

> ⚠️ Não é sempre adequado utilizar a técnica, porém é sempre válido testá-la.

Considerando que existirá um ou vários arquivos svgs, com o intuito de melhorar
a performance do seu site e manter uma ótima usabilidade, é sugerido que utilize
desta abordagem nos seguintes casos:

- SVG não é visível na tela inicial do usuário (não está no "above the fold")
- SVG é exibido através de interação do usuário na página, por exemplo: hover,
  dentro de dialogs, ao clicar em botões
- No caso de aplicações que utilizam jsx ou afins, que é o caso do Fresh, pois a
  quantidade de Javascript gerado por SVG é consideravelmente grande.

**Extra:**

É possível definir um símbolo dentro do próprio documento e referencia-lo
posteriormente no mesmo documento. Esta abordagem é válida para os casos de onde
um único SVG é repetido várias vezes na página e pode ser utilizada para SVGs
que são exibidos acima do "Fold" (i.e. visíveis na tela do usuário antes da
interação do mesmo).

```html
<svg>
  <use href="#XMark" />
</svg>
```
