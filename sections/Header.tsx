import HeaderIsland from "deco-sites/starting/islands/Header.tsx";

export interface GitHub {
  /** @format html */
  mobile?: string;
  /** @format html */
  desktop?: string;
}

export interface Props {
  githubBarText?: GitHub;
  menuLinks: Array<{ label: string; href: string; targetBlank?: boolean }>;
  idiom: string;
  pt: { label: string; url: string; selected?: boolean };
  eng: { label: string; url: string; selected?: boolean };
  login: { label: string; url: string };
  sign: { label: string; url: string };
  pageInitial: string;
  mkt?: { label: string; url: string; selected?: boolean };
  dev?: { label: string; url: string; selected?: boolean };
  linkedinUrl?: string;
  gitUrl?: string;
  discordUrl?: string;
}

export default function Header({
  linkedinUrl = "https://www.linkedin.com/company/deco-cx/",
  gitUrl = "https://github.com/deco-cx",
  discordUrl = "https://discord.gg/YsGgt8EQCZ",
  ...rest
}: Props) {
  return (
    <HeaderIsland
      {...rest}
      linkedinUrl={linkedinUrl}
      gitUrl={gitUrl}
      discordUrl={discordUrl}
    />
  );
}
