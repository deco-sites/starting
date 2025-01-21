---
since: 1.109.0
---

# Gerenciando Acesso de Loaders/Actions

Por padrão, todos os loaders e actions no deco.cx são publicamente acessíveis. No entanto, você pode precisar restringir o acesso a certos loaders/actions que lidam com operações sensíveis ou APIs privadas. Este guia explica como controlar a visibilidade de loaders/actions.

## Opções de Visibilidade

Existem dois níveis de visibilidade disponíveis:

- `private`: Pode ser invocado apenas no lado do servidor através do `ctx.invoke`
- `public`: Pode ser chamado tanto do servidor quanto do cliente através de:
  - Chamadas `invoke` em tempo de execução
  - Acesso direto via path `/live/invoke/{path/to/block.ts}`

## Definindo Visibilidade Padrão

Para definir o nível de visibilidade de um loader/action, exporte uma variável `defaultVisibility`:

```typescript
// Torna o loader publicamente acessível
export const defaultVisibility = 'public'

// Torna o loader privado (apenas lado do servidor)
export const defaultVisibility = 'private'
```

## Sobrescrevendo Visibilidade

Você pode sobrescrever as configurações de visibilidade padrão no seu arquivo `fresh.config.ts` usando a opção `visibilityOverrides`:

```typescript
import { defineConfig } from "$fresh/server.ts";
import { plugins } from "deco/plugins/deco.ts";
import manifest from "./manifest.gen.ts";

export default defineConfig({
  plugins: plugins<typeof manifest>({
    manifest,
    htmx: true,
    visibilityOverrides: {
      "site/loaders/minicart.ts": "public",
      "vtex/loaders/cart.ts": "private"
    },
  }),
});
```

## Boas Práticas de Segurança

Ao decidir os níveis de visibilidade:

### Use `private` para

- Acessar APIs privadas/internas
- Operações envolvendo credenciais ou segredos
- Processamento de dados sensíveis de usuários/negócios
- Integrações backend que requerem autenticação

### Use `public` para

- Leitura de dados públicos de produtos
- Busca de conteúdo público
- Carregamento de dados no lado do cliente
- Operações voltadas ao usuário que não expõem dados sensíveis

## Documentação Relacionada

- [Buscando Dados](/docs/pt/developing-guide/fetching-data)
- [Carregamento de Dados no Cliente](/docs/pt/developing-capabilities/islands/fetching-data-client)
- [Conceitos Principais: Loaders](/docs/pt/concepts/loader)
