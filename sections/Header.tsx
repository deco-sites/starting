import HeaderIsland from "deco-sites/starting/islands/Header.tsx";

export interface Props {
  menuLinks: Array<{ label: string; href: string;  targetBlank?: boolean}>;
  idiom: string;
  pt: {label: string; url: string; selected?: boolean};
  eng: {label: string; url: string; selected?: boolean};
  login: {label: string; url:string};
  pageInitial: string;
  mkt: {label: string; url: string; selected?: boolean};
  dev: {label: string; url: string; selected?: boolean};
  linkedinUrl: string;
  gitUrl: string;
  discordUrl: string;
}

export default function Header({ menuLinks, idiom, pt, eng, login, pageInitial, mkt, dev, linkedinUrl, gitUrl, discordUrl }: Props) {
  return (
    <HeaderIsland menuLinks={menuLinks} pageInitial={pageInitial} mkt={mkt} dev={dev} idiom={idiom} pt={pt} eng={eng} login={login} linkedinUrl={linkedinUrl} gitUrl={gitUrl} discordUrl={discordUrl}></HeaderIsland>
  );
}
