import { AppProps } from "$fresh/server.ts";
import { context } from "$live/live.ts";
import GoogleTagManager from "partytown/integrations/GTM.tsx";
import GlobalTags from "deco-sites/starting/components/GlobalTags.tsx";
import Script from "partytown/Script.tsx";

const trackingId = "GTM-T43K9FJ";

export default function App(props: AppProps) {
  return (
    <>
      {/* Add Tag Manager script during production only. To test it locally remove the condition */}
      {!!context.deploymentId && trackingId && (
        <>
          <GoogleTagManager trackingId={trackingId} />
          {/* Ad Words Conversion tag */}
          <Script
            dangerouslySetInnerHTML={{
              __html: `
              dataLayer.push('config', 'G-2JTXN810QT');
          `,
            }}
          />
        </>
      )}
      <GlobalTags />
      <props.Component />
    </>
  );
}
