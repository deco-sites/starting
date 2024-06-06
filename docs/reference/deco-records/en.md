---
description: Deco Records is a production-ready SQLite database that is easy to install and located close to the user.
since: 1.0.0
---

## Installing Deco Records on Your Site

> To start the installation process, create a new environment in your site's
> Deco admin panel, or reset the current environment, as a publish will be done
> at the end of this step.

Follow the steps below to install it on your site or watch the video.

<iframe width="640" height="400" src="https://www.loom.com/embed/8414aab7837c4930b92bcbe97651f427?sid=27354f03-3206-464f-987e-22e703b9ed79" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<div style="display:flex;justify-content:center;font-size:14px;opacity:0.6;margin-top:-8px;margin-bottom:8px">(video in Brazilian portuguese)</div>

1. Log in to the Deco admin panel of your site.
2. In the sidebar, click on the "Records" menu.
3. Then click on `Setup Deco Records` and wait for the app installation and
   database creation process. During this step, several files will be created
   and edited on your site (deno.json, .gitignore, manifest.gen.ts,
   apps/deco/records.ts, drizzle.config.ts, db/schema.ts,
   .deco/blocks/deco-records.json).
   ![setup deco records](/docs/reference/deco-records/setup.webp)
4. After the installation, click on `Show diff and publish` to publish the app
   installation and database creation.
5. Review the changed files, edit the description, and finally, click on
   `Publish now`.

After the publishing process is complete, you will see your database when
accessing the "Records" menu.
![Database view in admin panel](/docs/reference/deco-records/records-view.webp)

## Creating Tables

> You will need the files created during the Deco Records installation on your
> computer. If necessary, perform a git pull from your remote project.

