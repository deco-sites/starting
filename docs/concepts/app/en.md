---
description: Apps - Business Capabilities for Your deco Sites
since: 1.24.0
---

# Deco Apps

Deco Apps are powerful bundles of business capabilities that can be imported and configured into deco sites. An App in deco is essentially a **collection** of various **components**, such as **actions**, **sections**, **loaders**, **workflows**, **handlers**, or any other deco elements that can be used to enhance the functionality of your deco projects.

## Overview

In deco, Apps serve as modular building blocks that encapsulate specific features or capabilities. They enable developers to package and share business-specific functionalities across different projects, making it easier to maintain and scale your deco sites.

By running the command `deno run -A -r https://deco.cx/init` in your terminal, you can start developing an App from scratch and get it up and running quickly.

## App Configuration

Each App can be configured with specific parameters, making it versatile and adaptable to different use cases. Developers can import and configure Apps in their deco sites, allowing for seamless integration and customization of functionality.

## Monorepo Support

deco Apps can be managed in a monorepo, providing a centralized location to store and organize multiple Apps. This approach streamlines the development process and allows for efficient version control and maintenance of Apps.

## Getting Started

To create your own deco Apps, follow these steps:

1. Run the command `deno run -A -r https://deco.cx/init` to initialize a new deco App.
2. Define the functionalities or components you want to bundle into the App.
3. Organize the functions, sections, loaders, or other deco components within the App directory.
4. Configure the App to accept parameters and be customizable within the deco Admin.
5. Export the App for use in other deco projects.

## Importing and Uninstalling Apps

To use a deco App in your deco site, you can run the following commands:

1. To install the App:

   ```sh
   deno task install $APP_URL
   ```

   Replace `$APP_URL` with the path location or HTTP URL of the App.

2. To uninstall the App:

   ```sh
   deno task uninstall $APP_URL
   ```

   Replace `$APP_URL` with the path location or HTTP URL of the App.

## Note

Deco Apps provide a powerful mechanism for creating and sharing reusable business capabilities across your deco projects. By organizing components into modular Apps, you can significantly enhance the maintainability and scalability of your deco sites. Feel free to explore existing deco Apps and create your own to streamline your development process and build robust deco projects.

## Recommended Reading

- [deco Concepts: Understanding Sections](/docs/en/concepts/section)
- [Fetching Data from APIs in deco](/docs/en/developing/fetching-data)
- [Client-Side Function Invocation in deco](/docs/en/developing/fetching-data-client)
