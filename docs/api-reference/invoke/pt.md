---
description: Invoke Client API Reference
---

A API Invoke é um cliente RPC (Remote Procedure Call) tipado.
Ela torna a interação com loaders e actions mais segura e 
tão fácil quanto chamar uma função, abstraindo os detalhes do transporte de rede
acontecendo por baixo dos panos.

Um único cliente Invoke pode ser usado para interagir 
com ações e carregadores do seu site e de qualquer App instalado. 
O Invoke pode ser usado tanto no Cliente quanto no Servidor e 
suporta padrões mais complexos, como chamar múltiplos loaders/actions 
em uma única requisição (Veja o Exemplo 4: Invoke em Batch) ou enviar 
arquivos via uma requisição multipart.

A assinatura de tipo de Invoke será sempre dinâmica e será inferida 
com base no tipo do seu manifesto e no tipo da ação/carregador que você está chamando:

Por exemplo:

```typescript
import { invoke } from "site/runtime.ts";

const resultado = await invoke.site.loaders.exemplo(
    props: T, // Este será o tipo das props da action/loader sendo chamado
    init?: InvokerRequestInit // Este é um objeto de inicialização de requisição fetch estendido com algumas opções extras
);

console.log(resultado); // Este será o tipo do valor de retorno da action/loader
```


## Importando a API

### Uso no Browser (client-side)

Para uso no Cliente, o Invoke é exportado da `runtime.ts` no raiz do projeto.

Abaixo está um exemplo de um arquivo `runtime.ts` típico, que cria
um cliente para interagir com actions e loaders do seu site, 
e de dois apps: VTEX e Linx Impulse. Todos os Apps podem ser usados da mesma forma, 
já que exportam um `Manifest`.

```typescript
import { proxy } from 'deco/clients/withManifest.ts';
import type { Manifest } from './manifest.gen.ts'
import type { Manifest as ManifestVTEX } from 'apps/vtex/manifest.gen.ts'
import type { Manifest as ManifestLinxImpulse } from 'apps/linx-impulse/manifest.gen.ts'

export const invoke = proxy<Manifest & ManifestVTEX &  ManifestLinxImpulse>();
```

### Uso no Servidor

Para uso no Servidor, o Invoke pode sempre ser acessado a partir 
do *Contexto* da Aplicação. Isso torna o Invoke mais fácil de usar dentro de actions
e loaders.

Abaixo está um exemplo de um loader que utiliza o Invoke para chamar outro
loader da mesma Aplicação:

```typescript
import type { AppContext } from "site/apps/site.ts";

export const async function getUserNotes(
    props: Props, req: Request, ctx: AppContext
): Promise<User> {
    const user = await ctx.invoke.site.loaders.getUser({ token: req.headers.get("Authorization") });

    if (!user) {
        throw new Error("Usuário não encontrado");
    }

    return user.notes;
}
```

## Exemplos de Uso

### Exemplo 1: Chamando uma Action ou Loader a partir do Navegador

Suponha que temos um loader chamado `getUser`, que retorna um objeto de usuário,
baseado em um `id` de usuário enviado.

```typescript
import type { AppContext } from "site/apps/site.ts";

export interface Props {
    id: string;
}

export const async function getUser(
    props: Props, req: Request, ctx: AppContext
): Promise<User> {
    return fetchUser(props.id);
}
```

Podemos agora chamar esse loader a partir do Navegador, usando
o cliente invoke exportado do arquivo runtime.ts:

```typescript
import { invoke } from "site/runtime.ts";

const user = await invoke.site.loaders.getUser({ id: "123" });
```

Como o cliente Invoke é tipado, o tipo de retorno do `getUser` é automaticamente inferido,
e o tipo da variável `user` é `User`. Todos os tipos de parâmetros são também inferidos,
então temos mais confiança para interagir com nossas APIs.

**Importante**: Isso deve ser usado apenas no Navegador. Tentar importar
e usar o cliente Invoke do arquivo `runtime.ts` no servidor resultará em um erro.
Para chamar actions/loaders a partir do servidor, veja o próximo exemplo.

### Exemplo 2: Chamando uma Action ou Loader a partir do Servidor

Suponha que estamos criando uma ação chamada `addItem` que adiciona um item a um carrinho.

Suponha também que já temos um loader chamado `cart`, que retorna o carrinho atual
para um usuário, baseado em uma sessão contida nos cookies da requisição:

```typescript
import type { AppContext } from "site/apps/site.ts";
import { getSessionFromRequest } from "site/lib/session.ts";
import { getCartFromDatabase } from "site/lib/cart.ts";

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  id: string;
}

export const async function cart(
    _props: unknown, req: Request, ctx: AppContext
): Promise<Cart> {
    // Pegar a sessão a partir da requisição
    const session = await getSessionFromRequest(req);

    // Pegar o carrinho a partir da base de dados usando o ID vindo da sessão
    const cart = await getCartFromDatabase(session.cartId);

    return cart;
}
```

