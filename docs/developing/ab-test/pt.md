---
description: Como criar um Teste A/B e acompanhar os resultados?
---

# Como criar um Teste A/B e acompanhar os resultados?

Os testes A/B para websites consistem em dividir e direcionar o publico para duas versões diferentes do site e ver em qual delas o engajamento é maior.

Vamos conhecer cada uma das etapas:

- Criando um experimento
- Segmentação do tráfego
- Editando sua variante
- Criação de eventos e coleta de dados
- Funil e resultado

## Criando um experimento

No menu lateral, clique em Experiments

![Experiments screen](https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/7060003d-e0ae-4ec1-8a22-a7a88d0dfe71)

Essa tela lista os seus experimentos, clique em "Create new Experiment"

Alguns dados serão necessários:
- Name
- Description
- Traffic (porcentagem que irá para versão nova)

## Segmentação do tráfego

Você acabou escolher a porcentagem do tráfego para o seu teste, mas pode personalizar isso ainda mais.

A criação do Experimento, gerou um novo Segmento, que pode ser conferido na aba lateral, em Segments:

![Segments screen](https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/f25a1aab-3c16-45a3-8083-742d88b52e1e)

Assim, você também pode combinar segmentos para fazer Testes para públicos específicos:

Selecione o Teste criado e faça as alterações que deseja.

Exemplos de segmentação:

- **50%** do tráfego **Mobile**
- **30%** do tráfego da **Campanha do Facebook**
- **10%** do tráfego do **Rio de Janeiro**

## Editando sua variante

Agora com o segmento criado, você pode escolher se deseja fazer o teste para uma página completa ou uma section específica.

Crie uma variante:
![Create variants](https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/ef0f35c3-e98a-4523-96df-e811102aafa6)

Selecione o segmento:
![Select a segment](https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/e9cd11bd-c389-448a-97f5-f915e18e6712)

Faça as alterações que deseja:
![Variants](https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/c3eeba19-8163-4892-923b-4323c6c3216a)

## Criação de eventos e coleta de dados

Os templates já iniciam com alguns eventos, mas você pode criar novos eventos.

Veja como criar pelo código ou pelo painel:

Exemplo no código:

```javascript
import { sendEvent } from "./sdk/analytics.tsx";

<button
	onClick={() => sendEvent({ name: "add_to_cart"}, params)}
>
	Adicionar ao Carrinho
</button>
```

## Funil e resultado

Além disso, é possível conferir os resultados do Teste A/B

Na tela que lista os Experimentos, selecione o Teste desejado.

Confira os recursos:

### Tamanho da amostra
Indicação de tamanho mínimo da amostra para que o teste seja considerado estatisticamente relevante.

### Probabilidade
Veja a probabilidade da sua variação ser a vencedora em relação a outra.

### Configuração de metas
Selecione as metas que deseja comparar, não existe nenhum limite.

### Filtro por período
Filtre por período para entender se houve pontos fora da curva durante o teste.

### Funil
Veja a taxa de conversão de cada uma das suas métricas para entender onde está perdendo o seu usuário.

### Tempo real
Os dados são transferidos em tempo real, chega de esperar um ou dois dias para analisá-los.

![Experiments screen](https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/6ddc740d-9590-431b-b1e7-f0a0130bc5f6)

![Experiments screen](https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/cc637298-e938-494c-9253-b7d1bef6f99a)