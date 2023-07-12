---
description: Adicionando domínios próprios
since: 1.1.0
---

# Tópicos

1. O que é um domínio próprio?
2. Adicionando um domínio
   - Requisitos
   - Adicionando um domínio no admin
3. Validando o domínio adicionado
   - Passo-a-passo
   - Testando sua configuração
4. Erros comuns

# O que é um domínio próprio?

Cada site deco recebe um domínio público na qual ela é acessível, como o domínio `your.deco.site` que é usado no endereço `https://your.deco.site`. No entanto, é comum contratar um domínio próprio para fortalecer a marca ou facilitar o acesso a um site.

A deco não oferece (ainda) um servidor próprio de nomes de domínios, mas é possível contratar esse serviço por outras empresas como godaddy, google e cloudflare. Do ponto de vista técnico, é importante que esse servidor permita a criação de apontamentos do tipo `CNAME`. É preciso ter cuidado pois alguns serviços de hospedagem podem oferecer o serviço de nomes, mas não permitir este tipo de configuração!

# Adicionando um domínio próprio

## Requisitos

Para adicionar um domínio:
- o site precisa ter um domínio `deco.site` oferecido pela deco
- o usuário precisa ser administrador do site
- o usuário precisa contratar um domínio próprio em um servidor de nomes que permita configuração de `CNAME`
- o usuário ou administrador do domínio próprio precisa criar um apontamento `CNAME` indicado na etapa de validação

## Adicionando um domínio no admin

1. Entre na página inicial do site, e navegue para a aba de Configurações.

    !["Home do site"](https://github.com/deco-sites/starting/assets/882438/c95da5f4-75a8-42ed-b747-674157c52c80)

2. Em Configurações, na listagem de Domínios, verifique que há um domínio `deco.site` e adicione um domínio existente.

    !["Aba de configurações"](https://github.com/deco-sites/starting/assets/882438/3cf4102a-d9f3-49d6-aaa0-8aeac5e064b6)


3. Adicione o domínio próprio do site no modal aberto. O domínio deve ser apenas o nome, sem protocolo (http/https) ou barras. Aguarde o processo de configuração inicial.

    !["Adicionar domínio"](https://github.com/deco-sites/starting/assets/882438/4b2a6b1e-a711-4733-9779-367ac0141e41)

4. Depois da adição, o domínio está registrado na deco, mas ainda não é operante. É preciso agora fazer o setup do domínio. Em `...`, clicando em setup, haverá instruções de configuração.

    !["Validação do domínio"](https://github.com/deco-sites/starting/assets/882438/ac14645d-6f59-45cf-ae6e-c918eec7247f)

5. Adicione a configuração de domínio no seu servidor de domínios. Isto representa um apontamento `CNAME` do domínio própio, para o domínio da deco. No exemplo, isto representa um apontamento do domínio `example.dirlididi.org` para `test-fashionmgr.deco.site`.

    ![Configuração do CNAME](https://github.com/deco-sites/starting/assets/882438/98f2505f-db78-42e8-9c5c-5350360f7495)

6. Uma vez configurado, clique em validar configuração para que a deco valide se o apontamento foi corretamente realizado. A etapa de configuração de certificados pode falhar, mas, caso isso ocorra, será tentada novamente em background.

7. Aguarde alguns minutos e teste acessar seu domínio no browser.

# Erros Comuns

## O domínio não é validado

Verifique se o mesmo foi cadastrado corretamente no servidor de nomes. Use uma ferramenta como o ][DNS da google](https://dns.google/) para verificar se há um registro de `CNAME` apontando o domínio corretamente para um domínio `deco.site`.

## Após a validação, as configurações ainda exibem meu domínio como "Awaiting"

Por vezes, o domínio pode fazer a geração de certificados mesmo depois de sair da tela de validação. No entanto, mesmo nesse caso, o domínio próprio pode já estar operante.

## Quero transferir o apex (nome raíz) para a deco.

Atualmente, não é possível fazer esse apontamento na deco.

## Outras situações

Procure o discord da deco caso precise de ajuda!