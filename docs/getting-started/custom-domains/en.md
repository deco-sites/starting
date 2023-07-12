---
description: Adding custom domains.
since: 1.1.0
---

# Summary

1. What is a custom domain?
2. Adding a custom domain
   - Requirements
   - Adding a domain in the admin panel
3. Validating the added domain
   - Step-by-step
   - Testing your configuration
4. Troubleshooting

# What is a custom domain?

Each deco site is assigned a public domain through which it can be accessed, such as the domain `your.deco.site` used in the address `https://your.deco.site`. However, it is common to acquire a custom domain to strengthen the brand or simplify access to a site.

Deco does not currently provide a domain name server, but it is possible to hire this service from other companies such as GoDaddy, Google, and Cloudflare. From a technical standpoint, this server must allow the creation of `CNAME` records. It's necessary to be cautious as some hosting services may offer name server services but not allow this type of configuration!

# Adding a custom domain

## Requirements

To add a domain:
- The site needs to have a `deco.site` domain provided by Deco.
- The user needs to be an administrator of the site.
- The user needs to acquire a custom domain from a name server provider that allows `CNAME` configuration.
- The user or administrator of the custom domain needs to create a `CNAME` record as indicated in the validation step.

## Adding a domain in the admin panel

1. Go to the home page of the site and navigate to the Settings tab.

![Home page](https://github.com/deco-sites/starting/assets/882438/c95da5f4-75a8-42ed-b747-674157c52c80)

2. In Settings, under the Domains listing, check that there is a `deco.site` domain and add an existing domain.

![Settings tab](https://github.com/deco-sites/starting/assets/882438/3cf4102a-d9f3-49d6-aaa0-8aeac5e064b6)

3. Add your domain for the site in the opened modal. The domain should only be the name, without any protocol (http/https) or slashes. Wait for the initial configuration process.

![Settings tab](https://github.com/deco-sites/starting/assets/882438/4b2a6b1e-a711-4733-9779-367ac0141e41)

4. After adding, the domain is registered with Deco but is not yet operational. You now need to set up the domain. Under `...`, click on setup to view the configuration instructions.

![Settings tab](https://github.com/deco-sites/starting/assets/882438/ac14645d-6f59-45cf-ae6e-c918eec7247f)

5. Add the domain configuration to your domain server. This represents a `CNAME` record from the custom domain to the deco domain. In the example, this would be a record from the domain `example.dirlididi.org` to `test-fashionmgr.deco.site`.

![Domain preparation](https://github.com/deco-sites/starting/assets/882438/98f2505f-db78-42e8-9c5c-5350360f7495)

6. Once configured, click on validate configuration for Deco to verify if the record was set up correctly. The certificate configuration step may fail, but if that happens, it will be retried in the background.

7. Wait a few minutes and test accessing your domain in the browser.

# Troubleshooting

## Domain is not validated

Verify that it was correctly registered in the name server. Use a tool like [Google's DNS](https://dns.google/) to check if there is a `CNAME` record correctly pointing to the `deco.site` domain.

## After validation, the settings still show my domain as "Awaiting"

Sometimes, the domain can generate certificates even after leaving the validation screen. However, even in this case, the custom domain may already be operational.

## I want to transfer the apex (root) to Deco.

Currently, it is not possible to make this setup in Deco.

## Other situations

If you need further assistance, please reach out to Deco's Discord server.