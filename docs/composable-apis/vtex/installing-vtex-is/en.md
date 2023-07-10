---
description: Learn how to install VTEX Intelligent Search to a VTEX account and leverage deco.cx's built-in connectors
---

<!-- TODO: Understand why auto-format comments the text above  -->

## What is VTEX Intelligent Search?

[VTEX Intelligent Search](https://help.vtex.com/tracks/vtex-intelligent-search)
(VTEX IS) is a powerful search solution that helps customers find the products
they are looking for using Artificial Intelligence. It uses historical click and
order data to dynamically improve search, and offers features such as
autocomplete, search and product suggestions, and filters that make it easier
for shoppers to find the products they want.

_deco.cx_ offers **native integration with VTEX Intelligent Search** via the
[Loaders](/docs/en/concepts/loader) available in
[deco-sites/std](https://github.com/deco-sites/std). You can see it in action in
the [Fashion starter](https://fashion.deco.site).

Unfortunately, VTEX IS **does not come pre-installed in all VTEX accounts**, and
you need to install it to use its APIs in your _deco.cx_ Site. Don't worry:
installing Intelligent Search **does not have any negative implications** in the
VTEX account, only making the APIs available. VTEX IS is also offered **free of
charge** by VTEX (2023).

> If you want to use legacy search APIs from VTEX read more about it
> [here](/docs/en/tutorials/connecting-vtex)

## Prerequisites

- Access to the VTEX Account you want to perform this operation.
- Having the
  [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-installation-and-command-reference)
  installed on your machine.

## How to install it

1. Login into the VTEX account with `vtex login {accountName}`.
2. Make sure you're into the `master` workspace with `vtex use master`.
3. Run `vtex install vtex.admin-search@1.x vtex.intelligent-search-api@0.x`.
4. In VTEX Admin, go to `Store Setup -> Search -> Integration Settings` and
   check if indexing has started. If not, click on **Start Integration**.

<img width="847" alt="image" src="https://user-images.githubusercontent.com/18706156/225157818-47f5da0e-dfa7-4ad8-9d79-818370baba55.png">

**That's it!** Now you're able to use the _deco.cx_ loaders that fetch data from
VTEX Intelligent Search in your [Sections](/docs/en/concepts/page) and
[Pages](/docs/en/concepts/page).

## Reference

- [VTEX Intelligent Search docs](https://help.vtex.com/tracks/vtex-intelligent-search)
