---
description: Creating a Section
since: 1.0.0
---

Now that you are more familiar with Sections and how they are used in the 
admin, let's create a Section from scratch. In this guide, you will learn 
how to create a Section, add properties to it, and style it with your 
themes.

Open your site's folder in an IDE and perform the following actions:

## 1. Create a `.tsx` file in the `sections/` folder

Create a `.tsx` file in the `sections/` folder of your site with the 
desired name for the Section (e.g., `Post.tsx`).

The Section is a [Preact](https://preactjs.com/) component that is 
configurable in the Admin. For the Section to be visible in the Admin, you 
need to create this component in the `sections/` folder or one of its 
subdirectories.

## 2. Export the component

Export a [Preact](https://preactjs.com/) component **using `export default`** 
as shown in the example below:

  `sections/Post.tsx`
  ```tsx
  export interface Props {
    title: string;
  }

  export default function Post({ title }: Props) {
    return (
      <div>
        <h1 class="font-bold">{title}</h1>
        <p>This is an example section</p>
      </div>
    );
  }
  ```

**Done!** The Section has been created locally in your project.

## 3. View the Section in the Admin

Run the project locally as you did before in the [setup](/docs/en/developing-guide/setup). 
By selecting your local environment in the Admin, you can view the new 
Section in the Sections library (**Sections**) and add it to a page.

![New section in the section library](/docs/hello-world/new-section.png)

## 4. Adding properties to the Section

Let's add three new properties to our `Post` component: one for an image 
(`photo`), another for the post body (`post`), and one for the post time 
(`datetime`).

```tsx
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /**
   * @title Post image.
   */
  photo?: ImageWidget;
  /**
   * @title Post body.
   * @format textarea
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

export default function Post({ title, photo, datetime, post }: Props) {
  return (
    <div>
      {photo && (
        <Image
          src={photo}
          alt={`${title} image`}
          height={300}
          width={300}
          class="rounded"
        />
      )}
      <h1 class="font-bold text-lg">{title}</h1>
      <p>Published at: {datetime}</p>
      <p>This is an example section</p>
      <p>{post}</p>
    </div>
  );
}
```

A Section can have any property that is serializable and interpretable in 
the properties form in the deco admin. This includes:

- `strings` and `numbers`
- Simple types of serializable objects
- Types generated from union, extends, `Pick`, or `Omit`
- `Sections` ( `import { Section } from "deco/blocks/section.ts"` )
- `ImageWidget` (`import type { ImageWidget } from "apps/admin/widgets.ts";`) 
and other components from the admin
- Arrays of the types listed above

In addition to the types above, it is possible to annotate some properties so 
that the admin form changes the input mechanism or determines certain aspects 
of the property's behavior (through the `@format` annotation, for example). 
Read more about [these annotations here](/docs/en/developing-capabilities/section-properties/widgets).

## 5. Viewing the new properties in the Admin

With the project running locally, open the Section again in the Admin. You will 
see the new properties added to the `Post` component. The admin prepares its 
own form components for inserting images, dates, and indicates what each field 
is based on the `title` provided in the code.

![Section properties form in the admin](/docs/hello-world/section-properties.png)

## 6. Theming the Section

### 6.1 Site Theme

In the deco base project, you can access a special Section called `Theme.tsx`. 
This section defines tokens and special class names that can be used by other 
Sections following the DaisyUI tool structure. Inside `Theme.tsx`, you can see 
some tokens like the main color tokens:

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
   * @title Secondary
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

The colors of each token can be changed in the Admin, under the Themes tab. 
There, you can change the colors of your current theme or create a new theme.

![Changing theme colors](/docs/hello-world/themes.png)

### 6.2 Page Theme

Besides the site theme, it is possible to change the theme of a specific page. 
To do this, just access a specific page in the Admin and add the desired theme 
section.

![Choosing the page theme](/docs/hello-world/add-section.png)

![Changing the page theme](/docs/hello-world/section-themes.png)

In this case, we added the Groovy Vibes theme section to the My New Page. 
This specific page now has a different theme from the rest of the site.

![Adding the Groovy Vibes theme](/docs/hello-world/page-theme.png)

### 6.3 Styling the Section

Adapt the post class to make use of some tokens. For example, the main title 
of the post now follows the primary color of the theme.

```tsx
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /**
   * @title Post image.
   */
  photo?: ImageWidget;
  /**
   * @title Post body.
   * @format textarea
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

export default function Post({ title, photo, datetime, post }: Props) {
  return (
    <div>
      {photo && (
        <Image
          src={photo}
          alt={`${title} image`}
          height={300}
          width={300}
          class="rounded"
        />
      )}
      <h1 class="font-bold text-lg text-primary">{title}</h1>
      <p>Published at: {datetime}</p>
      <p>This is an example section</p>
      <p>{post}</p>
    </div>
  );
}
```

Now, the `Post` Section follows the site (or page) theme and uses the 
colors defined in the theme.

![Section with site theme](/docs/hello-world/new-section-with-theme.png)
