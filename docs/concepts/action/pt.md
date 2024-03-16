---
description: Uma Action na deco.cx é uma função que modifica dados.
since: 1.0.0
---

Uma **Action** no deco.cx é uma função em typescript que **modifica** dados
dentro da aplicação. As **Action** são acionadas por _interações_ específicas do
**usuário** ou **eventos** e são responsáveis por atualizar o estado da
aplicação de acordo. Ao contrário dos **Loaders**, que buscam dados de fontes
externas, as **Action** concentram-se em modificar os dados já presentes na
aplicação. Elas podem realizar operações como **atualização**, **criação** ou
**exclusão** de dados com base na lógica especificada. As **Action**
proporcionam _controle_ preciso e flexibilidade sobre a mutação de dados e
integram-se perfeitamente a outros blocos, como os **Loaders**, para permitir um
fluxo contínuo de dados na aplicação.

As **Action**, assim como os **Loaders**, são implementadas como funções em
typescript e estão localizadas na pasta `/actions/` do seu projeto. Elas podem
ser invocadas em resposta a interações do usuário, envios de formulários ou
qualquer outro gatilho definido. Ao encapsular a lógica de mutação de dados nas
**Action**, os desenvolvedores podem gerenciar e rastrear as alterações feitas
no estado da aplicação, proporcionando aos usuários experiências dinâmicas e
interativas.

## Código de exemplo

Esta é a implementação da Action `newsletter/subscribe.ts`:

```tsx
import { AppContext } from "../../mod.ts";

export interface Props {
  email: string;
  name?: string;
  page?: string;
  part?: string;
  campaign?: string;
}

const action = async (
  props: Props,
  _req: Request,
  ctx: AppContext,
): Promise<void> => {
  const { vcsDeprecated } = ctx;
  const form = new FormData();
  const {
    email,
    name = "",
    part = "newsletter",
    page = "_",
    campaign = "newsletter:opt-in",
  } = props;

  form.append("newsletterClientName", name);
  form.append("newsletterClientEmail", email);
  form.append("newsInternalPage", page);
  form.append("newsInternalPart", part);
  form.append("newsInternalCampaign", campaign);

  await vcsDeprecated["POST /no-cache/Newsletter.aspx"]({}, {
    body: form,
  });
};

export default action;
```

[Fonte](https://github.com/deco-cx/apps/blob/3e337b6b2996d7ecd72db34174896638c92f8811/vtex/actions/newsletter/subscribe.ts#L1C1-L37C23)

## Leitura recomendada

- [Buscando dados de API](/docs/pt/developing/fetching-data)
- [Invocando funções através da API](/docs/pt/developing/fetching-data-client)
