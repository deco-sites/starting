import Icon from "site/components/ui/Icon.tsx";

export interface Question {
  question: string;
  /**
   * @format textarea
   */
  answer: string;
}

export function FaqItem({ question, answer }: Question) {
  return (
    <details class="home-faq">
      <summary class="border-[#272D2D] border rounded-2xl flex flex-row justify-between items-center px-[24px] py-[22.5px] gap-[16px] group cursor-pointer bg-[#0D1717] rounded-2xl">
        <p class="font-bold text-[18px] leading-[27px] text-white">
          {question}
        </p>
        <div class="flex-none">
            <Icon
                class="text-white"
                id="Plus"
                width={18}
                height={18}
                strokeWidth={"3"}
            />
        </div>
      </summary>
      <p class="border-[#272D2D] border rounded-t-none border-t-0 relative top-[-15px] pt-[5px] px-[24px] py-[22.5px] bg-[#0D1717] text-[#949E9E] text-[18px] leading-[27px] rounded-2xl">
        {answer}
      </p>
    </details>
  );
}

export interface Props {
  questions: Question[];
  /**
     * @format rich-text
     * @default Click here to tweak this text however you want.
    */   
  title: string;
}

export default function Faq({ 
    title = "FAQ",
    questions = [
        {
          "answer": "Deco.cx is the frontend platform that bridges the gap between basic no-code site builders and complex full-code setups, allowing businesses of all sizes to create high-performance, fully personalized and AI-native web experiences. Our open-source platform bundles the best-in-class of framework, hosting, CMS, visual editor and code editor. ",
          "question": "What is deco.cx?"
        },
        {
          "answer": "No, deco.cx acts as a complementary headless frontend layer for your existing commerce platform. It integrates seamlessly with any commerce platform that has open APIs, enhancing your store's development, performance and experience, without replacing your current system.",
          "question": "Does deco.cx replace my current commerce platform?"
        },
        {
          "answer": "Deco.cx uses Deno, Preact, Tailwind, and Fresh. Deno offers a secure runtime for JavaScript and TypeScript, while Preact is a lightweight, React-compatible framework. Tailwind facilitates optimized web styling, and Fresh is a modern server-side web framework designed for Deno.",
          "question": "What tech stack does deco.cx use?"
        },
        {
          "answer": " Deco.cx employs state-of-the-art techniques to deliver the smallest payloads with minimal latency. These techniques encompass server-side rendering, dynamic image resizing and encoding, server actions, an islands architecture, just-in-time CSS generation, and edge infrastructure spread across 35 regions, among many others.",
          "question": "How does deco.cx ensure fast websites?"
        },
        {
          "answer": "Yes, deco.cx can seamlessly integrate with a wide range of marketing tools and platforms, enabling you to streamline your marketing efforts and enhance customer engagement.",
          "question": "Can deco.cx integrate with existing marketing tools?"
        },
        {
          "answer": "Yes, deco.cx is built to support multi-language and multi-regional functionalities, making it an ideal solution for global ecommerce platforms seeking to provide localized experiences.",
          "question": "Does deco.cx support multi-language and multi-region ecommerce sites?"
        },
        {
          "answer": "deco.cx provides extensive developer support including: detailed documentation, a responsive community on Discord, and direct access to our technical team for guidance and troubleshooting.",
          "question": "What kind of support does deco.cx offer for developers?"
        },
        {
          "answer": "Absolutely! deco.cx is designed to scale with your business, whether you are a startup or a large enterprise. ",
          "question": "Is deco.cx suitable for businesses of all sizes?"
        },
        {
          "answer": "For an in-depth understanding of deco.cx, join our community on Discord, read our documentation, or connect with our sales team.",
          "question": "How can I learn more about deco.cx?"
        },
        {
          "answer": "Implementing deco.cx involves migrating your ecommerce store's frontend to our tech stack. This can be efficiently executed by one of deco.cx's system integration partner agencies (SIs), an independent tech expert, or your in-house development team. The time frame varies from 2 weeks to 3 months, depending on your store's complexity. Access our deco Hub for a list of certified SI partners.",
          "question": "What does the implementation process with deco.cx look like?"
        },
        {
          "answer": "About 80% is already open source at deco-cx/deco (our engine) and deco-cx/apps (our integrations). We are working hard to provide a fully self-hosted and open source version in Q1 2024. Bear with us as we nail the final details that will allow for long term extensibility.",
          "question": "Is deco.cx open-source?"
        },
        {
          "answer": "Yes! Starting from 9 USD / mo you can add custom domains for unlimited sites (according to our free usage policy limits) and even invite collaborators to edit content.",
          "question": "As a developer, can I host multiple customer projects in my personal team?"
        }
      ]
 }: Props) {
  return (
    <section class="max-w-[768px] z-10 text-white relative mx-auto py-12 px-6 lg:px-0 lg:py-40">
      <div class="flex flex-col gap-[64px] m-auto">
        <h2 class="text-white text-center text-[48px] font-bold leading-[57.6px] font-albert-sans" dangerouslySetInnerHTML={{
                __html: title
            }}></h2>
        <div class="flex flex-col gap-[16px]">
          {questions.map((item) => {
            return <FaqItem {...item} />;
          })}
        </div>
      </div>
    </section>
  );
}
