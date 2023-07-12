---
description: Learn how to create proxies and redirects for a given route
since: 1.0.0
---

# Overview

Adding **proxies** and **redirects** are common practices in web development to _enhance user experience_ and _optimize content delivery_. Proxies and redirects serve different purposes and can be beneficial in various scenarios.

**Redirects** are primarily used when you have a page that might _no longer exist_ but is still accessed by users through saved bookmarks or external links. Instead of returning a 404 (not found) error, you can create a redirect to ensure a seamless transition for your users. By implementing redirects, your website can continue to serve the intended content for those specific routes, maintaining a positive user experience.

By leveraging proxies and redirects, you can optimize content delivery, manage transitions, and provide a seamless user experience. In the following sections, let's explore how to add proxies and redirects using deco's Admin, step by step.

The overall process involves changing the site route map and attaching a proxy or a redirect depending wether your use case needs one or the other. At the end of the process we should be able to create an example route `/example-proxy` that proxies requests to deco.cx and a `/example-redirect` that redirects you to google.com homepage. Notice the difference: the former will let you in the same domain and the latter will leave your site domain.

## Step by step

### Adding a Redirect

1. First, log in to the deco's Admin. Once you're logged in, you can access the _site_ you want to work with.
2. Open the `./routes/[...catchall].tsx` block, which is responsible for **routing** your site. You can access it by using the following link (replace $sitename with your site name): <https://deco.cx/admin/sites/$sitename/blocks/.%2Froutes%2F%5B...catchall%5D.tsx>
3. Click on `Add audiences` and a select menu will appear.<img width="1511" alt="image" src="https://github.com/deco-sites/starting/assets/5839364/18545536-5971-47d5-a6f3-22f9a740df2b">
4. Below `Create new`, select the `Audience Everyone` option.
5. A new select menu named `Routes` will appear. Under `Create new`, choose the option _deco-cx/deco/flags/audience.ts@Route[]_. Then click on the `+` button to add a new route.<img width="1508" alt="image" src="https://github.com/deco-sites/starting/assets/5839364/07e308df-6adb-4a2d-830c-eed8bca3fa06">
6. Fill in the `Path Template` field with the desired route, e.g., `/example-redirect` (ignore the `href` checkbox option for now).
7. In the `Handler` option, select `Redirect Handler` (or $live/handlers/redirect.ts).
8. In the `To` field, enter h`ttps://google.com` or the URL you want to **redirect** to.
9. Choose the type as `temporary` since this redirect may change over time. If the redirect should not change over time, you can select `permanent` (which may result in faster responses since permanent redirects are cached by the user's browser).<img width="1508" alt="image" src="https://github.com/deco-sites/starting/assets/5839364/56e3c2a9-cde2-4541-9781-58f84e27eb98">
10. Save and publish the changes.

Now you can access <https://your-store.deco.site/example-redirect> and check if the redirect is working.

> Please note that if you need to add a new redirect, you will need to repeat the steps from 5 onwards because the audience will already have been created.

### Adding a Proxy

Proxies are utilized when you want to _keep the user_ within the _same website but deliver different content_. **Proxies** enable the sharing of resources under the same domain, providing a unified user experience. This can be particularly useful when you need to serve content from different sources or platforms while maintaining a consistent user interface. Proxies are commonly employed during platform migration processes, allowing you to gradually adopt deco.cx and determine whether a specific page should be proxied or served directly by deco.cx.

To create a proxy instead of a redirect, you can follow the same steps mentioned above, but with a few changes:

Repeat steps 1 to 5 from the "Adding a Redirect" section.

1. In the "Handler" option, select "Proxy Handler" (or $live/handlers/proxy.ts).
2. In the "To" field, enter the exact URL that should be used as the proxy (e.g., <https://google.com>).
3. Save and publish the changes.

Now, when accessing the specified route (e.g., <https://your-store.deco.site/example-proxy>), you will be proxied to the specified URL (in this case, <https://google.com>).
