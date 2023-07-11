import { AppProps } from "$fresh/server.ts";
import GlobalTags from "deco-sites/starting/components/GlobalTags.tsx";

function App({ Component }: AppProps) {
  return (
    <>
      <GlobalTags />
      <Component />
    </>
  );
}

export default App;
