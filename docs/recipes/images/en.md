---
description: Learn how to use images on your website without losing performance.
---

> TL;DR
>
> To improve your page's LCP metric, where the LCP element is a image, use
> responsive images with adequate dimensions and the link tag in the head of the
> document with the properties `rel="preload" as="image" href="<<image_src>>"`.
>
> Live offers Image, Picture and Source components that do this automatically.

In this post we will learn about how to use the tag properties of `<img>` and
`<link>` tag to improve performance and browsing experience on page. Finally,
how to use the live image component to get the most performance using the
properties of the `<img>` tag, together with the `<link>` tag. Basic knowledge
of HTML and CSS will be required to understand the concepts described here.

If you are a frontend developer, you must have come across one of these two
images, the first is the CoreWebVitals report from PageSpeed Insights, the
second is the Lighthouse report.

<img width="964" alt="PageSpeed Results" src="https://user-images.githubusercontent.com/18706156/224483655-907ec9fe-77b4-4c6a-9794-be382fe4deeb.png">

#### 

<img width="960" alt="PageSpeed Results" src="https://user-images.githubusercontent.com/18706156/224483656-bbf928ff-f96b-4156-83af-732dc3935ecb.png">

You can see that the Largest Contentful Paint (LCP) metric is painted in red in
both images. But what is LCP? LCP is a metric that indicates how long it took,
in seconds, to display the largest text or image of a page. Based on this time,
Lighthouse, a tool that calculates this metric, categorizes into: "Good",
"Improving" and "Bad".

Why is it important to improve the LCP? Google, creator of Lighthouse, and
others companies conducted research and identified that there is a correlation
between a low LCP and a high page conversion.

Assuming we want sites that convert more, how can we improve the LCP of a page,
that the LCP element is an image? We will look at some strategies for decrease
the time of the LCP

#### Adjust image size based on viewport

The first approach consists of downloading images of smaller dimensions, making
so that less image data travels on the internet and, consequently, downloading
them faster, causing the LCP to decrease. to download images smaller, we can use
some approaches, one of them is the property
[**srcset**](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset)
from the img tag.

#### Srcset

The **srcset** property consists of providing candidate images to be rendered by
the browser, considering the width of the viewport or the density of device
screen pixel (DPR). In this example below, the candidate images are being
considered based on the device viewport.

```html
<img
   src="/image-1920px.png"
   srcset="/image-720px.png 720w, /image-1024px.png 1024w, /image-1920px.png 1920w" />
```

This example shows that for dimensions of up to 720px renders image
`image-720px.png` , for dimensions up to 1024px renders the image
`image-1024px.png` , and so on.

The table below shows how the browser chooses the candidate image.

| Viewport Width | DPR | Width of **viewport** considering DPR (viewport width x DPR) | Image chosen by browser (currentSrc) |
| -------------- | --- | ------------------------------------------------------------ | ------------------------------------ |
| 360px          | 1   | 360 × 1 = 360px                                              | /image-720px.png                     |
| 360px          | 2   | 360 × 2 = 720px                                              | /image-720px.png                     |
| 360px          | 3   | 360×3 = 1080px                                               | /image-1920px.png                    |
| 420px          | 1   | 420 × 1 = 420px                                              | /image-720px.png                     |
| 420px          | 2   | 420 × 2 = 840px                                              | /image-1024px.png                    |
| 1440px         | 1   | 1440 × 1 = 1440px                                            | /image-1920px.png                    |

> currentSrc is a property that represents the src chosen by the browser to be
> rendered. This property can be found in the DOM elements of the type
> HTMLImageElement.

#### Sizes + srcset

In some cases it is interesting to render different images and in different
dimensions different based on the viewport, however the srcset property cannot
handle with this case. To deal with this, there is the property
[**sizes**](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/sizes)
from the img tag.

The **sizes** property has a comma-separated list, and each value describeeve
the width of the rendered image relative to the viewport. Using the same
previous example, adding sizes:

