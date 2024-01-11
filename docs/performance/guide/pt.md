---
description: O guia deco para performance
since: 1.0.0
---

# Três regras para a melhoria de performance

### Entenda o framework / arquitetura que você opera

exemplos:

- arquitetura de ilhas diminui o tamanho do js
- o sistema server side render demora a entregar o primeiro byte, mas acelera a
  entrega da experiencia completa

### Aprenda a analisar o desempenho

- desenvolva de forma eficiente desde o começo entendendo a arquitetura /
  framework que está usando
- identifique gargalos e implemente melhorias baseando-se na identificação

### 80% da lentidão em 20% do código

- foque nas melhorias mais impactantes

# Analisando a performance de uma página com problemas

- Testando localmente (devtools)
  - como está o site para vc
  - simule outras redes / desempenho / dispositivos

- Análise sintética: Pagespeed
  - LCP
  - FCP
  - CLS
  - speed index

- Análise dos usuários: Core Web Vitals / Chrome UX Report (CrUX)
  - Como está a sensação dos usuários
  - LCP
  - FID
  - CLS
  - INP
  - TTFB
  - NP
  - FP
  - DOM Content Load (DCL)
  - OnLoad (OL)

- DecoMetrics
  - Page LCP Preload loading="eager"
  - Page HTML
  - Page Islands
  - Islands Props
  - Loaders latencies

# Melhorias de mídias

## Imagens

- FCP/LCP
- Lazy Loading
- Preload
- Decoding async
- Fetch Priority
- Svg

## Vídeos

## Fontes

- asset() fresh (ver theme)

# Scripts de terceiros

-- CRIAR COMPONENTE NO STOREFRONT PRA ISSO -- (DeferredScripts)

# Eficiência no carregamento de dados (loaders)

    - Utilizar loaders salvos quando duplicado
    - Cache dos loaders
    - Fetch a terceiros em inline loaders
    - Rendering Deferred (destacar o impacto em SEO)

# Ilhas

## Ilhas com muitas props

- Reduzir JSON enviado para as ilhas em props

## Muitas ilhas

- Estratégias para utilização de ilhas
  [link](https://github.com/deco-sites/aviator/blob/main/islands/GalleryContainer.tsx)
