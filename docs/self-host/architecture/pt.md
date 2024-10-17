---
description: Arquitetura Self-host
since: 2.0
---

## Arquitetura de sites na deco.cx

<img width="640" alt="Arquitetura Deployment" src="/docs/self-host/architecture.png">

A arquitetura de alto nível da deco integra diferentes papéis (Usuário, Usuário
de Negócios, Desenvolvedor), um servidor web do site, uma rede de entrega de
conteúdo (CDN), funcionalidades administrativas e sistemas externos (bancos de
dados, e-commerce, SaaS). O foco está no gerenciamento de conteúdo e ambientes
de desenvolvimento/configuração, com interação entre diversos stakeholders e
componentes.

### Visão Geral da Arquitetura

1. **Usuários:**
   - **Usuário Final:** Acessa o site por meio da CDN da deco.
   - **Usuário de Negócios:** Interage com o sistema pelo ambiente web para
     visualizar e editar conteúdo no "Admin".
   - **Desenvolvedor (Dev):** Trabalha localmente, envia alterações pelo Git e
     realiza deploy via pipelines de CI/CD.

2. **Componentes do Sistema:**
   - **CDN:** Entrega o site aos usuários finais.
   - **Site:** O servidor web acessado pelos usuários através da CDN.
   - **Ambiente Web (Web Env):** Onde desenvolvedores e usuários de negócios
     visualizam alterações que estão salvas no ambiente.
   - **Painel Administrativo (Admin):** Centraliza o controle das alterações,
     salvando-as no Git e refletindo as alterações nos ambientes web e local.
   - **Git:** Sistema de controle de versão, integrando mudanças do Admin e
     desenvolvedores, com deploy via CI/CD.
   - **Sistemas Externos (Banco de Dados, E-commerce, SaaS):** Integram dados e
     serviços consumidos pelo site.

### Componentes e Fluxos de Processo

1. **Entrega de Conteúdo:**
   - **Usuários:** Interagem com o site ao vivo pela CDN, com conteúdo otimizado
     para rápida entrega.

2. **Fluxo de Trabalho do Usuário de Negócios:**
   - **Visualizar/Editar:** Usuários de negócios editam conteúdo no Admin e
     visualizam as mudanças no ambiente web.
   - **Publicar:** As alterações são salvas no Git e propagadas ao site via
     pipeline CI/CD.

3. **Fluxo de Trabalho do Desenvolvedor:**
   - **Ambiente Local:** Desenvolvedores fazem mudanças locais, sincronizam com
     o Admin, e enviam ao Git.
   - **CI/CD:** Após o envio ao Git, as mudanças são automaticamente deployadas
     via CI/CD.

## Arquitetura deco.cx com Self-host do Site

<img width="640" alt="Arquitetura Self-host site" src="/docs/self-host/self-host-site.png">

### Mudança na Arquitetura com Self-Host do Site

Com o self-host, o site passa a ser hospedado na infraestrutura da própria
organização. Veja as principais mudanças e impactos:

### Mudanças Principais

1. **Self-host do Site e Sistemas Internos:**
   - O **Site** é hospedado localmente ou em infraestrutura própria, fora do
     controle direto da deco.cx.
   - **Sistemas Internos** (banco de dados e softwares) se integram diretamente
     com o site self-hosted.

2. **Túnel para Acessar o Site:**
   - Usuários e sistemas da deco.cx acessam o site self-hosted via um túnel ou
     acesso público, a escolha e controle da organização.

3. **CI/CD e Git Gerenciam o Site:**
   - Mesmo com o self-host, o **CI/CD** ainda é necessário para publicar as
     alterações de código e conteúdo no Site, sob responsabilidade da
     organização.

4. **Continuidade da Infraestrutura deco.cx:**
   - O **Web Env** e o **Admin** permanecem na infraestrutura da deco.cx. Caso
     seja necessário, a organização deve prover e configurar o acesso do
     ambiente web aos sistemas internos via túnel (ou acesso público).

### Impacto da Mudança

- **Maior Controle:** A organização tem mais controle sobre o site e sistemas
  internos.
- **Complexidade Adicional:** O túnel e CI/CD próprios aumentam a
  responsabilidade de manutenção.
- **Sem Recursos deco.cx:** Não há acesso à CDN e outros serviços da deco.cx
  responsáveis pela segurança e otimização do acesso ao site.
- **Customização Local:** Maior flexibilidade para acesso aos sistemas internos.

## Arquitetura deco.cx com Self-host do Site e Ambientes

<img width="640" alt="Arquitetura Self-host de Site e Envs" src="/docs/self-host/self-host-envs.png">

### Mudança na Arquitetura com Self-Host do Site e dos Ambientes (Envs)

Com essa mudança, tanto o **Site** quanto os **Ambientes Web** são
auto-hospedados. Isso dá à organização controle total sobre desenvolvimento,
produção e integração com sistemas internos.

### Mudanças Principais

1. **Self-Host do Site e Ambientes (Envs):**
   - Tanto o **Site** quanto o **Web Env** são hospedados em infraestrutura
     própria.

2. **Túnel para Acessar o Ambiente Web:**
   - Interação com o ambiente web auto-hospedado ocorre via túnel, mantendo
     conectividade com a deco.cx. É necessária intervenção da deco.cx caso o
     túnel não seja acessível publicamente.

3. **CI/CD e Git:**
   - **CI/CD** gerencia as mudanças localmente, com deploy automático para o
     site self-hosted, mas sob responsabilidade da organização.

4. **Continuidade da Infraestrutura deco.cx:**
   - O **Admin** continua conectado à deco.cx, mas depende do túnel para
     interagir com o ambiente self-hosted.

### Impacto da Mudança

- **Controle Completo:** Total controle sobre site e ambientes, oferecendo
  flexibilidade.
- **Independência da deco.cx:** Menor dependência de serviços terceirizados para
  desenvolvimento.
- **Complexidade de Manutenção:** Maior responsabilidade sobre segurança e
  desempenho.
- **CI/CD Local:** Pipelines de CI/CD personalizados são necessários para o
  deploy local.

### Conclusão

Com self-host do site e dos ambientes, a organização tem maior controle e
flexibilidade, mas assume mais responsabilidade por segurança e manutenção, além
da conectividade dos sistemas.
