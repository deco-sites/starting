import { LoaderReturnType } from "$live/types.ts";
import { MDFileContent } from "site/components/ui/Types.tsx";
import MarkdownContent from "site/sections/MarkdownContent.tsx";
import { CardLinks } from "site/components/ui/docs/CardLinks.tsx";
import { JoinDiscordCTA } from "site/components/ui/docs/JoinDiscord.tsx";

import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";

interface OverviewContentProps {
  mdContent?: LoaderReturnType<MDFileContent>;
}

const labels = {
  readTutorials: {
    "en": "Read tutorials",
    "pt": "Leia tutoriais",
  },
  newProject: {
    "en": "Start a new project",
    "pt": "Comece um novo projeto",
  },
  watchTour: {
    "en": "Watch a guided tour",
    "pt": "Assista um tour guiado",
  },
  haveQuestion: {
    "en": "Have a question or want to get involved?",
    "pt": "Tem alguma pergunta ou quer participar da comunidade?",
  },
  joinDiscord: {
    "en": "Join our discord",
    "pt": "Entre no nosso discord",
  },
};

export default function OverviewContent(
  props: OverviewContentProps & { language: "en" | "pt" },
) {
  const links: {
    icon: AvailableIcons;
    label: string;
    href: string;
  }[] = [
    {
      icon: "Book",
      label: labels.readTutorials[props.language],
      href:
        `https://deco.cx/docs/${props.language}/getting-started/creating-a-site`,
    },
    {
      icon: "Sparkle",
      label: labels.newProject[props.language],
      href: "https://admin.deco.cx/spaces/new",
    },
    {
      icon: "Camera",
      label: labels.watchTour[props.language],
      href:
        "https://youtube.com/playlist?list=PLGXfp7aORhWB4dVU1S0rm4yUYKk49F6Bn&feature=shared",
    },
  ];
  return (
    <>
      <div class="p-4 text-white">
        <CardLinks links={links} />
      </div>
      {props.mdContent && <MarkdownContent data={{ ...props.mdContent }} />}
      <div class="p-4">
        <JoinDiscordCTA
          label={labels.haveQuestion[props.language]}
          buttonLabel={labels.joinDiscord[props.language]}
        />
      </div>
    </>
  );
}

export const loader = (props: OverviewContentProps, req: Request) => {
  const language = req.url.includes("/pt/") ? "pt" : "en";

  return {
    ...props,
    language,
  };
};
