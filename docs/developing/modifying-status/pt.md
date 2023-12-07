---
description: Modificando o status de retorno de uma pagina
since: 1.0.0
---

# Modificando o status de retorno de uma pagina

## Visão Geral

A modificação do status de retorno permite que você informe ao navegador de
forma correta qual o retorno que esta sendo enviado na pagina com base em
qualquer criterio desejado. Isso garante uma melhor indexação por mecanismos de
pesquisa uma vez que, por exemplo, uma pagina não encontrada com status correto
não será indexada por eles.

## Implementação

Para modificar o status de retorno de uma pagina a partir de uma seção, siga
estes passos simples:

1. Crie um carregador inline dentro do componente da sua seção.

```tsx
export default function MyComponent(props: Props) {
  // Sua lógica de componente vai aqui
  // ...
}

export const loader = (props: Props, req: Request, ctx: AppContext) => {
  // Sua condição para a modificação de status
  if (SUA_CONDICAO_PARA_MODIFICAR_O_STATUS) {
    ctx.response.status = STATUS_DESEJADO;
  }

  // Retorne as props do componente
  return props;
};
```

2. Dentro da função `loader`, defina a condição que determina se o status deve
   ser modificado. Se a condição for atendida, atribua o status desejado a
   resposta contida no contexto.

## Exemplo

Digamos que você deseje que se sua busca não retornou nenhum elemento o retorno
da pagina seja `404 (Not Found)`:

```tsx
export default function MyComponent(props: Props) {
  // Sua lógica de componente vai aqui
  // ...
}

export const loader = (props: Props, req: Request, ctx: AppContext) => {
  // Verifique se não há nenhum elemento
  if (!props.items || !props.items.length) {
    ctx.response.status = 404;
  }

  // Retorne as props do componente
  return props;
};
```

Neste exemplo, se a propriedade `items` não existir ou não conter nenhum
elemento a seção modificará o status de retorno de toda a pagina para `404`

## Lembre-se

- A seção modificará o status de toda pagina em que estiver sendo chamada e que
  a condição for satisfeita.
- Use os codigos de status correto para cada situação para seu SEO não ser
  afetado negativamente.
