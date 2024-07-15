---
description: Environment setup.
since: 1.0.0
---

- Read the guide in **Getting Started** to understand the basic concepts and the
  deco admin tool.

- **Important**, you can access [our Discord](https://deco.cx/discord) to ask
  questions or report issues with _deco.cx_. Join our community too!

## Summary

1. Technology stack
2. Start developing
3. Developing with deco

## Technology stack

When creating a website or online store with _deco.cx_, users have the
flexibility to create [Sections](/docs/en/concepts/section) and
[Loaders](/docs/en/concepts/loader) that meet their unique needs. To help you
easily and quickly create these components, we rely on a set of powerful and
efficient technologies.

Our technology stack is focused on **simplicity and performance**, making it
accessible to developers with previous experience in HTML, CSS, JavaScript, and
React. These are the main tools we use to power deco.cx sites:

### [Preact](https://preactjs.com/)

**Preact** is a fast and lightweight alternative to
[React.js](https://reactjs.org/), used for rendering UI components on the server
and client. It uses _JSX_ to create web components and is generally
straightforward to learn.

### [Tailwind](https://tailwindcss.com)

**Tailwind** is a CSS styling solution based on utility classes, making it ideal
for beginners. Tailwind is also optimized for performance.

### [Deno](https://deno.com/deploy)

**Deno** is a JavaScript and TypeScript runtime environment. It is used to build
deco sites written in TypeScript and executed by a server. Deno is similar to
Node.js (_fun fact_: they were
[created by the same person](https://www.youtube.com/watch?v=M3BM9TB-8yA)).

### [Fresh](https://fresh.deno.dev)

**Fresh** is a full-stack web framework for JavaScript and TypeScript
developers. It is designed to make it easy to create high-quality,
high-performance, and highly customizable web applications.

## Start developing

### Required Tools

The only setup required to code _deco.cx_ sites is to **install Deno** on your
machine. To install Deno, follow the
[instructions on the deno.land page](https://deno.land/manual/getting_started/installation).

> Make sure to keep Deno up-to-date! If you already have Deno installed, run
> `deno upgrade` to update it.

We highly recommend using
[Visual Studio Code](https://code.visualstudio.com/download) as the IDE and
[Git](https://github.com/git-guides/install-git) as the version control tool.

### 1. Create a Deco Site

Follow the steps in the
[Creating a Site tutorial](/docs/en/getting-started/creating-a-site).

### 2. Clone Your Site Repository

Accept the invitation to join the repository created for your site. This
invitation is sent to the email address associated with your GitHub profile.

If you haven't used a GitHub account to log into the admin panel or haven't
received an invitation, you can add a GitHub account as a collaborator to the
site in the Settings tab.

![Adding collaborator to the repository](/docs/setup/repository-access.png)

Use the `git clone` command to download the site code to your machine. We
recommend using SSH. Open the terminal and execute the following command:

```bash
git clone git@github.com:deco-sites/{site-name}.git
```

**Remember to replace `site-name` with the name of your site.**

Alternatively, you can clone the repository using other methods, such as _git
https_, the _GitHub_ tool, or an IDE. The repository page on _GitHub_ provides
details about different ways to clone.

### 3. Run Local Server

To run your site locally, edit, and see the changes in the Admin, you need to
have a local environment (an environment with `localhost` as the host). To do
this, you can use the default `localhost` environment or create a new one.

#### 3.1 Create new environment

Open the Releases tab in the Admin and click on the New environment button.

![Create new environment](/docs/setup/create-environment.png)

#### 3.2 Set a name and a host to your environment

Choose a name for your environment and set your host as localhost.

![Choosing environment and starting server](/docs/setup/choose-host.png)

#### 3.3 Run your site locally

Copy the command shown after you create your environment and paste it into your
terminal in the site folder.

![Start server command](/docs/setup/start-server-command.png)

![Execute command on terminal](/docs/setup/start-server-terminal.png)

Wait for the project to initialize. On the first run, Deno will download and
cache the project dependencies, and Deco will prepare the site details.

The site will be accessible at
`https://{environment-name}--{site-name}.deco.site`.

<!-- > Some browsers may block access to or execution of code on the `localhost`
> domain! Disable browser ad blockers or privacy protections to access this
> address. -->

If the code of any section used on the site's homepage is modified, it will be
reflected at the above address.

#### 3.4 Publishing Changes

Considering that you chose the Deco Hosting to deploy your site, the development
deployment process is very simple: do a git push of the changes to the main
branch.

Alternativaly, publish your local environment in the Admin by clicking on the
Publish now button in your environment page.

![Publish changes](/docs/setup/publish-button.png)

## Start Creating Sites Your Way! :)

Keep exploring Deco to understand its potential and learn how to create or
modify sections, loaders, and other elements to build increasingly personalized
sites and experiences.

Be sure to join our [Discord community](https://deco.cx/discord). Stay updated
with the latest news and keep evolving with us!
