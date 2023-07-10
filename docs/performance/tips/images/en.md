---
description: Learn how to use images on your website without losing performance.
---

> TL;DR
>
> Deco offers Image, Picture and Source components for working with images.
> These components add sensible defaults for speeding up your website To add an
> image to your website:
>
> 1. Add image components (`<Image/>`, `<Source>`, `<Picture>`) to your code
> 2. Style the components with CSS untill you get the right look & feel
> 3. Set width and height attributes. Check out #Adding width and height
   > properties

In this post you will learn how to add images to your website while keeping a
good [LCP](https://web.dev/lcp/). Basic knowledge of HTML and CSS will be
required. Also, make sure you understand the following concepts:

- LCP: https://web.dev/lcp/
- CSS aspect-ratio: https://www.w3schools.com/cssref/css_pr_aspect-ratio.php

### Should I use image or picture?

There are two HTML tags for adding images to a website, `<img/>` and
`<picture/>`. You should pick one or the other depending on the design of your
website on both mobile and desktop devices. Use `<img/>` when the image's aspect
ratio is the same on all screen sizes. Use `<picture/>` if the aspect ratios
vary with the viewport size.

On the example below, we have the product page of an ecommerce website. Note
that the main product image keeps it's aspect-ratio (360/500 in this case) both
on mobile and desktop devices. In this case, we should use the `<img/>` tag.

<img src="/docs/image-aspect-ratio.png">

However, on the carousel image below, we see that the image does NOT keep its
aspect ratio on mobile/desktop viewports, going from 1440/600 to 360/600. In
this case, we should use the `<picture/>` element.

<img src="/docs/picture-aspect-ratio.png">

Keep reading to learn how to use these tags to add images to your website

#### Adding image

Using HTML's `<img/>` tag alone can be very difficult and may reduce your
website's performance. For this, deco provides a `<Image/>` Component. This
component works similarly to `<img/>` tag, but brings some nice defaults, like:

- Responsive images for all screen sizes
- Preload tags for better LCP

It's recommended you never use the `<img/>` tag directly, but use `<Image/>`
component instead. To use it:

```tsx
import Image from "deco-sites/std/components/Image.tsx";

export default function MyComponent() {
  return <Image src="https://example.com/image.png" />;
}
```

Now, you should be able to see the image on your browser!. `<Image/>` component
does not add any styles by default. To style it, you can use CSS as usual. For
instance, to make the image fill available space, you can apply the following
tailwind tokens to the code above:

```tsx
import Image from "deco-sites/std/components/Image.tsx";

export default function MyComponent() {
  return (
    <Image
      src="https://example.com/image.png"
      class="w-full h-full object-cover"
    />
  );
}
```

Now, follow the guide to add default `width` and `height` properties to
`<Image/>` component. Note that this is mandatory and not following this guide
may have big impacts on performance.

#### Adding picture

HTML's `<picture/>` and `<source/>` tags suffer from the same issues of the
`<img/>` tag. Both are complex and difficult to use. For this, deco also
provides custom `<Picture/>` and `<Source/>` components, bringing features like:

- Responsive images for all screen sizes
- Preload tags for better LCP

Below, you can find the minimal example rendering one image for desktop and
another one for mobile.

```tsx
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

function MyComponent() {
  return (
    <Picture>
      <Source
        media="(max-width: 768px)"
        src="https://example.com/image-mobile.png"
      />
      <Source
        media="(min-width: 768px)"
        src="https://example.com/image-desktop.png"
      />
      <img src="https://example.com/image-desktop.png" />
    </Picture>
  );
}
```

> Note that you should use `<img/>` tag inside Picture, not the `<Image/>`
> component Note that the src on the `<img/>` tag IS REQUIRED and should receive
> the bigger image, in this case, the desktop one.

The example above renders the `/image-mobile.png` image on screen sizes up to
768px in width. Bigger viewports will render `/image-desktop.png` instead.

To style this image, add classes to the `<img/>` tag. For instance, to make the
image fill available space, you can apply the following tailwind tokens to the
code above:

```tsx
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

function MyComponent() {
  return (
    <Picture>
      <Source
        media="(max-width: 768px)"
        src="https://example.com/image-mobile.png"
      />
      <Source
        media="(min-width: 768px)"
        src="https://example.com/image-desktop.png"
      />
      <img
        src="https://example.com/image-desktop.png"
        class="w-full h-full object-cover"
      />
    </Picture>
  );
}
```

Now, follow the guide to add default `width` and `height` properties to
`<Source/>` component. Note that this is mandatory and not following this guide
may impact on performance.

#### Adding width and height properties

Image's `width` and `height` attributes can be really confusing even for the
most experienced developers. This confusion comes from the fact that these
attributes do NOT change the image's final screen rendereded size. Rather, they
change the image the browser will download on a responsive image scenario.
Choosing a good width and height values, is the key to downloading a small image
for good LCP results.

To figure out a good value for width and height:

1. Open your website and inspect the image element
2. Set the viewport to the desired size. (412px for mobile or 1440px for
   desktop)
3. Hover the mouse over the image tag. You should see something like:
   <img src="/docs/width-attribute.png" />
4. Voila! A good width and height are available on the "Rendered size"
   attribute. In this case, `width` is 270px and `height` is 377px

Now, open your component and fill the width/height values:

```tsx
import Image from "deco-sites/std/components/Image.tsx";

export default function MyComponent() {
  return <Image src="https://example.com/image.png" width={270} height={377} />;
}
```

For Pictures, apply the same method for each Source attribute:

```tsx
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

function MyComponent() {
  return (
    <Picture>
      <Source
        media="(max-width: 768px)"
        src="https://example.com/image-mobile.png"
        width={270}
        height={377}
      />
      <Source
        media="(min-width: 768px)"
        src="https://example.com/image-desktop.png"
        width={800}
        height={1200}
      />
      <img
        src="https://example.com/image-desktop.png"
        class="w-full h-full object-cover"
      />
    </Picture>
  );
}
```

#### Optimally loading images - improving LCP

For a good LCP, not only you need to deliver small payloads, but also, you need
to load assets on the right order, prioritizing those that are visibile on the
screen over those that are below the fold. A good heuristic is to:

1. Proritize the LCP image.
2. Lazy load all other images.

Hopefully, deco `<Image>` and `<Picture>` components help us achieving this
behavior. Start by locating the LCP element on your screen. After that, open the
component's code and make sure:

1. `preload` attribute is set
2. `loading` attribute is set to 'eager'
3. `fetchPriority` attribute is set to 'high'

For instance, for an `<Image/>` component:

```tsx
import Image from "deco-sites/std/components/Image.tsx";

export default function MyComponent() {
  return (
    <Image
      src="https://example.com/image.png"
      width={270}
      height={377}
      preload
      loading="eager"
      fetchPriority="high"
    />
  );
}
```

For a picture:

```tsx
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

function MyComponent() {
  return (
    <Picture preload>
      <Source
        media="(max-width: 768px)"
        src="https://example.com/image-mobile.png"
        width={270}
        height={377}
      />
      <Source
        media="(min-width: 768px)"
        src="https://example.com/image-desktop.png"
        width={800}
        height={1200}
      />
      <img
        loading="eager"
        fetchPriority="high"
        src="https://example.com/image-desktop.png"
        class="w-full h-full object-cover"
      />
    </Picture>
  );
}
```

Also, make sure that all other images visible on the screen do NOT have the
`preload` attribute set and are set to `loading="lazy"`.

> Note that a web page should have one single preloaded image. Preloading
> multiple images may actually harm LCP. To verify only one single image is
> being preloaded, open devTools and search for `<link rel="preload">` tags. You
> should find a single tag for the whole page.

<!-- TODO: Link with the LiveImage type which automatically adds an image upload -->

Do you want to learn what's under Image, Picture and Source components? Take a
look at:
[Image.tsx](https://github.com/deco-cx/live/blob/main/std/ui/components/Image.tsx)
,
[Picture.tsx](https://github.com/deco-cx/live/blob/main/std/ui/components/Picture.tsx)

**References:**

<https://github.com/deco-cx/live/blob/main/std/ui/components/Image.tsx>

<https://github.com/deco-cx/live/blob/main/std/ui/components/Picture.tsx>

<https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset>

<https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/sizes>

<https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture>

<https://dev.to/antonfrattaroli/what-happens-when-you-type-googlecom-into-a-browser-and-press-enter-39g8>

<https://imagekit.io/responsive-images/#chapter-1---what-is-responsive-images>

<https://caniuse.com/>
