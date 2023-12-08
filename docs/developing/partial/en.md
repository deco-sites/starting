---
description: Offload frontend computation to the server
since: 1.0.0
---

Partials empowers developers to optimize web interactions by offloading certain
tasks from the user's device to Deco's Edge Servers. This innovative approach
significantly reduces the amount of JavaScript required to run websites,
resulting in faster page load times and improved conversion rates.

## Introduction to Partials

Partials, inspired by [htmx](https://htmx.org/docs/), operate by intercepting
user interactions on button, anchor, and form elements. These interactions are
automatically offloaded to our server, where they generate a new User Interface
(UI) state. This fresh UI state is transmitted as pure HTML back to the user's
browser. Our runtime seamlessly replaces and hydrates the new UI state, creating
the illusion of client-side interactivity. In reality, the entire computation
process occurs in mere milliseconds on our Edge Servers. For more detailed
information on Partials, please consult Fresh's
[documentation](https://github.com/denoland/fresh/issues/1609).

## Simplifying Development

While Fresh Partials introduce a new realm of performance optimization, they
also bring added complexity to the development cycle. Developers now need to
consider multiple rendering modes, their impact on bundle and HTML sizes,
interaction latencies, and how to properly navigate partially rendered pages. To
streamline this process, Deco has integrated Partials into a higher abstraction
layer of our framework, eliminating the need for developers to grapple with
these complexities.

## Leveraging Partials for Sections

At Deco, all [Sections](/docs/en/concepts/section) are treated as partials. This
means you can seamlessly incorporate client-side interactivity into any Section
without compromising bundle sizes or initial page loads. This is particularly
beneficial for creating common UI components such as SKU selectors, infinite
scroll features, and tabs. In the following sections, we'll delve into
harnessing the full potential of Partials by creating a lightning-fast SKU
selector.

## Example: SKU Selector

SKU selectors enable shoppers to explore different variations of a product, each
with its unique set of prices, images, and availability. Consider the example
below:
![sku-selector](https://github.com/deco-sites/starting/assets/1753396/cdaca2fc-34cd-404b-8679-d159872f7faa)

As demonstrated, altering the selected SKU can result in significant changes to
the page. A straightforward approach is to create a signal to store the
currently selected SKU and update it on each click:

```tsx
// sections/ProductDetails.tsx
export default function ProductDetails ({ skus }) {
  const selectedSku = useSignal(skus[0]);
  
  return (
    <div>
      <ImageSlider sku={selectedSku} />
      <ProductPrice sku={selectedSku}>

      Color:
      <ul>
        <li>
          <button onClick={() => { selectedSku.value = skus[0] }}>Red</button>
        </li>
        <li>
          <button onClick={() => { selectedSku.value = skus[1] }}>Blue</button>
        </li>
        <li>
          <button onClick={() => { selectedSku.value = skus[2] }}>Green</button>
        </li>
      </ul>
    </div>
  )
}
```

However, this implementation has a downside. To enable interactivity, the entire
section, including all SKU data and component code, is shipped to the browser,
resulting in decreased site performance.

> Note: If you only isolate the buttons as islands, selecting an SKU will not
> update the displayed price or image, leading to an inconsistent UI.

An alternative approach is to transform the buttons into anchor tags, triggering
a new page load upon each SKU selection:

```tsx
// sections/ProductDetails.tsx
export default function ProductDetails ({ skus }) {
  return (
    <div>
      <ImageSlider sku={selectedSku} />
      <ProductPrice sku={selectedSku}>

      Color:
      <ul>
        <li>
          <a href={skus[0].url}>Red</a>
        </li>
        <li>
          <a href={skus[1].url}>Blue</a>
        </li>
        <li>
          <a href={skus[2].url}>Green</a>
        </li>
      </ul>
    </div>
  )
}
```

While this approach offers optimal performance by eliminating the need for
islands, it comes at the cost of user experience (UX). With every SKU selection,
the page reloads, and the user is taken back to the top of the page. To strike a
balance between UX and performance, let's refactor this component using
Partials.

### Enhancing UX and Performance with Partials

```tsx
// sections/ProductDetails.tsx
import { usePartialSection } from "deco/hooks/usePartialSection.ts";

export default function ProductDetails ({ skus }) {
  return (
    <div>
      <ImageSlider sku={selectedSku} />
      <ProductPrice sku={selectedSku}>

      Color:
      <ul>
        <li>
          <button {...usePartialSection({ href: skus[0].url })}>Red</button>
        </li>
        <li>
          <button {...usePartialSection({ href: skus[1].url })}>Blue</button>
        </li>
        <li>
          <button {...usePartialSection({ href: skus[2].url })}>Green</button>
        </li>
      </ul>
    </div>
  )
}
```

The magic here lies in the `usePartial` hook combined with the `button` tag.
This hook accepts an `href` parameter and enhances the button tag. When the user
clicks the button, it triggers client-side navigation and applies HTML diff
updates. This approach eliminates the need for islands, boosting performance,
while maintaining the scroll position for an improved user experience.

## Example: Tabs

While we've explored how to leverage Partials for SKU selectors, tabbed
navigation presents a unique challenge. Tabs lack canonical URLs, making it
challenging to manage state transitions. However, the `usePartialSection` hook
allows us to override the props that a section uses for rendering, simplifying
the process:

```tsx
import { usePartialSection } from "deco/hooks/usePartialSection.ts";

interface Props {
  activeIndex: number;
}

const TabbedSection = ({ activeIndex }) => {
  return (
    <div>
      <button
        class={activeIndex === 0 && "active"}
        {...usePartialSection<typeof TabbedSection>({
          props: { activeIndex: 0 },
        })}
      >
        Tab 1
      </button>
      <button
        class={activeIndex === 1 && "active"}
        {...usePartialSection<typeof TabbedSection>({
          props: { activeIndex: 1 },
        })}
      >
        Tab 2
      </button>
      <button
        class={activeIndex === 2 && "active"}
        {...usePartialSection<typeof TabbedSection>({
          props: { activeIndex: 2 },
        })}
      >
        Tab 3
      </button>
    </div>
  );
};
```

In this example, the `activeIndex` prop is overridden with each
`usePartialSection` call, simplifying the use of Partials and eliminating the
need to manage URLs and search parameters within our sections.
