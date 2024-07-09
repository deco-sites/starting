---
description: Making an App Installable
since: 1.24.0
---

# Making an App Installable

To make your deco App installable on a deco site, follow these simple steps:

1. Run the following command in your terminal to install your App:

```bash
deno task install $YOUR_APP_LOCATION
```

Replace `$YOUR_APP_LOCATION` with the location of your deco App, which can be a
folder in your file system or an HTTP URL from GitHub or denopkg/denoland.

2. Next, execute the following command to update the schema and manifest of your
   App:

```bash
deno task start
```

After completing these steps, your deco App will be installed and ready to be
used on any deco site you desire. Now you can share and leverage your business
capabilities conveniently and efficiently. Have fun building and using your deco
Apps! 🚀
