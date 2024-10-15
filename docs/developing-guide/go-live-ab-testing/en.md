---
description: Go-Live with A/B Testing
since: 1.0.0
---

Working with two environments simultaneously is sensitive in terms of data
consistency. We recommend following a detailed and careful process, paying
attention to some points such as:

- Replicate the GTM identically in both environments
- Update both environments throughout the test
- Ensure feature parity

On deco.cx, there are several testing methods before fully migrating a site.

## Subdomain Method

The subdomain method involves associating the site built on deco.cx with a new
subdomain.

Example: For the current site www.deco.cx, we will associate the new site with
the subdomain store.deco.cx.

### How to Do It:

1 - Register a subdomain on [deco.cx](https://deco.cx)

- [Doc](https://deco.cx/docs/en/getting-started/custom-domains/)

2 - Create a traffic splitting script:

- Create a loader on deco.cx, like
  [this example](https://gist.github.com/guitavano/aca72370b74081289d5d2b86143828e6)
- Fill in the details of this loader in your `site` app.
- Insert this loader into the `<head>` of your current site within a `<script>`
  tag:

```html
<script
  src="https://store.deco.cx/live/invoke/site/loaders/abTestScript.ts"
></script>
```

This script will randomly assign users to stay on the current site or redirect
them to the subdomain.

### How to Measure Results?

- Set up G.A. and GTM on both sites.

#### Advantages

- The client only pays for infrastructure proportional to usage.
- Simple setup.

#### Disadvantages

- The end user sees a different URL
- Traffic splitting is done with JavaScript on the front end.

## deco.cx Proxy Method

The proxy method involves keeping all traffic on the same domain but
transparently proxying part of the users.

<img src="https://deco-sites-assets.s3.sa-east-1.amazonaws.com/starting/650953a6-0ae4-448d-b911-943565cf9094/Screenshot-2024-09-04-at-09.58.03.png" width="500">

Notice that in this way, you need to place your old site on another domain so
that deco.cx can use it for the proxy.

### How to Do It:

We have simplified the activation of this proxy with the following flow:

1 - In the deco.cx panel, go to `Apps`

2 - Open the `site` app

3 - You should see this configuration:

<img src="https://deco-sites-assets.s3.sa-east-1.amazonaws.com/starting/bdacf591-d141-44b5-b85c-3c4068c67c8a/Screenshot-2024-09-04-at-09.59.05.png" width="500">

The segment shown in the image is `Random`, with a 50% split, but you can use
other segments.

### How to Measure Results?

- Set up G.A. and GTM on both sites.

- Track results on deco.cx.

To track results on deco.cx, the Matcher to be used must be created through the
Experiments tab. Check how in
[A/B Testing](https://deco.cx/docs/en/developing-capabilities/apps/ab-test).

Additionally, in the settings, there is an option `Scripts to include`; select
and include the `DecoAnalytics` script.

#### Advantages

- Keeps the entire experience on the same domain.
- Ready-to-use traffic splitting setup.
- Ready-to-use analytics setup.

#### Disadvantages

- The client pays the cost of all traffic, regardless of scaling

## External Proxy Method

This method is the inverse of the proxy on deco.cx: the responsibility for
splitting the traffic and managing the proxy lies with the old website.

> For VTEX stores, deco.cx is building an APP on VTEX IO to perform this proxy.

If you have any doubts about how to develop this proxy on your technology, we
are on Discord to help.

#### Advantages

- The client only pays for infrastructure proportional to usage.

#### Disadvantages

- Setup does not come ready, depending on the technology.

## Extra Information

### GTM Configuration

To assist in configuring events in GTM, we recommend checking the
`deco_matcher...` cookie, which indicates which version the user is on.

### VTEX Orderform

As an additional data source, we recommend adding a marker in the marketingData
within the OrderForm, indicating which version the user is on, as this
information goes to the VTEX order panel.

- [Example Script](https://gist.github.com/guitavano/6de5f1068c85800b0702937b97c51ef2)
