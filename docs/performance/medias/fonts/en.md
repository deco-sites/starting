---
description: Learn how to use fonts on your website without sacrificing performance.
---

### Summary

> Loading fonts can impact the time to first contentful paint, layout shift, and
> overall page speed index.
>
> To optimize font usage, it is recommended to:
>
> 1. Use the default `Theme` section in the deco template.
> 2. Prefer using one of the
>    [default font families offered by Google](https://fonts.google.com/).
> 3. If you need a custom font, use a small-sized font and prefer the woff/woff2
>    formats.

# Fonts in the deco theme

<img width="640" alt="Theme configuration with fonts" src="/docs/performance/theme-font.png">

The `Themes` component in deco is already prepared to use optimized fonts
[offered by Google](https://fonts.google.com/) through the `GoogleFont` font
loader.

# Custom Fonts

To use custom fonts, it is recommended to use a font preferably in the
woff/woff2 format and with a small file size (less than 25kb).

This font can be served statically by placing the file in the `static`
directory.

Then, in the `Theme` section, simply specify the font name and the associated
style guide. For a font in the file `static/my_font.ttf`, use the following
style:

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

<img width="320" alt="Using custom fonts" src="/docs/performance/custom-font.png">

> **important**: The font is cached in our CDN and users' browsers. If it is
> necessary to replace the font and eliminate the user's cache, add a parameter
> like `?v=2024_01_01` to the font URL to invalidate the original cache.

The `font-display: swap` allows the browser to use a fallback font until the
actual font is loaded. This speeds up the rendering of text content but may
impact layout shifting.

> **tip**: An alternative is to use `font-display: optional`, which allows the
> browser to activate the fallback font only if the user's connection is slow.
