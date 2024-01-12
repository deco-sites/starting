---
description: O guia deco para performance
since: 1.0.0
---

# Três regras para o alto desempenho

### Entenda o framework e arquitetura do sistema

Usar uma ferramenta de forma eficiente implica em entender seus componentes e capacidades. Isso permite ter uma base de código saudável desde o começo.

> **exemplo**: a deco oferece componentes como `Image` que ajudam a acelerar a entrega de imagens de forma eficiente, mas nada impede que o usuário continue usando o elemento `img`.

### Aprenda a analisar o desempenho

Aprenda a analisar o desempenho das suas páginas. Navegar em uma página não deve ser algo lento, nem mesmo para você. **Se está lento para o desenvolvedor, estará para o usuário**. Entenda as ferramentas disponíveis e como elas funcionam.

###  Acompanhar o desempenho é uma tarefa contínua

Uma vez que o sistema para de performar, é comum deixar de se importar com este aspecto até que se torne bem mais difícil fazer correções. A detecção de problemas de desempenho é uma tarefa contínua, mas não deve ser um fim por si só.

> **Importante**: o mais importante (a regra de ouro) é a experiência do usuário. Por vezes, o sistema pode não entregar o melhor desempenho, desde que isso seja uma decisão consciente para entregar a melhor experiência ao usuário.

# Analisando o desempenho de uma página

Testar o desempenho passa por entender uma série de ferramentas e possíveis métricas que buscadm entender o que deve ser melhorado (e como). Existem ferramentas que ajudam neste processo. Entenda como e quando utilizá-las.

## Testando localmente

