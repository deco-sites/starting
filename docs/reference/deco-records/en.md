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

> You will need the files that were created during the installation of deco
> records on your computer. If necessary, perform a git pull from your remote
> project.

Follow the steps below to create new tables in your database or watch the video.
This process will use [drizzle-orm](https://orm.drizzle.team/) and
[drizzle-kit](https://orm.drizzle.team/) to create and manage tables in your
database through
[schema migrations](https://medium.com/@joelrodrigues/o-que-s%C3%A3o-database-migrations-f817448870a2).
In the following example, a table named `profiles` will be created with the
columns: `id`, `name`, and `email`.

<iframe width="640" height="400" src="https://www.loom.com/embed/7d7442496a8c45109eaf67f1e00fc2f1?sid=2124b27e-d754-44f0-b7a2-8fc0e977d945" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

<!-- Use span due to a bug in markdown parser deno-gfm -->

<span>1.</span> Edit the `db/schema.ts` file to create tables.

```ts
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const profiles = sqliteTable("profiles", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email"),
});
```

<span>2.</span> Go to your site's admin, click on the `Settings` menu, then in
the Database credentials section, click `Generate now`. Finally, click the icon
to copy the credentials.
<span>3.</span> Add the credentials to your computer's operating system
environment variables.
![Visualization of the generate credentials button](/docs/reference/deco-records/generate-credentials.webp)
<span>4.</span> Run the deno task `db:setup:deps` in your terminal to install
the necessary dependencies to perform the schema migration. You need Deno
version 1.43.0 or higher and use the environment variable `DENO_FUTURE=1` to
enable the installation of npm modules.
<span>5.</span> Run the deno task `db:schema:update` to create the SQL files
responsible for the schema migration and apply them to the database. Run this
command whenever you make changes to your tables to generate new schema
migrations.

```sh
deno task db:setup:deps
```

<span>6.</span> In the records menu of your site, in the deco admin, you will
see the `profiles` and `__drizzle__migrations` tables. The `drizzle__migrations`
table is auto-generated and used by drizzle-kit to manage schema migrations.

![Visualization of deco records tables](/docs/reference/deco-records/records-view-tables.webp)

> Add the auto-generated files to a git commit and push them to the remote git
> repository.

## Reading and Writing Data

With the `profiles` table created, we can now create a
[section](https://deco.cx/docs/pt/concepts/section) to manage profiles, where we
can list, remove, and create a profile. Create a section that will be the
profile manager.

```ts
import { eq } from "drizzle-orm";
import { SectionProps } from "deco/types.ts";
import type { AppContext } from "site/apps/deco/records.ts";
import { profiles } from "site/db/schema.ts";
import { useSection } from "deco/hooks/useSection.ts";
import Icon from "site/components/ui/Icon.tsx";

type ProfileInsert = typeof profiles.$inferInsert;
type ProfilesKeys = keyof ProfileInsert;
type ProfileValue<K extends keyof ProfileInsert> = ProfileInsert[K];

/**
 * Checks if `key` is a valid profile property key.
 */
const isProfilePropKey = (
  key: string,
): key is ProfilesKeys => key in profiles.$inferInsert;

/**
 * Checks if `value` is of the same type as `profiles[key]`.
 */
const isProfilePropType = (
  key: ProfilesKeys,
  value: unknown,
): value is ProfileValue<typeof key> =>
  typeof value === typeof profiles.$inferInsert[key];

interface Props {
  mode?: "create" | "delete";
  email?: string;
}

export async function loader(
  { mode, email }: Props,
  req: Request,
  { invoke }: AppContext,
) {
  // Drizzle ORM client
  const drizzle = await invoke.records.loaders.drizzle();

  // If mode is create and the request has a body, then create a new profile
  if (mode === "create" && req.body) {
    const newProfile: Partial<typeof profiles.$inferInsert> = {};
    const formData = await req.formData();
    formData.forEach((value, key) =>
      isProfilePropKey(key) &&
      isProfilePropType(key, value) &&
      (newProfile[key] = value as any)
    );

    // Insert newProfile into the database.
    await drizzle.insert(profiles).values(
      newProfile as typeof profiles.$inferInsert,
    );
  } // If mode is delete and email is defined and not empty, then remove all profiles with this email.
  else if (mode === "delete" && email) {
    await drizzle.delete(profiles).where(eq(profiles.email, email));
  }

  // Select all profiles from the database, bringing only email and name.
  const profilesData = await drizzle.select({
    email: profiles.email,
    name: profiles.name,
  }).from(profiles);
  return { profiles: profilesData };
}

export default function ManageProfiles(
  { profiles = [] }: SectionProps<typeof loader>,
) {
  // Section URL with mode = create property, used for form submission and creating a new profile.
  const createUrl = useSection<Props>({
    props: { mode: "create" },
  });
  return (
    <>
      <div>
        <form
          hx-post={createUrl}
          hx-trigger="click"
          hx-target="closest section"
          hx-swap="outerHTML"
          class="p-2 flex flex-col gap-2"
        >
          <div class="flex gap-2">
            <label for="name">Name</label>
            <input
              // profiles name property
              name="name"
              id="name"
              required
              class="border border-gray-300 rounded"
            />
          </div>

          <div class="flex gap-2">
            <label for="description">Email</label>
            <input
              // profiles email property
              name="email"
              id="email"
              required
              class="border border-gray-300 rounded"
            />
          </div>

          <div>
            <button type="submit">Create</button>
          </div>
        </form>
      </div>

      <div class="divide-y divide-gray-300 p-2 w-fit">
        <h3>Members List</h3>
        {profiles.map((profile) => {
          // Section URL with mode = delete property and the email of the profile to be removed, used for form submission and profile removal.
          const profileDeleteUrl = useSection<Props>({
            props: { mode: "delete", email: profile.email ?? "" },
          });
          return (
            <div class="flex gap-2 items-center">
              <span>{profile.name}</span>
              <span>{profile.email}</span>
              <form
                hx-post={profileDeleteUrl}
                hx-trigger="click"
                hx-target="closest section"
                hx-swap="outerHTML"
                class="w-4 h-4"
              >
                <button type="submit" class="w-4 h-4">
                  <Icon id="Trash" size={16} />
                </button>
              </form>
            </div>
          );
        })}
      </div>
    </>
  );
}
```

In the previous example, the inline loader uses the `drizzle` client provided by
the records app to query the database, insert, and remove profiles.

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
