---

description: Editando seções\
since: 1.0.0

---

## Introdução às Seções (dev)

Uma Seção representa um elemento de UI configurável para um site deco. É
essencial entender o que isso significa para um desenvolvedor.

Uma Section é um código `tsx` dentro da pasta `sections` e que:

- é um componente [Preact](https://preactjs.com/)
- tem propriedades serializáveis
- exporta o tipo de suas propriedades

Um componente Preact é uma função exportada por padrão (`export default`). Ele
recebe propriedades, retorna JSX e é invocado durante cada renderização do
elemento definido.

Vamos explorar como podemos manipular essas seções e ver as mudanças refletidas
na interface do Admin.

## 1. Abra a seção Hero

Como exemplo, abra a seção `Hero.tsx` na interface do Admin do site que você
criou em um [tutorial anterior](/docs/pt/getting-started/creating-a-site).
Clique no ícone `</>` na barra direita para ver o código da seção.

O código deste elemento é escrito em HTML com JavaScript, como mostrado no
exemplo abaixo.

![Código da Seção Hero](/docs/editable-section/hero-section-code.png)

Observe os tipos exportados neste arquivo. Esses mesmos tipos são acessíveis no
formulário de propriedades da seção quando você clica no ícone de lista na barra
direita.

![Editando propriedades da Seção Hero](/docs/editable-section/section-props.png)

**Seção e seus tipos de propriedades**

## 2. Execute seu site localmente

Siga os passos de [configuração do ambiente](/docs/pt/developing-guide/setup) e
execute seu projeto localmente para ver as mudanças que você fizer no código
refletidas na interface do Admin.

## 3. Adicione uma nova propriedade à seção Hero

Modifique o código de `sections/Hero.tsx` para receber uma nova propriedade
opcional, o `size` (tamanho) de um botão CTA. Adicione ao tipo `CTA` uma nova
propriedade, `size`, que deve ser uma dessas strings: "xs", "sm", "md" e "lg".

```tsx
export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
}
```

Esse tipo de campo indica ao Admin que essa propriedade só pode assumir esses
valores, fazendo a plataforma mostrar um componente de seleção para editar esse
campo.

Você pode ler mais sobre esses formatos e tipos de campo na
[documentação de Widgets](/docs/pt/developing-capabilities/section-properties/widgets).

Vamos adicionar um botão CTA na nossa seção Hero para ver a modificação:

![Exemplo de Botão CTA](/docs/editable-section/cta-button-example.png)

Agora o CTA tem o campo de tamanho:

![Campo de Tamanho do CTA](/docs/editable-section/cta-size-field.png)

Também vamos modificar o conteúdo JSX para fazer o tamanho do botão CTA mudar de
acordo com a opção selecionada no formulário do Admin:

```tsx
...

<div class="flex items-center gap-3">
  {cta?.map((item) => (
    <a
      key={item?.id}
      id={item?.id}
      href={item?.href}
      target={item?.href.includes("http") ? "_blank" : "_self"}
      class={`font-normal btn btn-primary ${item.outline && "btn-outline"} ${
        item.size && `btn-${item.size}`
      }`}
    >
      {item?.text}
    </a>
  ))}
</div>

...
```

Com essa mudança, você pode ajustar o tamanho do botão através do formulário do
Admin:

![Ajuste de Tamanho do Botão CTA](/docs/editable-section/cta-button-size-adjustment.gif)

## 4. Pronto para começar!

Agora você pode configurar `props` para as Seções do seu site e ver como elas
são renderizadas. A pré-visualização será automaticamente atualizada se você
modificar o código da Seção localmente.

Para publicar as mudanças, faça um _git push_ para a branch principal ou
publique seu ambiente diretamente na interface do Admin.
