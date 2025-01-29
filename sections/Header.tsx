import HeaderIsland, { MenuLink } from "site/islands/Header.tsx";
import { GithubStargazesProps } from "site/components/ui/GithubStargazers.tsx";

export interface Alert {
  github?: GithubStargazesProps;
  /** @format html */
  /** @title Text */
  text: string;
}

export interface Alerts {
  mobile?: Alert[];
  desktop?: Alert[];
}

export interface Props {
  alerts?: Alerts;
  menuLinks: MenuLink[];
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
  discordUrl = "https://discord.gg/deco-cx",
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
