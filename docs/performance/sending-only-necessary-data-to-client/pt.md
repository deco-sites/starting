---
descrição: Enviando apenas dados necessários ao cliente
since: 1.0.0
---

Ao carregar dados de APIs externas usando [Loaders](/docs/pt/concepts/loader) e enviá-los para a [Section](/docs/pt/concepts/section), é possível que o tamanho do _payload_ impacte negativamente a performance do site. O impacto ocorre tanto no tempo inicial de carregamento como também no [hidratação](https://blog.saeloun.com/2021/12/16/hydration/), onde a página é "inicializada" no browser para que possa ser interativa (usar `useEffect`, `useSignal`, etc...). É possível visualizar no tamanho do JSON final através da aba **Performance** no CMS deco.

![288067513-db3a14e1-c0ac-47f8-83b9-afc8db60de71](https://github.com/deco-sites/starting/assets/76822093/ec005f5d-4169-4e89-acd0-8c06baf3c80d)

Quando o tamanho do JSON passa de ~500kb, é provável que a UI não precisa do dado completo, mas sim alguma parte dele (ou então uma computação sobre outros valores). Para diminuir esse tamanho e e melhorar a performance da página, é possível **filtrar os dados** ainda no Loader para que apenas o necessário seja passado para a UI.

## Fluxo de Dados

- Inicie solicitando as informações necessárias usando props.
  
- Utilize um loader para obter os dados desejados. Em algumas situações, pode retornar muitos dados, por exemplo, ao solicitar produtos relacionados da [VTEX](https://www.deco.cx/docs/pt/composable-apis/vtex). Esteja ciente de que pode retornar mais dados do que o necessário.
  
- Transmita apenas os dados processados para o componente JSX, reduzindo assim a carga desnecessária no cliente.

## Código de exemplo

Exemplo de implementação de um [Loader](docs/pt/developing/fetching-data):

```tsx
import type { SectionProps } from "deco/mod.ts";

// Props type that will be configured in deco.cx's Admin
export interface Props {
  title: string;
  numberOfFacts?: number;
}

export async function loader(
  { numberOfFacts, title }: Props,
  _req: Request,
) {
  const { facts: dogFacts } = (await fetch(
    `https://dogapi.dog/api/facts?number=${numberOfFacts ?? 1}`,
  ).then((r) => r.json())) as { facts: string[] };
  return { dogFacts, title };
}

export default function DogFacts(
  { title, dogFacts }: SectionProps<typeof loader>,
) {
  return (
    <div class="p-4">
      <h1 class="font-bold">{title}</h1>
      <ul>
        {dogFacts.map((fact) => <li>{fact}</li>)}
      </ul>
    </div>
  );
}
```

## Benefícios
- Redução significativa no tamanho do JSON transmitido.
- Melhoria perceptível no desempenho da página, especialmente em termos de carregamento.

Ao implementar esse processo de pré-processamento de dados, é possível otimizar a performance da página, garantindo que apenas as informações cruciais sejam enviadas e processadas, proporcionando um desempenho mais otimizado para o usuário.