Agora, quando criamos a ação `addItem`, podemos reutilizar o loader `cart` para
buscar o carrinho atual e então adicionar o item ao carrinho:

```typescript
import type { AppContext } from "site/apps/site.ts";
import { saveCartToDatabase } from "site/lib/cart.ts";

export interface Props {
    item: CartItem;
}

export const async function addItem(
    props: Props, req: Request, ctx: AppContext
): Promise<Cart> {
    const currentCart = await ctx.invoke.site.loaders.cart();

    // Adicionar o item ao carrinho
    cart.items.push(props.item);

    // Salvar o carrinho atualizado na base de dados
    await saveCartToDatabase(cart);

    return cart;
}
```

O cliente Invoke que vem do Contexto da Aplicação é também tipado, baseado
no tipo `AppContext` exportado por convenção do seu `site` app.

### Exemplo 3: Enviando um arquivo para o Servidor

Suponha que temos uma ação chamada `uploadFile`, que envia um arquivo para um
destino. A ação recebe uma propriedade `file`, que é um objeto de arquivo
que contém os dados do arquivo, e uma propriedade `destination`, que é uma string
que especifica o destino para onde o arquivo deve ser enviado.

```typescript
import type { AppContext } from "site/apps/site.ts";

export interface Props {
    file: File;
    destination: string;
}

export const async function uploadFile(
    props: Props, req: Request, ctx: AppContext
): Promise<void> {
    // Enviar o arquivo para o destino
    await uploadFileToDestination(props.file, props.destination);
}
```

Estamos usando a web API `File` como tipo de propriedade aqui, mas isso cria um problema:

O objeto `File` não é serializável via JSON, que é o que o Invoke usa internamente. 
Isso significa que tentar passar um objeto File como propriedade para uma ação 
resultará em um erro ao tentar acessar a propriedade file dentro da sua action.

Para resolver isso, o cliente Invoke oferece uma maneira de fazer upload de 
arquivos via uma requisição multipart, que é uma maneira prática de enviar arquivos 
para o servidor, usando a API FormData e o tipo de conteúdo multipart/form-data.

Para usar isso, você só precisa adicionar uma opção multipart: true ao `InvokerRequestInit`
do Invoke (que é o segundo argumento para qualquer chamada de invoke), 
e o cliente usará automaticamente um protocolo personalizado para enviar
o payload via multipart, tornando possível enviar arquivos para o servidor.

Podemos agora chamar essa ação a partir do Navegador, usando
o cliente invoke exportado do arquivo runtime.ts:

```tsx
import { invoke } from "site/runtime.ts";

export function UploadFileInput() {
    const uploadFile = async (file: File) => {
        await invoke.site.actions.uploadFile({
            file: file,
            destination: "/uploads/files"
        }, { multipart: true });
    }

    return (
      <input 
        type="file" 
        onChange={async (e) => {
          const file = e.target.files[0];
          if (file) {
            await uploadFile(file);
          }
        }}
      />
    );
}
```

Agora o arquivo `file` pode ser acessado seguramente na action!

**Importante**: Quando usando a opção `multipart`, o cliente Invoke enviará um FormData
objeto para o servidor, que só suporta arquivos e strings. Isso significa que qualquer
propriedade que seja um número ou um booleano será convertida para uma string.

### Exemplo 4: Batch Invoke

Batch Invoke é útil quando você precisa realizar múltiplas operações
simultaneamente e quer minimizar a latência de rede, reduzindo o número de
requisições. 

Aqui está um exemplo de cenário onde usar Batch Invoke faz sentido: 
recuperar múltiplos conjuntos de dados relacionados em uma única requisição.

Suponha que temos um usuário logado e temos três diferentes loaders que retornam
dados relacionados ao usuário: um para anotações (notes), um para o endereço (address) 
e um para os pedidos (orders).

Podemos recuperar todos esses três conjuntos de dados em uma única requisição usando um Batch Invoke:

```typescript
import { invoke } from "site/runtime.ts";

// Podemos sempre desstructurar o cliente Invoke
// para escrever código mais fácil de ler
const { loaders } = invoke.site;

const user = ...; // Obtenha o usuário atual de alguma maneira

const {
  userNotes,
  userAddress,
  userOrders,
} = await invoke({
  userNotes: loaders.getUserNotes({ userId: user.id, orderBy: "latest" }),
  userAddress: loaders.getUserAddress({ token: user.token }),
  userOrders: loaders.getUserOrders({ userId: user.id }),
});
```

Passando um objeto com os loaders/actions como propriedades, o cliente Invoke
automaticamente faz o batch das requisições e retorna os resultados no mesmo formato
que o objeto passado. Continuamos tendo todos os tipos inferidos automaticamente ao 
fazer Batch Invoke desta maneira!