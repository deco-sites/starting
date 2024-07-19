---
description: Site editing environments and releases evolution
since: 2.0
---

On the releases screen, it is possible to evaluate the different editing
environments (`environment`) of the site, as well as the different publications
(`releases`) made. Each editing environment offers a unique space for multiple
users to make changes and send those changes to production (to the official site
address).

<img width="640" alt="Releases and environments screen" src="/docs/cms-capabilities/releases/releases1.png">

When making any changes to the site, the environment selector indicates that
there are changes made in the current environment. The `Staging` is the default
environment and starts without any changes. This is indicated in the top right
corner, in the environment selector. The name staging, without an associated
number and in green, indicates that the current environment does not differ from
the production environment.

<img width="480" alt="Environment state" src="/docs/cms-capabilities/releases/releases2.png">

To publish an environment, it is necessary to go to the `publish` option. There,
it will be possible to check the changes made, as well as publish them to the
production address. Note that each environment can make changes independently.
Before publishing a change, or whenever necessary, the user will perform a
`Rebase`.

The `rebase` process translates into incorporating the current state of the
production environment into the own environment. Keep in mind the following
usage tips about environments:

- To make a set of changes, do it in a separate environment. This allows you to
  see changes that are specific to that environment.
- For example, create a **home** environment for changes to the home page, or
  **header** for changes to the global header, or a **blackfriday** environment
  for specific changes related to an event.
- If you want to test changes, but they will be discarded, create an environment
  like **draft** or **test**.
- When starting to work in an environment, and also before publishing changes,
  perform a **rebase** and test the page. This ensures that the current
  environment will have what is in production plus the changes made.

Let's give an example of changes in a scenario with two environments: `staging`
and `matheus`. The following actions were performed:

<img width="640" alt="Example of releases operations" src="/docs/cms-capabilities/releases/releases3.png">

1. One or two users made a total of two changes in the `staging` environment.
2. One user made a change in the `matheus` environment. At this point, both
   environments diverge from each other and differ from the production
   environment.
3. A publication is made from the staging environment. At this point, the
   current state of the `staging` and production environments are the same.
4. In the `matheus` environment, a user performs a rebase. This way, the
   `matheus` environment incorporates the changes that were made from staging,
   but keeps the existing change.
5. Next, a publication is made from the `matheus` environment. At this point,
   the `matheus` environment and production have the same state.
6. Finally, `staging` performs a rebase, ensuring that all environments are in
   the same state.

# Environment (development environments)

An environment represents a workspace where it is possible to make a set of
changes or modifications that can be published. Every environment is shareable:
meaning multiple users can make changes in the same environment, so that all
changes can be published at the same time.

O `Staging` é o ambiente padrão e inicia sem alterações. Isto é indicado no
canto superior direito, no seletor de ambientes. O nome staging, sem um número
associado e na cor verde, indica que o ambiente atual não difere do ambiente em
produção.

<img width="640" alt="Biblioteca de sections" src="/docs/cms-capabilities/releases/releases5.png">

# Releases (Lançamentos)

`Releases` contém o histórico de todas as versões publicadas do seu site e
permite que você restaure para versões anteriores, se necessário.

<img width="640" alt="Lista de releases" src="/docs/cms-capabilities/releases/releases4.png">

## Passo a passo

1. Apenas o primeiro lançamento representa o estado atual no site. Procure a
   versão para qual deseja retornar e acesse a operação de `Revert`.
2. Essa operação irá restaurar o código para o estado anterior, incluindo
   alterações no estado da páginas e código do repositório.
