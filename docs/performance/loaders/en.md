---
description: Sending only necessary data to the client
since: 1.0.0
---

### Summary

> Loaders are mechanisms for data loading. There are some tips on how to
> optimize their usage. Here are some tips:
>
> 1. When the loader is reused in different sections or pages, it is recommended
>    to use a saved loader (reusable)
> 2. Do not make `fetch` requests in inline loaders
> 3. Sections that load data and are not displayed on the initial screen (above
>    the fold) can be deferred

# Reusing Loaders

The system's `sections` can have data loaded via `loaders`. These loaders can be
defined within the section itself or loaded from saved entities.

These saved entities can be created from loader blocks.

![Creating a loader](https://github.com/deco-sites/starting/assets/882438/47c63784-4839-4d97-aff4-8c1e8e18332a)

When saving a loader, it is guaranteed to be reusable in different sections. In
addition to allowing props to be changed and reflected in all places where this
loader is used, using this saved loader allows for optimizing the system's
usage.

During a page like the Product Description Page (PDP), it is necessary to load
information about the product twice: once for SEO details loading and once for
displaying the product itself. By using the same loader, Deco optimizes it so
that the loader is executed only once during the page rendering cycle.

![image](https://github.com/deco-sites/starting/assets/882438/a39e3806-89e4-4b22-a179-491c048b18f7)

# Do Not Make `fetch` Requests in Inline Loaders

Inline loaders allow for enriching a section in a very direct way. During the
execution of the inline loader, it is even possible to make fetch requests or
invoke other loaders.

Although possible, this strategy is not recommended. Creating a prop to receive
this data, creating a loader itself to load it, and making this connection
through the admin is a safer strategy to ensure that it is optimized.

This is because inline loaders are not optimized by nature. On the other hand,
loaders defined and loaded by the admin can be optimized to be executed only
once or at the best time for the system.

# Deferred Section

![image](https://github.com/deco-sites/starting/assets/882438/06b0fde3-874f-4b26-84b5-d4a41c94e5de)
