---
description: Aprenda como restaurar versões anteriores do seu site
since: 1.0.0
---

# Revisões

É muito importante ter controle e autonomia para gerenciar suas páginas e blocos
e ter a possibilidade de fazer e desfazer alterações facilmente, caso seja
necessário. Pensando nisso, a _deco.cx_ permite que você tenha acesso ao
histórico de todas as versões das páginas e blocos. Desse modo, ao editar uma
página ou bloco do seu site, você pode clicar na aba de `Revisions` e saber
quando e por que membro do time uma alteração foi feita.

## Passo a passo

1. Uma vez que você já está logado no admin da Deco, você pode acessar o _site_
   em que você quer trabalhar.

2. Acesse a página ou bloco que você quer trabalhar. Por exemplo (lembre-se de
   substituir `$sitename` pelo nome do seu site):
   - Se você quiser ir para a `Listagem de Páginas`, acesse
     `https://admin.deco.cx/sites/$sitename/pages`
   - Se você ir para a `Listagem de Sections`, acesse
     `https://admin.deco.cx/sites/$sitename/sections`
   - Existem outros blocos que podem ser configurados e podem ser acessados pela
     listagem de blocos em `https://admin.deco.cx/sites/$sitename/library`

3. Na barra lateral direita da tela você pode ver as propriedades da página e
   uma barra de navegação com abas como `Form`, `JSON` e `Revisions` (`↻`).

   ![Revisões](https://github.com/deco-cx/apps/assets/882438/86b9b319-e314-4928-ac84-db415358ed28)

4. Ao clicar na aba de `Revisions` (`↻`), você consegue ter acesso a uma lista
   de versões para essa página (ou bloco) e quem foi o responsável por
   realizá-las. Você também pode carregas os dados de uma versão para usar como
   base da edição atual.

   > Para restaurar uma versão antiga, basta selecionar a versão a ser resturada
   > e clicar em `Publicar`.

5. Quando você faz alterações em qualquer página ou bloco, você precisa clicar
   em `Publicar`, caso contrário as alterações feitas serão perdidas.

6. Depois disso, uma nova revisão será publicada com as alterações que você
   acabou de salvar.

Ao publicar uma versão, ela está ativa e já é utilizada em produção! Caso
precise criar uma versão apenas para testar uma página ou componente, ou que
precise de um trabalho gradual e constante, é possível salvar um rascunho. Um
rascunho é uma variante mas que nunca será usada para atender qualquer
requisição do usuário.

![Criar rascunho](https://github.com/deco-cx/apps/assets/882438/c8667427-e2cb-4296-a976-8b9de3ab4ef4)

Caso esteja satisfeito com o trabalho, o rascunho pode substituir ou assumir o
papel da variante original (incluindo a variante padrão).

![Promover rascunho](https://github.com/deco-cx/apps/assets/882438/5da5cd0a-7212-424a-abd1-c91e54938dca)

Então, lembre-se:

- a última versão sempre está no ar e representa o estado atual daquele elemento
  ou página em produção
- um rascunho é somente uma variante que nunca é usada para atender requisições
  no site (mas que pode ser promovida para fazer isto, caso o usuário assim
  deseje)

# Lançamentos

`Lançamentos` contém o histórico de todas as versões publicadas do seu site e
permite que você restaure rapidamente para versões anteriores, se necessário.
Para acessar a lista de versões publicadas, clique aba `Lançamentos` na barra
superior da página inicial do seu site.

## Passo a passo

1. Quando você acessa a aba `Lançamentos` na barra superior, você pode ver uma
   lista de lançamentos na tela, mas apenas um deles está publicado.
2. Uma vez que você publica uma revisão de qualquer página ou bloco, um novo
   lançamento será gerado. Desse modo, ao acessar a aba `Lançamentos` após
   alguma modificação publicada, você poderá ver a nova versão publicada do
   lançamento listada junto com as demais.

   ![Lançamentos](https://github.com/deco-cx/apps/assets/882438/719d710a-61a0-4aaf-b253-556b4195f3e0)

3. Caso prefira republicar uma versão do lançamento publicado anteriormente,
   diferente do lançamento atual, você pode clicar em `…` e depois clicar em
   `Publicar` para restaurar a versão escolhida.
