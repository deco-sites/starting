---
description: Deco records é um banco de dados sqlite, pronto para produção de fácil instalação, que está localizado próximo do usuário.
since: 1.0.0
---

## Instalando o deco records no seu site

> Para iniciar o processo de instalação, crie um ambiente novo, no admin deco do seu site, ou resete o ambiente que esteja utilizando, por que será feito um publish ao fim desta etapa.

Siga o passo a passo abaixo para realizar a instalação no seu site ou siga o vídeo. 

<iframe width="640" height="400" src="https://www.loom.com/embed/8414aab7837c4930b92bcbe97651f427?sid=27354f03-3206-464f-987e-22e703b9ed79" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

1. Entre no admin do seu site na deco
2. Na barra lateral clique no menu records
3. Em seguida clique em `Setup Deco Records`, aguarde o processo de instalação da app e criação do banco de dados. Nesta etapa, será criado e editado alguns arquivos do seu site (deno.json, .gitignore, manifest.gen.ts, apps/deco/records.ts, drizzle.config.ts, db/schema.ts, .deco/blocks/deco-records.json)
![setup deco records](/docs/reference/deco-records/setup.webp)
4. Após a instalação, clique em `Show diff and publish` para publicar a instalação da sua app e criação do banco de dados.
5. Revise os arquivos alterados, edite a descrição e, por fim, clique em `Publish now`.

Após o processo de publicação finalizar, ao acessar o menu de records, terá a visualização do seu banco de dados.
![Visualização do banco de dados no admin](/docs/reference/deco-records/records-view.webp)

## Criando tabelas

> Será necessário ter os arquivos que foram criados durante a instalação do deco records no computador. Caso seja necessário realize um git pull do seu projeto remoto.

Siga o passo a passo abaixo para criar novas tabelas no seu banco de dados ou siga o vídeo. Neste processo será utilizado o [drizzle-orm](https://orm.drizzle.team/) e [drizzle-kit](https://orm.drizzle.team/) para criação das tabelas e gerenciamento delas no seu banco de dados, através de [schema migrations](https://medium.com/@joelrodrigues/o-que-s%C3%A3o-database-migrations-f817448870a2). No exemplo a seguir, será criado uma tabela com nome profiles, com as colunas: `id`, `name` e `email`.

<iframe width="640" height="400" src="https://www.loom.com/embed/7d7442496a8c45109eaf67f1e00fc2f1?sid=2124b27e-d754-44f0-b7a2-8fc0e977d945" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

1. Edite o arquivo `db/schema.ts` para criar tabelas.
```ts
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const profiles = sqliteTable("profiles", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email"),
});
```
2. Execute a deno task `db:setup:deps` no seu terminal para instalar as dependências necessárias para realizar o schema migration. É necessário versão do deno maior ou igual a 1.43.0 e utilizar a variável de ambiente `DENO_FUTURE=1` para habilitar a instalação de módulos npm.
```sh
DENO_FUTURE=1 deno task db:setup:deps
```
3. Execute a deno task `db:generate`, para criar os arquivos sql responsáveis pela schema migration. Execute este comando sempre que realizar uma alteração nas suas tabelas para gerar novas schema migrations.
```sh
DENO_FUTURE=1 deno task db:generate
```
4. Entre no admin do seu site, clique no menu de `Settings`, em seguida, na seção Database credentials, clique em `Generate now`. Por fim, clique no icone de copiar as credenciais.
5. Adicione as credenciais, nas variáveis de ambiente do sistema operacional do seu computador.
![Visualização do botão de gerar credenciais](/docs/reference/deco-records/generate-credentials.webp)
6. Execute a deno task `db:migrate`, para aplicar os schema migrations criadas no passo 3, no deco records.
7. No menu de records do seu site, no admin da deco, terá as tabelas de `profiles` e `__drizzle__migrations`. A tabela drizzle__migrations é auto gerada e utilizada pelo drizzle-kit para gerenciar os schema migrations.
![Visualização das tabelas do deco records](/docs/reference/deco-records/records-view-tables.webp)

> Adicione os arquivos auto gerados em um git commit e realize um push para o git remoto.

## Lendo e escrevendo dados

Com a tabela de profiles criada, agora podemos criar uma [section](https://deco.cx/docs/pt/concepts/section) de gerenciar perfis, onde lista, remove e cria um perfil.

Crie uma section que será o gerenciador de perfis.

```ts
import { SectionProps } from "deco/types.ts";
import type { AppContext } from "site/apps/deco/records.ts";
import { profiles } from "site/db/schema.ts";

export async function loader(
  p: null,
  req: Request,
  { invoke }: AppContext,
) {
  const drizzle = await invoke.records.loaders.drizzle(); // pega o client do drizzle

  const profilesData = await drizzle.select({
    email: profiles.email,
    name: profiles.name,
  }).from(profiles); // faz uma query na tabela de profiles, selecionando colunas email e name

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

No exemplo anterior, o inline loader que faz utiliza o cliente `drizzle`, que é fornecido pela app do records, e faz uma consulta no banco de dados, retornando o resultado da consulta para a section.
Já a section, mapeia a a lista de profiles, renderizando as propriedades name e email.

Agora, vamos adicionar o formulário que será utilizado para criar um novo perfil na tabela de profiles.

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
+           <label for="description">email</label>
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

Adicionamos um formulário, que tem os campos de texto name e email, e sua realiza um post na url `createUrl` quando feito o submit. A `createUrl` é o link que invoca a renderização da própria section no servidor. Agora que o formulário foi adicionado, vamos adicionar no inline loader a criação do usuário, quando a props mode possuir o valor `create`.

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

O inline loader, quando receber a propriedade mode com valor create e o request possuir a proprieadade body, ele irá inserir uma nova linha na tabela de profiles com o name e email recebidos da requisição.
Já temos a listagem e a criação de um perfil novo, o próximo passo é fazer a remoção de um perfil.

Para fazer a remoção, adicionaremos a propriedade mode com valor `delete` e uma nova propriedade chamada `email`, que serão utilizados no inline loader para remover o perfil.

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

Adicionamos o formulário com a propriedade mode com valor delete e email, que será utilizado no inline loader para remoção do perfil.
Por fim, vamos remover o perfil no inline loader.

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

## Desenvolvendo localmente

Para desenvolver localmente é necessário ter as credenciais de acesso ao banco de dados, que pode ser criada no admin do seu site na deco. Após ter adicionado as variáveis de ambiente fornecidas pelo admin,
execute a deno task `db:pull:prod` para fazer um dump do seu banco de dados e em seguida, inserir no banco de dados localmente no arquivo `sqlite.db`.

```sh
deno task db:pull:prod
```

Para acessar o banco do deco records durante o desenvolvimento, é necessário ter as credenciais nas variáveis de ambiente, que podem ser criadas no admin da deco. Além das credenciais, precisa de uma nova variável de ambiente, chamada `USE_PRODUCTION_DB` com valor `1`.

### Links referencia

- [drizzle-orm docs](https://orm.drizzle.team/docs/overview)
- [schema migrations](https://medium.com/@joelrodrigues/o-que-s%C3%A3o-database-migrations-f817448870a2)
