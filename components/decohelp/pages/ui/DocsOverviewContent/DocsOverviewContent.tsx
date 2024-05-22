
import { LoaderReturnType } from "$live/types.ts";
import { MDFileContent } from "site/components/ui/Types.tsx";
import MarkdownContent from "site/sections/MarkdownContent.tsx";
import { getTitleForPost } from "site/docs/toc.ts";
import { CardLinks } from "site/components/ui/docs/CardLinks.tsx";
import { JoinDiscordCTA } from "site/components/ui/docs/JoinDiscord.tsx";

import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";

interface OverviewContentProps {
    mdContent?: LoaderReturnType<MDFileContent>;
}

export default function OverviewContent(props: OverviewContentProps) {
    const links : {
        icon: AvailableIcons;
        label: string;
        href: string;
      }[] = [
        { icon: "Book", label: "Read tutorials", href: "/docs" },
        { icon: "Star", label: "Start a new project", href: "https://admin.deco.cx"},
        { icon: "Camera", label: "Watch a guided tour", href: "/docs"},
    ];
    return (
    <>
        {props.mdContent && <MarkdownContent data={{ ...props.mdContent }} />}
        <CardLinks links={links} />
        <JoinDiscordCTA label="Have a question or want to get involved?" buttonLabel="Join our discord" />
    </>);
}

// export const loader = async (props: OverviewContentProps, req: Request) => {
//     const language = req.url.includes("/pt/") ? "pt" : "en";

//     const url = new URL(
//         `../../../../../docs/overview/${language}.md`,
//         import.meta.url,
//     );

//     const fileContent = await Deno.readTextFile(url);

//     console.log(fileContent);

//     const data = {
//         content: fileContent,
//         title: getTitleForPost(language, "overview"),
//     }
//     return {
//       ...props,
//     //   data,
//       url: req.url,
//     }
//   }