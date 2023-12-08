---
description: Modifying the return status of a page
since: 1.0.0
---

# Modifying the return status of a page

## Overview

Modifying the return status allows you to correctly inform the browser of the
return being sent on the page based on any desired criteria. This ensures better
indexing by search engines since, for example, a page not found with the correct
status will not be indexed by them.

## Implementation

To modify the return status of a page from a section, follow these simple steps:

1. Create an inline loader within your section component.

```tsx
export default function MyComponent(props: Props) {
  // Your component logic goes here
  // ...
}

export const loader = (props: Props, req: Request, ctx: AppContext) => {
  // Your condition for status modification here
  if (YOUR_CONDITION_TO_MODIFY_STATUS) {
    ctx.response.status = DESIRED_STATUS;
  }

  // Return the component props
  return props;
};
```

2. Within the `loader` function, define the condition that determines whether
   the status should be modified. If the condition is met, assign the desired
   status to the response contained in the context.

## Example

Let’s say you want your page to return `404 (Not Found)` if your search returns
no elements:

```tsx
export default function MyComponent(props: Props) {
  // Your component logic goes here
  // ...
}

export const loader = (props: Props, req: Request, ctx: AppContext) => {
  // Check if there are no elements
  if (!props.items || !props.items.length) {
    ctx.response.status = 404;
  }

  // Return the component props
  return props;
};
```

In this example, if the `items` property does not exist or does not contain any
elements, the section will modify the return status of the entire page to `404`.

## Remember

- The section will modify the status of every page it is on if its condition is
  satisfied.
- Use correct status codes for each situation so that your SEO is not negatively
  affected.
