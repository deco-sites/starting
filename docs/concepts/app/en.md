---
description: Apps - Business Capabilities for Your Deco Sites
since: 1.24.0
---

# Deco Apps

Deco Apps are powerful bundles of business capabilities that can be imported and configured into Deco sites. An App in Deco is essentially a **collection** of various **components**, such as **actions**, **sections**, **loaders**, **workflows**, **handlers**, or any other Deco elements that can be used to enhance the functionality of your Deco projects.

## Overview

In Deco, Apps serve as modular building blocks that encapsulate specific features or capabilities. They enable developers to package and share business-specific functionalities across different projects, making it easier to maintain and scale your Deco sites.

By running the command `deno run -A https://deco.cx/init` in your terminal, you can start developing an App from scratch and get it up and running quickly.

## App Configuration

Each App can be configured with specific parameters, making it versatile and adaptable to different use cases. Developers can import and configure Apps in their Deco sites, allowing for seamless integration and customization of functionality.

## Monorepo Support

Deco Apps can be managed in a monorepo, providing a centralized location to store and organize multiple Apps. This approach streamlines the development process and allows for efficient version control and maintenance of Apps.

## Getting Started

To create your own Deco Apps, follow these steps:

1. Run the command `deno run -A https://deco.cx/init` to initialize a new Deco App.
2. Define the functionalities or components you want to bundle into the App.
3. Organize the functions, sections, loaders, or other Deco components within the App directory.
4. Configure the App to accept parameters and be customizable within the Deco Admin.
5. Export the App for use in other Deco projects.

## Importing and Uninstalling Apps

To use a Deco App in your Deco site, you can run the following commands:

1. To install the App:

   ```sh
   deno eval 'import "$live/scripts/apps/install.ts"' $APP_URL
   ```

   Replace `$APP_URL` with the path location or HTTP URL of the App.

2. To uninstall the App:

   ```sh
   deno eval 'import "$live/scripts/apps/uninstall.ts"' $APP_URL
   ```

   Replace `$APP_URL` with the path location or HTTP URL of the App.

## Note

Deco Apps provide a powerful mechanism for creating and sharing reusable business capabilities across your Deco projects. By organizing components into modular Apps, you can significantly enhance the maintainability and scalability of your Deco sites. Feel free to explore existing Deco Apps and create your own to streamline your development process and build robust Deco projects.

## Recommended Reading

- [Deco Concepts: Understanding Sections](/docs/en/concepts/section)
- [Fetching Data from APIs in Deco](/docs/en/developing/fetching-data)
- [Client-Side Function Invocation in Deco](/docs/en/developing/fetching-data-client)
