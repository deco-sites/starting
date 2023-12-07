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

Cada site deco recebe um domínio público na qual ela é acessível, como o domínio
`your.deco.site` que é usado no endereço `https://your.deco.site`. No entanto, é
comum contratar um domínio próprio para fortalecer a marca ou facilitar o acesso
a um site.

A deco não oferece (ainda) um servidor próprio de nomes de domínios, mas é
possível contratar esse serviço por outras empresas como godaddy, google e
cloudflare. Do ponto de vista técnico, é importante que esse servidor permita a
criação de apontamentos do tipo `CNAME`. É preciso ter cuidado pois alguns
serviços de hospedagem podem oferecer o serviço de nomes, mas não permitir este
tipo de configuração!

# Adicionando um domínio próprio

## Requisitos

Para adicionar um domínio:

- o site precisa ter um domínio `deco.site` oferecido pela deco
- o usuário precisa ser administrador do site
- o usuário precisa contratar um domínio próprio em um servidor de nomes que
  permita configuração de `CNAME`
- o usuário ou administrador do domínio próprio precisa criar um apontamento
  `CNAME` indicado na etapa de validação
- APENAS caso o domínio já tenha algum apontamento `CAA`, é preciso adicionar
  novos apontamentos

## Antes de adicionar um domínio

Pode ser necessária alguma configuração adicional em seu site dependendo da
integração utilizada.

Caso o domínio tenha algum apontamento `CAA`, é preciso adicionar novos domínios
para que possamos gerar o certificado do seu novo domínio. Importante:
`caso seu domínio não tenha apontamentos CAA, esta etapa não é necessária (e não é recomendada)`.

É possível verificar se o domínio tem esses apontamentos através da ferramenta
[Google Admin Toolbox Dig](https://toolbox.googleapps.com/apps/dig/#CAA/) ou o
comando `dig seudominio.com.br caa +short`. Caso a consulta não retorne dados
(`Record not found!`), ignore esta etapa.

Caso seu site tenha certificados, é preciso adicionar os registros abaixo,
especialmente os dois últimos (`pki.goog`). Adicione no domínio do seu site (ou
`@` como nome do campo).

```
0 issue "digicert.com; cansignhttpexchanges=yes"
0 issuewild "digicert.com; cansignhttpexchanges=yes"
0 issue "sectigo.com"
0 issuewild "sectigo.com"
0 issue "letsencrypt.org"
0 issuewild "letsencrypt.org"
0 issue "pki.goog; cansignhttpexchanges=yes"
0 issuewild "pki.goog; cansignhttpexchanges=yes"
```

Alguns provedores de domínios não aceitam o CAA com `cansignhttpexchanges`,
neste caso, configure sem essa propriedade:

```
0 issue "digicert.com"
0 issuewild "digicert.com"
0 issue "sectigo.com"
0 issuewild "sectigo.com"
0 issue "letsencrypt.org"
0 issuewild "letsencrypt.org"
0 issue "pki.goog"
0 issuewild "pki.goog"
```

Veja mais instruções no seu provedor de domínios em como adicionar esses campos.

## Adicionando um domínio no admin

1. Entre na página inicial do site, e navegue para a aba de Configurações.

   ![Configuraçãos do site](https://github.com/deco-cx/apps/assets/882438/7c60ddbd-7164-42ea-bd16-d8c5d70603df)

2. Em Configurações, na listagem de Domínios, verifique que há um domínio
   `deco.site` e adicione um domínio existente. **Caso não tenha um domínio
   `deco.site`, entre em contato conosco**.

3. Adicione o domínio próprio do site no modal aberto. O domínio deve ser apenas
   o nome, sem protocolo (http/https) ou barras. Aguarde o processo de
   configuração inicial.

   ![Adicionar domínio](https://github.com/deco-cx/apps/assets/882438/8c19ae5c-e522-4a60-9b8b-28e4815cced6)

4. Depois da adição, o domínio está registrado na deco, mas ainda não é
   operante. É preciso agora fazer o setup do domínio. Em `...`, clicando em
   setup, haverá instruções de configuração.

5. Adicione a configuração de domínio no seu servidor de domínios. Isto
   representa um apontamento `CNAME` do domínio própio, para o domínio da deco.
   No exemplo, isto representa um apontamento do domínio `www.example.com` para
   `startest.deco.site`.

   ![Validação do domínio](https://github.com/deco-cx/apps/assets/882438/0d9d876e-2a5e-4e05-8767-dc77e69c548b)

6. Uma vez configurado, clique em validar configuração para que a deco valide se
   o apontamento foi corretamente realizado. **Importante: O domínio continuará
   no estado de em espera por validação até que o apontamento seja realizado na
   nossa infraestrutura**.

7. Aguarde alguns minutos e teste acessar seu domínio no browser.

# Erros Comuns

## O domínio não é validado

Verifique se o mesmo foi cadastrado corretamente no servidor de nomes. Use uma
ferramenta como o ][DNS da google](https://dns.google/) para verificar se há um
registro de `CNAME` apontando o domínio corretamente para um domínio
`deco.site`. Alguns provedores de domínios podem levar até 12 horas para
efetivar o novo apontamento.

## Após a validação, as configurações ainda exibem meu domínio como "Awaiting"

Por vezes, o domínio pode fazer a geração de certificados mesmo depois de sair
da tela de validação. No entanto, mesmo nesse caso, o domínio próprio pode já
estar operante.

## Quero transferir o apex (nome raíz) para a deco.

Atualmente, não é possível fazer esse apontamento na deco.

## Outras situações

Procure o discord da deco caso precise de ajuda!
