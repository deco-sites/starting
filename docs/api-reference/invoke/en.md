---
description: Invoke Client API Reference
---

## Description

The Invoke API is a typed RPC (Remote Procedure Call) client.
It makes interacting programatically with loaders and actions safer and 
as easy as calling a function, abstracting away the details of the underlying 
network transport.

A single invoke client can be used to interact with actions and loaders 
from your site and from any installed App. The Invoke client have ways to
be used both from the Client and from the Server, and supports more complex
patterns out of the box, like calling multiple loaders/actions in a single
request (See Example 4: Batch Invoke), or sending files via a multipart request.

A Invoke type signature will always be dynamic, and will be inferred based on the
type of your manifest and the type of the action/loader you are calling:

For example:

```typescript
import { invoke } from "site/runtime.ts";

const result = await invoke.site.loaders.example(
    props: T, // This will be the type of the props of the action/loader being called
    init?: InvokerRequestInit // This is a fetch request init object extended with some extra options
);

console.log(result); // This will be the type of the return value of the action/loader
```


## Importing the API

### Client-side usage

For client-side usage, the Invoke client is exported from the `runtime.ts` file,
at the root of the project.

Below is an example of a typical `runtime.ts` file, that creates
a client for interacting with actions and loaders from your site, 
and from two apps: VTEX and Linx Impulse. All Apps can be used in
the same way, since they all export a `Manifest`.

```typescript
import { proxy } from 'deco/clients/withManifest.ts';
import type { Manifest } from './manifest.gen.ts'
import type { Manifest as ManifestVTEX } from 'apps/vtex/manifest.gen.ts'
import type { Manifest as ManifestLinxImpulse } from 'apps/linx-impulse/manifest.gen.ts'

export const invoke = proxy<Manifest & ManifestVTEX &  ManifestLinxImpulse>();
```

### Server-side usage

For server-side usage, the Invoke client can always be accessed from 
the *Application Context*. This makes it easy to use invoke inside actions
and loaders.

Below is an example of a loader that uses the Invoke client to call another
loader from the same application:

```typescript
import type { AppContext } from "site/apps/site.ts";

export const async function getUserNotes(
    props: Props, req: Request, ctx: AppContext
): Promise<User> {
    const user = await ctx.invoke.site.loaders.getUser({ token: req.headers.get("Authorization") });

    if (!user) {
        throw new Error("User not found");
    }

    return user.notes;
}
```

## Usage Examples

### Example 1: Calling an Action or Loader from the Browser

Suppose we have a loader called `getUser`, that returns a user object,
based on a given user id.

```typescript
import type { AppContext } from "site/apps/site.ts";

export interface Props {
    id: string;
}

export const async function getUser(
    props: Props, req: Request, ctx: AppContext
): Promise<User> {
    return fetchUser(props.id);
}
```

We can now call this loader from the Browser, using the `invoke` client
exported from the `runtime.ts` file:

```typescript
import { invoke } from "site/runtime.ts";

const user = await invoke.site.loaders.getUser({ id: "123" });
```

Since the Invoke client is typed, the return type of the `getUser` function
is automatically inferred, and the type of the `user` variable is `User`.
All of the parameter types are also inferred, so we get more confidence for
interacting with our APIs.

**Important**: This should only be used in the Browser. Trying to import
and use the Invoke client from the `runtime.ts` file on the server-side
will result in an error. For calling actions/loaders from the server, 
refer to the next section.

### Example 2: Calling an Action or Loader on the Server

Suppose we are creating an action called `addItem`, that adds an item to a cart.

Suppose we also already have a loader called `cart`, that returns the current cart
for a given user, based on a session contained in the request cookies:

```typescript
import type { AppContext } from "site/apps/site.ts";
import { getSessionFromRequest } from "site/lib/session.ts";
import { getCartFromDatabase } from "site/lib/cart.ts";

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  id: string;
}

export const async function cart(
    _props: unknown, req: Request, ctx: AppContext
): Promise<Cart> {
    // Get the session from the request cookies
    const session = await getSessionFromRequest(req);

    // Get the cart from the database using
    const cart = await getCartFromDatabase(session.cartId);

    return cart;
}
```

