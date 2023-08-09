---
description: Utilizando Secrets em Sites Deco
since: 1.24.4
---

# Utilizando Secrets em Sites Deco

secrets são uma funcionalidade poderosa em sites deco que permitem armazenar informações sensíveis com segurança, como chaves de API ou senhas. Ao utilizar secrets, você pode gerenciar e proteger facilmente os dados confidenciais do seu site.

## Pré-requisitos

Antes de começar, verifique se você possui o seguinte:

- Um projeto de site deco configurado.
- Compreensão sobre props e loaders no deco.

## Passo 1: Declarando um Prop de secret

Para usar secrets no seu site, você precisa declarar um prop de secret nos seus componentes. Aqui está um exemplo de como fazer isso em uma seção usando um inline loader:

```tsx
import { Secret } from "$live/loaders/secret.ts";

export interface Props {
  secret: Secret;
}

export const loader = async (props: Props) => {
  const secretValue = await props?.secret?.get();
  // Use o secret aqui
};
```

Neste exemplo, o prop `secret` é declarado na interface `Props`. A função `loader` recupera o valor do secret usando o método `get()` e, em seguida, você pode usar o secret no seu código.

## Passo 2: Configurando secrets

Após declarar o prop de secret, os usuários podem configurar secrets para o seu site. No entanto, observe que a configuração de secrets apontando para `localhost` não funcionará. Você deve apontar para o domínio de produção, o que significa que você precisa de pelo menos um deployment declarando a dependência do secret.

> Importante: Uma vez que o Secret for configurado, o valor original dele não é revelado na UI do Admin, ou seja, você precisa ter acesso ao segredo para saber o valor original dele.

## Passo 3: Lidando com o Desenvolvimento Local

Ao desenvolver localmente, um secret tem um "nome" na interface do admin. Esse nome pode ser preenchido como uma variável de ambiente, que será usada localmente em vez da chave real usada em produção.

## Conclusão

Secrets fornecem uma maneira segura de gerenciar informações sensíveis nos seus sites. Ao declarar props de secret e permitir que os usuários os configurem, você pode garantir que os dados confidenciais do seu site permaneçam protegidos. Seja trabalhando em implantações de produção ou no desenvolvimento local, usar secrets é um passo crucial para melhorar a segurança e a funcionalidade dos seus sites.
