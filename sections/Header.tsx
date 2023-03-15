import HeaderIsland from '../islands/Header.tsx';

export interface Props {
  menuLinks: Array<{ label: string; href: string;  targetBlank?: boolean}>;
  idiom: string;
  pt: {label: string; url: string; selected?: boolean};
  eng: {label: string; url: string; selected?: boolean};
  login: {label: string; url:string};
  linkedinUrl: string;
  gitUrl: string;
  discordUrl: string;
}

export default function Header({ menuLinks, idiom, pt, eng, login, linkedinUrl, gitUrl, discordUrl }: Props) {
  return (
    <HeaderIsland menuLinks={menuLinks} idiom={idiom} pt={pt} eng={eng} login={login} linkedinUrl={linkedinUrl} gitUrl={gitUrl} discordUrl={discordUrl}></HeaderIsland>
  );
}
