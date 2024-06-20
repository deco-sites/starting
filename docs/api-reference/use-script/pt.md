---
description: useScript API reference
---

### Descrição

A função `useScript` foi projetada para ajudar os desenvolvedores a inserir scripts diretamente em uma página da web com uma carga mínima. Ela recebe uma função e seus argumentos como parâmetros e retorna a versão convertida em string e minificada da função. Isso é particularmente útil para inserir manipuladores de eventos e outros scripts diretamente no HTML, otimizando o desempenho ao reduzir a quantidade de JavaScript enviado pela rede. Ela se integra perfeitamente com os manipuladores `hx-on:` do HTMX.

### Importação

```typescript
import { useScript } from "deco/hooks/useScript.ts";
```

### Parâmetros

- **fn**: `Function`
  - A função a ser convertida em string e minificada.
  
- **args**: `...any[]`
  - Os argumentos a serem passados para a função quando ela for chamada.

### Valor de Retorno

- **string**
  - Uma versão convertida em string e minificada da função, pronta para ser inserida no HTML.

### Exemplos de Uso

#### Exemplo 1: Script Inline com `dangerouslySetInnerHTML`

Neste exemplo, `useScript` é usado para inserir um script simples que registra uma mensagem quando a janela é carregada.

```tsx
import { useScript } from "deco/hooks/useScript.ts";

const onLoad = () => {
  console.log("Window loaded");
};

function ExampleComponent() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <script
        type="module"
        dangerouslySetInnerHTML={{ __html: useScript(onLoad) }}
      />
    </div>
  );
}

export default ExampleComponent;
```

#### Exemplo 2: Script Inline com Atributo `hx-on`

Neste exemplo, `useScript` é usado para criar um manipulador de eventos minificado para um atributo `hx-on:click` que altera o texto de um botão quando clicado.

```tsx
import { useScript } from "deco/hooks/useScript.ts";

const onClick = () => {
  event!.currentTarget.innerText = "Clicked!";
};

function ExampleButton() {
  return (
    <button hx-on:click={useScript(onClick)}>
      Click me
    </button>
  );
}

export default ExampleButton;
```

### Notas

- Certifique-se de que a função passada para `useScript` não dependa de variáveis externas ou closures que não estarão disponíveis quando o script for executado inline.
- Ao usar com manipuladores `hx-on:`, certifique-se de que a função minificada não exceda os limites de comprimento de atributos que podem ser impostos pelos navegadores ou especificações HTML.