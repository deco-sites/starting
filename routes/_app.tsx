import { PageProps } from "$fresh/server.ts";
import GlobalTags from "deco-sites/starting/components/GlobalTags.tsx";
function App({ Component }: PageProps) {
  return (
    <>
      <GlobalTags />
      <Component />
    </>
  );
}

export default App;
