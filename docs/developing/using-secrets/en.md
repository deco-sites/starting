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

After declaring the secret prop, users can configure secrets for your site. However, note that configuring secrets pointing to localhost won't work. You should point to your production domain, which means you need at least one deployment declaring the secret dependency.

## Step 3: Handling Local Development

When developing locally, a secret has a "name" in the admin UI. This name can be fulfilled as an environment variable, which will be used locally instead of the actual key being used in production.

## Conclusion

Secrets provide a secure way to manage sensitive information in your sites. By declaring secret props and allowing users to configure them, you can ensure that your site's confidential data remains protected. Whether you're working on production deployments or local development, using secrets is a crucial step to enhance the security and functionality of your sites.
