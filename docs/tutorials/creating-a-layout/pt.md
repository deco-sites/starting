---
description: Aprenda a criar layouts para as páginas do seu site.
since: 1.0.0
---

# Tópicos

1. Introdução aos Layouts de Página
   - O que são Layouts de Página?
   - Por que usar Layouts de Página?
2. Criando um Layout de Página
   - Adicionando uma nova seção chamada `Slot.tsx`.
   - Definindo o nome do Slot.
3. Usando um Layout de Página
   - Atribuindo um Layout de Página a uma Página.
4. Implementando Slots em um Layout de Página
   - Usando `UseSlot.tsx` para substituir o conteúdo de um Slot.

# Layout de Páginas

## O que são Layouts de Página?

_Layouts_ de Página são **páginas** reutilizáveis que definem a estrutura geral
e o conteúdo de uma página. Eles permitem que você separe o layout e o design de
uma página do seu conteúdo, facilitando a manutenção e atualização do seu site.
Com os Layouts de Página, você pode criar uma aparência e sensação consistentes
em todas as suas páginas, ao mesmo tempo que permite flexibilidade e
personalização.

## Por que usar Layouts de Página?

Usar Layouts de Página tem vários benefícios:

1. **Consistência**: Usando o mesmo layout em todas as suas páginas, você pode
   criar uma aparência e sensação consistentes para o seu site.
2. **Reuso**: Layouts de Página podem ser reutilizados em várias páginas,
   economizando tempo e esforço.
3. **Separação de responsabilidades**: Layouts de Página separam o layout e o
   design de uma página do seu conteúdo, facilitando a manutenção e atualização
   do seu site.
4. **Personalização**: Layouts de Página podem ser personalizados para atender
   às necessidades específicas de páginas individuais.

Agora que sabemos o que são Layouts de Página e por que devemos usá-los, vamos
ver como criá-los.

# Criando um Layout de Página

Criar um layout de página no deco.cx's é um processo simples que pode ser feito
inteiramente através do deco.cx's Admin. Você não precisa escrever nenhum código
para criar um layout. Em vez disso, você adicionará uma nova seção chamada
"Slot" às suas páginas existentes e, em seguida, salvará essas páginas como
layouts.

## Adicionando a seção `Slot.tsx`

Para começar, abra o live.ts deco.cx's Admin e navegue até uma página existente
que você deseja usar como página para seu layout. No editor de páginas, clique
no botão "+".

Na caixa de diálogo "_Adicionar seção_", selecione "`Slot.tsx`" na lista de
tipos de seção disponíveis. Isso criará uma nova seção em sua página que será
usada como área de conteúdo para páginas que usam este layout.

<img width="1511" alt="image" src="https://user-images.githubusercontent.com/5839364/232626099-d60adc7c-c84f-4b11-aae2-e96a94328b0f.png">

## Nome do `Slot.tsx`

Opcionalmente, você pode dar um nome à seção do slot que será exibido no Admin
do deco.cx para páginas que usam este layout. Para fazer isso, abra a seção do
slot clicando no cabeçalho da seção e, em seguida, digite um nome no campo "Nome
do Slot" no painel de configurações da seção.

<img width="297" alt="image" src="https://user-images.githubusercontent.com/5839364/232628023-d3fb4759-7232-491e-82fc-a2a9b6240ccb.png">

Por padrão slots são usados como conteúdos, mas você pode mudar livremente um
nome de um slot e atribuí-lo como preferir.

Depois de criar a seção do slot, você pode salvar esta página como um layout
clicando no botão "_Salvar_" no editor de página. Dê um nome ao seu layout e
clique em "_Salvar_". Seu layout agora estará disponível para uso em outras
páginas.

# Usando o layout de página

## Atribuindo um layout a uma página

Para usar seu novo layout em uma página, abra o editor de página para a página
em que deseja usar o layout e clique no botão "_Layout_" no topo do editor de
página. Isso abrirá a caixa de diálogo seletor de layout.

Na caixa de diálogo seletor de layout, você verá uma lista de layouts
disponíveis. Selecione o layout que deseja usar e clique em "_Aplicar_". O
layout agora será aplicado à sua página e a área de conteúdo será preenchida com
as seções adicionadas na página atual. Opcionalmente, você pode adicionar a
seção `UseSlot.tsx` para preencher um bloco específico.

## Implementação de Slots em um Layout de Página

Ao implementar slots a partir do layout de página escolhido, você pode
substituir facilmente o conteúdo padrão de uma seção específica pelo seu próprio
conteúdo. Isso é feito criando um componente `UseSlot.tsx` e correspondendo-o
com um componente `Slot.tsx` do pai no layout. O conteúdo no componente
`UseSlot.tsx` será exibido em vez do conteúdo padrão do componente `Slot.tsx`
correspondente, o casamento disso é feito pelo nome do `Slot.tsx`.

<img width="1507" alt="image" src="https://user-images.githubusercontent.com/5839364/232627019-db68b918-d1d7-4528-af9f-9fd33d4f4b0a.png">

É isso! Agora você criou um layout de página usando o live.ts e pode usá-lo para
criar rapidamente novas páginas com uma estrutura e layout consistentes.
