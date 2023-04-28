---
description: Learn how to create Layouts for your pages.
since: 1.0.0
---

# Summary

1. Introduction to Page Layouts
   - What are Page Layouts?
   - Why use Page Layouts?
2. Creating a Page Layout
   - Adding a new Section named `Slot.tsx`.
   - Setting the Slot name.
3. Using a Page Layout
   - Assigning a Page Layout to a Page.
4. Implementing Slots in a Page Layout
   - Using `UseSlot.tsx` to override a Slot's content.

# Introduction to Page Layouts

## What are Page Layouts?

_Page Layouts_ are reusable **pages** that define the overall structure and
content of a page. They allow you to separate the layout and design of a page
from its content, making it easier to maintain and update your website. With
_Page Layouts_, you can create a consistent look and feel across all of your
pages, while also allowing for flexibility and customization.

## Why use Page Layouts?

Using Page Layouts has several benefits:

- **Consistency**: By using the same layout across all of your pages, you can
  create a consistent look and feel for your website.
- **Reusability**: Page Layouts can be reused across multiple pages, saving time
  and effort.
- **Separation of concerns**: Page Layouts separate the layout and design of a
  page from its content, making it easier to maintain and update your website.
- **Customization**: Page Layouts can be customized to meet the specific needs
  of individual pages.

Now that we know what Page Layouts are and why we should use them, let's see how
to create them.

# Creating a Page Layout

Creating a page layout in live.ts is a simple process that can be done entirely
through the deco.cx's Admin. You do not need to write any code to create a
layout. Instead, you will be adding a new section named `Slot.tsx` to your
existing pages, and then saving those pages as layouts.

## Adding `Slot.tsx` section

To get started, open the live.ts deco.cx's Admin and navigate to an existing
page that you would like to use as a page for your layout. In the page editor,
click the "+" button.

In the "Add Section" dialog, select `Slot.tsx` from the list of available
section types. This will create a new section in your page that will be used as
the content area for pages that use this layout.
<img width="1511" alt="image" src="https://user-images.githubusercontent.com/5839364/232626099-d60adc7c-c84f-4b11-aae2-e96a94328b0f.png">

## `Slot.tsx` name

Optionally, you can give your slot section a name that will be displayed in the
deco.cx's Admin for pages that use this layout. To do this, open the slot
section by clicking the section header, and then enter a name in the "Slot Name"
field in the section settings panel.

<img width="297" alt="image" src="https://user-images.githubusercontent.com/5839364/232628023-d3fb4759-7232-491e-82fc-a2a9b6240ccb.png">

By default slots are used as a content slot but you can freely change as you
wish.

Once you have created your slot section, you can save this page as a layout by
clicking the "_Save_" button in the page editor. Give your layout a name, and
then click "_Save_". Your layout will now be available for use in other pages.

# Using a page layout

## Assigning a Page Layout to a Page

To use your new layout in a page, open the page editor for the page you want to
use the layout in, and click the "_Layout_" button at the top of the page
editor. This will open the layout selector dialog.

In the layout selector dialog, you will see a list of available layouts. Select
the layout you want to use, and then click "_Apply_". The layout will now be
applied to your page, and the content area will be populated with the sections
added in the current page. Optionally you can add the `UseSlot.tsx` block to
fulfill a specific block.

## Implementing Slots in a Page Layout

By implementing slots from the chosen page layout, you can easily replace the
default content of a specific section with your own content. This is done by
creating a `UseSlot.tsx` component and matching it with a parent's `Slot.tsx`
component in the layout. The content in the `UseSlot.tsx` component will then be
displayed in place of the default content of the corresponding `Slot.tsx`
component.

<img width="1507" alt="image" src="https://user-images.githubusercontent.com/5839364/232627019-db68b918-d1d7-4528-af9f-9fd33d4f4b0a.png">

That's it! You have now created a page layout using live.ts, and can use it to
quickly create new pages with a consistent layout and structure.
