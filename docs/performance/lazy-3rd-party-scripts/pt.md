---
description: Aprenda como usar scripts de terceiros em seu site sem perder desempenho.
---

## Resumo

> O uso de scripts de terceiros pode ter um grande impacto no desempenho de um
> site. Tais scripts costumam operar de forma bloqueante e podem atrapalhar o
> tempo de carregamento das páginas.
>
> Para reduzir o tenpo gasto com tais scripts, recomenda-se:
>
> 1. Evitar ao máximo usar scripts de terceiros
> 2. Postergar o carregamento dos scripts para após a interação do sistema
> 3. Usar async ou defer nos scripts
> 4. Pré-carregar conexão com a origem do script

## Postergando o carregamento de scripts.

Caso o script em questão não seja prioritário, isto é, pode aguardar uma
interação do usuário ou não representa uma funcionalidade vital ao site, uma
recomendação é postergar seu carregamento para o momento em que o usuário
interage com o site de fato.

Cada script pode exigir uma estratégia diferente para postergar sua execução.
Abaixo, existe um exemplo de uma estratégia comum
([fonte](https://metabox.io/delay-javascript-execution-boost-page-speed/)) para
postergar o script para que seja executado apenas após a interação do usuário
seguida de um atraso:

```tsx
<script>
{
    const load = () => {
        // YOUR SCRIPT CONTENT
    }
    const timer = setTimeout(load, 5000);
    const trigger = () => {
        load();
        clearTimeout(timer);
    }
    const events = ["mouseover","keydown","touchmove","touchstart"];
    events.forEach(e => window.addEventListener(e, trigger, {passive: true, once: true}));
}
</script>
```

Outra alternativa é fazer uso da intersection API, de forma que o código seja
executado apenas quando um determinado elemento esteja em tela (útil para aquilo
que deve ser executado só após o usuário der scroll em uma tela).

```jsx
const elem = document.getElementById(id);
const observer = new IntersectionObserver((items) => {
  // YOUR SCRIPT CONTENT
  observer.unobserve(elem);
});

observer.observe(elem);
```

## Async e Defer nos script

A presença de uma tag `<script src="script.js">` ocasiona o atraso da execução
do carregamento da DOM. Isto porque o browser irá respeitar a ordem dos scripts
para baixá-los e executá-los.

Caso o script em si não faça manipulação na DOM, ele é um forte candidato para
ser atrasado via async. Um script async será baixado de forma assíncrona para só
então ser executado na primeira oportunidade que der antes do loading da DOM:

```html
<script async src="script.js">
```

Já para executar o script apenas depois que o parsing do html esteja de fato
completo, é possível fazer uso do atributo defer:

```html
<script defer src="script.js">
```

## Pré-carregar conexão com a origem do script

Se possível, é uma recomendação servir o script localmente (pasta `static`).
Caso o script esteja em outro domínio, a recomendação é fazer uso do prefetch
para acelerar a resolução do DNS do servidor do script:

```jsx
<link rel="dns-prefetch" href="http://example.com">
```

Caso o script seja crítico, é possível sinalizar, inclusive para o browser já
iniciar uma conexão com a origem, de forma tornar essa conexão ainda mais
eficiente:

```jsx
<link rel="preconnect" href="http://example.com">
```

> **importante**: use o preconnect apenas quando necessário e para os script de
> maior impacto.
