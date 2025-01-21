---
since: 1.109.0
---

# Managing Loader/Action Access

By default, all loaders and actions in deco.cx are publicly accessible. However, you may need to restrict access to certain loaders/actions that handle sensitive operations or private APIs. This guide explains how to control loader/action visibility.

## Visibility Options

There are two visibility levels available:

- `private`: Can only be invoked server-side through `ctx.invoke`
- `public`: Can be called from both server and client through:
  - Runtime `invoke` calls
  - Direct path access via `/live/invoke/{path/to/block.ts}`

## Setting Default Visibility

To set the visibility level for a loader/action, export a `defaultVisibility` variable:

```typescript
// Make the loader publicly accessible
export const defaultVisibility = 'public'

// Make the loader private (server-side only)
export const defaultVisibility = 'private'
```

## Overriding Visibility

You can override the default visibility settings in your `fresh.config.ts` file using the `visibilityOverrides` option:

```typescript
import { defineConfig } from "$fresh/server.ts";
import { plugins } from "deco/plugins/deco.ts";
import manifest from "./manifest.gen.ts";

export default defineConfig({
  plugins: plugins<typeof manifest>({
    manifest,
    htmx: true,
    visibilityOverrides: {
      "site/loaders/minicart.ts": "public",
      "vtex/loaders/cart.ts": "private"
    },
  }),
});
```

## Security Best Practices

When deciding visibility levels:

### Use `private` for

- Accessing private/internal APIs
- Operations involving credentials or secrets
- Processing sensitive user/business data
- Backend integrations requiring authentication

### Use `public` for

- Reading public product data
- Fetching public content
- Client-side data loading
- User-facing operations that don't expose sensitive data

## Related Documentation

- [Fetching Data](/docs/en/developing-guide/fetching-data)
- [Client-side Data Loading](/docs/en/developing-capabilities/islands/fetching-data-client)
- [Core Concepts: Loaders](/docs/en/concepts/loader)