![Exemplo de uso de ferramentas do browser para depuração](https://github.com/deco-sites/starting/assets/882438/bf441a9a-5af7-4c83-aa4a-c409c2cfb84c)

**Sempre teste localmente a sua página, section, loader ou action. Por vezes, não precisa ser um teste estruturado**. Se já estiver lento para você, já estará para o usuário.

Execute as versões de teste deployadas. Em seguida, use as ferramentas disponíveis no próprio browser para depurar problemas de desmpenho. Com elas é possível acompanhar o desempenho da página em detalhes, e simular condições adversas (como uma rede ou cpu de menor qualidade). Mais informações no guia abaixo:

- [Teste local de performance](/docs/pt/performance/testing/local)

## Teste de pagespeed

![Exemplo de teste no pagespeed](https://github.com/deco-sites/starting/assets/882438/35d915a9-1fa0-4c87-b5b5-74cd60bec8f0)

O [pagespeed](https://pagespeed.web.dev/) é uma ferramenta de teste desenvolvida pela google para avaliar principais aspectos de desempenho de uma página. Explora métricas como quanto tempo até que seja exibido algum conteúdo, quanto tempo o sistema passa a ser interagível, etc.

As principais métricas são descritas abaixo:

Métrica | Significado | exemplo de bom valor
----|---------|--------------
FCP |  Tempo até a primeira exibição de conteúdo |	até 1,8s
LCP |  Tempo até a maior exibição de conteúdo |	até 2,5s
TBT | Tempo crítico bloqueante até que o usuário possa interagir |  200ms
Speed Index | Índice do desempenho da página em popular conteúdo  | até 3,4
CLS | Índice da quantidade de mudanças de layout cumulativa  |	até 0,1

> fonte (adaptado): https://web.dev/articles/fcp?hl=pt-br

A google agrega essas métricas em um índice entre 0 e 100, gerando a nota do pagespeed.

Como é um teste executável em um ambiente em produção, ele é sujeito a variações, no entanto, uma queda abrupta no valor do pagespeed implica em olhar para o desempenho da página o quanto antes.

Mais informações no guia:

- [Teste local de pagespeed](/docs/performance/testing/pagespeed)

## Teste de métricas deco

![Exemplos de métricas deco](https://github.com/deco-sites/starting/assets/882438/af592b39-0f4d-405f-a0c6-a212b1677058)

Por padrão a deco oferece um conjunto de métricas que são avaliadas em uma página. Estas métricas são especializadas especialmente para sistemas como a deco (SSR com hidratação e com muito carregamento de dados externos).

Métrica | Significado
----|---------
Config LCP | Configurações de carregamento do maior conteúdo da página
Page HTML | Tamanho da página em bytes
Page Islands | Número de ilhas na páginas
Islands Props | Tamanho em bytes das propriedades das ilhas 
Loaders latencies | Tempo de resposta dos loaders da página

Cada métrica é decomposta nas partes que a compõe, permitindo identificar melhor uma possível fonte de perda de performance. Não existe um valor ideal para cada métrica, mas é importante entender que uma HTML grande impacta no tempo de resposta para o usuário e em métricas como pagespeed.

Um usuário que baixa a `100 kb/s` levará `5s` para baixar uma página de `500 kb`. Isto é especialmente impactante para usuários de dispositivos móveis operando em redes ou situações de baixa capacidade de banda.

Para entender cada métrica e seu significado, acompanhe o guia:

- [Teste de métricas deco](/docs/performance/testing/decometrics)

## Teste do Core Web Vitals

![Exemplo de teste do CWV](https://github.com/deco-sites/starting/assets/882438/f911058f-34b4-4c49-a24b-9351d630a752)

Até agora, exploramos apenas testes sintéticos, ou seja, testes que são realizados de maneira artificial e que são apenas uma aproximação do mundo real. São testes relevantes pois uma queda de desempenho em um teste sintético, costuma ser refletido como uam queda de desempenho no mundo real.

O Core Web Vitals representa uma coleção de métricas extraídas a partir da experiência real de usuários. Ela inclui métricas do pagespeed bem como outras métricas específicas da interação real de usuários.

> Acesse através do site [CrUX da google](https://developer.chrome.com/docs/crux/dashboard) ou diretamente da App CrUX no seu site deco.

Por ser uma métrica coletada, ela só tem significado agregado. A google categoriza os valores tipicamente mês-a-mês, por isso é mais uma métrica de acompanhamento para diagnosticar eventuais problemas de comportamento que passaram desapercebidos ao longo do tempo, ou que refletem a mudança de público da página.

Para entender cada métrica e seu significado, acompanhe o guia:

- [Teste de métricas deco](/docs/performance/testing/cwv)

## Depurando problemas de performance

Se, no entanto, nenhuma das ferramentas auxiliar no processo de identificação de um problema de desempenho, execute alguns testes manuais que podem identificar a causa do problema:

- Se você não souber que mudança causou uma perda de performance:
  - Teste versões antigas do sistema para verificar qual versão impactou no desempenho

- Caso não esteja claro, dentro de uma versão, o que a torna lenta, elimine parte do sistema até identificar a causa.
  - Para uma página lenta, elimine algumas `sections`, até que a página volte a ter um bom desempenho. A `section` mais recentemente apagada (ou seus `loaders` ou `ilhas`) pode ser a causa do problema.
  - Elimine dependências que tenha adicionado. Verifique se o sistema melhora com isso.

- Atualize as suas dependências.
  - Melhorias de desempenho são constantemente adicionadas ao sistema e podem corrigir problemas que levam a lentidão.

# Melhorias de desempenhos

Após identificar um problema, seja por uma experiência negativa ou por alguns dos testes indicarem alguma métrica com valor inadequado, é preciso atuar.

Cada teste acima indica, para cada métrica, possíveis culpados e aonde olhar. Caso tenha identificado o culpado, siga um dos guias abaixo para implementar melhorias relacionadas.

Observe que as situações em que você deve atuar são só exemplos de alguns casos.

## Imagens (jpg, png, gifs, ...)

**Quando atuar**...
 - Valor alto de LCP (maior imagem demora a ser baixada / vista)
 - Páginas "sambando" na tela
 - Grande tamanho das imagens baixadas

**Guia**: [Otimizando imagens](/docs/performance/medias/images)

> **Dica**: use os componentes deco de imagens, como `<Image>` e `<Picture>`, e os configure corretamente, incluindo largura e altura.

## Imagens (SVG)

**Quando atuar**...
- Tamanho das páginas é grande e as páginas contem SVGs embutidos e repetidos

**Guia**: [Otimizando SVGs](/docs/performance/medias/svg-sprites)

## Vídeos

**Quando atuar**...
- Valor alto de LCP (e o maior elemento é um vídeo)

**Guia**: [Otimizando vídeos](/docs/performance/medias/videos)

> **Dica**: vídeos são extremamente custosos para conexões lentas de rede. Dê preferência por animações via CSS ou por composição de imagens.

## Fontes

**Quando atuar**...
- O texto parece "mudar de tamanho" repentinamente
- O arquivo de fonte demora a ser carregado
- Valor alto de FCP (apontando a fonte como problema)

**Guia**: [Otimizando fontes](/docs/performance/medias/fonts)

> **Dica**: Use fontes padrão oferecidas pela google. Se preciso use fontes de pouco tamanho (dando preferência a woff/woff2).

## Scripts de terceiros

**Quando atuar**...
- O sistema demora a carregar (TBT alto)
- A tela "samba" por causa de um componente inserido por um script terceiro (CLS alto)
- Um script de terceiro é tem um tamanho grande

**Guia**: [Otimizando scripts](/docs/performance/lazy-3rd-party-scripts)

> **Dica**: Tente só usar o que for extritamente necessário ou substituir scripts de terceiros por versões mais leves. Se não for possível, postergue a execução do script para depois que a página já estiver carregado e o usuário estiver interagindo com ela.

## Eficiência no carregamento de dados (loaders)

**Quando atuar**...
- O sistema indica alta latência de um loader
- A página demora a carregar inicialmente
- O tamanho das props em ilhas é grande

**Guia**: [Otimizando loaders](/docs/performance/loaders)

> **Dicas**:
> - Use `inline loaders` para transformar dados a serem enviados a uma section e/ou ilha
> - Considere postergar a exibição (`Deferred`) de sections com loaders custosos
> - Altere as props do loader para diminuir a quantidade de dados carregados nos loaders
> - Salve os loaders que são reutilizados em diferentes páginas/sections

## Ilhas

**Quando atuar**...
- O sistema indica um grande número de ilhas
- A página demora a carregar inicialmente
- O tamanho das props em ilhas é grande

**Guia**: [Otimizando ilhas](/docs/performance/islands)

> **Dicas**: Prefira CSS puro para evitar ilhas. Utilize `children` para passar um JSX para dentro de uma ilha. Reduza o máximo possível o escopo da ilha (ex.: prefira um botão como ilha, do que todo um `form`).

# Fontes relevantes

- [web.dev - Core Web Vitals](https://web.dev/explore/learn-core-web-vitals?hl=pt-br)

- [MDN - Web Performance](https://developer.mozilla.org/en-US/docs/Learn/Performance)