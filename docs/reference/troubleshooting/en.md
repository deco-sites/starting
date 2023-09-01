---
description: Troubleshooting
since: 1.0.0
---

# Issues running deno locally

When running the project locally, `deno` displays errors or issues while executing the site.

## Update deno

Execute the following command to update deno to the latest version...

`deno upgrade`

In some specific cases, you can also test other deno versions by specifying a version to update to...

`deno upgrade --version X.Y.Z`

## Clear deno cache

Deno efficiently caches dependencies aggressively, which results in a fast server restart time. However, cached dependencies can sometimes have issues or errors in the downloaded versions.

Therefore, we recommend clearing the cache for related files:

`deno cache -r dev.ts main.ts`

If you encounter errors related to typing or execution, try clearing the local storage as well:

`deno eval 'localStorage.clear()'`

Depending on the site's installation and configuration, deno may pull dependencies from the "node_modules" directory. Deleting this directory may resolve issues related to npm dependencies.

## Check if another application is running on port 8000

If another application is running on port 8000, the deno process may enter a "loop" or encounter a startup failure on that port. Check if there are any other applications running on port 8000.

# My changes are not reflected on the production site

## Verify if the deploy was successful

In the site repository, check for a marker related to the latest commit. The deploy should have been successful for the code to be considered in production:

![Successful deploy](https://github.com/deco-sites/starting/assets/882438/6f4e853f-23bf-4ed1-9f4f-b16a97690a6a).

In case of failure, hover over the error indication to see a description of the problem.

If the system failed on our infrastructure, you can force a new deploy by submitting an empty commit with the command:

`git commit --allow-empty -n -m "Redeploy"`

## Check the environment selector

Check if the environment selector (preview) points to the correct address.

# I'm experiencing errors in a specific section, page, or functionality

## Update deco and std

New versions of the deco framework and std bring fixes to common project issues:

`deno eval 'import "$live/scripts/update.ts"'`

# A component is not interactive, the click/button doesn't work

Every interactive component should be an island. For that, it must be inside the `islands/` page and should not be in a subfolder.

If the loading of any JavaScript fails in the browser, the components can lose their interactivity. Open the `console.log` to look for JavaScript errors.