```html
<img
   src="/image-1920px.png"
   sizes="(max-width: 720px) 100vw, (max-width: 1024px) 50vw, 25vw"
   srcset="/image-720px.png 720w, /image-1024px.png 1024w, /image-1920px.png 1920w" />
```

In the browser example above, with the sizes property, you indicate to the
browser that:

- if the viewport is less than or equal to 720px, then the rendered image will
  have the 100vw width;
- if the viewport is greater than 720px and less than or equal to 1024px, then
  the image rendered will have a width of 50vw
- any other screen size larger than 1024px, then the image to rendered will have
  a width of 25vw

> The size value of the image that will be rendered can be described with px,
> cm, em, ex or vw.

The table below shows how the browser selects candidate images. described in
**srcset**

| Viewport Width | Image Width               | DPR | Width of the **image** considering DPR (viewport width x DPR) | Image chosen by browser (currentSrc) |
| -------------- | ------------------------- | --- | ------------------------------------------------------------- | ------------------------------------ |
| 360px          | 100vw = 1 \* 360px        | 1   | 360 × 1 = 360px                                               | /image-720px.png                     |
| 360px          | 100vw = 1 \* 360px        | 2   | 360 × 2 = 720px                                               | /image-720px.png                     |
| 420px          | 100vw = 1 × 420px         | 1   | 420 × 1 = 420px                                               | /image-720px.png                     |
| 420px          | 100vw = 1 × 420px         | 2   | 420 × 2 = 840px                                               | /image-1024px.png                    |
| 760px          | 50vw = 1/2 × 760 = 380px  | 1   | 380 × 1 = 380px                                               | /image-720px.png                     |
| 760px          | 50vw = 1/2 × 760 = 380px  | 2   | 380 × 2 = 760px                                               | /image-1024px.png                    |
| 1440px         | 25vw = 1/4 × 1440 = 360px | 1   | 360 × 1 = 360px                                               | /image-720px.png                     |
| 1512px         | 25vw = 1/4 × 1512 = 378px | 2   | 378 × 2 = 756px                                               | /image-1024px.png                    |

These are the ways to render candidate images from the example img tag.

#### \<picture\> and \<source\>

When it is necessary to have different images based on the width of the viewport
it is recommended to use the `picture` and `source` tags. The source tag, used
as child of the picture tag, has the sizes and srcset properties with the same
semantics as of the `<img>` tag, besides these two there is the media property
that receives a value from media query. When the average value is present in the
source tag, the browser elects, only, the images present in the srcset of the
source tag whose media query match. see the example

```html
<picture>
   <source media="(max-width: 720px)" srcset="/image-360px.png 360w, /image-720px.png 720w" />
   <source media="(max-width: 1024px)" srcset="/image-1024px.png 1024w" />
   <source media="(min-width: 1025px)" srcset="/image-1920px.png 1920w"/>
   <img src="/image-1920px.png" />
</picture>
```

See below how the browser chooses the images:

| Viewport Width | Image Width        | DPR | Width of the **image** considering DPR (viewport width x DPR) | Image chosen by browser (currentSrc) |
| -------------- | ------------------ | --- | ------------------------------------------------------------- | ------------------------------------ |
| 360px          | 100vw = 1 \* 360px | 1   | 360 × 1 = 360px                                               | /image-360px.png                     |
| 360px          | 100vw = 1 \* 360px | 2   | 360 × 2 = 720px                                               | /image-720px.png                     |
| 420px          | 100vw = 1 × 420px  | 1   | 420 × 1 = 420px                                               | /image-720px.png                     |
| 420px          | 100vw = 1 × 420px  | 2   | 420 × 2 = 840px                                               | /image-720px.png                     |

Note that even if the image width is greater than 720px, the browser does not
elects images from another source tag that have larger width.

