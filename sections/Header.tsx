import HeaderIsland from '../islands/Header.tsx';

export interface Props {
  menuLinks: Array<{ label: string; href: string }>;
  idiom: string;
  login: string;
}

export default function Header({ menuLinks, idiom, login }: Props) {
  return (
    <HeaderIsland menuLinks={menuLinks} idiom={idiom} login={login}></HeaderIsland>
  );
}
