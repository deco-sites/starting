---
description: Aprenda como usar imagens em seu site sem perder desempenho.
---

Fonts

- Usar componente do designsystem

- usar static -> woff2
-- arquivos pequenos (max 25kb)
-- swap

<style>
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap; // usar swap ou optional para impactar o FCP/LCP o mininmo
  src: url(/live/invoke/website/loaders/asset.ts?src=https://example.com/xpto.ttf?v=20240110) format('truetype'); // Importante url self hosted
}
</style>

