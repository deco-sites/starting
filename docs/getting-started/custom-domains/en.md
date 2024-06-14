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

Each deco site is assigned a public domain through which it can be accessed,
such as the domain `your.deco.site` used in the address
`https://your.deco.site`. However, it is common to acquire a custom domain to
strengthen the brand or simplify access to a site.

Deco does not currently provide a domain name server, but it is possible to hire
this service from other companies such as GoDaddy, Google, and Cloudflare. From
a technical standpoint, this server must allow the creation of `CNAME` records.
It's necessary to be cautious as some hosting services may offer name server
services but not allow this type of configuration!

# Adding a custom domain

## Requirements

To add a domain:

- The site needs to have a `deco.site` domain provided by Deco.
- The user needs to be an administrator of the site.
- The user needs to acquire a custom domain from a name server provider that
  allows `CNAME` configuration.
- The user or administrator of the custom domain needs to create a `CNAME`
  record as indicated in the validation step.
- ONLY if the domain already has any "CAA" records, it is necessary to add new
  records.

## Before adding a domain

Additional configuration may be required on your website depending on the
integration used.

If the domain has a `CAA` record, you need to add new domains so that we can
generate the certificate for your new domain. Important:
`If your domain doesn't have CAA records, this step is not necessary (and not recommended)`.

You can check if the domain has these records using the
[Google Admin Toolbox Dig](https://toolbox.googleapps.com/apps/dig/#CAA/) or the
command `dig yourdomain.com.br caa +short`. If the query doesn't return data
(`Record not found!`), skip this step.

If your site has certificates, you need to add the following records, especially
the last two (`pki.goog`). Add them to your site's domain (or use `@` as the
field name).

```
0 issue "digicert.com; cansignhttpexchanges=yes"
0 issuewild "digicert.com; cansignhttpexchanges=yes"
0 issue "sectigo.com"
0 issuewild "sectigo.com"
0 issue "letsencrypt.org"
0 issuewild "letsencrypt.org"
0 issue "pki.goog; cansignhttpexchanges=yes"
0 issuewild "pki.goog; cansignhttpexchanges=yes"
```

Some domain providers do not accept CAA with `cansignhttpexchanges`. In that
case, configure it without this property:

```
0 issue "digicert.com"
0 issuewild "digicert.com"
0 issue "sectigo.com"
0 issuewild "sectigo.com"
0 issue "letsencrypt.org"
0 issuewild "letsencrypt.org"
0 issue "pki.goog"
0 issuewild "pki.goog"
```

Check with your domain provider for further instructions on how to add these
records.

## Adding a domain in the admin panel

1. Go to the home page of the site and navigate to the Settings tab.

   ![Site settings](/docs/getting-started/custom-domains/settings.png)

2. In Settings, under the Domains listing, check that there is a `deco.site`
   domain and add an existing domain. **Contact us if you don't have a
   `deco.site` domain**.

3. Add your domain for the site in the opened modal. The domain should only be
   the name, without any protocol (http/https) or slashes. Wait for the initial
   configuration process.

   ![Add domain](/docs/getting-started/custom-domains/add-domain.png)

4. After adding, the domain is registered with Deco but is not yet operational.
   You now need to set up the domain according to the configuration instructions
   in the _Domain setup_ box under the domain name.

5. Add the domain configuration to your domain server. This represents a `CNAME`
   record from the custom domain to the deco domain. In the example, this would
   be a record from the domain `www.example.com` to `landing-docs1.deco.site`.

   ![Domain setup](/docs/getting-started/custom-domains/validate-domain.png)

6. Once configured, click on validate configuration for Deco to verify if the
   record was set up correctly. Important: The domain will remain in an
   "Waiting" state until we complete the configuration on our infrastructure.

7. Wait a few minutes and test accessing your domain in the browser.

# Troubleshooting

## Domain is not validated

Verify that it was correctly registered in the name server. Use a tool like
[Google's DNS](https://dns.google/) to check if there is a `CNAME` record
correctly pointing to the `deco.site` domain.

## After validation, the settings still show my domain as "Awaiting"

Sometimes, the domain can generate certificates even after leaving the
validation screen. However, even in this case, the custom domain may already be
operational.

## I want to transfer the apex (root) to Deco.

Currently, it is not possible to make this setup in Deco.

## Other situations

If you need further assistance, please reach out to Deco's Discord server.
