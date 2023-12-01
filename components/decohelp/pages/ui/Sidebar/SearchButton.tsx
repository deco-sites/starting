import { Head } from "$fresh/runtime.ts";
import { useEffect, useRef } from "preact/hooks";
import docsearch from "https://esm.sh/@docsearch/js@3.5.2?target=es2020";

// Copied from algolia source code
type DocSearchProps = {
  appId: string;
  apiKey: string;
  indexName: string;
  container: HTMLElement | string;
};

export default function SearchButton(
  props: { docsearch?: (args: DocSearchProps) => void; },
) {
  const ref = useRef<HTMLDivElement>(null);
  const lang = window.location.href &&  window.location.href.includes("/en/") ? "en" : "pt";
  useEffect(() => {
    if (ref.current) {
      props.docsearch || docsearch({
        appId: "RBDERIH9EY",
        apiKey: "1bce943613df73233ccfca9f733b2a47",
        indexName: "deco",
        container: ref.current,
        searchParameters: {
          facetFilters: [`language:${lang}`],
        },
      });
    }
  }, [ref.current]);
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://RBDERIH9EY-dsn.algolia.net" crossOrigin="true" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@docsearch/css@3" />
      </Head>
      <div
        title="Search Button"
        class="h-9 mb-6"
        ref={ref}
      >
      </div>
      <script src="https://cdn.jsdelivr.net/npm/@docsearch/js@3"></script>
    </>
  );
}