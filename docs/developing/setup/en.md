---
description: We use Preact, Deno, Fresh and Tailwind. If you have previous experience with HTML, CSS, JavaScript, and React, then working with deco.cx will be a breeze for you.
---

Our tech stack is designed to provide a **simple and efficient** solution for
web development, while also maintaining a strong focus on performance 🚀. If you
have previous experience with HTML, CSS, JavaScript, and React, then working
with _deco.cx_ will be a breeze for you.

When you're building a website or online store with _deco.cx_, you have the
flexibility to create custom [Sections](/docs/en/concepts/section) and
[Loaders](/docs/en/concepts/loader) that fit your unique needs. To help you
create these components with ease and speed, we rely on a set of powerful and
efficient technologies.

Our tech stack is focused on **simplicity and performance**, making it
accessible to developers with previous experience in HTML, CSS, JavaScript, and
React. These are the key tools we use to power deco.cx sites:

### [Preact](https://preactjs.com/)

**Preact** is a fast and lightweight alternative to
[React.js](https://reactjs.org/), used for rendering UI components on both the
server and the client. It uses _JSX_ to create web components and it's usually
pretty simple to pick up.

### [Tailwind](https://tailwindcss.com)

**Tailwind** is a CSS styling solution based on utility classes, which makes it
really easy for beginners. It is also optimized for performance.

### [Deno](https://deno.land/)

**Deno** is a JavaScript and TypeScript runtime environment. It is used to make
our websites, written in Typescript, run by a server. Deno is similar to Node.js
(_fun fact_: they were
[created by the same person](https://www.youtube.com/watch?v=M3BM9TB-8yA "https://www.youtube.com/watch?v=M3BM9TB-8yA")).

### [Fresh](https://fresh.deno.dev)

**Fresh** is a fullstack web framework (backend and frontend) for JavaScript and
TypeScript. It was designed to make it easy to create applications high-quality,
high-performance and highly customizable web pages.

## Setup your environment

The only setup necessary to code _deco.cx_ sites is to **install Deno** on your
machine. To install Deno, follow the
[instructions on deno.land page](https://deno.land/manual/getting_started/installation "https://deno.land/manual/getting_started/installation").

> We also expect you to have
> [Git installed](https://github.com/git-guides/install-git).

# If you need help...

- Go to <https://deco.cx/discord> if you have questions or problems during the
  use. Also join our community!

## What you need to know before you start

- Read the documents on the [**Intro**](/docs/en/overview) and
  [**Concepts**](/docs/en/concepts/section) sections.

## Create a deco.cx website

_deco.cx_ abstracts away all the complexities of setting up a repository,
connecting a CMS and deploy to the edge. This allows you to focus only on what
matters: your website code.

The first step is to have a _deco.cx_ account and website. Go to
<https://deco.cx/onboarding>, login with your Github account and follow the
step-by-step instructions on the page to create your developer account.

## Clone your site repository

Accept the invitation to access the repository created for your site. This
invitation is sent to the email address of your Github profile.

Use the `git clone` command to download the code from the website to your
machine. We recommend using SSH. For this, open the terminal and run the
command:

```
git clone git@github.com:deco-sites/site-name.git
```

**Remember to change `site-name` to your site name.**

If you prefer, you can clone the repository using other methods, such as _git
https_ or via the _Github_ tool. On your repository page On _Github_ you can
find details about these different ways to clone.

# Developing

## Run local server

In the terminal, enter the website folder and run the command:

```
deno task start
```

## See your local sections on Live

1. Go to <https://deco.cx/admin>.

2. Select the website you are developing

3. Go to Library.

4. In the _topbar_ environment selector select _localhost:8000_ and see the
   sections that are in your local repository.

<img width="1252" alt="image" src="https://user-images.githubusercontent.com/18706156/224518020-0008c8d5-d9cc-4191-a4c3-81c2cf5d1f2d.png">

## Publish your changes to production

_deploy_ in production is very simple: just _push_ your changes on the _branch_
_**main**_, which is the main branch.

You can go to _site-name.deco.site_ to see the latest version of your site on
air.

# Ready! You can now start creating amazing websites :)

With this initial tutorial you have enough to start developing sections and
connectors to allow them to be used in creating pages.

Be sure to join our
[discord community](https://deco.cx/discord "https://deco.cx/discord") to ask
questions, follow the news and keep evolving together with us!
