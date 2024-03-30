import { PageProps } from "$fresh/server.ts";
import GlobalTags from "site/components/GlobalTags.tsx";
function App({ Component }: PageProps) {
  return (
    <>
      <GlobalTags />
      <Component />
    </>
  );
}

export default App;
