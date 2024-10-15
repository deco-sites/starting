---
description: Criando Teste A/B Headless
---

## Para quem é esse conteúdo?

Esse conteúdo é para quem ainda não tem o site na deco.cx e deseja utilizar a
Feature de Teste A/B de forma headless, sem migrar de tecnologia.

Se você já tem o site na deco.cx, a criação de Teste A/B está explicada nessa
outra [documentação](/docs/pt/developing-capabilities/apps/ab-test).

## Como começar?

1 - Criando um projeto deco.cx

2 - Entendendo o Teste A/B

3 - Configuração de eventos

4 - Acompanhando resultados

5 - Go Live

## Criando um projeto deco.cx

Acesse o link de [criação de sites](https://admin.deco.cx/spaces/new).

Escolha o template **SDK**.

![deco.cx sdk Template](https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/ffd8f072-daf7-48cc-ab14-ad6b9297f903)

Após a criação, o projeto ainda não está em nenhum time, você pode associar a
algum time no botão `Save site to your team`.

## Entendendo o Teste A/B

Com o site criado e associado a um time, procure na barra de busca por `abTest`.

Selecione a opção mostrada na imagem:

![AbTest Search](https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/7658eb54-1f8f-49ca-8483-341e59200a9f)

Você deve ver um bloco como esse:

![AbTest Block](https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/d0ee14cb-5ee4-4b3f-a56a-b5f6b4c84eb9)

Defina então um nome para o seu teste e depois configure as variantes.

### Variantes

As variantes são versões de código que vão executar aleatoriamente para uma
parcela do seu público.

Aqui você tem a possibilidade de adicionar `Javascript` e/ou `CSS` para
customizar a experiência do seu usuário.

Exemplos:

JavaScript to run

```js
document.querySelector("#my-button").textContent = "Buy!";
```

CSS to run

```css
#my-button {
  color: red !important;
}
```

## Configuração de Eventos

A configuração de eventos é essencial para Testes A/B, agora você vai ver como
criar um evento específico para o seu teste.

Na mesma tela de configuração das Variantes, encontre o campo `Tracked Elements`
e clique para adicionar um.

Você deve ver algo como:

![Tracked Elements](https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/3933da2b-e55b-4f75-892b-345fd5e1d3d1)

Agora, basta encontrar o `seletor CSS` do elemento que deseja criar um evento e
escolher o nome do evento.

## Acompanhando resultados

Você pode acompanhar o resultado do seu teste, com as métricas que criou
diretamente pelo painel da deco.cx.

> Importante: Para acompanhar os resultados do Teste pode ser necessário um
> upgrade no plano do seu time, confira em
> [Pricing](https://deco.cx/en/pricing).

1 - Clique na aba `Experiments`.

2 - Clique em `Create New Experiment`

3 - Crie um experimento com o mesmo nome que colocou no seu Teste.

4 - Acompanhe os resultados.

Para entender mais sobre a tela de resultados, olhe essa
[documentação](/docs/pt/developing-capabilities/apps/ab-test#funil-e-resultado).

## Go-Live

Antes de colocar o código em produção, preenche um campo chamado
`plausibleDomain` com o mesmo domínio registrado na aba `Analytics` do seu
painel deco.cx

Agora, para que tudo isso seja aplicado no seu site:

- Clique em Publish
- Insira esse script no `<head>` do seu site:

```html
<script src="https://seusite.deco.site/live/invoke/abTest" defer="true"></script
>
```

## Próximos passos

Features que ainda não estão disponíveis, mas já estamos trabalhando para
lançar:

- Configuração de tráfego

No Teste a/b para sites deco.cx já é possível definir a quantidade de tráfego,
estamos trabalhando para implementar na SDK também.

- Testes em paralelo

No Teste a/b para sites deco.cx já é possível rodar mais de um teste ao mesmo
tempo, estamos trabalhando para implementar na SDK também.

- Testes A/B/C/...

Estamos trabalhando para implementar a possibilidade de testes com mais de duas
versões.
