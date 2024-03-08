import ButtonTab from "$store/islands/ButtonTab.tsx";
import Article from "$store/islands/Article.tsx";
import ButtonLink from "$store/components/camp/GraphAndEmojis/ButtonLink.tsx";

interface Content {
  title: string;
  /**
   * @format html
   */
  content: string[];
}

export interface ItemsTopic {
  title: string;
  /**
   * @format html
   */
  subTitle: string;
  /**
   * @format html
   */
  content: Content;

  flagTime?: string;
}

export interface Topics {
  title: string;
  /**
   * @description recomened max 3
   */
  itemsTopics: ItemsTopic[];
}

export interface Props {
  title: string;
  /**
   * @format html
   */
  subTitle: string;
  /**
   * @description recomened max 3
   */
  topics: Topics[];
  button?: {
    label?: string;
    href?: string;
  };
}

const BASE_PROPS = {
  title: "Program",
  topics: [
    {
      title: "The Post-AI Web Builder",
      flagTime: "1 hour",
      itemsTopics: [
        {
          title: "A Brief History of Web 📹",
          content: {
            title: "What will you learn",
            content: [
              "Web is getting increasingly complex (too many frameworks)",
              "Web was once fun",
              "Web is getting too slow (sites are getting heavier)",
              "Software architecture is changing (monolith to composable)",
            ],
          },
          subTitle:
            "<p>Driving uat donuts ground other across. Done inclusion pulling parking you not drawing-board want. Right horse corporate 30,000ft do ui.</p>",
        },
        {
          title: "A Brief History of Web 📹",
          content: {
            title: "What will you learn",
            content: [
              "Web is getting increasingly complex (too many frameworks)",
              "Web was once fun",
              "Web is getting too slow (sites are getting heavier)",
              "Software architecture is changing (monolith to composable)",
            ],
          },
          subTitle:
            "<p>Driving uat donuts ground other across. Done inclusion pulling parking you not drawing-board want. Right horse corporate 30,000ft do ui.</p>",
        },
        {
          title: "A Brief History of Web 📹",
          content: {
            title: "What will you learn",
            content: [
              "Web is getting increasingly complex (too many frameworks)",
              "Web was once fun",
              "Web is getting too slow (sites are getting heavier)",
              "Software architecture is changing (monolith to composable)",
            ],
          },
          subTitle:
            "<p>Driving uat donuts ground other across. Done inclusion pulling parking you not drawing-board want. Right horse corporate 30,000ft do ui.</p>",
        },
      ],
    },
    {
      title: "The Post-AI Web Builder",
      flagTime: "1 hour",
      itemsTopics: [
        {
          title: "A Brief History of Web 📹",
          content: {
            title: "What will you learn",
            content: [
              "Web is getting increasingly complex (too many frameworks)",
              "Web was once fun",
              "Web is getting too slow (sites are getting heavier)",
              "Software architecture is changing (monolith to composable)",
            ],
          },
          subTitle:
            "<p>Driving uat donuts ground other across. Done inclusion pulling parking you not drawing-board want. Right horse corporate 30,000ft do ui.</p>",
        },
        {
          title: "A Brief History of Web 📹",
          content: {
            title: "What will you learn",
            content: [
              "Web is getting increasingly complex (too many frameworks)",
              "Web was once fun",
              "Web is getting too slow (sites are getting heavier)",
              "Software architecture is changing (monolith to composable)",
            ],
          },
          subTitle:
            "<p>Driving uat donuts ground other across. Done inclusion pulling parking you not drawing-board want. Right horse corporate 30,000ft do ui.</p>",
        },
        {
          title: "A Brief History of Web 📹",
          content: {
            title: "What will you learn",
            content: [
              "Web is getting increasingly complex (too many frameworks)",
              "Web was once fun",
              "Web is getting too slow (sites are getting heavier)",
              "Software architecture is changing (monolith to composable)",
            ],
          },
          subTitle:
            "<p>Driving uat donuts ground other across. Done inclusion pulling parking you not drawing-board want. Right horse corporate 30,000ft do ui.</p>",
        },
      ],
    },
    {
      title: "The Post-AI Web Builder",
      flagTime: "1 hour",
      itemsTopics: [
        {
          title: "A Brief History of Web 📹",
          content: {
            title: "What will you learn",
            content: [
              "Web is getting increasingly complex (too many frameworks)",
              "Web was once fun",
              "Web is getting too slow (sites are getting heavier)",
              "Software architecture is changing (monolith to composable)",
            ],
          },
          subTitle:
            "<p>Driving uat donuts ground other across. Done inclusion pulling parking you not drawing-board want. Right horse corporate 30,000ft do ui.</p>",
        },
        {
          title: "A Brief History of Web 📹",
          content: {
            title: "What will you learn",
            content: [
              "Web is getting increasingly complex (too many frameworks)",
              "Web was once fun",
              "Web is getting too slow (sites are getting heavier)",
              "Software architecture is changing (monolith to composable)",
            ],
          },
          subTitle:
            "<p>Driving uat donuts ground other across. Done inclusion pulling parking you not drawing-board want. Right horse corporate 30,000ft do ui.</p>",
        },
        {
          title: "A Brief History of Web 📹",
          content: {
            title: "What will you learn",
            content: [
              "Web is getting increasingly complex (too many frameworks)",
              "Web was once fun",
              "Web is getting too slow (sites are getting heavier)",
              "Software architecture is changing (monolith to composable)",
            ],
          },
          subTitle:
            "<p>Driving uat donuts ground other across. Done inclusion pulling parking you not drawing-board want. Right horse corporate 30,000ft do ui.</p>",
        },
      ],
    },
  ],
  subTitle:
    "<p>Unlock advanced audience insights and comprehensive&nbsp;<br>system observability for optimal perfomance</p>",
  __resolveType: "deco-sites/sections/sections/Content/PrimarySection.tsx",
  props: {
    topics: [
      {
        itemsTopics: [
          {
            content: {
              content: [
                "Web is getting increasingly complex (too many frameworks)",
                "Web was once fun",
                "Web is getting too slow (sites are getting heavier)",
                "Software architecture is changing (monolith to composable)",
              ],
              title: "What will you learn",
            },
            title: "A Brief History of Web 📽",
            subTitle:
              "<p>Driving uat donuts ground other across. Done inclusion pulling parking you not drawing-board want. Right horse corporate 30,000ft do ui.</p>",
          },
          {
            content: {
              content: [
                "Web is getting increasingly complex (too many frameworks)",
                "Web was once fun",
                "Web is getting too slow (sites are getting heavier)",
                "Software architecture is changing (monolith to composable)",
              ],
              title: "What will you learn",
            },
            title: "A Brief History of Web 📽",
            subTitle:
              "<p>Driving uat donuts ground other across. Done inclusion pulling parking you not drawing-board want. Right horse corporate 30,000ft do ui.</p>",
          },
          {
            content: {
              content: [
                "Web is getting increasingly complex (too many frameworks)",
                "Web was once fun",
                "Web is getting too slow (sites are getting heavier)",
                "Software architecture is changing (monolith to composable)",
              ],
              title: "What will you learn",
            },
            title: "A Brief History of Web 📽",
            subTitle:
              "<p>Driving uat donuts ground other across. Done inclusion pulling parking you not drawing-board want. Right horse corporate 30,000ft do ui.</p>",
          },
        ],
        title: "The Post-AI Web Builder",
        flagTime: "1 hours",
      },
    ],
    title: "Program",
    subTitle:
      "<p>Unlock advanced audience insights and comprehensive&nbsp;<br>system observability for optimal perfomance</p>",
  },
};

