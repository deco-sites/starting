---
description: An Action in deco.cx is a function that mutates data.
since: 1.0.0
---

An **Action** in deco.cx is a typescript function that mutates data within the
application. Actions are triggered by specific user interactions or events and
are responsible for updating the application's state accordingly. Unlike
Loaders, which fetch data from external sources, Actions focus on modifying the
data already present in the application. They can perform operations such as
**updating**, **creating**, or **deleting** data based on the specified logic.
Actions provide precise control and flexibility over data mutation and
seamlessly integrate with other blocks like Loaders to enable a seamless flow of
data within the application.

Actions, like **Loaders**, are implemented as typescript functions and reside
locally in the `/actions/` folder of your project. They can be invoked in
response to user interactions, form submissions, or any other defined triggers.
By encapsulating data mutation logic within Actions, developers can manage and
track changes made to the application's state, providing users with dynamic and
interactive experiences.

> Note: While Loaders focus on fetching data from external sources, Actions
> concentrate on mutating data within the application. By leveraging both
> Loaders and Actions in deco.cx, developers can create powerful applications
> that fetch and manipulate data seamlessly.

One of the great benefits of **Actions** is their ability to work in conjunction
with **Loaders** and other blocks. While **Loaders** focus on fetching data,
**Actions** focus on mutating data. This means that multiple **Actions** can be
invoked from the same interface, allowing users to modify data from different
sources or perform a series of related operations. By leveraging both
**Loaders** and **Actions**, developers can create flexible and powerful
applications that seamlessly integrate data fetching and mutation.

In addition to mutating data, **Actions** in _deco.cx_ **can also export a
typescript props type,** which allows them to be configured in the
[Admin](https://deco.cx/admin) just like [Sections](/docs/en/concepts/section).

## Example Code

This is the implementation of the `newsletter/subscribe.ts` Action:

```tsx
import { AppContext } from "../../mod.ts";

export interface Props {
  email: string;
  name?: string;
  page?: string;
  part?: string;
  campaing?: string;
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
    campaing = "newsletter:opt-in",
  } = props;

  form.append("newsletterClientName", name);
  form.append("newsletterClientEmail", email);
  form.append("newsInternalPage", page);
  form.append("newsInternalPart", part);
  form.append("newsInternalCampaign", campaing);

  await vcsDeprecated["POST /no-cache/Newsletter.aspx"]({}, {
    body: form,
  });
};

export default action;
```

[Source](https://github.com/deco-cx/apps/blob/3e337b6b2996d7ecd72db34174896638c92f8811/vtex/actions/newsletter/subscribe.ts#L1C1-L37C23)

## Recommended Reading

- [Fetching data from APIs](/docs/en/developing/fetching-data)
- [Client-side function invocation](/docs/en/developing/fetching-data-client)
