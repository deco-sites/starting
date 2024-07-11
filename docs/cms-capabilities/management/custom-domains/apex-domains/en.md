---
description: How to Redirect a Non-www Domain
since: 1.1.0
---

## What is an Apex Domain?

An apex domain is the term used for a root domain, without a subdomain.

Example:

- `www.example.com.br` -> Subdomain
- `loja.example.com.br` -> Subdomain
- `example.com.br` - Apex Domain

## Can I point a deco.cx site to the apex domain?

No, it is not yet possible to point a deco.cx site to your apex domain.

Therefore, we have created an easy redirection solution so that access to the
Apex domain is not lost.

## How to Redirect an Apex Domain in deco.cx?

1 - In the control panel of your site on deco.cx, go to the Settings page.

2 - Click on "Add existing domain"

3 - Enter your apex domain (without subdomain):

![Domain step](https://github.com/deco-cx/apps/assets/76620866/85b1bcd5-5dec-4a61-bb0b-635e0b8a3d3a)

4 - Define which subdomain to redirect to:

![Sudomain step](https://github.com/deco-cx/apps/assets/76620866/ab92d6cb-ef08-4f98-a0e5-b241f932722d)

5 - Now, you will see the settings that must be made in your domain hosting
platform:

![DNS Setup](https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/70b54756-44d8-431b-9fba-2c533863541d)

6 - After making the configurations, click on Validate Domain.

The validation step is essential for functionality and depends on the DNS
propagation set up in the hosting service.

Generally, propagation occurs within a few hours, but it can take up to 48 hours
in some cases.
