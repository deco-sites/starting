---
description: Aprenda a invocar funções através da API.
since: 1.0.0
---

## Leitura sugerida

- [Conceitos básicos: Loader](/docs/pt/concepts/loader)
- [Conceitos básicos: Action](/docs/pt/concepts/action)

A Invocação de funções client-side é um recurso poderoso do live.ts que permite
que você obtenha dados diretamente dos seus funções sem enviar JavaScript para o
navegador. Esse recurso garante que sua obtenção de dados seja única em todo o
seu repositório e ajuda a reduzir a latência do lado do cliente.

Para começar a usar a Invocação de funções client-side, siga estes passos:

1. Importe o objeto `Runtime` do arquivo `runtime.ts`

2. Agora você pode emitir invocações usando a função `Runtime.invoke`. Por
   exemplo, para buscar dados de uma função, você usaria o seguinte código:

> Não conseguiu achar esse arquivo?
> [Tente este](https://github.com/deco-sites/fashion/blob/main/runtime.ts)

```ts
import { Runtime } from "../runtime.ts";
import { useCallback } from "preact/hooks";

export default function MyIsland() {

  const fetchData = useCallback(() => {
        const data = await Runtime.app.loaders.myLoader({/* your function input props */});
  }, [])

  return <div>
    {...}
    <button onClick={fetchData}>Load</button>
  </div>
}
```

Aqui, a função `invoke` recebe um objeto com uma propriedade `key` que
especifica o caminho para sua função e uma propriedade `props` que contém suas
props de entrada da função. Quando você chama `Runtime.invoke`, o live.ts irá
invocar sua função como faz para renderizar seções e retorná-lo para você como
um objeto JavaScript.

Você também pode agrupar solicitações passando um objeto com várias chaves, cada
uma representando uma invocação desejada. Por exemplo:

```ts
const { data1, data2 } = await Runtime({
  data1: Runtime.app.loaders.myLoader({/* your function input props */}),
  data2: Runtime.app.loaders.myLoader2({/* your function input props */}),
});
```

Com esses passos, agora você pode começar a usar a Invocação de funções
client-side em sua aplicação Live.ts, happy coding!
