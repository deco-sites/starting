---
description: Go-Live com Teste A/B
since: 1.0.0
---

Trabalhar com dois ambientes ao mesmo tempo é algo sensível em termos de
consistência de dados. Recomendamos que seja seguido um processo detalhado e
cuidadoso, prestando atenção a alguns pontos, como:

- Replicar o GTM de forma idêntica em ambos os ambientes
- Atualizar ambos os ambientes ao longo do teste
- Garantir a igualdade de features

Na deco.cx, existem alguns métodos de teste antes de realizar a migração
completa de um site.

## Método de subdomínio

O método de subdomínio, consiste em associar o site construído na deco.cx a um
novo subdomínio.

Exemplo: Meu site atual `www.deco.cx`, vamos associar o novo site ao domínio
`store.deco.cx`.

### Como fazer:

1 - Registrar um sub-domínio na [deco.cx](https://deco.cx)

- [Doc](https://deco.cx/docs/en/getting-started/custom-domains/)

2 - Criar um script para divisão de tráfego

- Crie um loader na deco.cx, como
  [esse](https://gist.github.com/guitavano/aca72370b74081289d5d2b86143828e6)
- Preencha as informações desse loader na sua app `site`
- Insira na tag `<head>` do seu site atual, esse loader em uma tag `<script>`:

```html
<script src="https://store.deco.cx/live/invoke/site/loaders/abTestScript.ts"></script>
```

Esse script, irá sortear os usuáriso para mantê-los no site ou redirecioná-los
para o subdomínio.

### Como medir o resultado?

- Configurar o G.A e o GTM em ambos os sites

#### Vantagens

- O cliente só paga a infraestrutura proporcional ao uso
- Setup simples

#### Desvantagens

- O cliente final vê uma URL diferente
- A divisão de tráfego é feita com Javascript no Front

## Método de Proxy da deco.cx

O método de proxy consiste em manter todo o tráfego no mesmo domínio, mas
realizar um proxy transparente para parte dos usuários.

<img src="https://deco-sites-assets.s3.sa-east-1.amazonaws.com/starting/650953a6-0ae4-448d-b911-943565cf9094/Screenshot-2024-09-04-at-09.58.03.png" width="500">

Repare que dessa forma, você precisa colocar o seu antigo site em outro domínio,
para que a deco.cx utilize-o para o Proxy.

### Como fazer:

Facilitamos a ativação desse proxy com esse fluxo:

1 - No painel deco.cx, acesse `Apps`

2 - Abra o app `site`

3 - Você deve ver essa configuração:

<img src="https://deco-sites-assets.s3.sa-east-1.amazonaws.com/starting/bdacf591-d141-44b5-b85c-3c4068c67c8a/Screenshot-2024-09-04-at-09.59.05.png" width="500">

O segmento da imagem, é o `Random`, com split de 50%, mas você pode utilizar
outros segmentos.

### Como medir o resultado?

- Configurar o G.A e o GTM em ambos os sites

- Acompanhar os resultados na deco.cx

Para acompanhar os resultados na deco.cx, o Matcher a ser utilizado precisa ser
criado através da aba de Experiments, confira como em
[Teste A/B](https://deco.cx/docs/pt/developing-capabilities/apps/ab-test).

Além disso, repare que nas configurações, existe a opção `Scripts to include`;
selecione e inclua o script `DecoAnalytics`.

#### Vantagens

- Mantem a experiência toda no mesmo domínio
- Setup de divisão de tráfego pronto
- Setup de Analytics pront

#### Desvantagens

- Paga o custo de todo tráfego, independente do escalonamento

## Método de Proxy externo

Este método, é o inverso do proxy na deco.cx: a responsabilidade de dividir o
tráfego e fazer o proxy é do antigo website.

> Nota: Para lojas VTEX, deco.cx está construindo um APP no Vtex IO para
> realizar esse proxy

Caso esteja em dúvida sobre como desenvolver esse proxy na sua tecnologia,
estamos no [Discord](https://deco.cx/discord) para ajudar.

#### Vantagens

- O cliente só paga a infraestrutura proporcional ao uso

#### Desvantagens

- Setup não vem pronto, a depender da tecnologia

## Informações extras

### Configuração GTM

Para auxiliar a configuração dos eventos no GTM, recomendamos a consulta do
cookie `deco_matcher...`, que indica em qual versão o usuário está.

### Orderform VTEX

Como fonte extra de dados, recomendamos a inserção no OrderForm de uma marcação
no marketingData, indicando em qual versão o usuário está, pois essa informação
vai para o painel de pedidos da VTEX.

- [Script exemplo](https://gist.github.com/guitavano/6de5f1068c85800b0702937b97c51ef2)
