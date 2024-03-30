---
description: Problemas comuns
since: 1.0.0
---

# Problemas ao rodar o deno localmente

Ao rodar o projeto localmente, o `deno` exibe erros ou problemas ao executar o
site.

## Atualize o deno

Execute o comando a seguir para atualizar o deno a última versão...

`deno upgrade`

Em alguns casos muito específicos, é possível também testar outras versões do
deno especificando uma versão a ser atualizada...

`deno upgrade --version X.Y.Z`

## Limpe o cache do deno

O deno é eficiente ao fazer um cache agressivo das dependências de forma que o
tempo para reiniciar o servidor é muito rápido. Ao mesmo tempo, as dependências
em cache podem ter problemas ou erros nas versões que foram baixadas.

Assim, recomendamos limpar o cache dos arquivos relacionados:

`deno cache -r dev.ts main.ts`

Em caso de erros relacionados a elementos de tipagem ou de execução, tente
limpar também o storage local:

`deno eval 'localStorage.clear()'`

Dependendo da instalação e configuração do site, o deno pode puxar as
dependências do npm no diretório "node_modules". Apagar este diretório pode
resolver problemas relacionados a dependências do npm.

## Verifique se outra aplicação está executando na porta 8000

Caso outra aplicação esteja executando na porta 8000, o processo do deno pode
entrar em "loop" ou apresentar uma falha de inicialização na porta em questão.
Observe se há outras aplicações executando na porta 8000.

# Minhas alterações não foram refletidas no site em produção

## Verifique se o deploy foi realizado com sucesso

No repositório do site, verifique uma marcação referente ao último _commit_. O
_deploy_ deve ter sido realizado com sucesso para que o código possa ser
considerado em produção:

![Deploy bem sucedido](https://github.com/site/assets/882438/6f4e853f-23bf-4ed1-9f4f-b16a97690a6a).

Em caso de falha, passe o cursor na sinalização de erro para ver uma indicação
do problema.

Caso o sistema tenha falhado na nossa infraestrutura, pode enviar um commit
vazio para forçar um novo _deploy_ com o comando:

`git commit --allow-empty -n -m "Redeploy"`

## Verifique o seletor de ambiente

Verifique se o seletor de ambientes (preview) aponta para o endereço correto.

# Estou com erros em uma seção, página, ou funcionalidade específica

## Atualize a deco e std

Novas versões do framework da deco e do std trazem correções de falhas comuns ao
projeto:

`deno eval 'import "deco/scripts/update.ts"'`

# Um componente não está interativo, o click/botão não funciona

Todo componente interativo deve ser uma ilha. Para isso, deve estar dentro da
página `islands/` e não pode estar euma sub-pasta.

Caso o carregamento de algum JS no browser falhe, os componentes podem perder a
interatividade. Abra o `console.log` para procurar por erros de JS.
