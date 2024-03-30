---
description: The deco guide to performance
since: 1.0.0
---

# Three rules for high performance

### Understand the framework and system architecture

Using a tool efficiently implies understanding its components and capabilities.
This allows for a healthy codebase from the start.

> **Example**: deco offers components like `Image` that help accelerate the
> efficient delivery of images, but users can still use the `img` element if
> they prefer.

### Learn to analyze performance

Learn to analyze the performance of your pages. Navigating a page should not be
slow, not even for you. **If it's slow for the developer, it will be slow for
the user**. Understand the available tools and how they work.

### Monitoring performance is an ongoing task

Once the system stops performing, it is common to stop caring about performance
until it becomes much more difficult to make corrections. Detecting performance
issues is an ongoing task, but it should not be an end in itself.

> **Important**: the most important thing (the golden rule) is the user
> experience. Sometimes the system may not deliver the best performance, as long
> as it is a conscious decision to deliver the best experience to the user.

# Analyzing page performance

Testing performance involves understanding a series of tools and possible
metrics that seek to understand what needs to be improved (and how). There are
tools that help in this process. Understand how and when to use them.

## Local testing

![Example of using browser tools for debugging](https://github.com/deco-sites/starting/assets/882438/bf441a9a-5af7-4c83-aa4a-c409c2cfb84c)

**Always test your page, section, loader, or action locally. It doesn't always
need to be a structured test**. If it's already slow for you, it will be slow
for the user.

Run the deployed test versions. Then use the tools available in the browser
itself to debug performance issues. With them, you can monitor the performance
of the page in detail and simulate adverse conditions (such as a lower quality
network or CPU). More information in the guide below:

## Pagespeed test

![Example of pagespeed test](https://github.com/deco-sites/starting/assets/882438/35d915a9-1fa0-4c87-b5b5-74cd60bec8f0)

[Pagespeed](https://pagespeed.web.dev/) is a testing tool developed by Google to
evaluate the main performance aspects of a page. It explores metrics such as how
long it takes for some content to be displayed, how long it takes for the system
to become interactive, etc.

The main metrics are described below:

| Metric      | Meaning                                              | example of good value |
| ----------- | ---------------------------------------------------- | --------------------- |
| FCP         | First Contentful Paint                               | up to 1.8s            |
| LCP         | Largest Contentful Paint                             | up to 2.5s            |
| TBT         | Total Blocking Time                                  | 200ms                 |
| Speed Index | Performance index of the page's most popular content | up to 3.4             |
| CLS         | Cumulative Layout Shift                              | up to 0.1             |

> source (adapted): https://web.dev/articles/fcp

Google aggregates these metrics into an index between 0 and 100, generating the
pagespeed score.

Since it is a test executed in a production environment, it is subject to
variations. However, a sudden drop in the pagespeed score implies looking at the
page's performance as soon as possible.

## Deco metrics test

![Examples of deco metrics](https://github.com/deco-sites/starting/assets/882438/af592b39-0f4d-405f-a0c6-a212b1677058)

By default, deco offers a set of metrics that are evaluated on a page. These
metrics are specialized especially for systems like deco (SSR with hydration and
with a lot of external data loading).

| Metric            | Meaning                                                  |
| ----------------- | -------------------------------------------------------- |
| Config LCP        | Loading configuration of the largest content of the page |
| Page HTML         | Page size in bytes                                       |
| Page Islands      | Number of islands on the page                            |
| Islands Props     | Size in bytes of the island's properties                 |
| Loaders latencies | Response time of the page's loaders                      |

Each metric is decomposed into its components, allowing for better
identification of a possible source of performance loss. There is no ideal value
for each metric, but it is important to understand that a large HTML impacts
response time for the user and metrics like pagespeed.

A user who downloads at `100 kb/s` will take `5s` to download a `500 kb` page.
This is especially impactful for mobile users operating on low-bandwidth
networks or situations.

## Core Web Vitals test

![Example of Core Web Vitals test](https://github.com/deco-sites/starting/assets/882438/f911058f-34b4-4c49-a24b-9351d630a752)

So far, we have only explored synthetic tests, that is, tests that are performed
artificially and are only an approximation of the real world. These tests are
relevant because a performance drop in a synthetic test usually reflects a
performance drop in the real world.

Core Web Vitals represents a collection of metrics extracted from real user
experience. It includes pagespeed metrics as well as other metrics specific to
real user interaction.

> Access through the
> [Google CrUX website](https://developer.chrome.com/docs/crux/dashboard) or
> directly from the CrUX App on your deco site.

Since it is a collected metric, it only has aggregated meaning. Google
categorizes the values typically on a month-to-month basis, so it is more of a
monitoring metric to diagnose any behavior issues that have gone unnoticed over
time or that reflect a change in the page's audience.

## Debugging performance issues

If, however, none of the tools help in the process of identifying a performance
issue, perform some manual tests that can identify the cause of the problem:

- If you don't know which change caused a performance loss:
  - Test older versions of the system to see which version impacted performance.

- If it is not clear, within a version, what makes it slow, eliminate parts of
  the system until you identify the cause.
  - For a slow page, eliminate some `sections` until the page returns to good
    performance. The most recently deleted `section` (or its `loaders` or
    `islands`) may be the cause of the problem.
  - Eliminate added dependencies. Check if the system improves with this.

- Update your dependencies.
  - Performance improvements are constantly added to the system and can fix
    issues that lead to slowness.

# Performance improvements

After identifying a problem, whether through a negative experience or some tests
indicating an inadequate metric value, action must be taken.

Each test above indicates, for each metric, possible culprits and where to look.
If you have identified the culprit, follow one of the guides below to implement
related improvements.

Note that the situations in which you should take action are just examples of
some cases.

## 🖼️ Images (jpg, png, gifs, ...)

**When to act**...

- High LCP value (largest image takes a long time to download / view)
- Pages "jumping" on the screen
- Large size of downloaded images

**Guide**: [Optimizing images](/docs/performance/medias/images)

> **Tip**: Use deco image components, such as `<Image>` and `<Picture>`, and
> configure them correctly, including width and height.

## 📈 Images (SVG)

**When to act**...

- Page size is large and the pages contain embedded and repeated SVGs
- Issues with Speed Index

**Guide**: [Optimizing SVGs](/docs/performance/medias/svg-sprites)

## 🖹 Fonts

**When to act**...

- Text appears to "change size" suddenly
- Font file takes a long time to load
- High FCP value (indicating the font as the problem)

**Guide**: [Optimizing fonts](/docs/performance/medias/fonts)

> **Tip**: Use standard fonts offered by Google. If necessary, use smaller fonts
> (preferably woff/woff2).

## 📜 Third-party scripts

**When to act**...

- The system takes a long time to load (high TBT)
- The screen "jumps" due to a component inserted by a third-party script (high
  CLS)
- A third-party script has a large size

**Guide**: [Optimizing scripts](/docs/performance/lazy-3rd-party-scripts)

> **Tip**: Try to only use what is strictly necessary or replace third-party
> scripts with lighter versions. If not possible, postpone the execution of the
> script until after the page has already loaded and the user is interacting
> with it.

## 🔄 Data loading efficiency (loaders)

**When to act**...

- The system indicates high latency for a loader
- The page takes a long time to load initially
- The size of props in islands is large

**Guide**: [Optimizing loaders](/docs/performance/loaders)

> **Tips**:
>
> - Use `inline loaders` to transform data to be sent to a section and/or island
> - Consider deferring the display (`Deferred`) of sections with expensive
  > loaders
> - Change the loader's props to reduce the amount of data loaded in the loaders
> - Save loaders that are reused on different pages/sections

## 🏝️ Islands

**When to act**...

- The system indicates a large number of islands
- The page takes a long time to load initially
- The size of props in islands is large

**Guide**: [Optimizing islands](/docs/performance/islands)

> **Tips**: Prefer pure CSS to avoid islands. Use `children` to pass JSX into an
> island. Reduce the scope of the island as much as possible (e.g., prefer a
> button as an island rather than an entire `form`).

# Relevant sources

- [web.dev - Core Web Vitals](https://web.dev/explore/learn-core-web-vitals)

- [MDN - Web Performance](https://developer.mozilla.org/en-US/docs/Learn/Performance)
