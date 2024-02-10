import Icon, {
  AvailableIcons,
} from "deco-sites/starting/components/ui/Icon.tsx";

/**
 * @title {{{icon}}}
 */
interface IconLink {
  icon: AvailableIcons;
  url: string;
}

export interface Props {
  socialLinks: IconLink[];
}

export default function SocialLinks(props: Props) {
  return (
    <ul class="flex gap-3">
      {props.socialLinks.map((link) => (
        <li>
          <a href={link.url}>
            <Icon id={link.icon} size={24} />
          </a>
        </li>
      ))}
    </ul>
  );
}
