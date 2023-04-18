---
description: |
  Passo-a-passo de como criar um site na deco.cx
---

## Se precisar de ajuda...

- Acesse <https://deco.cx/discord> se tiver dúvidas ou problemas com a
  _deco.cx_. Participe também da nossa comunidade!

## O que você precisa saber antes de começar

- Leia os documentos em [**Introdução**](/docs/pt/introduction/overview) e
  [**Conceitos**](/docs/pt/concepts/section).

## Crie um site deco.cx

_deco.cx_ abstrai todas as complexidades de configurar um repositório, conectar
um CMS e deployar na edge. Isso permite que você se concentre apenas no que
importa: o código e conteúdo do seu Site.

O primeiro passo é ter uma conta na _deco.cx_. Vá em
<https://deco.cx/onboarding>, faça o login com sua conta do Github e siga as
instruções passo a passo na página para criar sua conta de desenvolvedor.

## Clone o repositório do seu site

Aceite o convite para se juntar ao repositório criado para o seu Site. Esse
convite é enviado para o endereço de e-mail do seu perfil do Github.

Use o comando `git clone` para baixar o código do site para o seu máquina.
Recomendamos o uso de SSH. Abra o terminal e execute o comando:

```
git clone git@github.com:deco-sites/site-name.git
```

**Lembre-se de alterar `site-name` para o nome do seu site.**

Se preferir, você pode clonar o repositório usando outros métodos, como _git
https_ ou por meio da ferramenta _Github_. Na página do seu repositório No
_Github_ você pode encontre detalhes sobre essas diferentes maneiras de clonar.

# Desenvolvendo

## Executar servidor local

No terminal, entre na pasta do site e execute o comando:

```
deno task start
```

## Veja suas seções locais no Live

1. Acesse <https://deco.cx/admin>.

2. Selecione o Site que você está desenvolvendo

3. Vá para _Library_.

4. No seletor de ambiente na parte superior direita, selecione _localhost:8000_
   e veja as Sections que estão em seu repositório local.

<img width="1252" alt="image" src="https://user-images.githubusercontent.com/18706156/224518020-0008c8d5-d9cc-4191-a4c3-81c2cf5d1f2d.png">

## Publique suas alterações

_Deploy_ em produção é muito simples: apenas fazer um _git push_ suas alterações
na _branch_ _**main**_.

Você pode ir para _site-name.deco.site_ para ver a versão mais recente do seu
site em ar.

# Preparar! Agora você pode começar a criar sites incríveis :)

Com este tutorial inicial você tem o suficiente para começar a desenvolver
Sections e Loaders para permitir que sejam usados na criação de Pages.

Certifique-se de se juntar ao nosso
[comunidade no Discord](https://deco.cx/discord). Acompanhe as novidades e
continue evoluindo junto com a gente!
