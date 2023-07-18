import { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Icon, { AvailableIcons } from "./Icon.tsx";
import Text from "./Text.tsx";
import type { ComponentChildren } from "preact";

export interface Link {
  /** @description 20px transparent png recommended */
  icon?: AvailableIcons;
  label: string;
  href: string;
}

export interface Social {
  href: string;
  label:
    | "Instagram"
    | "Facebook"
    | "Linkedin"
    | "WhatsApp"
    | "Discord"
    | "Tiktok";
}

export interface Props {
  header?: {
    title?: string;
    description?: string;
    /** @description 150p x 150p image recommended */
    logo?: LiveImage;
    /** @description color to be used in title and description */
    textColor?: string;
    /** @description external link on logo */
    link?: string;
  };
  links?: {
    items?: Link[];
    style?: {
      /** @description color to be used in link's text */
      textColor?: string;
      backgroundColors?: {
        /** @description multiple colors will create a gradient effect */
        neutral?: string[];
        /** @description multiple colors will create a gradient effect */
        hover?: string[];
      };
    };
  };
  social?: {
    items?: Social[];
    style?: {
      iconColor?: string;
    };
  };
  background?: {
    /** @description an image will override any background color */
    image?: LiveImage;
    /** @description multiple colors will create a gradient effect */
    backgroundColors?: string[];
  };
}

function Links(props: Props) {
  const { header, background, links, social } = props;
  const iconColorClass = generateIconColorClass(props);
  const headerTextClass = generateHeaderTextColor(props);
  const linkClass = generateLinkClasses(props);
  const logoOrIcon = header?.logo ? (
    <img class="w-full" decoding="async" src={header.logo} alt={header.title} />
  ) : (
    <Icon id="Logo" size={150} />
  );

  const maybeLink = header?.link ? (
    <a href={header?.link!} target="_blank">
      {logoOrIcon}
    </a>
  ) : (
    logoOrIcon
  );

  return (
    <BaseContainer background={background}>
      <header class="flex flex-col justify-center items-center gap-4">
        <div class="rounded-full p-4">{maybeLink}</div>

        {Boolean(header?.title) && (
          <Text
            tone="default"
            variant="heading-3"
            class={`text-center ${headerTextClass}`}
          >
            {header?.title}
          </Text>
        )}

        {Boolean(header?.description) && (
          <Text
            tone="default"
            class={`text-center ${headerTextClass}`}
            variant="body"
          >
            {header?.description}
          </Text>
        )}
      </header>

      <main class="w-full">
        <ul class="flex flex-col justify-center items-center gap-4">
          {links?.items?.map((link) => (
            <li class="w-full">
              <a
                target="_blank"
                href={link.href}
                class={linkClass}
                style={{
                  color: props?.links?.style?.textColor ?? "black",
                  backgroundColor: props?.links?.style?.backgroundColors
                    ?.neutral?.[0] as unknown as string,
                }}
              >
                {Boolean(link.icon) && (
                  <Icon size={20} id={link.icon!} strokeWidth={2.5} />
                )}

                <span class="w-full text-center text-sm">{link.label}</span>

                <Icon
                  size={14}
                  id="Share"
                  strokeWidth={2}
                  class="opacity-0 group-hover:opacity-100"
                />
              </a>
            </li>
          ))}
        </ul>
      </main>

      <footer class="flex flex-1 flex-col">
        <ul class="flex flex-row gap-4 mb-10 justify-center items-center">
          {social?.items?.map((link) => (
            <li>
              <a
                target="_blank"
                href={link.href}
                title={link.label}
                class="text-interactive-inverse block rounded"
              >
                <Icon
                  size={20}
                  id={link.label}
                  strokeWidth={2}
                  class={iconColorClass}
                />
              </a>
            </li>
          ))}
        </ul>

        <div class="mt-auto text-xs flex flex-row items-center justify-center text-white gap-1">
          Powered by
          <a href="https://deco.cx/" target="_blank">
            <Icon size={48} id="Deco" class="-mt-1" strokeWidth={0.8} />
          </a>
        </div>
      </footer>
    </BaseContainer>
  );
}

function generateColorClasses(
  colors?: string[],
  gradientDirection = "r",
  prefix = ""
) {
  if (!colors || colors.length === 0) return "";
  if (colors.length === 1) return `${prefix}bg-[${colors[0]}]`;

  const from = `from-[${colors[0]}]`;
  const to = `to-[${colors[1]}]`;
  return `${prefix}bg-gradient-to-${gradientDirection} ${prefix}${from} ${prefix}${to}`;
}

function BaseContainer(props: {
  children?: ComponentChildren;
  background?: Props["background"];
}) {
  const { backgroundColors, image } = props?.background ?? {};
  const baseClasses = "flex justify-center w-full min-h-screen";
  const inlineStyle = image ? { background: `url(${image})` } : undefined;
  const colorClasses = generateColorClasses(backgroundColors, "t");
  const containerClasses = `${baseClasses} ${colorClasses}`;

  return (
    <div class={containerClasses} style={inlineStyle}>
      <div class="flex flex-col items-center gap-12 p-10 max-w-[640px] w-full">
        {props.children}
      </div>
    </div>
  );
}

function generateIconColorClass(props: Props) {
  const { iconColor } = props.social?.style ?? {};
  return iconColor ? `text-[${iconColor}]` : "";
}

function generateHeaderTextColor(props?: Props) {
  const { textColor } = props?.header ?? {};
  return textColor ? `text-[${textColor}]` : "";
}

function generateLinkClasses(props?: Props) {
  const { backgroundColors, textColor } = props?.links?.style ?? {};
  const { neutral, hover } = backgroundColors ?? {};
  const txtColor = textColor ? `text-[${textColor}]` : "text-default";
  const colorClasses = generateColorClasses(neutral);
  const hoverColorClasses = generateColorClasses(hover, "r", "hover:");
  return `${txtColor} group h-[52px] px-6 rounded-full flex justify-start items-center font-bold gap-4`;
}

export default Links;
