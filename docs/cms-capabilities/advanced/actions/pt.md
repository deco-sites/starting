---
description: Actions (execução de ações)
since: 2.0
---

As actions representam funções que tipicamente são invocadas pelos usuários no
browser. Por exemplo, se cadastrar em uma newsletter, adicionar um item a um
carrinho de compras ou qualquer operação que exija a intervenção de um servidor.

Na plataforma, você pode testar tais ações, ou mesmo ter actions que são apenas
executadas nessa interface administrativa.

Ao contrário de sections e loaders, é possível salvar entidades
pré-configuradas, mas não há muita utilidade nisto. Neste sentido, acessando a
barra lateral `Advanced > Actions`, você terá acesso a biblioteca de actions e a
possibilidade de criar, salver, editar e executar actions existentes.

<img width="640" alt="Listagem de Actions" src="/docs/cms-capabilities/actions/actions1.png">

As diferentes categorias presentes na listagem são obtidas a partir do diretório
que a action se encontra ou da **App** na qual ela origina (uma **App** pode
importar diferentes actions).

A partir desta tela é possível:

- **Saved**: Listar as actions salvas
- **Library**: Listar e testar todas as actions disponíveis para uso
- **Create new Action**: Criar novas actions

## Listar e testar actions

Ao listar as actions na library, e ao clicar em uma action, você passa a ter
acesso a uma visualização da Action, bem como acesso ao código original daquele
elemento. É também possível editar o código, para testar alterações na
funcionalidade do componente.

<img width="640" alt="Visualização de uma action" src="/docs/cms-capabilities/actions/actions2.png">

Na barra lateral a direita, é possível acessar:

- `🌐` Visuzalização do elemento
- `☰` Formulário com propriedades
- `{}` Descrição textual das propriedades
- `</>` Editor de código
- `🖥️` Logs relacionados a visualização do loader
- `✨` Decopilot: IA para alteração do código

## Criar nova Action

É possível criar uma action salva ou a base (template) de uma action.

<img width="320" alt="Criando uma action" src="/docs/cms-capabilities/actions/actions3.png">

- **Create template**: Cria uma action que será disponibilizada na biblioteca de
  componentes. Isto significa criar uma base de código que definirá um conjunto
  de propriedades e um programa para retornar dados.
- **Using a template**: Cria uma action salva a partir de uma base existente. O
  nome será a identificação deste elemento.
