---

description: Newsletter com HTMX e Deco Records  
since: 1.0.0  

---

## Main tools

- Deco.cx for hosting and CMS.
- Deco Records as an SQLite database, using
  [Drizzle ORM](https://orm.drizzle.team/)
- Resend app for sending confirmation emails. Email sending API that offers a
  free plan of 3,000 emails per month.

## Necessary configurations

1. Create a site on [deco.cx](https://deco.cx/new)
2. Configure [Deco Records](https://deco.cx/docs/en/reference/deco-records)

> For this tutorial, we created a "newsletter" table with columns `id`, `email`,
> `confirmed_at`, `confirmation_key`.

3. Install the Resend app in the "Apps" menu, configuring the API Key. When
   installing the Resend app on deco, you will find instructions on how to do
   this.

## Creating the sections used

Two sections were used in this tutorial:

1. `newsletterSubscribe.tsx`: Newsletter subscription form (email field) +
   inline [action](https://deco.cx/docs/pt/concepts/action) that performs the
   process of including the email in the database and sending the email using
   the Resend app. Main components of the section:

   ```tsx
   export async function action(
       props: Props,
       req: Request,
       ctx: AppContext & RecordsApp & ResendApp,
   ): Promise<Props> {

       const form = await req.formData(); // Gets the data from the database
       const email = `${form.get("email") ?? ""}`;

       if (!email) {
           console.log("Email is empty");
           return { ...props, submissionResponse: { email: "" } };
       }

       const drizzle = await ctx.invoke("records/loaders/drizzle.ts"); // Loads drizzle to interact with the database
       
       try {
           const recs = await drizzle // Checks if the email is already registered in the database
               .select({ email: newsletter.email })
               .from(newsletter)
               .where(eq(newsletter.email, email));

           if (recs.length) {
           return {
               ...props,
               submissionResponse: { error: "Email already exists.", email },
           };
           }

           const confirmationKey = crypto.randomUUID(); // Generates a unique confirmation key for verification

           await drizzle.insert(newsletter).values({ // Inserts the new newsletter record into the database
               email,
               confirmed_at: null,
               confirmation_Key: confirmationKey,
           });

           
           await ctx.invoke("resend/actions/emails/send.ts", {
               subject: `Personal Blog - Confirm your subscription`,
               from: no-reply@blog.owner
               html: `<h1>Thanks for subscribing!</h1><br/><br/>Click <a href="https://sites-blog.decocdn.com/confirm-newsletter?key=${confirmationKey}">here</a> to confirm your subscription.`,
               to: email,
           });

           return { ...props, submissionResponse: { email: "" } };
       } catch (e) {
           console.log(e);
           ctx.monitoring?.logger?.error(e);
           return {
           ...props, submissionResponse: { error: "System error", email },
           };
       }
   }

   export function loader(props: Props) {
   return props;
   }
   ```

   And in the form, it contains the use of HTMX to make the request
   asynchronously and update only the necessary section.

   ```tsx
   <form
     class="form-control"
     hx-post={useComponent(import.meta.url, props)} // URL using the useComponent hook where the request will be sent
     hx-target="closest section" // Target element that will be updated with the server response, the idea here is to call the same component to avoid changing the entire page
     hx-swap="outerHTML" // Mode of replacing the target content
   >
     <input
       type="email"
       value={submissionResponse?.email}
       placeholder="Email address"
       class="input input-bordered"
       name="email"
       required
     />
     <button class="btn btn-primary" type="submit">
       <span class="inline [.htmx-request_&]:hidden">{buttonText}</span>
       <span class="hidden [.htmx-request_&]:inline loading loading-spinner" />
       {" "}
       {/*spinner used while HTMX receives the request*/}
     </button>
   </form>;
   ```

2. `newsletterConfirmation.tsx`: Section to be included on the `/confirm` page
   of the site so that users can confirm the subscription and receive positive
   feedback. The main use of this section was the use of the loader to process
   the data:

   ```tsx
   export const loader = async (
     props: Props,
     req: Request,
     ctx: AppContext & RecordsApp,
   ) => {
     const url = new URL(req.url);

     const reallyQs = url.searchParams.get("really");

     if (!reallyQs) {
       return props;
     }

     const confirmationKey = url.searchParams.get("key");

     if (!confirmationKey) {
       return { ...props, error: "No confirmation key." };
     }

     const drizzle = await ctx.invoke("records/loaders/drizzle.ts");

     await drizzle
       .update(newsletter)
       .set({
         confirmed_at: new Date().toISOString(),
         confirmation_key: null,
       })
       .where(eq(newsletter.confirmation_key, confirmationKey ?? ""));

     return { ...props, really: true };
   };
   ```

## Conclusion

This tutorial demonstrates how to implement a newsletter subscription system
using deco.cx tools, Deco Records, and Resend. The presented solution offers a
complete flow, from capturing the user's email to confirming the subscription,
ensuring data integrity and user experience. The use of modern technologies such
as HTMX and Drizzle ORM provides an efficient and easy-to-maintain
implementation. This system can be easily adapted and expanded to meet the
specific needs of different web projects.
