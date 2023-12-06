---
description: Configuração do ambiente.
since: 1.0.0
---

- Leia o guia em **Comece agora** para entender os conceitos base e a ferramenta de admin da deco

- **Importante**, é possível acessar <https://deco.cx/discord> para respoder dúvidas ou problemas com a _deco.cx_. Participe também da nossa comunidade!

# Tópicos

1. Tecnologias utilizadas na deco
2. Comece a desenvolver com a deco
3. Desenvolvendo com a deco

# Tecnologias utilizadas na deco

Ao criar um site ou loja online com a _deco.cx_, o usuário tem a flexibilidade de
criar [Sections](/docs/pt/concepts/section) e
[Loaders](/docs/pt/concepts/loader) que atendem às suas necessidades
exclusivas. Para ajudá-la a criar esses componentes com facilidade e rapidez,
contamos com um conjunto de tecnologias poderosas e eficientes.

Nossa pilha de tecnologia é focada em **simplicidade e desempenho**, tornando-a
acessível a desenvolvedores com experiência anterior em HTML, CSS, JavaScript e
React. Estas são as principais ferramentas que usamos para alimentar os sites
deco.cx:

### [Preact](https://preactjs.com/)

**Preact** é uma alternativa rápida e leve ao [React.js](https://reactjs.org/),
usado para renderizar componentes de UI no servidor e no cliente. Ele usa _JSX_
para criar componentes da web e geralmente é bem simples de aprender.

### [Tailwind](https://tailwindcss.com)

**Tailwind** é uma solução de estilos CSS baseada em classes utilitárias, o que
o torna ideal para iniciantes. O Tailwind também é otimizado para performance.

### [Deno](https://deno.com/deploy)

O **Deno** é um ambiente de execução JavaScript e TypeScript. É usado para fazer
Sites na deco, escritos em Typescript, executados por um servidor. Deno é
semelhante a Node.js (_curiosidade_: eles foram
[criados pela mesma pessoa](https://www.youtube.com/watch?v=M3BM9TB-8yA)).

### [Fresh](https://fresh.deno.dev)

O **Fresh** é um framework web fullstack (backend e frontend) para
desenvolvedores JavaScript e TypeScript. Foi projetado para tornar fácil a
criação de aplicações web de alta qualidade, alta performance e altamente
personalizáveis.

# Comece a desenvolver com a deco

## Ferramentas necessárias

A única configuração necessária para codificar sites _deco.cx_ é **instalar o
Deno** em sua máquina. Para instalar o Deno, siga as
[instruções na página deno.land](https://deno.land/manual/getting_started/installation).

> Certifique-se de manter o deno atualizado! Caso já tenha o deno instalado, rode o `deno upgrade` para atualizá-lo.

Recomendamos fortemente o uso do [Visual Studio Code](https://code.visualstudio.com/download) como IDE e do [Git](https://github.com/git-guides/install-git) para controle de versão.

## Teste a deco localmente (opcional)!

A deco oferece um mecanismo para testar e explorar nosso sistema sem a necessidade de subir código ou fazer um deployment na nossa infraestrutura. Para isso, acesse: https://play.deco.cx/

![deco play](https://github.com/deco-cx/apps/assets/882438/e52c7727-b1c2-44cc-b709-10adba203341)

## Crie um site deco.cx

**Importante**: Antes de seguir com essa seção, dê uma olhada em [Criando um Site](/docs/pt/getting-started/creating-a-site).

_deco.cx_ abstrai todas as complexidades de configurar um repositório, conectar
um CMS e deployar na edge. Isso permite que você se concentre apenas no que
importa: o código e conteúdo do seu Site.

## Clone o repositório do seu site

Aceite o convite para se juntar ao repositório criado para o seu Site. Esse
convite é enviado para o endereço de e-mail do seu perfil do Github.

Caso não tenha utilizado uma conta do github para entrar no admin ou caso não tenha recebido um convite, é possível adicionar uma conta do github como colaborador do Site.

![Adicionando colaborador no repositório](https://github.com/deco-cx/apps/assets/882438/0cdcc7a7-90fd-4cbe-9eea-0ca68ee533d9)

Use o comando `git clone` para baixar o código do site para o seu máquina.
Recomendamos o uso de SSH. Abra o terminal e execute o comando:

```bash
git clone git@github.com:deco-sites/site-name.git
```

**Lembre-se de alterar `site-name` para o nome do seu site.**

Se preferir, é possível clonar o repositório usando outros métodos, como _git
https_, por meio da ferramenta _Github_ ou através de uma IDE. Na página do repositório no _Github_ há detalhes sobre algumas diferentes maneiras para fazer o clone.

# Desenvolvendo com a deco

## Executar servidor local

No terminal, basta entrar na pasta do site e executar o comando:

```bash
deno task start
```

Aguarde a inicialização do projeto. Na primeira execução, o deno irá baixar e realizar um cache das dependências do projeto, e a deco irá preparar detalhes do site.

O site estará acessível em <http://localhost:8000>.

> Alguns browsers impedem acessar ou executar código no domínio `localhost`! Desative proteções de acesso ou privacidade do browser para acessar esse endereço.

Caso o código de alguma seção em uso na página inicial do site seja alterado, isto será refletido no endereço acima.

## Publicando alterações

O processo de _deploy_ em development é muito simples: apenas fazer um _git push_ das alterações na _branch_ _**main**_.

Acessando o endereço em dev (como <https://deco-sites-example.deno.dev/>), essas alterações estarão disponíveis.

Você também pode criar um domínio deco.site no admin que disponibilizará para uso <https://example.deco.site/>.

## Agora você pode começar a criar sites cada vez mais do seu jeito! :)

Continue estando a deco para entender o potencial e como criar ou alterar sections, loaders e outros elementos da deco para criar sites e experiências cada vez ,mais personalizadas.

Certifique-se de se juntar ao nosso
[comunidade no Discord](https://deco.cx/discord). Acompanhe as novidades e
continue evoluindo junto com a gente!