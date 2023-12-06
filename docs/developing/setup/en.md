---
description: Environment setup.
since: 1.0.0
---

- Read the guide in **Getting Started** to understand the basic concepts and the deco admin tool.

- **Important**, you can access [https://deco.cx/discord](https://deco.cx/discord) to ask questions or report issues with _deco.cx_. Join our community too!

# Summary

1. Technology stack
2. Start developing
3. Developing with deco

# Technology stack

When creating a website or online store with _deco.cx_, users have the flexibility to create [Sections](/docs/en/concepts/section) and [Loaders](/docs/en/concepts/loader) that meet their unique needs. To help you easily and quickly create these components, we rely on a set of powerful and efficient technologies.

Our technology stack is focused on **simplicity and performance**, making it accessible to developers with previous experience in HTML, CSS, JavaScript, and React. These are the main tools we use to power deco.cx sites:

### [Preact](https://preactjs.com/)

**Preact** is a fast and lightweight alternative to [React.js](https://reactjs.org/), used for rendering UI components on the server and client. It uses _JSX_ to create web components and is generally straightforward to learn.

### [Tailwind](https://tailwindcss.com)

**Tailwind** is a CSS styling solution based on utility classes, making it ideal for beginners. Tailwind is also optimized for performance.

### [Deno](https://deno.com/deploy)

**Deno** is a JavaScript and TypeScript runtime environment. It is used to build deco sites written in TypeScript and executed by a server. Deno is similar to Node.js (_fun fact_: they were [created by the same person](https://www.youtube.com/watch?v=M3BM9TB-8yA)).

### [Fresh](https://fresh.deno.dev)

**Fresh** is a full-stack web framework for JavaScript and TypeScript developers. It is designed to make it easy to create high-quality, high-performance, and highly customizable web applications.

# Start developing

## Required Tools

The only setup required to code _deco.cx_ sites is to **install Deno** on your machine. To install Deno, follow the [instructions on the deno.land page](https://deno.land/manual/getting_started/installation).

> Make sure to keep Deno up-to-date! If you already have Deno installed, run `deno upgrade` to update it.

We highly recommend using [Visual Studio Code](https://code.visualstudio.com/download) as the IDE and [Git](https://github.com/git-guides/install-git) as the version control tool.

## Test Deco Locally (Optional)!

Deco offers a mechanism to test and explore our system without the need to deploy code or make a deployment on our infrastructure. To do this, visit: https://play.deco.cx/

![deco play](https://github.com/deco-cx/apps/assets/882438/e52c7727-b1c2-44cc-b709-10adba203341)

## Create a deco site

**Important**: Before proceeding with this section, make sure to check out [Creating a Site](/docs/en/getting-started/creating-a-site).

_deco.cx_ abstracts all the complexities of setting up a repository, connecting a CMS, and deploying to the edge. This allows you to focus only on what matters: the code and content of your site.

## Clone your site repository

Accept the invitation to join the repository created for your site. This invitation is sent to the email address associated with your Github profile.

If you haven't used a GitHub account to log into the admin or haven't received an invitation, you can add a GitHub account as a collaborator to the site.

![Adding collaborator to the repository](https://github.com/deco-cx/apps/assets/882438/0cdcc7a7-90fd-4cbe-9eea-0ca68ee533d9)

Use the `git clone` command to download the site code to your machine. We recommend using SSH. Open the terminal and execute the command:

```bash
git clone git@github.com:deco-sites/site-name.git
```

**Remember to change `site-name` to the name of your site.**

Alternatively, you can clone the repository using other methods, such as _git https_, through the _Github_ tool, or using an IDE. The repository page on _Github_ provides details about different ways to clone.

# Developing with deco

## Run local server

In the terminal, simply navigate to the site folder and execute the command:

```bash
deno task start

```

Wait for the project to initialize. On the first run, deno will download and cache the project dependencies, and deco will prepare site details.

The site will be accessible at <http://localhost:8000>.

> Some browsers may block access to or execution of code on the `localhost` domain! Disable browser ad blockers or privacy protections to access this address.

If the code of any section used on the site's homepage is modified, it will be reflected at the above address.

## Publishing changes

The development deployment process is very simple: do a _git push_ of the changes to the _**main**_ branch.

These changes will be available when accessing the dev URL (such as <https://deco-sites-example.deno.dev/>).

You can also create a deco.site domain in the admin tool that will make <https://example.deco.site/> available to use.

## Now you can start creating sites in your own way! :)

Keep exploring deco to understand its potential and how to create or modify sections, loaders, and other elements of deco to create increasingly personalized sites and experiences.

Be sure to join our [Discord community](https://deco.cx/discord). Stay updated with the latest news and keep evolving with us!