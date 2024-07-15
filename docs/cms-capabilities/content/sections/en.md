---
description: Working with sections
since: 2.0
---

Sections represent components that can be used to build a page. A section is a
Preact component, which means it transforms the properties passed to it into
HTML.

When you open the sections (sidebar `Content > Sections`), you will have access
to a set of saved sections, the component library, and the ability to create and
save sections.

<img width="640" alt="Sections Listing" src="/docs/cms-capabilities/sections/sections1.png">

The different categories in the listing are obtained from the directory where
the section is located or from the originating **App** (an **App** can import
different sections).

From this screen, you can:

<img width="480" alt="Options in the Sections Listing" src="/docs/cms-capabilities/sections/sections2.png">

- **Saved**: List saved sections
- **Library**: List and test all available sections for use
- **Create new Section**: Create new sections

## Modifying saved sections

A **saved section** represents a component that can be shared across multiple
pages. Elements like **Footer** and **Header** can be shared between different
pages, allowing their properties to be configured only once.

<img width="480" alt="Saved Sections" src="/docs/cms-capabilities/sections/sections3.png">

Saved sections can be configured from this screen, affecting all sections in the
system. By clicking on a saved section, you can modify its previously configured
properties.

<img width="640" alt="Modifying a saved section" src="/docs/cms-capabilities/sections/sections4.png">

## Configuring a section

When selecting a section, you can define its properties. Some properties may
require selecting an image, text, item selection, or even a **loader**. A
**loader** is an entity that loads data and can receive configurations (by
selecting a loader from the library) or already be configured (saved loaders).

<img width="640" alt="Sections Library" src="/docs/cms-capabilities/pages/pages4-1.png">

## Listing and testing other sections

When listing sections in the library and clicking on a section, you gain access
to a preview of the section, as well as access to the original code of that
element. It is also possible to edit the code to test changes in the
functionality of the component.

<img width="640" alt="Section Preview" src="/docs/cms-capabilities/sections/sections5.png">

In the right sidebar, you can access:

- `🌐` Element preview
- `☰` Form with properties
- `{}` Textual description of properties
- `</>` Code editor
- `🖥️` Logs related to section preview
- `✨` Decopilot: AI for code modification

## Creating a new Section

You can create a saved section (a shareable component across multiple pages) or
the base (template) of a section.

<img width="320" alt="Creating a section" src="/docs/cms-capabilities/sections/sections6.png">

- **New template**: Creates a section that will be available in the component
  library. This means creating a code base that defines a set of properties and
  a program to generate the associated HTML.
- **Using a template**: Creates a saved section based on an existing base. The
  name will be the identifier of this element among different pages.
