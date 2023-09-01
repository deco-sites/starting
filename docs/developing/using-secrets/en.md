---
description: Using Secrets in Deco Sites
since: 1.24.4
---

# Using Secrets in Deco Sites

Secrets are a powerful feature in deco sites that allow you to securely store sensitive information, such as API keys or passwords. By utilizing secrets, you can easily manage and protect your site's confidential data.

## Prerequisites

Before you begin, ensure that you have the following:

- A deco site project set up.
- Understanding of props and loaders in deco.

## Step 1: Declaring a Secret Prop

To use secrets in your site, you need to declare a secret prop in your components. Here's an example of how to do it in a section using an inline loader:

```tsx
import { Secret } from "$live/loaders/secret.ts";

export interface Props {
  secret: Secret;
}

export const loader = async (props: Props) => {
  const secretValue = await props?.secret?.get();
  // Use secret here
};
```

In this example, the `secret` prop is declared in the `Props` interface. The `loader` function retrieves the secret value using the `get()` method, and then you can use the secret in your code.

## Step 2: Configuring Secrets

After declaring the secret prop, users can configure secrets for your site. However, note that testing secrets on localhost won't work. You should point to your production domain, which means you need at least one deployment declaring the secret dependency.

> Important note: Secrets cannot be revealed on the Admin UI. They will be hidden by default.

## Step 3: Handling Local Development

When developing locally, a secret has a "name" in the admin UI. This name can be fulfilled as an environment variable, which will be used locally instead of the actual key being used in production.

Note: You can set the envvar when running your site by passing before running your actual command, e.g

```sh
ENV_VAR=mysecretvalue deno task start
```

This will make the `ENV_VAR` available in runtime with the `mysecretvalue` value to be used locally.