Follow the steps below to create new tables in your database or watch the video.
In this process, [drizzle-orm](https://orm.drizzle.team/) and
[drizzle-kit](https://orm.drizzle.team/) will be used to create and manage
tables in your database through
[schema migrations](https://medium.com/@92rogen/understanding-schema-migration-its-like-git-but-for-dbs-4dcbfde8e051).
In the following example, a table named "profiles" will be created with the
columns: `id`, `name`, and `email`.

<iframe width="640" height="400" src="https://www.loom.com/embed/7d7442496a8c45109eaf67f1e00fc2f1?sid=2124b27e-d754-44f0-b7a2-8fc0e977d945" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<div style="display:flex;justify-content:center;font-size:14px;opacity:0.6;margin-top:-8px;margin-bottom:8px">(video in Brazilian portuguese)</div>

1. Edit the file `db/schema.ts` to create tables:

```ts
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const profiles = sqliteTable("profiles", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email"),
});
```

2. Run the Deno task `db:setup:deps` in your terminal to install the necessary
   dependencies for schema migration. You need Deno version 1.43.0 or higher and
   must use the environment variable `DENO_FUTURE=1` to enable npm module
   installation:

```sh
DENO_FUTURE=1 deno task db:setup:deps
```

3. Run the Deno task `db:generate` to create the SQL files responsible for
   schema migration. Execute this command whenever you make changes to your
   tables to generate new schema migrations:

```sh
DENO_FUTURE=1 deno task db:generate
```

4. Log in to your site's admin panel, click on the `Settings` menu, then in the
   "Database credentials" section, click `Generate now`. Finally, click the copy
   icon to copy the credentials:
   ![Credentials generation button](/docs/reference/deco-records/generate-credentials.webp)
5. Add the credentials to the environment variables of your computer's operating
   system.
6. Run the Deno task `db:migrate` to apply the schema migrations created in step
   3 to Deco Records:

```sh
DENO_FUTURE=1 deno task db:migrate
```

7. In the "Records" menu of your site's admin panel, you will see the `profiles`
   and `__drizzle__migrations` tables. The `__drizzle__migrations` table is
   auto-generated and used by drizzle-kit to manage schema migrations:
   ![View of Deco Records tables](/docs/reference/deco-records/records-view-tables.webp)

> Add the auto-generated files in a git commit and push them to the remote
> repository.

## Reading and Writing Data

With the "profiles" table created, we can now create a
[section](https://deco.cx/docs/pt/concepts/section) to manage profiles, allowing
us to list, remove, and create profiles.

Create a section to manage profiles:

```ts
import { SectionProps } from "deco/types.ts";
import type { AppContext } from "site/apps/deco/records.ts";
import { profiles } from "site/db/schema.ts";

export async function loader(
  p: null,
  req: Request,
  { invoke }: AppContext,
) {
  const drizzle = await invoke.records.loaders.drizzle(); // gets the drizzle client

  const profilesData = await drizzle.select({
    email: profiles.email,
    name: profiles.name,
  }).from(profiles); // queries the profiles table, selecting email and name columns

  return { profiles: profilesData };
}

export default function ManageProfiles(
  { profiles = [] }: SectionProps<typeof loader>,
) {
  return (
    <>
      <div class="divide-y divide-gray-300 p-2 w-fit">
        <h3>Members List</h3>
        {profiles.map((profile) => {
          return (
            <div class="flex gap-2 items-center">
              <span>{profile.name}</span>
              <span>{profile.email}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
```

In the example above, the inline loader uses the `drizzle` client provided by
the records app to query the database and returns the query result to the
section. The section maps the list of profiles, rendering the `name` and `email`
properties.

Next, we will add a form to create a new profile in the profiles table.

```diff
import { profiles } from "site/db/schema.ts";
+ import { useSection } from "deco/hooks/useSection.ts";
+ import Icon from "site/components/ui/Icon.tsx";
+
+ interface Props {
+   mode?: "create";
+ }
// ...
+
export default function ManageProfiles(
  { profiles = [] }: SectionProps<typeof loader>,
) {
+ const createUrl = useSection<Props>({
+   props: { mode: "create" },
+ });
  return (
    <>
+     <div>
+       <form
+         hx-post={createUrl}
+         hx-trigger="click"
+         hx-target="closest section"
+         hx-swap="outerHTML"
+         class="p-2 flex flex-col gap-2"
+       >
+         <div class="flex gap-2">
+           <label for="name">Name</label>
+           <input
+             name="name"
+             id="name"
+             required
+             class="border border-gray-300 rounded"
+           />
+         </div>
+
+         <div class="flex gap-2">
+           <label for="description">Email</label>
+           <input
+             name="email"
+             id="email"
+             required
+             class="border border-gray-300 rounded"
+           />
+         </div>
+
+         <div>
+           <button type="submit">Create</button>
+         </div>
+       </form>
+     </div>
      <div class="divide-y divide-gray-300 p-2 w-fit">
        <h3>Members List</h3>
        {profiles.map((profile) => {
          return (
            <div class="flex gap-2 items-center">
              <span>{profile.name}</span>
              <span>{profile.email}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
```

We added a form with text fields for `name` and `email`, and it posts to the
`createUrl` upon submission. The `createUrl` is the link that triggers the
rendering of the section on the server. Now that the form is added, let's update
the inline loader to create a user when the `mode` prop has the value `create`.

```diff
+ import { eq } from "drizzle-orm";
// ...

interface Props {
   mode?: "create";
}

export async function loader(
- _: null,
+  { mode }: Props,
  req: Request,
  { invoke }: AppContext,
) {
  const drizzle = await invoke.records.loaders.drizzle();
+
+ if (mode === "create" && req.body) {
+   const newProfile: any = {};
+   const formData = await req.formData();
+   formData.forEach((value, key) => newProfile[key] = value);
+
+   await drizzle.insert(profiles).values(
+     newProfile as typeof profiles.$inferInsert,
+   );
+ }
  const profilesData = await drizzle.select({
    email: profiles.email,
    name: profiles.name,
  }).from(profiles);
  return { profiles: profilesData };
}

// ...
```

The inline loader, when receiving the `mode` prop with value `create` and the
request has a `body`, will insert a new row in the profiles table with the
`name` and `email` received from the request. Now we have the listing and
creation of a new profile; the next step is to implement profile deletion.

To enable deletion, we'll add a `mode` prop with the value `delete` and a new
prop called `email`, which will be used in the inline loader to remove the
profile.

```diff
export default function ManageProfiles() {
  // ...

      <div class="divide-y divide-gray-300 p-2 w-fit">
      <h3>Members List</h3>
      {profiles.map((profile) => {
+       const profileDeleteUrl = useSection<Props>({
+         props: { mode: "delete", email: profile.email ?? "" },
+       });
        return (
          <div class="flex gap-2 items-center">
            <span>{profile.name}</span>
            <span>{profile.email}</span>
+           <form
+             hx-post={profileDeleteUrl}
+             hx-trigger="click"
+             hx-target="closest section"
+             hx-swap="outerHTML"
+             class="w-4 h-4"
+            >
+              <button type="submit" class="w-4 h-4">
+                <Icon id="Trash" size={16} />
+              </button>
+            </form>
          </div>
        );
      })}
    </div>
  );
}
```

We added the form with the `mode` property set to `delete` and `email`, which
will be used in the inline loader to remove the profile. Finally, let's handle
profile deletion in the inline loader.

```diff
// ...
interface Props {
-  mode?: "create";
+  mode?: "create" | "delete";
+  email?: string;
}
// ...

 if (mode === "create" && req.body) {
   const newProfile: any = {};
   const formData = await req.formData();
   formData.forEach((value, key) => newProfile[key] = value);

   await drizzle.insert(profiles).values(
     newProfile as typeof profiles.$inferInsert,
   );
- }
+ } else if (mode === "delete" && email) {
+   await drizzle.delete(profiles).where(eq(profiles.email, email));
+ }

  const profilesData = await drizzle.select({
    email: profiles.email,
    name: profiles.name,
  }).from(profiles);
```

## Developing Locally

To develop locally, you need to have the database access credentials, which can
be created in your site's Deco admin panel. After adding the environment
variables provided by the admin panel, run the Deno task `db:pull:prod` to dump
your database and then insert it locally into the `sqlite.db` file.

```sh
deno task db:pull:prod
```

To access the Deco Records database during development, you need to have the
credentials in the environment variables, which can be created in the Deco admin
panel. In addition to the credentials, you need a new environment variable
called `USE_PRODUCTION_DB` with the value `1`.

### Reference Links

- [drizzle-orm docs](https://orm.drizzle.team/docs/overview)
- [schema migrations](https://medium.com/@joelrodrigues/o-que-s%C3%A3o-database-migrations-f817448870a2)
