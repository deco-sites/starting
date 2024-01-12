---
descrição: Enviando apenas dados necessários ao cliente
since: 1.0.0
---

    - Utilizar loaders salvos quando duplicado
    - Cache dos loaders
    - Fetch a terceiros em inline loaders
    - Rendering Deferred (destacar o impacto em SEO)

Ao carregar dados de APIs externas usando [Loaders](/docs/pt/concepts/loader) e
enviá-los para a [Section](/docs/pt/concepts/section), é possível que o tamanho
do _payload_ impacte negativamente a performance do site. O impacto ocorre tanto
no tempo inicial de carregamento como também na
[hidratação](https://blog.saeloun.com/2021/12/16/hydration/), onde a página é
"inicializada" no browser para que possa ser interativa (usar `useEffect`,
`useSignal`, etc...). É possível visualizar no tamanho do JSON final através da
aba **Performance** no CMS deco.

![288067513-db3a14e1-c0ac-47f8-83b9-afc8db60de71](https://github.com/deco-sites/starting/assets/76822093/ec005f5d-4169-4e89-acd0-8c06baf3c80d)

Quando o tamanho do JSON passa de ~500kb, é provável que a UI não precise do
dado completo, mas sim alguma parte dele (ou então uma computação sobre outros
valores). Para diminuir esse tamanho e melhorar a performance da página, é
possível **filtrar os dados** ainda no Loader para que apenas o necessário seja
passado para a UI.

## Código de exemplo - 1

Nesse primeiro exemplo, mostraremos como evitar enviar muitos dados para uma
Island.

Digamos que existe um componente chamado ProductCard, que recebe todo o JSON de
um produto.

```tsx
import Image from "apps/website/components/Image.tsx";

export default function ProductCard({ product }: Props) {
  return (
    <div>
      <Image src={product.image} width="100" height="100" />
    </div>
  );
}
```

Nele, você deseja incluir uma
[Island](https://fresh.deno.dev/docs/concepts/islands) para criar o botão de
comprar.

```tsx
import BuyButton from "$store/components/ui";
import Image from "apps/website/components/Image.tsx";

export default function ProductCard({ product }: Props) {
  return (
    <div>
      <Image src={product.image} width="100" height="100" />
      <BuyButton />
    </div>
  );
}
```

É possível que esse BuyButton, precise de algumas informações do produto para
poder adicionar ao carrinho.

Aqui que devemos tomar cuidado a quantidade de dados enviados para a Island.

Por exemplo, é bem possível que o botão de comprar não precise receber dados de
imagem.

O ideal é enviar apenas os dados necessários

❌ Abordagem errada:

```tsx
import BuyButton from "$store/components/ui";
import Image from "apps/website/components/Image.tsx";

export default function ProductCard({ product }: Props) {
  return (
    <div>
      <Image src={product.image} width="100" height="100" />
      <BuyButton product={product} />
    </div>
  );
}
```

✅ Abordagem correta:

```tsx
import BuyButton from "$store/components/ui";
import Image from "apps/website/components/Image.tsx";

export default function ProductCard({ product }: Props) {
  return (
    <div>
      <Image src={product.image} width="100" height="100" />
      <BuyButton id={product.id} seller={product.seller} />
    </div>
  );
}
```

A abordagem correta envia apenas os dados de ID e Seller, que no exemplo, são os
únicos necessários na Island.

Assim, no momento de hidratação, o JSON que a Island irá carregar não será tão
grande.

## Código de exemplo - 2

Neste exemplo, vamos mostrar como evitar enviar um dado muito grande para uma
section.

Digamos que temos um loader inline para buscar as cores do produto e retornar em
uma section.

```tsx
export default function Colors({ colors }) {
  return colors.map((color) => <span>{color}</span>);
}

export const loader = async () => {
  const colors = await fetch("/product/colors").then((r) => r.json());

  return colors;
};
```

Esse componente parece correto, certo?

Porém, após uma investigação, verificamos que o dado retornado trazia também as
imagens do produto.

Exemplo do retorno da API:

```tsx
colors = [
  {
    "color": "red"
    "images": [...]
  },
  {
    "color": "green"
    "images": [...]
  },
  {
    "color": "orange"
    "images": [...]
  },
}]
```

Os dados de imagem nesse retorno, não serão utilizados na section, então não
precisamos enviá-los.

Podemos filtrar dessa forma:

```tsx
export default function Colors({ colors }) {
  return colors.map((color) => <span>{color}</span>);
}

export const loader = async () => {
  const result = await fetch("/product/colors").then((r) => r.json());
  const colors = result.map((item) => item.color);
  return colors;
};
```

Dessa forma, apenas os dados utilizados serão enviados, evitando uma sobrecarga
desnecessária.

## Benefícios

- Redução significativa no tamanho do JSON transmitido.
- Melhoria perceptível no desempenho da página, especialmente em termos de
  carregamento.

Ao implementar esse processo de pré-processamento de dados, é possível otimizar
a performance da página, garantindo que apenas as informações cruciais sejam
enviadas e processadas, proporcionando um desempenho mais otimizado para o
usuário.
