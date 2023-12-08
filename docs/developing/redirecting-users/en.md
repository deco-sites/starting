---
description: Accepting Other Sections as Parameters in Your Section
since: 1.0.0
---

# Making Redirects in Sections

Redirects in sections allow you to efficiently direct users to different pages
based on certain conditions, providing a smooth and seamless navigation
experience. With Live.ts, you can easily implement redirects using inline
loaders and the `redirect` function from the `deco/mod.ts` module.

## Overview

Redirects enable you to short-circuit the entire rendering phase, bypassing the
need for unnecessary content generation when a redirection is necessary. They
are especially useful when you want to guide users to specific pages based on
certain criteria, such as user authentication, geolocation, or any other custom
condition.

## Implementation

To create a redirect in a section, follow these simple steps:

1. Create an inline loader within your section component, and import the
   `redirect` function from the `deco/mod.ts` module.

```tsx
import { redirect } from "deco/mod.ts";

export default function MyComponent(props: Props) {
  // Your component logic goes here
  // ...
}

export const loader = (props: Props, req: Request) => {
  // Your redirect condition here
  if (YOUR_CONDITION_TO_REDIRECT_USER) {
    const url = new URL(req.url);
    url.pathname = "/your_path_to_redirect"; // Update this with your desired redirect path
    redirect(url.toString()); // You can also use the full URL from anywhere
  }

  // Return the component props
  return props;
};
```

2. Inside the `loader` function, define the condition that determines whether
   the redirect should be triggered. If the condition is met, construct the new
   URL using the `URL` class, and specify the path you want to redirect to.

3. Finally, call the `redirect` function with the newly constructed URL. This
   will instantly direct the user to the specified page without further
   rendering.

Please note that you need to return something (in this case, the `props`) in the
`loader` function, even if you are using a redirect. This is to ensure that the
function behaves as expected and satisfies the TypeScript compiler requirements.

## Example

Let's say you want to redirect users to a login page if they are not
authenticated:

```tsx
import { redirect } from "deco/mod.ts";

export default function MyComponent(props: Props) {
  // Your component logic goes here
  // ...
}

export const loader = (props: Props, req: Request) => {
  // Check if the user is not authenticated
  if (!props.isAuthenticated) {
    const url = new URL(req.url);
    url.pathname = "/login"; // Redirect to the login page
    redirect(url.toString());
  }

  // Return the component props
  return props;
};
```

In this example, if the user is not authenticated, they will be redirected to
the login page. Otherwise, the component will proceed to render as usual.

## Remember

- Use redirects judiciously and only when necessary to ensure a smooth user
  experience.
- Always test your redirects thoroughly to ensure they behave as expected.
- Keep your redirects organized and maintainable to avoid any unintended
  behaviors.

With redirects in sections, you have the power to guide users seamlessly through
your applications based on specific conditions. Happy redirecting! 🚀🔀
