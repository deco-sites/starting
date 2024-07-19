---
description: Learn how to create proxies and redirects for a specific route
since: 2.0
---

Adding **proxies** and **redirects** are common practices in web development to
improve the user experience and optimize content delivery. Proxies and redirects
serve different purposes and can be beneficial in various scenarios.

**Redirects** are mainly used when you have a page that may no longer exist but
is still accessed by users through saved bookmarks or external links. Instead of
returning a 404 error (not found), you can create a redirect to ensure a smooth
transition for your users. By implementing redirects, your site can continue to
serve the desired content for these specific routes, maintaining a positive user
experience.

By using proxies and redirects, you can optimize content delivery, manage
transitions, and provide a seamless user experience. In the following sections,
we will explore how to add proxies and redirects using the Deco Admin, step by
step.

The general process involves modifying the site's route map and associating a
proxy or redirect, depending on the specific use case. At the end of the
process, we will know how to create an example route `/example-proxy` that
proxies requests to deco.cx and a route `/example-redirect` that redirects to
the homepage of google.com. Note the difference: the first will keep you within
the same domain, while the latter will take you outside the domain of your site.

## Adding a redirect

### 1. Access the Redirects Page

Access the `redirects` page. This allows access to redirect creation.

<img width="640" alt="Redirects view" src="/docs/cms-capabilities/redirects/redirects1.png">

### 2. Press the Create a redirect button

Configure the redirect according to your needs:

- **From**: the source field, which represents the path that the user is trying
  to access and where they will be redirected. This field supports
  [URLPattern](http://mdn.io/urlpattern).
- **To**: the destination field. It can be an absolute address or a relative
  path.
- **Type**: the definition of the redirect type (`permanent` or `temporary`)

> Choose the type as `temporary` when the redirect may change over time. If the
> redirect should not change over time, you can select `permanent` (which may
> result in faster responses, as permanent redirects are cached by the user's
> browser).

<img width="320" alt="Add redirect form" src="/docs/cms-capabilities/redirects/redirects2.png">

### 3. Create the redirect

To make the redirect take effect, you need to publish the changes to your site.

Then, you can access `https://your-site.deco.site/example-redirect` and check if
the redirect is working correctly.

## Adding a Proxy \[via ecommerce apps and website\]

Proxies are used when you want to keep the user within the same site but provide
different content. Proxies allow the sharing of resources under the same domain,
providing a unified user experience. This can be especially useful when you need
to serve content from different sources or platforms while maintaining a
consistent user interface. Proxies are commonly used during platform migration
processes, allowing you to gradually adopt Deco and decide whether a specific
page should be proxied or served directly by Deco.

To create or edit a proxy instead of a redirect, you can follow these steps:

### 1. Access the Site App

Access the site app view and look for the Site App. To edit it, click on the app
description.

<img width="480" alt="Configure site app" src="/docs/cms-capabilities/redirects/proxies1.png">

### 2. Look for the Routes Map

Look for the routes map property in the app's editing form.

<img width="320" alt="Configure site app" src="/docs/cms-capabilities/redirects/proxies2.png">

Edit the existing proxy to add new routes to be proxied (when applicable) or add
a proxy obtained from an ecommerce app.

Publish the changes for the new proxy route to take effect.

## Adding a redirects file.

Repeat step 1 from the previous section and look for the `Route Maps`.

Then:

1. Upload a file like `redirect.csv` to the project's base. It should have the
   indicated format below:

   ```
   from,to,type
   /example-redirect,/test,temporary
   /google,https://www.google.com,permanent
   ```

2. Add the route of type `redirectsFromCsv.ts`.

3. Select `redirect.csv` as the redirects file.

4. Publish the changes.