export default function PrimarySection({ props }: { props: Props }) {
  const { title, subTitle, topics } = { ...BASE_PROPS, ...props };

  return (
    <div class="w-full h-full bg-[#000]">
      <div class="container max-w-[1280px] mx-auto flex justify-center flex-col w-full py-6 rounded-3xl px-4">
        <h2 class="text-5xl lg:text-7xl text-white font-medium text-center mb-9">
          {title}
        </h2>
        <span
          class="text-center text-lg text-[#A1A1AA]"
          dangerouslySetInnerHTML={{ __html: subTitle }}
        >
        </span>
        <div class="flex w-full flex-row mt-9 xl:gap-16 lg:bg-[#000D0D] rounded-3xl lg:px-3">
          <div class="w-full lg:w-[28%] flex flex-col lg:gap-5 xl:gap-14 gap-16">
            {topics.map((topic, indexTopic) => {
              return (
                <div class="rounded-3xl lg:gap-4 gap-8 flex flex-col bg-[#000D0D] px-4 py-8 lg:py-2 lg:px-0">
                  <h3 class="text-[#02F67C] text-2xl font-semibold">
                    <span class="lg:hidden">{indexTopic + 1 + ". "}</span>
                    {topic.title}
                  </h3>
                  {topic.itemsTopics.map((itemTopic, index) => (
                    <ButtonTab
                      {...itemTopic}
                      index={index.toString() + indexTopic.toString()}
                    />
                  ))}
                  {topics.length === (indexTopic + 1) && props.button?.label &&
                    (
                      <ButtonLink
                        classCustom="lg:hidden flex"
                        label={props.button?.label}
                        href={props.button?.href}
                      />
                    )}
                </div>
              );
            })}
          </div>
          <div class="w-3/4 hidden lg:flex flex-col py-8 lg:py-16 lg:mx-6 ">
            {topics.map((topic, indexTopic) => (
              topic.itemsTopics.map((itemTopic, index) => (
                <Article
                  title={itemTopic.title}
                  subTitle={itemTopic.subTitle}
                  content={itemTopic.content}
                  flagTime={itemTopic.flagTime}
                  index={index.toString() + indexTopic.toString()}
                />
              ))
            ))}
            {props.button?.label && (
              <ButtonLink
                classCustom="hidden lg:flex"
                label={props.button?.label}
                href={props.button?.href}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
