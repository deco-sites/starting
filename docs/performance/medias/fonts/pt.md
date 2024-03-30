---
description: Aprenda como usar imagens em seu site sem perder desempenho.
---

### Resumo

> O carregamento de fontes pode impactar no tempo até a primeira renderização de
> conteúdo, na mudança de layout e no próprio índice de velocidade da página.
>
> Para otimizar o uso de fontes, recomenda-se:
>
> 1. Utilize a section de `Theme` padrão no template da deco.
> 2. De preferência ao uso de uma das
   > [famílias de fontes padrões oferecidas pela google](https://fonts.google.com/)
> 3. Caso precise de uma fonte própria, use uma fonte de tamanho pequeno, dando
   > preferência aos formatos woff/woff2.

# Fontes no tema da deco

![Configuração do tema com fontes](https://github.com/site/assets/882438/c697a548-0beb-49d5-af67-0a1bb0f9f043)

O componente de `Theme` da deco já está preparado para o uso de fontes
otimizadas [oferecidas pela google](https://fonts.google.com/) através do loader
de fontes `GoogleFont`.

# Fontes personalizadas

![Uso de temas próprios](https://github.com/site/assets/882438/2a267a57-34eb-479f-91dc-e8e3f10cfca8)

Para fazer o uso de fontes personalizadas, a recomendação é fazer o uso de uma
fonte preferencialmente no formato woff/woff2 e de pouco tamanho (menor do que
25kb).

Esta fonte pode ser servida estaticamente colocando o arquivo no diretório
`static`.

A partir disso, na section de `Theme`, basta colocar o nome da fonte da família,
e o styleguide associado. Para uma fonte no arquivo `static/minha_fonte.ttf`,
coloque o seguinte estilo:

```css
<style>
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/live/invoke/website/loaders/asset.ts?src=https://sualoja.deco.site/minha_fonte.ttf) format('truetype');
}
</style>
```

> **importante**: a fonte é cacheada na nossa CDN e browsers dos usuários. Se
> for preciso substituir a fonte e eliminar o cache do usuário, adicione um
> parâmetro como `?v=2024_01_01` na URL da fonte para invalidar o cache
> original.

O `font-display: swap` permite que o browser possa usar uma fonte de fallback
até que a fonte de verdade seja carregada. Isso permite acelerar a renderização
do conteúdo de texto, mas pode impactar na movimentação do layout.

> **dica**: Uma alternativa é fazer uso do `font-display: optional` que permite
> o browser ativar a fonte de fallback apenas se a conexão do usuário estiver
> lenta.