For more information about the picture tag and source:
<https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture> and
[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source "https://developer.mozilla.org/en-US/docs/Web/HTML/Elemind/source").

#### Prioritizing image loading

To recap, we want to offer a good performance of your page and a good usability.
So far in this tutorial we have learned how to optimize resources consumed by
the browser through different images of adequate dimensions.

Furthermore, the browser allows changing the priority of some "activities",
during its
[lifecycle](https://dev.to/antonfrattaroli/what-happens-when-you-type-googlecom-into-a-browser-and-press-enter-39g8)
to render a page. One way to change the priority is through the **loading**
properties of the `<img>` tag.

The **loading** property can take on two values:

- **eager**: the image is loaded immediately, regardless of whether or not
  inside the viewport. This is the default value for the loading property;
- **lazy**: postpone loading the image until the image is at a certain viewport
  distance. This distance varies and is defined by the implementation of the
  browser.

So, for images that are outside the viewport or not displayed as soon as the
page is loaded, it is interesting to have the loading property with `lazy` value
to save bandwidth and storage resources.

The browser also lets you tell it how to decode an image outside of main thread
improving the overall performance and usability of the application. That it is
done through the **decoding** property of the `<img>` tag.

The **decoding** property can take on three values:

- **sync:** decode synchronously and on the main thread;
- **async:** decode asynchronously and outside the main thread;
- **auto:** default value, no preference for decoding, browser chooses the best
  way to decode;

This way, for images that are outside the viewport or not displayed right away
that the page is loaded, it is interesting to have the decoding property with
value `async` to save cpu resources.

Example using loading and decoding properties;

```html
<!-- image above the fold -->
<img src="/imagem.png" loading="eager" />

<!-- image below fold or not rendered on page load -->
<img src="/imagem.png" loading="lazy" decoding="async" />
```

In tests performed with 3 images above the fold with loading eager, it was
comparing sync vs async decoding, the result was inconclusive.

For more information see the PR: <https://github.com/deco-sites/fashion/pull/60>

#### <link rel="preload" as="image" fetchpriority="high" />

It is also possible to tell the browser that a resource can be preloaded. even
before the browser arrives and needs it. In this way it is possible to pre load
the image that is the LCP of the page, even before the browser identifies the
`<img>` tag gives image. To do this you can use the `<link>` tag inside of the
`<head>` tag.

In addition, it is possible to prioritize the request of a resource through the
property **fetchpriority,** of the `<link>` tag, with value "high" and the sizes
query of the image.

Example below shows how to preload an image, which is the LCP, and increase the
priority of your request.

```html
<head>
   <link rel="preload" as="image" fetchpriority="high" media="(max-width: 720px)" href="/image-720px.png" imagesrcset="/image-720px.png 720w" / >
   <link rel="preload" as="image" fetchpriority="high" media="(max-width: 1024px)" href="/image-1024px.png" imagesrcset="/image-1024px.png 1024w" / >
   <link rel="preload" as="image" fetchpriority="high" media="(min-width: 1025px)" href="/image-1920px.png" imagesrcset="/image-1920px.png 1920w" / >
</head>
<body>
   <picture>
     <source media="(max-width: 720px)" srcset="/image-720px.png 720w" />
     <source media="(max-width: 1024px)" srcset="/image-1024px.png 1024w" />
     <source media="(min-width: 1025px)" srcset="/image-1920px.png 1920w"/>
     <img src="/image-1920px.png" />
   </picture>
</body>
```

#### Using Live's Image component

Live's Image component built with the purpose of enabling maximum performance of
your page using the mentioned properties previously. Furthermore, the default
Image and Source component uses optimized images in webp format and adds srcset
with images with 1x width, 1.5x and 2x the dimension passed to the component.

**Using the Image component**

```tsx
import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export type Props = {
  imageUrl: LiveImage;
};

export default function MyComponent(props: Props) {
  return (
    <Image
      src={props.imageUrl}
      sizes="(max-width: 640px) 100vw, 50vw"
      width={420}
      height={420}
      loading="eager"
      decoding="async"
      fetchPriority="high"
      preload
    />
  );
}
```

The `LiveImage` property type is used to allow admin user to upload a image to
it, but returns a string with the image address.

The Image component's preload property adds a link tag with **preload** in the
**head** of `document`. The HTML generated with this component:

```html
<html>
   <head>
     <link rel="preload" as="image" href=/image.png" imagesrcset=".../w-420,h-420/image.png 420w, .../w-630,h-630 /image.png 630w, .../w-840,h-840/image.png 840w" imgagesizes="(max-width: 640px) 100vw, 50vw" fetchpriority="high" />
   </head>
   <body>
     <img src="/image.png" srcset=".../w-420,h-420/image.png 420w, .../w-630,h-630/image.png 630w, .../w-840,h-840/image.png 840w" sizes="(max-width: 640px) 100vw, 50vw" width={420} height={420} loading="eager" decoding="async" />
  </body>
</html>
```

**Utilizando o componente Picture e Source**

```tsx
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

function MyComponent() {
  return (
    <Picture class="w-screen block" preload>
      <Source
        media="(max-width: 767px)"
        fetchPriority="high"
        src="/image-mobile.png"
        width={360}
        height={331}
      />
      <Source
        media="(min-width: 768px)"
        fetchPriority="high"
        src="/image-desktop.png"
        width={1366}
        height={517}
      />
      <img
        class="object-cover w-full"
        loading="eager"
        decoding="async"
        src="/image-desktop.png"
        width={1366}
        height={517}
      />
    </Picture>
  );
}
```

The HTML generated with this component:

```html
<html>
  <head>
   <link as="image" rel="preload" href="/image-mobile.png" imagesrcset=".../w-360,h-600/image-mobile.png 360w, .../w- 540,h-900/image-mobile.png 540w, .../w-720,h-1200/image-mobile.png 720w" fetchpriority="high" media="(max-width: 767px)">
   <link as="image" rel="preload" href="/image-desktop.png" imagesrcset=".../w-1366,h-600/image-desktop.png 1366w, .../w- 2049,h-900/image-desktop.png 2049w, .../w-2732,h-1200/image-desktop.png 2732w" fetchpriority="high" media="(min-width: 768px)">
  </head>
  <body>
   <picture>
    <source media="(max-width: 767px)" fetchpriority="high" width="360" height="600" srcset=".../w-360,h-600/image-mobile.png 360w, .../w-540,h-900/image-mobile.png 540w, .../w-720,h-1200/image-mobile.png 720w">
    <source media="(min-width: 768px)" fetchpriority="high" width="1366" height="600" srcset=".../w-1366,h-600/image-desktop.png 1366w, .../w-2049,h-900/image-desktop.png 2049w, .../w-2732,h-1200/image-desktop.png 2732w">
    <img class="object-cover w-full" loading="eager" decoding="async" src="/image-desktop.png" alt="Female">
   </picture>
  </body>
</html>
```

<!-- TODO: Link with the LiveImage type which automatically adds an image upload -->

For more information about the Image, Picture and Source componenents ofered by
Live, go to:
https://github.com/deco-cx/live/blob/main/std/ui/components/Image.tsx ,
https://github.com/deco-cx/live/blob/main/std/ui/components/Picture.tsx

**References:**

<https://github.com/deco-cx/live/blob/main/std/ui/components/Image.tsx>

<https://github.com/deco-cx/live/blob/main/std/ui/components/Picture.tsx>

<https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset>

<https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/sizes>

<https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture>

<https://dev.to/antonfrattaroli/what-happens-when-you-type-googlecom-into-a-browser-and-press-enter-39g8>

<https://imagekit.io/responsive-images/#chapter-1---what-is-responsive-images>

<https://caniuse.com/>
