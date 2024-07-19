---
description: Aprenda como criar variações de conteúdo com base em condições específicas
since: 2.0
---

**Variantes** permitem segmentar o conteúdo com base em certas _condições_,
permitindo personalizar e adaptar as páginas para diferentes _segmentos_ de
usuários. Por exemplo, você pode criar uma variante para alterar o layout da
página toda **sexta-feira** para **50% dos usuários**. Ao utilizar variantes,
você pode modificar dinamicamente o conteúdo direcionado a segmentos específicos
de sua audiência.

As **variantes** são impulsionadas por **Matchers** (ou **Segments**), que são
_blocos_ usados para avaliar _condições_ específicas com base em
_características do usuário_, _data e hora_, _seleção aleatória_ (testes A/B),
_histórico de navegação do usuário_, _dispositivo do usuário_, ou _qualquer
informação externa extraída da solicitação_. **Matchers** são configurados para
determinar se um usuário pertence a um determinado **Segmento** ou não.
**Segmentos** se referem a uma parte dos usuários do seu site que satisfazem as
condições definidas pelos matchers. Um usuário pode pertencer a vários
**segmentos** simultaneamente. Por exemplo, um usuário pode fazer parte do
segmento `São Paulo`, que segmenta usuários localizados em `São Paulo`, e também
pode fazer parte de um experimento que inclui 50% dos usuários. **Segmentos**
podem ser combinados para criar critérios de segmentação mais específicos.

A tela de segmentos permite listar os **Matchers**/**Segmentos** salvos, uma
listagem de onde são utilizados, e bem como criar novos Segmentos.

<img width="640" alt="Biblioteca de Segmentos" src="/docs/cms-capabilities/segments/segments1.png">

**Matchers** podem ser usados _inline_ ou salvos com um **nome específico**. A
principal diferença entre as duas abordagens é que um matcher salvo será
avaliado apenas uma vez, e seu resultado permanecerá consistente durante todo o
ciclo de solicitação. Isso significa que, uma vez que um matcher é avaliado como
`true` ou `false` para uma determinada visualização de página do usuário, esse
valor será mantido durante toda a solicitação.

Esse comportamento permite que você reutilize o **mesmo resultado do matcher em
várias variantes dentro da mesma página ou em lugares diferentes em seu site**.
Dessa forma, você garante um comportamento consistente e evita avaliações
redundantes da mesma condição.

Além disso, alguns matchers têm um comportamento `sticky`, o que significa que o
resultado do matcher pode ser armazenado na sessão do usuário e permanecer
consistente até o término da sessão. Isso é especialmente útil para testes A/B,
onde os usuários são atribuídos a uma variante específica e devem ter uma
experiência consistente durante a sessão.

Aproveitando os Matchers e suas capacidades, você pode criar experiências
dinâmicas e personalizadas para seus usuários, ao mesmo tempo em que otimiza o
desempenho, reduzindo avaliações redundantes e mantendo a consistência entre as
variantes.

## Testes A/B

Você pode criar **testes A/B** manualmente selecionando a condição
`Random Matcher` e configurando a porcentagem de tráfego a ser dividido.
Alternativamente, se você não estiver usando uma condição `Random Matcher`,
nosso botão "Publicar" solicitará automaticamente a criação de um novo teste. O
resultado é exatamente o mesmo que criar o teste manualmente.

## Criando segmentos

Para criar um segmento a ser usado em diferentes sites, basta entrar na operação
de "Create New Segment".

<img width="320" alt="Criando um novo Segmento" src="/docs/cms-capabilities/segments/segments2.png">

É possível:

- **Create template**: Cria um segmento que será disponibilizado na biblioteca
  de segmentos. Isto significa criar uma base de código que definirá um conjunto
  de propriedades e um programa para retornar dados.
- **Using a template**: Cria um segmento salvo a partir de uma base existente. O
  nome será a identificação deste elemento.

A implementação padrão oferece um conjunto rico de seleções possíveis para uso,
mas é possível criar qualquer segmento que se baseie na requisição, contexto do
site ou propriedades definidas pelo usuário.

<img width="480" alt="Selecionando uma base" src="/docs/cms-capabilities/segments/segments3.png">
