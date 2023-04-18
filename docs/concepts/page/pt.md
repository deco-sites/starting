---
description: Uma Page na deco.cx é uma unidade de conteúdo que consiste de um caminho de URL e múltiplas Sections configuradas 
---

Uma **Page** é o _building block_ fundamental de um Site _deco.cx_, que
normalmente terá várias Pages. Cada Page consiste em **uma ou mais
[Sections](/docs/pt/concepts/section)** configuradas, que podem ser consideradas
como componentes modulares que compõem o conteúdo da Page. Uma Page também será
**associada à um caminho de URL** que, quando visitado, deve renderizar tal
Page. Este caminho pode ser estático como `/about` ou algo dinâmico como
`/products/:slug`, que corresponderá a várias URLs com um parâmetro dinâmico
seguindo a
[URLPattern API](https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API).

<img width="1512" alt="image" src="https://user-images.githubusercontent.com/18706156/225141097-0538f723-6e5f-4a85-ba41-03fa145c87bc.png">

<!-- TODO: Atualizar depois na nova engine -->

As Pages podem ser **Publicadas** ou **Rascunhos**, o que afetará a visibilidade
de seu conteúdo.

- **Publicada**: A Page é visível publicamente e será renderizada se algum
  usuário acessar seu caminho naquele Site.
- **Rascunho**: A Page só pode ser acessada com um parâmetro de URL específico
  `?pageId`.

**Todas as alterações em Pages publicadas criam automaticamente uma nova Page de
rascunho**. Isso garante que nenhuma alteração errônea afetará o tráfego de
produção de um site.

Depois disso, é possível publicar uma página de rascunho clicando no botão
**Publicar** no Admin.
