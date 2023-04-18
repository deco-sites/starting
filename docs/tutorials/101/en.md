---
description: |
   Step-by-step on how to create a Site on deco.cx
---

# If you need help...

- Go to <https://deco.cx/discord> if you have questions or problems during the
  use. Also join our community!

## What you need to know before you start

- Read the documents on the [**Intro**](/docs/en/introduction/overview) and
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
