---
description: Trabalhando com sections
since: 2.0
---

As sections representam componentes que podem ser utilizadas para montar uma página. Uma section é um componente Preact, ou seja, um elemento que transforma algumas propriedades passadas para este componente em HTML.

Ao abrir as sections (barra lateral `Content > Sections`), você terá acesso a um conjunto de sections salvas, a biblioteca de componentes e a possibilidade de criar e salvar sections. 

<img width="640" alt="Listagem de Sections" src="/docs/cms-capabilities/sections/sections1.png">

As diferentes categorias presentes na listagem são obtidas a partir do diretório que a section se encontra ou da **App** na qual ela origina (uma **App** pode importar diferentes sections).

A partir desta tela é possível:

<img width="480" alt="Opções na listagem de Sections" src="/docs/cms-capabilities/sections/sections2.png">

- **Saved**: Listar as sections salvas
- **Library**: Listar e testar todas as sections disponíveis pra uso
- **Create new Section**: Criar novas Sections

## Alterar sections salvas

Uma **sections salva** representa um compoente que pode ser comparitlhado entre várias páginas. Elementos como **Footer** e **Header** podem ser compartilhado entre diferentes páginas, da forma que estes elementos podem ter suas propriedades configuradas apenas uma vez.

<img width="480" alt="Sections salvas" src="/docs/cms-capabilities/sections/sections3.png">

As sections salvas podem ser configuradas a partir desta tela, de forma afetar todas as sections do sistema. Ao clicar em uma section salva é possível alterar suas propriedades configuradas anteriormente. 

<img width="640" alt="Alterando uma section salva" src="/docs/cms-capabilities/sections/sections4.png">

## Configurando uma section

Ao selecionar uma section, será possível definir suas propriedades. Algumas das propriedades podem pedir a seleção de uma imagem, texto, seleção de itens, ou mesmo de um **loader**. Um **loader** é uma entidade que carrega dados e que pode receber configurações (selecionando um loader da library) ou já estar configurado (loaders salvos).

<img width="640" alt="Biblioteca de sections" src="/docs/cms-capabilities/pages/pages4-1.png">

## Listar e testar demais sections

Ao listar as sections na library, e clicar em uma section, você passa a ter acesso a uma visualização da Section, bem como acesso ao código original daquele elemento. É também possível editar o código, para testar alterações na funcionalidade do componente.

<img width="640" alt="Visualização de uma section" src="/docs/cms-capabilities/sections/sections5.png">

Na barra lateral a direita, é possível acessar:

- `🌐` Visuzalização do elemento
- `☰` Formulário com propriedades
- `{}` Descrição textual das propriedades
- `</>` Editor de código
- `🖥️` Logs relacionados a visualização da section
- `✨` Decopilot: IA para alteração do código

## Criar nova Section

É possível criar uma section salva (um componente compartilhável entre várias páginas) ou a base (template) de uma section.

<img width="320" alt="Criando uma section" src="/docs/cms-capabilities/sections/sections6.png">

- **New template**: Cria uma section que será disponibilizada na biblioteca de componentes. Isto significa criar uma base de código que definirá um conjunto de propriedades e um programa para gerar o HTML associado.
- **Using a template**: Cria uma section salva a partir de uma base existente. O nome será a identificação deste elemento entre as diferentes páginas.
