---

description: Editing sections  
since: 1.0.0  

---

# Introduction to Sections (dev)

A Section represents a configurable UI element for a Deco site. It is essential
to understand what this entails for a developer.

A Section is a `tsx` file inside the `sections` folder. Additionally, a Section:

- is a [Preact](https://preactjs.com/) component
- has serializable properties
- exports its properties type

A Preact component is a function exported by default (`export default`). It
receives properties, returns JSX, and is invoked during each rendering of the
defined element.

Let's explore how we can manipulate these sections and see the changes reflected
in the Admin interface.

## 1. Open the Hero section

As an example, open the `Hero.tsx` section in the Admin interface of the site
you created in a [previous tutorial](/docs/en/getting-started/creating-a-site).
Click on the `</>` icon on the right bar to view the section's code.

The code for this element is written in HTML with JavaScript, as shown in the
example below.

![Hero Section Code](/docs/editable-section/hero-section-code.png)

Observe the exported types in this file. These same types are accessible in the
section properties form when you click on the list icon on the right bar.

![Editing properties of the Hero Section](/docs/editable-section/section-props.png)

**Section and its properties types**

## 2. Run your site locally

Follow the [environment configuration](/docs/en/developing-guide/setup) steps
and run your project locally to see the changes you make in the code reflected
in the Admin interface.

## 3. Add a new property to the Hero section

Modify the code of `sections/Hero.tsx` to receive a new optional property, the
`size` of a CTA button. Add to the `CTA` type a new property, `size`, which must
be one of these strings: "xs", "sm", "md", and "lg".

```tsx
export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
}
```

This type of field indicates to the Admin that this property can only assume
these values, prompting the platform to show a select component to edit this
field.

You can read more about these field formats and types in the
[Widget documentation](/docs/en/developing-capabilities/section-properties/widgets).

Let's add a CTA button in our Hero section to see the modification:

![CTA Button Example](/docs/editable-section/cta-button-example.png)

Now the CTA has the size field:

![CTA Size Field](/docs/editable-section/cta-size-field.png)

We will also modify the JSX content to make the CTA button size change according
to the option selected in the Admin form:

```tsx
...

<div class="flex items-center gap-3">
  {cta?.map((item) => (
    <a
      key={item?.id}
      id={item?.id}
      href={item?.href}
      target={item?.href.includes("http") ? "_blank" : "_self"}
      class={`font-normal btn btn-primary ${item.outline && "btn-outline"} ${
        item.size && `btn-${item.size}`
      }`}
    >
      {item?.text}
    </a>
  ))}
</div>

...
```

With this change, you can adjust the button size through the Admin form:

![CTA Button Size Adjustment](/docs/editable-section/cta-button-size-adjustment.gif)

## 4. Ready to go!

Now you can configure `props` for the Sections in your site and see how they are
rendered. The preview will automatically update if you modify the Section's code
locally.

To deploy the changes, push your updates to the main branch or publish your
environment in the Admin interface.
