---

description: Documentation on async rendering in Deco.cx.

---

## Introdução

A renderização assíncrona é uma técnica essencial para melhorar a 
performance e a experiência do usuário em aplicações web modernas. 
Este recurso na deco.cx utiliza o paradigma de carregamento
progressivo para carregar seções de uma página de forma assíncrona:
renderizando o conteúdo das requisições rápidas e recorrendo a esqueletos 
e estados de carregamento para o conteúdo de requisições lentas, 
oferecendo aos usuários uma experiência visual imediata.

## Como funciona

A renderização assíncrona na deco.cx é baseada em loaders, que são
componentes responsáveis por carregar os dados necessários para alguma seção. 
Os loaders estão vinculados a um orçamento de tempo. Uma vez 
atingido esse limite, os loaders que concluíram seu trabalho terão 
seu conteúdo renderizado no HTML final como de costume. Os loaders 
que consomem APIs lentas levantarão uma exceção e um estado de 
carregamento será renderizado nas seções que consomem este carregador. 
Este estado de carregamento usará nosso recurso 
[Partials](/docs/en/developing-capabilities/interactive-sections/partial) para hidratar 
e substituir a seção ausente preguiçosamente.

### Stale Edge Cache

O async render na deco.cx também conta com o recurso de "Stale Edge Cache",
uma abordagem que permite caching de seções lazy-loaded, reduzindo significativamente 
os tempos de resposta e melhorando o tempo de carregamento. 
Com o Stale Edge Cache, a primeira resposta do servidor da seção é armazenada em cache no CDN. 
As requisições subsequentes são respondidas com essa resposta em cache, reduzindo 
drasticamente o tempo total de resposta para apenas a latência entre o navegador e o CDN, 
mais o tempo de download do conteúdo.

![Stale Edge Cache](https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/3d9ee3b7-cce2-47f3-a320-2a72b2e63e2a)

Essa funcionalidade está ativada por padrão para todas as seções, mas pode ser desativada se necessário.

### Como ativar a renderização assíncrona

Esse recurso é ativado por padrão nas sections dos sites na deco. Para desativar, basta desabilitar
a opção `Otimization` nas propriedades da section no Admin.

![Desativar renderização assíncrona](/docs/performance/disable-async-render.png)

### Benefícios

- **Melhoria de Performance**: Carrega apenas os componentes necessários no momento, reduzindo o tempo de carregamento inicial da página.
- **Redução de Latência**: Com o cache das respostas, os tempos de resposta são significativamente reduzidos.
- **Melhor UX**: Evita o bloqueio da interface e minimiza mudanças de layout durante o carregamento.

### Minimização de Content Layout Shifts (CLS)

Para garantir uma experiência de usuário suave, recomenda-se a implementação do componente `LoadingFallback` em todas as seções do site. Esse componente fornece um estado de carregamento personalizado durante o processo de renderização assíncrona, minimizando possíveis mudanças de layout.

Você pode encontrar mais informações sobre o componente [`LoadingFallback` em nossa documentação](/docs/en/developing-capabilities/sections/loading-fallback).

## Conclusão

A renderização assíncrona é uma técnica poderosa para melhorar a performance e a experiência do usuário em aplicações web. Com a implementação e evolução da renderização assíncrona na plataforma deco.cx, ficou ainda mais fácil e eficiente adotar essa técnica em seus projetos.

Para mais informações, consulte os blogposts [Renderização Assíncrona](https://deco.cx/en/blog/async-rendering) e [Mais sobre Renderização Assíncrona](https://deco.cx/en/blog/async-render-default).
