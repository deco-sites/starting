---
description: Learn about Matchers and their role in empowering Variants in deco
since: 1.18.0
---

# Matchers: Potencializando as Variants

Os **Matchers** são blocos essenciais no deco que desempenham um papel fundamental ao potencializar as [Variants](/docs/pt/getting-started/variants). Eles permitem que você avalie condições específicas e segmente seu público com base em vários critérios. Ao aproveitar os Matchers, você pode criar experiências personalizadas e dinâmicas para seus usuários. Ao criar um novo **Matcher Block**, você pode chamá-lo de [Segmento](/docs/pt/concepts/segment).

## Compreendendo os Matchers

No deco, os **Matchers** são criados usando _funções_ dentro do código do seu site. Eles são ferramentas poderosas que permitem que você defina condições e avalie se um usuário pertence a um determinado segmento. Os Matchers servem como base para segmentar grupos específicos de usuários e personalizar o conteúdo com base em suas características ou comportamentos.

Os **Matchers padrão** estão prontamente disponíveis no deco e abrangem uma variedade de condições comuns, como características do usuário, data e horário, tipo de dispositivo, localização geográfica e seleção aleatória (testes A/B). Esses Matchers predefinidos oferecem _flexibilidade_ e permitem que você personalize as variações de conteúdo com base nessas condições.

No entanto, o poder dos Matchers vai além das opções padrão. O deco oferece a capacidade de criar **Matchers personalizados** para atender às necessidades específicas do seu negócio. Com Matchers personalizados, você pode estender a funcionalidade do deco para integrar fontes de dados externas, como buscar dados de um sistema Salesforce ERP, e usar esses dados para determinar o segmento ao qual um usuário pertence.

## Personalizando Matchers para Atender às Suas Necessidades

A criação de um Matcher personalizado envolve **escrever código dentro do código do seu site**. Ao aproveitar a flexibilidade dos Matchers personalizados, você pode acessar APIs externas, bancos de dados ou qualquer outra fonte de dados para obter informações sobre seus usuários e tomar decisões informadas sobre sua segmentação.

Por exemplo, suponha que você queira usar dados de um sistema Salesforce ERP para determinar a qual segmento um usuário pertence. Você pode escrever um [loader](/docs/pt/concepts/loader) que integre com a API do Salesforce, recupere dados relevantes do usuário e avalie as condições com base nesses dados, conectando esse loader ao seu Matcher personalizado. Isso permite que você segmente dinamicamente os usuários com base em seus dados do Salesforce, abrindo novas possibilidades de personalização e entrega de conteúdo direcionado.

Com a capacidade de criar Matchers personalizados, você tem a flexibilidade de adaptar a deco às necessidades específicas do seu site. Você pode aproveitar fontes de dados externas, realizar cálculos complexos e implementar lógica intricada para determinar a segmentação do usuário e fornecer experiências personalizadas.

## Desenvolvendo um Novo Matcher

Em seu repositório, os Matchers estão localizados na pasta `matchers`, assim como as seções e loaders. Vamos criar um novo matcher chamado `MeuMatcher.ts` para ilustrar o processo.

A assinatura do nosso matcher seguirá a seguinte estrutura:

```ts
import { MatchContext } from "$live/blocks/matcher.ts";

export interface Props {
}

/**
 * @title Meu Matcher
 */
export default function MeuMatcher(
  props: Props,
  ctx: MatchContext,
) {
  return true;
}
```

No exemplo acima, a função `MeuMatcher` aceita `props` como entrada, permitindo que você passe quaisquer dados necessários para o matcher. Além disso, ela recebe um objeto `ctx` do tipo `MatchContext`, que contém as informações da solicitação. Você tem a flexibilidade de realizar as operações desejadas dentro da função do matcher e retornar um valor booleano com base na avaliação.

Vamos dar uma olhada no exemplo `MatchDate` da biblioteca do deco:

```ts
/**
 * @title Por início
 */
export interface Props {
  /**
   * @format date-time
   */
  start?: string;
  /**
   * @format date-time
   */
  end?: string;
}

/**
 * @title Matcher de Data
 */
const MatchDate = (props: Props) => {
  const now = new Date();
  const start = props.start ? now > new Date(props.start) : true;
  const end = props.end ? now < new Date(props.end) : true;
  return start && end;
};

export default MatchDate;
```

Neste exemplo, a função `MatchDate` atua como um Matcher. Ela aceita `props` como entrada, que inclui as propriedades `start` e `end`. A função avalia se a data atual está dentro do intervalo de datas especificado. Se nenhum valor de `start` ou `end` for fornecido, ele será considerado `true`. A função `MatchDate` retorna um valor booleano com base na avaliação.

Os

 Matchers também podem ter um comportamento "sticky", o que é particularmente útil para cenários de testes A/B. Para tornar um Matcher "sticky" na sessão do usuário, você pode exportar uma constante chamada `sticky` com o valor `"session"`, conforme mostrado abaixo:

```ts
export const sticky = "session";
```

Aqui está um exemplo de implementação do `MatchRandom` usando a funcionalidade de sessão "sticky":

```ts
/**
 * @title Teste A/B {{{percentage traffic}}}
 */
export interface Props {
  traffic: number;
}

// Uma vez selecionado, a sessão reutilizará o mesmo valor
export const sticky = "session";

/**
 * @title Matcher Aleatório
 */
const MatchRandom = ({ traffic }: Props) => {
  return Math.random() < traffic;
};

export default MatchRandom;
```

No exemplo `MatchRandom`, a função matcher `MatchRandom` aceita `traffic` como prop, representando a porcentagem de tráfego que deve corresponder à condição. Ao gerar um número aleatório entre 0 e 1, a função determina se o valor gerado é menor que a porcentagem `traffic` especificada. O Matcher retorna `true` ou `false` com base nessa avaliação.

Os Matchers oferecem grande flexibilidade para personalizar e estender a funcionalidade do deco para atender às suas necessidades específicas. Com a capacidade de criar Matchers personalizados, você pode integrar fontes de dados externas, realizar cálculos complexos e implementar lógicas intrincadas para determinar a segmentação do usuário e fornecer experiências personalizadas.

## Aproveitando o Poder dos Matchers nas Variants

Os **Matchers** são a base das Variants no deco. Ao _combinar Matchers com diferentes condições_, você pode criar variações de conteúdo direcionadas para segmentos de usuários específicos. As **Variants** permitem que você modifique e personalize o conteúdo dinamicamente com base na avaliação dos **Matchers**.

Ao configurar as **Variants**, você pode selecionar o Matcher apropriado para cada segmento e definir as condições que determinam se um usuário pertence a esse segmento. Ao utilizar Matchers nas Variants, você pode ajustar a experiência do usuário, otimizar a entrega de conteúdo e fornecer interações personalizadas.
