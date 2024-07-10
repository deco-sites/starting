---
description: Interatividade com HTMX
since: 1.0.0
---

Este tutorial vai te guiar na integração do HTMX ao seu projeto deco, permitindo maior interatividade com o mínimo de JavaScript. Vamos criar um contador como exemplo para ver como deco.cx integra com HTMX.

## O que é o HTMX?

HTMX permite acessar recursos modernos do navegador diretamente do HTML, facilitando a construção de aplicações web interativas com menos JavaScript.

## Passo 1: Adicionando HTMX ao Seu Projeto

Primeiro, você precisa incluir a biblioteca HTMX no seu projeto. Você pode fazer isso adicionando a seguinte tag de script ao seu HTML:

```html
<script src="https://unpkg.com/htmx.org@1.7.0"></script>
```

## Passo 2: Criando a Versão Preact do Contador

Vamos criar um componente Preact para o contador e ver a diferença para a versão com HTMX:

```tsx
import { useState } from "preact/hooks";

export default function Section() {
  const [count, setCount] = useState(0);

  return (
    <div class="container h-screen flex items-center justify-center gap-4">
      <button
        class="btn btn-sm btn-circle btn-outline no-animation"
        onClick={() => setCount(count - 1)}
      >
        <span>-</span>
      </button>
      <span>{count}</span>
      <button
        class="btn btn-sm btn-circle btn-outline no-animation"
        onClick={() => setCount(count + 1)}
      >
        <span>+</span>
      </button>
    </div>
  );
}
```

Aqui, estamos usando o hook `useState` do Preact para gerenciar o estado do contador e o evento `onClick` para atualizar o contador quando os botões são clicados.

## Passo 3: Criando a Versão HTMX do Contador

Na versão HTMX, não usaremos mais o hook `useState` nem o evento `onClick`. Ao usar HTMX, precisamos de uma rota para cada estado da UI, então faremos uma solicitação ao servidor para atualizar o estado do contador.

É aí que o [hook `useSection`](/docs/pt/api-reference/use-section) é útil. Este hook cria automaticamente rotas para renderizar seus estados de UI sem exigir que os desenvolvedores lidem manualmente com o roteamento.

Vamos ver o que muda na versão HTMX:

```tsx
import { useSection } from "deco/hooks/useSection.ts";

export default function Section({ count = 0 }:{ count: number }) {
  return (
    <div class="container h-screen flex items-center justify-center gap-4">
      <button
        hx-get={useSection({ props: { count: count - 1 } })}
        hx-target="closest section"
        hx-swap="outerHTML"
        class="btn btn-sm btn-circle btn-outline no-animation"
      >
        <span>-</span>
      </button>
      <span>{count}</span>
      <button
        hx-get={useSection({ props: { count: count + 1 } })}
        hx-target="closest section"
        hx-swap="outerHTML"
        class="btn btn-sm btn-circle btn-outline no-animation"
      >
        <span>+</span>
      </button>
    </div>
  );
}
```

Para atualizar o estado, como mencionado antes, estamos usando `hx-get` com o hook `useSection`. O atributo `hx-get` faz uma solicitação GET para a URL retornada pelo hook `useSection`. A resposta é um novo HTML com o novo estado da UI do contador. O atributo `hx-target` define o elemento alvo onde a resposta será inserida, neste caso, a seção mais próxima do botão. O atributo `hx-swap` define como a resposta será inserida, neste caso, substituindo todo o elemento da seção pela resposta.

Para ilustrar a diferença entre as versões Preact e HTMX,
vamos usá-las e ver como se comportam na aba de Network das
ferramentas de desenvolvedor do navegador.

Enquanto a versão Preact atualiza o estado do contador localmente,
a versão HTMX faz uma requisição ao servidor para atualizar o estado do contador.

![Requisições da versão HTMX](/docs/developing-guide/htmx/htmx-network.gif)

![Requisições da versão Preact](/docs/developing-guide/htmx/preact-network.gif)

## Conclusão

HTMX é uma ferramenta poderosa que pode simplificar o processo de adicionar interatividade às suas aplicações web. Usando HTMX, você pode reduzir a quantidade de JavaScript que precisa escrever e manter, tornando seu código mais limpo e gerenciável.

Para mais informações, confira a [documentação do HTMX](https://htmx.org/docs/) e a [documentação do deco.cx](https://deco.cx/docs/).