---

description: Newsletter com HTMX e Deco Records  
since: 1.0.0  

---

## Principais ferramentas

- Deco.cx como hospedagem e CMS.
- Deco Records como banco de dados SQLite, utilizando o
  [Drizzle ORM](https://orm.drizzle.team/)
- App da Resend para envio de e-mails de confirmação. API de envio de e-mails
  que oferece um plano gratuito de 3.000 e-mails por mês.

## Configurações necessárias

1. Criar um site na [deco.cx](https://deco.cx/new)
2. Configurar o [Deco Records](https://deco.cx/docs/en/reference/deco-records)

> Para esse tutorial, criamos uma tabela "newsletter" com as colunas `id`,
> `email`, `confirmed_at`, `confirmation_key`.

3. Instalar a app da Resend no menu "Apps", configurando a API Key. Ao instalar
   a app Resend na deco, você encontrará instruções de como fazer isso.

## Criando as sections utilizadas

Duas sections foram utilizadas nesse tutorial:

1. `newsletterSubsbribe.tsx`: Formulário de inscrição na Newsletter (campo de
   e-mail) + [action](https://deco.cx/docs/pt/concepts/action) inline que
   realiza o processo de inclusão do e-mail no banco de dados e envio do e-mail
   usando a app da Resend. Principais componentes da section:

   ```tsx
   export async function action(
   props: Props,
   req: Request,
   ctx: AppContext & RecordsApp & ResendApp,
   ): Promise<Props> {

   const form = await req.formData(); // Obtém os dados do banco de dados
   const email = `${form.get("email") ?? ""}`;

   if (!email) {
       console.log("Email is empty");
       return { ...props, submissionResponse: { email: "" } };
   }

   const drizzle = await ctx.invoke("records/loaders/drizzle.ts"); // Carrega o drizzle para interagir com o banco de dados

   try {
       const recs = await drizzle // Verifica se o email já está registrado no banco de dados
           .select({ email: newsletter.email })
           .from(newsletter)
           .where(eq(newsletter.email, email));

       if (recs.length) {
       return {
           ...props,
           submissionResponse: { error: "Email already exists.", email },
       };
       }

       const confirmationKey = crypto.randomUUID(); // Gera uma chave de confirmação única para a verificação

       await drizzle.insert(newsletter).values({ // Insere o novo registro de newsletter no banco de dados
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

   E no formulário contém a utilização do HTMX para realizar a requisição de
   forma assíncrona e atualizar apenas a seção necessária.

   ```tsx
   <form
     class="form-control"
     hx-post={useComponent(import.meta.url, props)} // URL com a utilização do hook useComponent para onde a requisição será enviada
     hx-target="closest section" // Elemento alvo que será atualizado com a resposta do servidor, a ideia aqui é chamar o mesmo componente para não precisar alterar a página inteira
     hx-swap="outerHTML" // Modo de substituição do conteúdo do alvo
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
       {/*spinner usado enquanto o HTMX recebe a requesição*/}
     </button>
   </form>;
   ```

2. `newsletterConfirmation.tsx`: Section a ser incluída na página `/confirm` do
   site para que os usuários possam confirmar a inscrição e receber um feedback
   positivo. O principal uso dessa section foi a utilização do loader para
   processar os dados:

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

## Conclusão

Este tutorial demonstra como implementar um sistema de inscrição em newsletter
utilizando as ferramentas deco.cx, Deco Records e Resend. A solução apresentada
oferece um fluxo completo, desde a captura do e-mail do usuário até a
confirmação da inscrição, garantindo a integridade dos dados e a experiência do
usuário. A utilização de tecnologias modernas como HTMX e Drizzle ORM
proporciona uma implementação eficiente e de fácil manutenção. Este sistema pode
ser facilmente adaptado e expandido para atender às necessidades específicas de
diferentes projetos web.
