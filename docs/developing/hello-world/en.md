---
description: Creating a Section
since: 1.0.0
---

# Summary
1. Creating a Section
2. Properties of a Section
3. Theming the Section with DaisyUI

# Creating a Section

The Section is a [Preact](https://preactjs.com/) component that is configurable in the Admin. In order for the Section to be visible in the Admin, it is necessary to create this component in the `sections/` folder or in one of its subdirectories.

Start by creating a Section and then explore different types of properties and property specializations in the admin.

Open your site's folder in an IDE and perform the following actions:

1. Create a `.tsx` file in the `sections/` folder of your Site with the desired name
   for the Section (e.g.: `LatestPosts.tsx`).

2. Export a [Preact](https://preactjs.com/) component **using `export default`** as shown in the example below. File `sections/LatestPosts.tsx`:

      ```tsx
      export interface Props {
        title: string;
      }

      export default function LatestPosts({ title }: Props) {
        return (
          <div>
            <h1 class="font-bold">{title}</h1>
            <p>This is an example section</p>
          </div>
        );
      }
      ```

**Done!** The Section has been created locally in your project.

If the project is running locally (`deno task start`) and if the environment selector is pointing to `localhost:8000`, it will be possible to see the new Section in the block library (**Library**).

# Properties of a Section

A Section can have any property that is serializable and accept as a property in deco admin. That includes:

- `strings` and `numbers`
- Simple types of serializable objects
- Generated types from union, extends, `Pick`, or `Omit`
- `Sections` (`import { Section } from "deco/blocks/section.ts"`)
- `Image` (`import { ImageWidget as Image } from "apps/admin/widgets.ts"`) and other components from the deco standard library
- Arrays of the types indicated above

In addition to those types, it is possible to annotate some properties so that the admin form changes the input mechanism or to determine certain aspects of the property's behavior.

As an example, let's add three new properties to our `LatestPosts` component, one for an image (`photo`), another for the post body (`post`), and one for the post time.

```tsx
import type { ImageWidget as DecoImage } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
   /**
    * @title Post image.
    */
   photo?: DecoImage;
   /**
   * @title Post body.
   */
   post: string;
   /**
   * @title Publish date.
   * @format datetime
   */
   datetime: string;
   /**
   * @title Post title.
   */
   title: string;
}

export default function LatestPosts({ title, photo }: Props) {
   return (
      <div>
      {photo && <Image
         src={photo}
         alt={`${title} image`}
         height={500}
         width={500}
         class="rounded"
      />}
      <h1 class="font-bold">{title}</h1>
      <p>This is an example section</p>
      </div>
   );
}
```

Upon saving and loading the admin in the local environment (with deno running), you can see that the admin prepares its own form components for the placement of images, dates, as well as indicating what each field is based on the title indicated in the code.

# Theming the Section with DaisyUI

In the deco base project, it is possible to access a special Section called `Theme.tsx`. This section defines tokens and special class names that can be used by other Sections following the structure of the DaisyUI tool. Inside `Theme.tsx`, you can observe some tokens like the main color tokens:

```tsx
export interface MainColors {
  /**
   * @format color
   * @title Base
   * @default #FFFFFF
   */
  "base-100": string;
  /**
   * @format color
   * @title Primary
   * @default #003232
   */
  "primary": string;
  /**
   * @format color
   * @title Scondary
   * @default #8C3D3D
   */
  "secondary": string;
  /**
   * @format color
   * @title Tertiary
   * @default #00FF7F
   */
  "tertiary": string;
}
```

Modify the post class to make use of some tokens. For example, the main title of the post now follows the primary color of the site.

```tsx
import type { ImageWidget as DecoImage } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
   /**
    * @title Post image.
    */
   photo?: DecoImage;
   /**
   * @title Post body.
   */
   post: string;
   /**
   * @title Publish date.
   * @format datetime
   */
   datetime: string;
   /**
   * @title Post title.
   */
   title: string;
}

export default function LatestPosts({ title, photo }: Props) {
   return (
      <div>
      {photo && <Image
         src={photo}
         alt={`${title} image`}
         height={500}
         width={500}
         class="rounded"
      />}
      <h1 class="font-bold text-primary">{title}</h1>
      <p>This is an example section</p>
      </div>
   );
}
```

The source code of Theme.tsx demonstrates different uses of the tokens. Now, if a Theme component is on the same page as LatestPosts, the latter can be styled from the theme component.

![Styling with the theme component](https://github.com/deco-sites/starting/assets/882438/58860548-d4e4-46f8-a198-75461cf8ab86)