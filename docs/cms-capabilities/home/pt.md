---
description: |
    Home: gestão de times, sites e perfil do usuário
---

A `home` representa o espaço inicial do usuário. A partir desta tela, é possível
acessar sites, times, bem como a própria documentação da deco.

<img width="640" alt="Home" src="/docs/cms-capabilities/home/home1.png">

## Command Bar

Na home, e ao longo do uso do admin, uma `command bar` estará sempre disponível
na barra superior da tela. A barra de comando opera de acordo com o contexto
aberto. Na `home`, ela permite buscar, e abrir, sites e times do usuário.

<img width="480" alt="Command Bar" src="/docs/cms-capabilities/home/home3.png">

Além disso, é possível realizar comandos específicos. Na `home` estão
disponíveis os comandos:

- **/open**: para abrir sites ou times (comando padrão ao selecionar um time ou
  site a partir da busca)
- **/delete**: para apagar sites ou times

## Perfil

Além da `command bar`, é sempre possível acessar o perfil do seu usuário a
partir de qualquer espaço no admin. Para isto, acesse a foto do seu usuário no
canto superior direito.

<img width="320" alt="Acesso ao Perfil" src="/docs/cms-capabilities/home/home2.png">

Nele, é possível definir configurações a respeito de seu perfil (incluindo sua
foto), detalhes de pagamento (para usuários que executam tarefas), e uma API key
para uso do admin.

<img width="640" alt="Perfil do usuário" src="/docs/cms-capabilities/home/home5.png">

### API Key (Dev)

A API Key permite executar operações no admin (loaders e actions), com as
permissões do seu usuário. Na requisição para loaders/actions do admin, defina o
header `x-api-key` que é disponibilizado nesta tela.

<img width="480" alt="API Key" src="/docs/cms-capabilities/home/home6.png">

## Times

A gestão de time permite a configuração de:

- **Sites**: Listagem dos sites do time, bem como capacidade de mover, apagar e
  abrir site
- **Members**: Listagem dos membros do time, permitindo a gerência de papéis e o
  convite de membros
- **Billing**: Permite a contratação e gestão do tipo de conta para o time
- **Settings**: Altera o nome do time ou apaga o próprio time

<img width="640" alt="Home" src="/docs/cms-capabilities/home/home4.png">
