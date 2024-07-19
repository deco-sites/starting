---

description: Documentation on async rendering in Deco.cx.

---

## Introduction

Async rendering is an essential technique for improving performance and user experience in modern web applications. In deco.cx, this feature utilizes progressive loading to load page sections asynchronously, rendering quickly loaded content and displaying skeletons and loading states for slower requests, providing users with an immediate visual experience.

## How It Works

Async rendering in deco.cx is based on loaders, which are components responsible for loading necessary data for a section. Loaders are bound to a time budget. Once this limit is reached, loaders that have finished their tasks will render their content in the final HTML as usual. Loaders relying on slow APIs will throw an exception, and a loading state will be rendered for those sections. This loading state will use our [Partials](/docs/en/developing-capabilities/interactive-sections/partial) feature to hydrate and lazily replace the missing section.

### Stale Edge Cache

Async render in deco.cx also features "Stale Edge Cache," which allows caching of lazy-loaded sections, significantly reducing response times and improving loading speeds. The initial server response of the section is cached in the CDN. Subsequent requests are answered with this cached response, drastically reducing the total response time to just the latency between the browser and the CDN, plus the download time.

![Stale Edge Cache](/docs/performance/stale-edge-cache.png)

This functionality is enabled by default for all sections but can be disabled if necessary.

### Enabling Async Rendering

This feature is enabled by default in the sections of sites on deco.cx. To disable it, simply turn off the `Optimization` option in the section properties in the Admin.

![Disable Async Rendering](https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/3d9ee3b7-cce2-47f3-a320-2a72b2e63e2a)

### Benefits

- **Improved Performance**: Loads only the necessary components at the moment, reducing initial page load time.
- **Reduced Latency**: Cached responses significantly reduce response times.
- **Better UX**: Avoids interface blocking and minimizes layout shifts during loading.

### Minimizing Content Layout Shifts (CLS)

To ensure a smooth user experience, it is recommended to implement the `LoadingFallback` component in all site sections. This component provides a custom loading state during async rendering, minimizing potential layout shifts.

You can find more information about the [`LoadingFallback` component in our documentation](/docs/en/developing-capabilities/sections/loading-fallback).

## Conclusion

Async rendering is a powerful technique for improving performance and user experience in web applications. With the implementation and evolution of async rendering in the deco.cx platform, it has become even easier and more efficient to adopt this technique in your projects.

For more information, refer to the blog posts [Async Rendering](https://deco.cx/en/blog/async-rendering) and [More on Async Rendering](https://deco.cx/en/blog/async-render-default).
