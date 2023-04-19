---
description: Learn how to integrate Google Tag Manager with a deco.cx website
---

## What will you learn?

- Integrate [Google Tag Manager](https://tagmanager.google.com/) with your
  website deco.cx, allowing the addition of tags configured by the GTM
  interface.
- Integrate [Google Analytics](https://analytics.google.com/) through GTM.

## Prerequisites

- A `trackingId` from a Google Tag Manager container, formatted in the style:
  `GTM - XXXXXX`.([help](https://support.rocketspark.com/hc/en-us/articles/900002470443-How-do-I-get-my-Google-Tag-Manager-Tracking-ID-or-GTM-Number))

- _Optional:_ Google Analytics 4 configured tag
  ([help](https://support.google.com/tagmanager/answer/9442095?hl=en))

## Introduction

**Google Tag Manager (GTM)** is a free tool offered by Google that allows you to
easily manage and implement tracking tags and third parties on your website or
application. These tags can include analytics scripts data such as Google
Analytics, advertising conversion pixels or other custom codes. However,
excessive use of tags in GTM can **degrade the performance of a site** as
scripts can increase the loading time of pages and compromise the user
experience. Therefore, the integration by deco.cx uses
[Partytown](https://partytown.builder.io/), which allows you to execution of the
tags in a service worker and improves the load time of the page.

## Integrating GTM in deco.cx

If you created a site on deco.cx based on our
[ecommerce starter](https://fashion.deco.site/), it **already has all the code
needed to integrate with GTM**. However, it is necessary to configure the global
section **Analytics** by adding the trackingId property with the ID of the
container
(https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation)
previously set up.

For that, follow the steps:

1. Open Pages on deco.cx's Admin.
2. Select `Global` on the Status filter.
3. Select the Analytics page.
4. Edit the Analytics section, adding or editing the **Tracking Id** property
   with your GTM's container ID.
5. Save the page.

All pages that use this global section, Analytics, will be automatically
updated.

And that! To test that everything is working, do the following:

1. Go to your deco site `https://<<sitename>>.deco.site`.
2. Go to the developer tools and access the **Network** tab.
3. Reload the page and make sure the script
   `https://www.googletagmanager.com/gtm.js?id=GTM-P6D23BB` is being loaded.

## Integrating Google Analytics 4

If there is already a Google Analytics 4 (GA4) tag in the GTM container
configured, your deco.cx site will automatically be sending events to the GA4.
To verify this, go to the **Network** tab again and look for a request with the
name `collect`. Example:

![Example collect request sending data to GA4](https://user-images.githubusercontent.com/18706156/229370675-53775267-6cd5-4a88-8fe4-b5ea6f5566de.png)
_Example of collect request that sends data to GA4_

> If you don't see this request, make sure there is no adblock configured (ex:
> uBlock Origin). Some browsers already integrate adblocks by default.

However, if you want to analyze your metrics **according to tests A/B created in
deco.cx**, it is necessary to make an extra configuration in the container GTM.
For that, follow the steps:

1. In GTM, enter the **Variables** section.
2. Under **User Variables**, click **Create New**.
3. Fill in the variable name with `Flags` (this name will be used posteriorly).
4. Click the edit button to select the variable type and select **Custom
   Javascript**.
5. Paste the following code into the text area:

```javascript
function main() {
  var flags = document.cookie
    .split(";")
    .map(function(x) {
      return x.trim().split("=");
    })
    .map(function (splitted) {
      var key = splitted[0];
      var values ​​= splitted.slice(1);
      return [key, values.join("=")];
    })
    .filter(function (splitted) {
      return splitted[0].startsWith("dcxf");
    })
    .map(function (splitted) {
      return JSON.parse(atob(splitted[1]));
    });

  return flags.filter(function (f) {
    return f.isMatch;
  }).map(function (f) {
    return f.key;
  });
}
```

5. Click Save.

After the variable has been created, it is still necessary to associate it with
the Google tag Analytics. For that, follow the steps:

1. From the **Tags** menu, select your GA4 tag. (By default,
   `Google Analytics GA4`).
2. Under **Tag Configuration**, click the edit button.
3. In the **User Property** section, click **Add Row**.
4. Fill the **Property name** with `flags` and the **Value** with `{{Flags}}`,
   this being the same name as the variable created earlier.
5. That's it, the integration is set up!

![Screenshot of `flags` property configuration](https://user-images.githubusercontent.com/18706156/229370987-a2d0b82a-3b58-46ca-98b1-d7f8c2a8600d.png)
_Screenshot of `flags` property configuration_

It is now possible to segment your views according to groups of user configured
in deco.cx.

## Troubleshooting

- **A tag I configured is not working properly**

By using Web Workers technology to include external scripts, there are some
limitations related to CORS (Cross-origin resource sharing). Depending on the
tag being included, it is possible that the request for fetch a `.js` script
fails.

To solve this problem, you need to create a **requests proxy** in your store
(read more about this solution
[here](https://partytown.builder.io/proxying-requests)). Like deco.cx websites
are traditional [Fresh](https://fresh.deno.dev/) projects, just follow the
following steps to create this proxy:

1. In your project, inside the `routes/` folder, create a file called
   `proxy.ts`.
2. Paste the following code into this file, noting the comments:

```ts
import { Handlers } from "$fresh/server.ts";

// Add here the scripts you want to proxy
const ALLOWLIST_URLS = ["https://xxxx.collect.igodigital.com/collect.js"];

export const handler: Handlers = {
  GET: async (req) => {
    const url = (new URL(req.url)).searchParams.get("url");

    if (!url || !ALLOWLIST_URLS.includes(url)) {
      return new Response(null, { status: 404 });
    }

    const proxyRequest = new Request(
      url,
      {
        headers: req.headers,
        method: req.method,
        body: req.body,
        redirect: "follow",
      },
    );

    const response = await fetch(proxyRequest);
    const headers = new Headers(response.headers);
    headers.set("access-control-allow-origin", "*");

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
```

4. Push your code changes to the `main` branch.
5. Replace the URLs of the added scripts in the GTM settings with
   `https://www.yourdecostore.com.br/proxy?url={urlDoScript}`.

For example, if the script you are trying to load is in
`https://xxxx.collect.igodigital.com/collect.js`, replace this URL with
`https://www.yourdecostore.com.br/proxy?url=https%3A%2F%2Fxxxx.collect.igodigital.com%2Fcollect.js`.
Use the `encodeURIComponent` Javascript function if necessary.
