---
description: Exporting Default Props in a Block
since: 2.0.0
---

# Summary

1. Overview
2. Current Scenario
3. Exporting Default Props in Function Parameters
4. Implementation
5. Conclusion

# Overview

This document details the current behavior of default values in components within the Admin and introduces a new feature that allows developers to specify default props directly within function parameters. This enhancement improves user experience by ensuring that default values are reflected correctly in both the Admin interface and the rendered components.

# Current Scenario

In the current setup, default values for props are hardcoded within the component's code. This leads to a mismatch between the Admin interface and the rendered component:

1. **Admin:** When a component has default values set in its code, the form in the Admin interface displays empty fields instead of these default values.
2. **Rendered Component:** Despite the empty form fields, the component still renders with the hardcoded default values.
3. **JSON:** The JSON file displayed to the developer in the Admin interface doesn't include these default values, leading to confusion and a poor user experience.

## Example

Consider the following scenario: A footer component has default props defined in its code. In the Admin interface, the form fields for these props are empty, but the component is rendered with the hardcoded values. This disconnect makes it difficult for developers and content managers to map input text to the page data accurately.

```tsx
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  href?: string;
  image?: ImageWidget;
  alt?: string;
  width?: number;
  height?: number;
  text?: string;
  xpto?: {
    xpto2: string;
    xpto3: string[]
  };
}

export default function Footer({ image, href, text, alt, height, width }: Props) {
  const defaultImage = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4959/d7aa9290-074f-417c-99c3-5b0587c8c2ee";
  const defaultHref = "https://deco.cx/";
  const defaultText = "Made with";
  const defaultAlt = "Made with deco.cx";
  const defaultHeight = 20;
  const defaultWidth = 50;
  const defaultXpto = {
    xpto2: "1",
    xpto3: ["1", "2"]
  };

  return (
    <div class="py-8 lg:px-0 px-6 fixed bottom-0 w-full mx-auto">
      <a
        href={href || defaultHref}
        class="flex flex-row gap-1 items-center justify-center text-xs"
        target="_blank"
      >
        {text && <p>{text || defaultText}</p>}
        {image && (
          <Image
            src={image || defaultImage}
            alt={alt || defaultAlt}
            height={height || defaultHeight}
            width={width || defaultWidth}
          />
        )}
      </a>
    </div>
  );
}
```

# Exporting Default Props in Function Parameters

To address this issue, the Admin now supports specifying default props directly within the function parameters of any block. This ensures that default values are consistently reflected in the interface, the rendered component, and the JSON file shown to developers, leading to benefits like:

- **Consistency:** Default values are visible and editable in the admin interface, ensuring a consistent user experience.
- **Clarity:** Developers can see the actual default values in the JSON file, reducing confusion.
- **Simplicity:** Easier to manage and update default values directly within the function parameters.

This feature supports simpler scenarios, covering basic data types and nested objects.

# Implementation
To specify default props in your component, include them directly within the function parameter itself. Below is an example of how to implement this:

```tsx
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  href?: string;
  image?: ImageWidget;
  alt?: string;
  width?: number;
  height?: number;
  text?: string;
  xpto?: {
    xpto2: string;
    xpto3: string[]
  };
}

function Footer({ image, href, text, alt, height, width }: Props = {
  image:
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4959/d7aa9290-074f-417c-99c3-5b0587c8c2ee",
  href: "https://deco.cx/",
  text: "Made with",
  alt: "Made with deco.cx",
  height: 20,
  width: 50,
  xpto: {
    xpto2: "1",
    xpto3: ["1", "2"]
  },
}) {
  return (
    <div class="py-8 lg:px-0 px-6 fixed bottom-0 w-full mx-auto">
      <a
        href={href}
        class="flex flex-row gap-1 items-center justify-center text-xs"
        target="_blank"
      >
        {text && <p>{text}</p>}
        {image && (
          <Image
            src={image}
            alt={alt}
            height={height}
            width={width}
          />
        )}
      </a>
    </div>
  );
}

export default Footer;

```

## Explanation

1. **Default Prop Values:** The default values for image, href, text, alt, height, width, and xpto are specified directly in the function parameter.
2. **Props Interface:** The Props interface defines the structure and types of the props.
3. **Component Logic:** The component logic uses these default values, ensuring they are applied consistently.

# Conclusion

By specifying default props directly in the function parameters, this new feature improves the integration between the admin interface and the component rendering. This change simplifies the workflow for developers and enhances the overall user experience by ensuring that default values are visible and manageable across all parts of the Admin.
