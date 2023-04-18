---
description: Aprenda como criar uma Section para um Site usando deco.cx
---

Neste tutorial você aprenderá como criar uma nova implementação de
[Section](/docs/pt/concepts/section) no repositório do seu
[Site](/docs/pt/concepts/site) e veja como os usuários podem **configurar seus
props** no Admin da _deco.cx_.

## Leitura sugerida

- [Introdução: Tech Stack](http:///docs/pt/introduction/tech-stack)
- [Conceitos: Section](/docs/pt/concepts/section)

Abra a pasta do seu site em uma IDE e execute as seguintes ações:

1. Crie um arquivo `.tsx` na pasta `sections/` em seu Site com o nome desejado
   para Section (_e.g_: `LatestPosts.tsx`).

2. Exporte um componente [Preact](https://preactjs.com/) **usando
   `export default`** como o exemplo abaixo:

   1. `sections/LatestPosts.tsx`

      ```tsx
      interface Props {
        title: string;
      }

      export default function LatestPosts({ title }: Props) {
        return (
          <div>
            <h1 class="font-bold">{title}</h1>
            <p>This is an example section</p>
          </div>
        );
      }
      ```

**Pronto!** A Section foi criada localmente no seu projeto.

## Testando a Section

Mesmo que o código desta Section esteja apenas em _localhost_, você pode
visualizar como ela está sendo renderizada e também testar a configuração de
suas `props`. Para cada prop que você exporta o tipo, renderizaremos um campo
para edição do valor no Admin. Também é possível carregar
[dados obtidos de APIs externas](/docs/pt/tutorials/data-fetching)

Para testar a Section `LatestPosts.tsx`:

1. Execute `deno task start` no Terminal. _(Você não precisa executar novamente
   se já rodando)_

2. Acesse o Admin de _deco.cx_ em https://deco.cx/admin, selecione seu Site e vá
   em `Library`.

3. Certifique-se de que `localhost:8000` esteja selecionado no Seletor de
   Ambiente no canto superior direito da página.

4. Procure `LatestPosts.tsx` na barra lateral esquerda.

5. **Pronto!** Agora você pode configurar `props` para essa Section, clicar em
   `Salvar` e ver como ela está sendo renderizada. O _preview_ atualizará
   automaticamente se você alterar o código da Section localmente.

<img width="994" alt="Visualização do Editor de Section no Admin da deco" src="https://user-images.githubusercontent.com/18706156/225371920-e1c35a7a-c994-4b96-b9bd-554caab02455.png" >

## Leitura adicional

As Section são um dos conceitos mais poderosos da _deco.cx_, e há muito mais
você pode fazer com elas. Leia estas Receitas para saber mais sobre as
funcionalidades de Sections:

- [Sections customizáveis](/docs/pt/recipes/customizable-sections)
- [Carregando dados de APIs](/docs/pt/tutorials/data-fetching)

> _Dica_: Se você usa VSCode,
> [aqui](https://gist.github.com/lucis/9ac9756ce7df18033d53e5c03ad8a62d) estão
> alguns _snippets_ pra auxiliar na criação desses componentes.
