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

![Domain step](https://github.com/deco-cx/apps/assets/76620866/85b1bcd5-5dec-4a61-bb0b-635e0b8a3d3a)

4 - Defina para qual subdomínio redirecionar:

![Sudomain step](https://github.com/deco-cx/apps/assets/76620866/ab92d6cb-ef08-4f98-a0e5-b241f932722d)

5 - Agora, você verá os apontamentos que devem ser feitos na sua plataforma de
hospedagem de domínio:

![DNS Setup](https://github.com/deco-cx/apps/assets/76620866/ff13f321-58b2-4cc7-9015-5738dd31b849)

6 - Após realizar as configurações, clique em Validar Domínio.

A etapa de validação é essencial para o funcionamento e ela depende da
propagação do DNS configurado no serviço de hospedagem.

No geral, a propagação ocorre dentro algumas horas, mas pode levar até 48 horas
em alguns casos.
