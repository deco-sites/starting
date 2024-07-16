---
description: Loaders (carregamento de dados)
since: 2.0
---

Os loaders representam componentes que podem ser utilizados para carregar dados.
Especialmente, os loaders podem ser usados para preencher dados de propriedades
de sections. Se uma section espera receber um dado estruturado que representa um
produto, isto pode ser preenchido manualmente para uma página, mas pode ser
carregado através de um loader.

Loaders podem fazer uso do contexto da requisição que o usuário faz, por
exemplo, a URL que o usuário usou para acessar, sua localização, ou outros dados
para determinar o dado a ser carregado. Da mesma forma, os Loaders também podem
fazer uso das configuraçãoes de uma App que ele faz parte.

E, por fim, os próprios loaders podem ter propriedades que são definidas pelos
usuários que os usam.

Ao abrir os loaders (barra lateral `Advanced > Loaders`), você terá acesso a um
conjunto de loaders salvos, a biblioteca de loaders e a possibilidade de criar,
editar e salvar loaders.

<img width="640" alt="Listagem de Loaders" src="/docs/cms-capabilities/loaders/loaders1.png">

As diferentes categorias presentes na listagem são obtidas a partir do diretório
que o loader se encontra ou da **App** na qual ele origina (uma **App** pode
importar diferentes loaders).

A partir desta tela é possível:

<img width="480" alt="Opções na listagem de Loaders" src="/docs/cms-capabilities/loaders/loaders2.png">

- **Saved**: Listar os loaders salvos
- **Library**: Listar e testar todos os loaders disponíveis para uso
- **Create new Loader**: Criar novos Loaders

## Alterar loaders salvos

Um **loader salvo** representa um loader que pode ser utilizado em diferentes
sections. Desta forma, um mesmo loader pode ter a mesma configuração a ser
aplicada em diferentes lugares do site. Ao mesmo tempo, isto permite que uma
única alteração ao loader salvo impacte várias partes do sistema.

> Caso uma página faça uso de um mesmo loader salvo em diferentes sections de
> uma página, este loader é carregado apenas uma vez. Isto torna o sistema
> extremamente eficiente! Por exemplo, um componente como `SearchResult` e
> `SEOPLP` podem precisar carregar os produtos de uma prateleira durante o
> carregamento de uma página. Caso ambas as sections que estejam nessa página
> façam uso de um mesmo loader salvo (ex.: `PLP Loader`), este será carregado
> apenas uma vez.

Ao clicar em um loader salvo é possível alterar suas propriedades configuradas
anteriormente.

<img width="480" alt="Alterando um loader salvo" src="/docs/cms-capabilities/loaders/loaders3.png">

Ao selecionar um loader, será possível definir suas propriedades. Algumas das
propriedades podem pedir a seleção de uma imagem, texto, seleção de itens, ou
mesmo outro **loader**!

É possível executar um loader para verificar quais dados são retornados durante
sua execução. Para tanto, é possível cirar no botão `Run`, que executará o
código associado a esse loader, e mostrará os dados de resposta.

## Listar e testar demais loaders

Ao listar os loaders na library, e clicar em um loader, você passa a ter acesso
a uma visualização do Loader, bem como acesso ao código original daquele
elemento. É também possível editar o código, para testar alterações na
funcionalidade do componente.

<img width="640" alt="Visualização de um loader" src="/docs/cms-capabilities/loaders/loaders4.png">

Na barra lateral a direita, é possível acessar:

- `🌐` Visuzalização do elemento
- `☰` Formulário com propriedades
- `{}` Descrição textual das propriedades
- `</>` Editor de código
- `🖥️` Logs relacionados a visualização do loader
- `✨` Decopilot: IA para alteração do código

## Criar novo Loader

É possível criar um loader salvo (um componente compartilhável entre várias
sections ou blocos) ou a base (template) de um loader.

<img width="320" alt="Criando uma section" src="/docs/cms-capabilities/loaders/loaders5.png">

- **Create template**: Cria um loader que será disponibilizado na biblioteca de
  componentes. Isto significa criar uma base de código que definirá um conjunto
  de propriedades e um programa para retornar dados.
- **Using a template**: Cria um loader salvo a partir de uma base existente. O
  nome será a identificação deste elemento.
