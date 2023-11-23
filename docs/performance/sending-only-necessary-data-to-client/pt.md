---
description: TODO
since: 1.0.0
---

Em algumas situações, ao utilizar [loaders](http://localhost:8000/docs/pt/concepts/loader) para obter dados, pode-se receber uma quantidade excessiva de informações, impactando negativamente o desempenho da página. Isso é evidenciado pelo tamanho significativo do JSON transmitido para o cliente.

Para mitigar esse problema, propomos a implementação de um processo de pré-processamento dos dados no lado do cliente, garantindo que apenas as informações necessárias sejam transmitidas e utilizadas no markup/UI.

## Fluxo de Dados

1. Solicitação de Dados: Inicie o fluxo normal de dados, solicitando as informações necessárias por meio de props.

2. Loader de Dados: Utilize um loader para obter os dados desejados. Em algumas situações, o loader pode retornar uma quantidade substancial de dados, por exemplo, ao solicitar produtos relacionados da [VTEX](https://www.deco.cx/docs/pt/composable-apis/vtex). No entanto, é importante observar que há momentos em que o loader pode retornar uma quantidade de dados maior do que o necessário para a operação em questão.

3. Pré-Processamento Inline: Introduza um mecanismo de pré-processamento de dados inline. Este componente receberá as mesmas props do loader e processará os dados de forma a transmitir apenas as informações essenciais, otimizando assim o desempenho.

4. Entrega ao Componente: Transmita apenas os dados processados para o componente JSX, reduzindo assim a carga desnecessária no cliente.

## Benefícios
- Redução significativa no tamanho do JSON transmitido.
- Melhoria perceptível no desempenho da página, especialmente em termos de carregamento.

Ao implementar esse processo de pré-processamento de dados, é possível otimizar a performance da página, garantindo que apenas as informações cruciais sejam enviadas e processadas, proporcionando um desempenho mais otimizado para o usuário.