Now, when creating the `addItem` action, we can reuse the `cart` loader to fetch
the current cart, and then add the item to the cart:

```typescript
import type { AppContext } from "site/apps/site.ts";
import { saveCartToDatabase } from "site/lib/cart.ts";

export interface Props {
    item: CartItem;
}

export const async function addItem(
    props: Props, req: Request, ctx: AppContext
): Promise<Cart> {
    const currentCart = await ctx.invoke.site.loaders.cart();

    // Add the item to the cart
    cart.items.push(props.item);

    // Save the cart to the database
    await saveCartToDatabase(cart);

    return cart;
}
```

The Invoke client that comes from the Application Context is also typed, based
on the `AppContext` type exported by convention from your `site` app.

### Example 3: Uploading a file to the Server

Suppose we have an action called `uploadFile`, that uploads a file to a given
destination. The action receives a `file` property, which is a file object
that contains the file data, and a `destination` property, which is a string
that specifies the destination path for where the file should be uploaded.

```typescript
import type { AppContext } from "site/apps/site.ts";

export interface Props {
    file: File;
    destination: string;
}

export const async function uploadFile(
    props: Props, req: Request, ctx: AppContext
): Promise<void> {
    // Upload the file to the destination
    await uploadFileToDestination(props.file, props.destination);
}
```

We're using the `File` Web API as a prop type here, but this creates a problem:

The `File` object is not serializable via JSON, but the Invoke client uses JSON
under the hood. This means that trying to pass a `File` object as a prop to an
action will result in an error when trying to access the `file` property.

To solve this, the Invoke client provides a way to upload files via a multipart
request, which is a nice way to send files to the server, using the `FormData`
API and the `multipart/form-data` content type under the hood.

To make use of this, you only need to add a `multipart: true` option to the
Invoke `InvokerRequestInit` (Which is the second argument to any invoke call), and
the client will automatically use a custom protocol to send the payload 
via multipart, thus making it possible to send files to the server.

We can now call this action from the Browser, using the `invoke` client
exported from the `runtime.ts` file:

```tsx
import { invoke } from "site/runtime.ts";

export function UploadFileInput() {
    const uploadFile = async (file: File) => {
        await invoke.site.actions.uploadFile({
            file: file,
            destination: "/uploads/files"
        }, { multipart: true });
    }

    return (
      <input 
        type="file" 
        onChange={async (e) => {
          const file = e.target.files[0];
          if (file) {
            await uploadFile(file);
          }
        }}
      />
    );
}
```

Now the `file` property can be safely accessed in the action!

**Important**: When using the `multipart` option, the Invoke client will
send a FormData object to the server, which only supports Files and strings.
This means that any property that is a number or a boolean will be converted
to a string.

### Example 4: Batch Invoke

Batch invoke is useful when you need to perform multiple operations
simultaneously and want to minimize network latency by reducing the
number of individual requests. Here’s an example scenario where using
batch invoke makes sense: retrieving multiple sets of related data in a single request.

Suppose we have a user logged in, and we have three different loaders
that return data related to the user: One for notes, one for the address and one
for the orders. 

We can retrieve all three of these sets of data in a single request by using a batch invoke:

```typescript
import { invoke } from "site/runtime.ts";

// We can always destructure the invoke client properties
// to write easier to read code
const { loaders } = invoke.site;

const user = ...; // Get the current user from somewhere

const {
  userNotes,
  userAddress,
  userOrders,
} = await invoke({
  userNotes: loaders.getUserNotes({ userId: user.id, orderBy: "latest" }),
  userAddress: loaders.getUserAddress({ token: user.token }),
  userOrders: loaders.getUserOrders({ userId: user.id }),
});
```

By passing an object with the loaders/actions as properties, the Invoke client will
automatically batch the requests, and return the results in the same format
as the passed object. We still have automatically inferred types when batch invoking this way!