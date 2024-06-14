---
description: Como redirecionar domínio sem www
since: 1.1.0
---

## O que é domínio apex?

Domínio apex é o termo utilizado para domínio raiz, sem subdomínio.

Exemplo:

- `www.example.com.br` -> Subdomínio
- `loja.example.com.br` -> Subdomínio
- `example.com.br` - Domínio Apex

## Posso apontar um site deco.cx para o domínio apex?

Não, ainda não é possível apontar um site deco.cx para o seu domínio apex.

Por isso, criamos uma solução fácil de redirecionamento, para que os acessos ao
domínio Apex não sejam perdidos.

## Como redirecionar um domínio apex na deco.cx?

1 - No painel do seu site na deco.cx, acesse a página de Configurações.

2 - Clique em "Adicionar domínio existente"

3 - Insira o seu domínio apex (sem subdomínio):

![Domain step](/docs/getting-started/custom-domains/apex-domain.png)

4 - Defina para qual subdomínio redirecionar:

![Sudomain step](/docs/getting-started/custom-domains/subdomain.png)

5 - Agora, você verá os apontamentos que devem ser feitos na sua plataforma de
hospedagem de domínio:

![DNS Setup](/docs/getting-started/custom-domains/validate-apex.png)

6 - Após realizar as configurações, clique em Validar Domínio.

A etapa de validação é essencial para o funcionamento e ela depende da
propagação do DNS configurado no serviço de hospedagem.

No geral, a propagação ocorre dentro algumas horas, mas pode levar até 48 horas
em alguns casos.
