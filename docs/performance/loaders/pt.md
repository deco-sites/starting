---
descrição: Enviando apenas dados necessários ao cliente
since: 1.0.0
---

### Resumo

> Os loaders são mecanismos para carregamento de dados. Existem algumas dicas em
> como otimizar o seu uso. Seguem algumas dicas:
>
> 1. Quando o loader for reutilizado em diferentes sections ou páginas,
   > recomenda-se utilizar um loader salvo (reusável)
> 2. Não faça `fetchs` em inline loaders
> 3. Sections que carregam dados e que não estão sendo exibidas na tela inicial
   > (above the fold), podem ser Deferred

# Reutilizando loaders

As `sections` do sistema podem ter dados carregados via `loaders`. Esses loaders
podem ser definidos na própria section ou podem ser carregado de entidades
salvas.

Essas entidades salvas podem ser criadas a partir dos blocos de loaders.

![Criando um loader](https://github.com/deco-sites/starting/assets/882438/47c63784-4839-4d97-aff4-8c1e8e18332a)

Ao salvar um loader, o mesmo é garantido poder ser reutilizado em diferentes
sections. Além de permitir alterar as props e ter isto refletido em todos os
locais onde esse loader é utilizado, fazer uso desse loader salvo permite
otimizar o uso do sistema.

Durante uma página como a página de descrição de produtos (PDP), é preciso
carregar informações sobre o produto duas vezes: tanto para o carregamentos de
detalhes de SEO como para a exibição do produto em si. Ao utilizar o mesmo
loader, a deco otimiza para que o loader seja executado apenas uma vez durante o
ciclo de renderização da página.

![image](https://github.com/deco-sites/starting/assets/882438/a39e3806-89e4-4b22-a179-491c048b18f7)

# Não faça `fetchs` em inline loaders

Os inline loaders permitem enriquecer uma section de forma bastante direta.
Durante a execução do inline loader, é possível inclusive fazer a execução de
fetchs ou invocações de outro loaders.

Apesar de possível, essa estratégia não é recomendada. Criar uma prop para
receber este dado, e criar um loader em si para carregá-lo, e fazer essa ligação
pelo admin, é uma estratégia mais segura para garantir que a mesma seja
otimizada.

Isto porque os inline loaders não são otimizados por natureza. Já os loaders
carregados definidos pelo admin podem ser otimizados para serem executados
apenas uma vez ou no melhor momento para o sistema.

# Deferred Section

![image](https://github.com/deco-sites/starting/assets/882438/06b0fde3-874f-4b26-84b5-d4a41c94e5de)
