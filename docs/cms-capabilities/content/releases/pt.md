---
description: Ambientes de edição e evoluções do site
since: 2.0
---

Na tela de releases, é possível avaliar os diferentes ambientes de edição (`environment`) do site, bem como as diferentes publicações (`releases`) realizadas. Cada ambiente de edição oferece um espaço único para que múltiplos usuários possam fazer alterações e possa enviar tais alterações para produção (para o endereço do site oficial).

<img width="640" alt="Tela de Releases e envs" src="/docs/cms-capabilities/releases/releases1.png">

Ao realizar qualquer alteração no site, o seletor de ambientes sinaliza que há alterações realizadas no ambiente atual. O `Staging` é o ambiente padrão e inicia sem alterações. Isto é indicado no canto superior direito, no seletor de ambientes. O nome staging, sem um número associado e na cor verde, indica que o ambiente atual não difere do ambiente em produção.

<img width="480" alt="Estado do ambiente" src="/docs/cms-capabilities/releases/releases2.png">

Para publicar um ambiente, é preciso ir na opção de `publish`. Nela, será possível verificar as alterações realizadas, bem como realizar a publicação para o endereço em produção. Observe que cada ambiente pode realizar mudanças e alterações de forma independente. Antes de publicar uma alteração, ou mesmo quando achar necessário, o usuário realizará um `Rebase`.

O processo de `rebase` se traduz em incorporar o estado atual do ambiente de produção na próprio ambiente. Tenha em mente as seguintes dicas de uso sobre ambientes:

- Para realizar um conjunto de alterações, faça isso num ambiente em separado. Isto permite ver alterações que são específicas daquele ambiente.
- Por exemplo, crie um ambiente **home** para alterações na home, ou **header** para alterações no header global, ou um ambiente **blackfriday** para alterações especificas de um evento.
- Caso queira testar alterações, mas que serão descartadas, crie um ambiente como **rascunho** ou **teste**.
- Ao começar a trabalhar em um ambiente, e também antes de publicar alterações, faça **rebase** e teste a página. Isto garante que o ambiente atual terá o que está em produção mais suas alterações realizadas.

Vamos dar um exemplo de mudanças em um cenário com dois ambientes: `staging` e `matheus`. As seguintes ações foram realizadas:

<img width="640" alt="Exemplo de operações de releases" src="/docs/cms-capabilities/releases/releases3.png">

1. Um, ou dois usuários, realizaram o total de duas mudanças no ambiente `staging`
2. Um usuário realizou uma alteração no ambiente `matheus`. Neste momento, todos os dois ambientes divergem entre si e divergem do ambiente em produção.
3. Uma publicação é feita a partir do ambiente staging. Neste momento, o estado atual do `staging` e produção são iguais.
4. No ambiente `matheus` um usuário faz o rebase. Dessa forma, o ambiente `matheus` incorpora as alterações que foram inseridas a partir de staging, mas mantendo a alteração que existia antes.
5. Em seguida, é feita uma publicação a partir do ambiente `matheus`. Neste momento, o ambiente `matheus` e produção apresentam o mesmo estado.
6. Por fim, `staging` faz um rebase, fazendo com que todos os ambientes estejam no mesmo estado.

# Environment (ambientes de desenvolvimento)

Um ambiente representa um espaço de trabalho onde é possível realizar um conjunto de alterações ou modificações que poderão ser publicadas. Todo ambiente é compartilhável: ou seja, multiplos usuários podem fazer alterações no mesmo ambiente, de forma que todas possam ser publicadas ao mesmo tempo.

O `Staging` é o ambiente padrão e inicia sem alterações. Isto é indicado no canto superior direito, no seletor de ambientes. O nome staging, sem um número associado e na cor verde, indica que o ambiente atual não difere do ambiente em produção.

<img width="640" alt="Biblioteca de sections" src="/docs/cms-capabilities/releases/releases5.png">

# Releases (Lançamentos)

`Releases` contém o histórico de todas as versões publicadas do seu site e
permite que você restaure para versões anteriores, se necessário.

<img width="640" alt="Lista de releases" src="/docs/cms-capabilities/releases/releases4.png">

## Passo a passo

1. Apenas o primeiro lançamento representa o estado atual no site. Procure a versão para qual deseja retornar e acesse a operação de `Revert`.
2. Essa operação irá restaurar o código para o estado anterior, incluindo alterações no estado da páginas e código do repositório.