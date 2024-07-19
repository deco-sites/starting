---
description: Loaders (data loading)
since: 2.0
---

Loaders represent components that can be used to load data. Specifically,
loaders can be used to populate data for section properties. If a section
expects to receive structured data representing a product, it can be manually
filled in for a page, but it can also be loaded through a loader.

Loaders can make use of the request context that the user makes, for example,
the URL the user used to access, their location, or other data to determine the
data to be loaded. Similarly, loaders can also make use of the configurations of
an App that it is a part of.

And finally, loaders themselves can have properties that are defined by the
users who use them.

When opening the loaders (sidebar `Advanced > Loaders`), you will have access to
a set of saved loaders, the library of loaders, and the ability to create, edit,
and save loaders.

<img width="640" alt="List of Loaders" src="/docs/cms-capabilities/loaders/loaders1.png">

The different categories present in the listing are obtained from the directory
where the loader is located or from the **App** from which it originates (an
**App** can import different loaders).

From this screen, it is possible to:

<img width="480" alt="Options in the List of Loaders" src="/docs/cms-capabilities/loaders/loaders2.png">

- **Saved**: List the saved loaders
- **Library**: List and test all available loaders for use
- **Create new Loader**: Create new loaders

## Modify saved loaders

A **saved loader** represents a loader that can be used in different sections.
This way, the same loader can have the same configuration applied in different
parts of the site. At the same time, this allows a single change to the saved
loader to impact multiple parts of the system.

> If a page uses the same saved loader in different sections of a page, this
> loader is loaded only once. This makes the system extremely efficient! For
> example, a component like `SearchResult` and `SEOPLP` may need to load
> products from a shelf during page loading. If both sections on that page use
> the same saved loader (e.g., `PLP Loader`), it will be loaded only once.

By clicking on a saved loader, it is possible to modify its previously
configured properties.

<img width="480" alt="Modifying a saved loader" src="/docs/cms-capabilities/loaders/loaders3.png">

When selecting a loader, it will be possible to define its properties. Some of
the properties may require selecting an image, text, item selection, or even
another **loader**!

It is possible to execute a loader to verify which data is returned during its
execution. To do so, you can click on the `Run` button, which will execute the
code associated with that loader and display the response data.

## List and test other loaders

When listing the loaders in the library and clicking on a loader, you will have
access to a preview of the Loader, as well as access to the original code of
that element. It is also possible to edit the code to test changes in the
functionality of the component.

<img width="640" alt="Preview of a loader" src="/docs/cms-capabilities/loaders/loaders4.png">

In the right sidebar, you can access:

- `🌐` Element preview
- `☰` Form with properties
- `{}` Textual description of properties
- `</>` Code editor
- `🖥️` Logs related to the loader preview
- `✨` Decopilot: AI for code modification

## Create a new Loader

It is possible to create a saved loader (a component that can be shared among
multiple sections or blocks) or the base (template) of a loader.

<img width="320" alt="Creating a section" src="/docs/cms-capabilities/loaders/loaders5.png">

- **Create template**: Creates a loader that will be available in the component
  library. This means creating a code base that defines a set of properties and
  a program to return data.
- **Using a template**: Creates a saved loader from an existing base. The name
  will be the identification of this element.
