---
description: Learn how to create proxies and redirects for a given route
since: 1.0.0
---

# Overview

Adding **proxies** and **redirects** are common practices in web development to
_enhance user experience_ and _optimize content delivery_. Proxies and redirects
serve different purposes and can be beneficial in various scenarios.

**Redirects** are primarily used when you have a page that might _no longer
exist_ but is still accessed by users through saved bookmarks or external links.
Instead of returning a 404 (not found) error, you can create a redirect to
ensure a seamless transition for your users. By implementing redirects, your
website can continue to serve the intended content for those specific routes,
maintaining a positive user experience.

By leveraging proxies and redirects, you can optimize content delivery, manage
transitions, and provide a seamless user experience. In the following sections,
let's explore how to add proxies and redirects using deco's Admin, step by step.

The overall process involves changing the site route map and attaching a proxy
or a redirect depending wether your use case needs one or the other. At the end
of the process we should be able to create an example route `/example-proxy`
that proxies requests to deco.cx and a `/example-redirect` that redirects you to
google.com homepage. Notice the difference: the former will let you in the same
domain and the latter will leave your site domain.

## Step by Step

### Adding a Redirection

1. First, log in to the Deco Admin. Once logged in, you can access the site you
   want to work with.

2. Go to the site's `redirects` configuration.
    ![Redirects in Admin](https://github.com/deco-cx/apps/assets/882438/29e9f388-2c32-4190-96e5-ac5a8001b68c)

3. Click on `Create a redirect` and configure it according to your needs.

    ![Create Redirect](https://github.com/deco-cx/apps/assets/882438/63a7d2a4-cc53-47eb-adca-c6cb601e7f41)

4. Fill in the `From` field with the desired route, for example,
   `/example-redirect`, and in the `To` field, enter `https://google.com` or the
   URL to which you want to **redirect**.

5. Choose the type as `temporary` since this redirection may change over time.
   If the redirection should not change over time, you can select `permanent`
   (which may result in faster responses since permanent redirects are cached by
   the user's browser).

6. Create the redirect to apply it.

Now you can access `https://your-site.deco.site/example-redirect` and check if
the redirection is working correctly.

### Adding a Proxy

Proxies are used when you want to keep the user within the same site but provide
different content. **Proxies** allow for sharing resources under the same
domain, providing a unified user experience. This can be especially useful when
you need to serve content from different sources or platforms while maintaining
a consistent user interface. Proxies are commonly used during platform migration
processes, allowing you to gradually adopt Deco and decide if a specific page
should be proxied or served directly by Deco.

To create a proxy instead of a redirection, you can follow these steps:

1. First, log in to the Deco Admin. Once logged in, you can access the site you
   want to work with.

2. Open the site `App` for editing. And press to add a new `site map`.

    ![Add Site Map](https://github.com/deco-cx/apps/assets/882438/92427ed1-54cb-49f2-88f5-3be8c1c27b8a)

3. Select the route type as `Route`, and add this new route.

4. As the `Path template`, select the base of the route (e.g.,
   `/example-proxy`), select the value `Proxy`, and the `URL` as the URL to be
   proxied (e.g., `https://deco.cx`).

5. Publish the changes.

Now, when you access the specified route (for example,
`https://your-site.deco.site/example-proxy`), you will be proxied to the
specified URL (in this case, `https://deco.cx`).

### Adding a Redirect File

Repeat steps 1 and 2 from the previous section. Then:

1. Upload a file named `redirect.csv` to the project's base. It should have the
   format as indicated below:

    ```
    from,to,type
    /example-redirect,/test,temporary
    /google,https://www.google.com,permanent
    ```

2. Add the route of type `redirectsFromCsv.ts`.

3. Select `redirect.csv` as the redirect file.

4. Publish the changes.
