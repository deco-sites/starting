---
description: Usando Tailwind CSS de maneira eficiente.
---

## TL;DR

Evite o uso de tokens personalizados como `h-[15px]` ou `p-[3px]`. Prefira os
tokens do Tailwind, como `h-8` e `p-2`. Além disso, evite especificar cores nos
tokens (por exemplo, `bg-[#fd429a]`). Em vez disso, utilize cores de tema para
uma melhor manutenção.

## Introdução

Este guia explora as melhores práticas para alcançar uma performance ideal no
front-end com o Tailwind CSS na Deco. Vamos mergulhar no processo de geração do
Tailwind CSS, examinar como os tokens inline afetam as métricas do Web Vitals e
estabelecer regras simples para manter uma pontuação de alta performance.

### Compreendendo o Processo de Geração do Tailwind CSS

O framework da Deco permite a integração perfeita dos tokens do TailwindCSS em
qualquer componente JSX, aplicando estilos sem configuração adicional. Embora
isso seja conveniente para iniciantes, entender o processo subjacente é crucial
para otimização de desempenho.

Sempre que são feitas alterações no código do seu site, o processo de "geração
do Tailwind" examina todos os arquivos `.tsx` em sua base de código. Em seguida,
extrai os tokens CSS, mesclando-os em um único arquivo `styles.css`. Este
arquivo é então enviado ao navegador, estilizando seus componentes. Esse
processo se repete sempre que ocorrem alterações no código.

No entanto, a consequência é um arquivo `styles.css` maior do que o necessário,
contendo estilos para todos os componentes, impactando as métricas de
desempenho. Considere um cenário com uma página inicial (`Home.tsx`) e uma
página de produto (`Product.tsx`):

```tsx
// Home.tsx
export default function Home() {
  return <div class="flex justify-center p-2">Foo</div>;
}

// Product.tsx
export default function Product() {
  return <div class="flex justify-center p-4">Bar</div>;
}
```

Ao acionar o processo de "geração do Tailwind", obtemos o seguinte `styles.css`:

```css
.flex {
  display: flex;
}

.justify-center {
  justify-content: center;
}

.p-2 {
  padding: 8px;
}

.p-4 {
  padding: 16px;
}
```

Mesmo que `p-4` não seja usado na página inicial, ele está incluído em
`styles.css`, aumentando a carga CSS e afetando as métricas do Web Vitals (FCP).

No exemplo anterior, tanto os tokens `flex` quanto `justify-center` são
reutilizados. Em projetos maiores, essa reutilização de classes tende a crescer.
A reusabilidade é fundamental para ter um projeto Tailwind performático. No
entanto, os tokens inline podem quebrar essa tendência. Exemplos de tokens
inline incluem `p-[3px]`, `h-[4rem]` e `bg-[#fdb43a]`. Essas classes têm pouca
probabilidade de serem reutilizadas, levando a um aumento no tamanho do
`styles.css` e prejudicando os Core Web Vitals.

Para evitar a sintaxe inline ao replicar estilos, siga uma regra simples: use
tokens próximos. Por exemplo:

- `p-[3px]` -> `p-2`
- `h-[4rem]` -> `p-8`
- `bg-[#fdb43a]` -> `bg-primary`

Isso aumenta significativamente a reusabilidade e melhora o desempenho geral do
site.

### Exemplo do Mundo Real: Redução de 71% no Tamanho do CSS

Ao aplicar essas técnicas a um de nossos projetos, conseguimos uma redução
notável de 71% no tamanho final do CSS. Isso não apenas melhorou as pontuações
do Web Vitals, mas também permitiu uma fácil customização de temas.

### Conclusão

O Tailwind CSS é uma ferramenta poderosa para estilizar componentes JSX. Ao
compreender o processo de construção e otimizar sua base de código, você pode
equilibrar flexibilidade e eficiência. Incentive o uso de tokens puros do
Tailwind e tokens de tema, promovendo uma aplicação mais fácil de manter e com
melhor desempenho.

Feliz codificação com o Tailwind CSS na Deco!
