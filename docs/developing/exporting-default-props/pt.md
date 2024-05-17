---
description: Exportando Propriedades Padrão em um Bloco
since: 2.0.0
---

# Resumo

1. Visão Geral
2. Cenário Atual
3. Exportando Propriedades Padrão nos Parâmetros da Função
4. Implementação
5. Conclusão

# Visão Geral

Este documento detalha o comportamento atual dos valores padrão nos componentes dentro do Admin e apresenta um novo recurso que permite aos desenvolvedores especificar propriedades padrão diretamente nos parâmetros da função. Esta melhoria melhora a experiência do usuário garantindo que os valores padrão sejam refletidos corretamente tanto na interface do Admin quanto nos componentes renderizados.

# Cenário Atual

Na configuração atual, os valores padrão para props são codificados diretamente no código do componente. Isso leva a uma inconsistência entre a interface do Admin e o componente renderizado:

1. **Admin:** Quando um componente tem valores padrão definidos em seu código, o formulário na interface do Admin exibe campos vazios em vez desses valores padrão.
2. **Componente Renderizado:** Apesar dos campos de formulário vazios, o componente ainda é renderizado com os valores padrão codificados.
3. **JSON:** O arquivo JSON exibido para o desenvolvedor na interface do Admin não inclui esses valores padrão, o que leva a confusão e uma experiência de usuário ruim.

## Exemplo

Considere o seguinte cenário: Um componente de rodapé tem props padrão definidas em seu código. Na interface do Admin, os campos de formulário para essas props estão vazios, mas o componente é renderizado com os valores codificados. Essa desconexão torna difícil para os desenvolvedores e gerentes de conteúdo mapear o texto de entrada para os dados da página com precisão.

```tsx
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  href?: string;
  image?: ImageWidget;
  alt?: string;
  width?: number;
  height?: number;
  text?: string;
  xpto?: {
    xpto2: string;
    xpto3: string[]
  };
}

export default function Footer({ image, href, text, alt, height, width }: Props) {
  const defaultImage = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4959/d7aa9290-074f-417c-99c3-5b0587c8c2ee";
  const defaultHref = "https://deco.cx/";
  const defaultText = "Made with";
  const defaultAlt = "Made with deco.cx";
  const defaultHeight = 20;
  const defaultWidth = 50;
  const defaultXpto = {
    xpto2: "1",
    xpto3: ["1", "2"]
  };

  return (
    <div class="py-8 lg:px-0 px-6 fixed bottom-0 w-full mx-auto">
      <a
        href={href || defaultHref}
        class="flex flex-row gap-1 items-center justify-center text-xs"
        target="_blank"
      >
        {text && <p>{text || defaultText}</p>}
        {image && (
          <Image
            src={image || defaultImage}
            alt={alt || defaultAlt}
            height={height || defaultHeight}
            width={width || defaultWidth}
          />
        )}
      </a>
    </div>
  );
}
```

# Exportando Propriedades Padrão nos Parâmetros da Função

Para resolver este problema, o Admin agora suporta a especificação de propriedades padrão diretamente nos parâmetros da função de qualquer bloco. Isso garante que os valores padrão sejam refletidos de forma consistente na interface, no componente renderizado e no arquivo JSON mostrado aos desenvolvedores, proporcionando benefícios como:

- **Consistência:** Os valores padrão são visíveis e editáveis na interface do admin, garantindo uma experiência de usuário consistente.
- **Clareza:** Os desenvolvedores podem ver os valores padrão reais no arquivo JSON, reduzindo a confusão.
- **Simplicidade:** Mais fácil de gerenciar e atualizar os valores padrão diretamente nos parâmetros da função.

Este recurso suporta cenários mais simples, cobrindo tipos de dados básicos e objetos aninhados.

# Implementação

Para especificar propriedades padrão em seu componente, inclua-os diretamente no parâmetro da função. Abaixo está um exemplo de como fazer isso:


```tsx
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  href?: string;
  image?: ImageWidget;
  alt?: string;
  width?: number;
  height?: number;
  text?: string;
  xpto?: {
    xpto2: string;
    xpto3: string[]
  };
}

function Footer({ image, href, text, alt, height, width }: Props = {
  image:
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4959/d7aa9290-074f-417c-99c3-5b0587c8c2ee",
  href: "https://deco.cx/",
  text: "Made with",
  alt: "Made with deco.cx",
  height: 20,
  width: 50,
  xpto: {
    xpto2: "1",
    xpto3: ["1", "2"]
  },
}) {
  return (
    <div class="py-8 lg:px-0 px-6 fixed bottom-0 w-full mx-auto">
      <a
        href={href}
        class="flex flex-row gap-1 items-center justify-center text-xs"
        target="_blank"
      >
        {text && <p>{text}</p>}
        {image && (
          <Image
            src={image}
            alt={alt}
            height={height}
            width={width}
          />
        )}
      </a>
    </div>
  );
}

export default Footer;

```

## Explicação

1. **Valores Padrão de Props:** Os valores padrão para image, href, text, alt, height, width e xpto são especificados diretamente no parâmetro da função.
2. **Interface de Props:** A interface Props define a estrutura e os tipos das props.
3. **Lógica do Componente:** A lógica do componente usa esses valores padrão, garantindo que sejam aplicados de forma consistente.

# Conclusão

Ao especificar propriedades padrão diretamente nos parâmetros da função, este novo recurso melhora a integração entre a interface do admin e a renderização do componente. Essa mudança simplifica o fluxo de trabalho para os desenvolvedores e aprimora a experiência do usuário, garantindo que os valores padrão sejam visíveis e gerenciáveis em todas as partes do Admin.