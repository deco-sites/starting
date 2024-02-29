import FaqTitle from "$store/components/camp/Faq/FaqTitle.tsx";
import Dropdown from "$store/components/camp/Faq/Dropdown.tsx";


/**
* @titleBy question 
*/
interface Items {
  question: string;
  /**
   * @format textarea
   */
  answer: string;
}

export interface Props {
  title?: string;
  items: Items[];
}

const BASE_PROPS = {
  title: "FAQs",
  items: [
    {
      question: "What is the Deco.cx Masterclass?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada aliquam eros, et finibus justo congue vitae. Nunc interdum magna leo, id vehicula tellus tincidunt ac. Vestibulum condimentum enim quis commodo commodo. Suspendisse vitae viverra purus. Nulla facilisi. Fusce et aliquam nisl, vel maximus justo. Vestibulum auctor sodales massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam, nunc eu dignissim posuere, tortor lectus faucibus sapien, at finibus est quam ut nibh. Fusce tortor eros, tincidunt at urna quis, vestibulum viverra libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam ut urna efficitur, congue arcu id, porttitor est. Integer luctus scelerisque eros nec tincidunt.",
    },
    {
      question: "Who is the Masterclass for?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada aliquam eros, et finibus justo congue vitae. Nunc interdum magna leo, id vehicula tellus tincidunt ac. Vestibulum condimentum enim quis commodo commodo. Suspendisse vitae viverra purus. Nulla facilisi. Fusce et aliquam nisl, vel maximus justo. Vestibulum auctor sodales massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam, nunc eu dignissim posuere, tortor lectus faucibus sapien, at finibus est quam ut nibh. Fusce tortor eros, tincidunt at urna quis, vestibulum viverra libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam ut urna efficitur, congue arcu id, porttitor est. Integer luctus scelerisque eros nec tincidunt.",
    },
    {
      question: "What will I learn in the Masterclass?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada aliquam eros, et finibus justo congue vitae. Nunc interdum magna leo, id vehicula tellus tincidunt ac. Vestibulum condimentum enim quis commodo commodo. Suspendisse vitae viverra purus. Nulla facilisi. Fusce et aliquam nisl, vel maximus justo. Vestibulum auctor sodales massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam, nunc eu dignissim posuere, tortor lectus faucibus sapien, at finibus est quam ut nibh. Fusce tortor eros, tincidunt at urna quis, vestibulum viverra libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam ut urna efficitur, congue arcu id, porttitor est. Integer luctus scelerisque eros nec tincidunt.",
    },
    {
      question: "How long does the Masterclass take to complete?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada aliquam eros, et finibus justo congue vitae. Nunc interdum magna leo, id vehicula tellus tincidunt ac. Vestibulum condimentum enim quis commodo commodo. Suspendisse vitae viverra purus. Nulla facilisi. Fusce et aliquam nisl, vel maximus justo. Vestibulum auctor sodales massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam, nunc eu dignissim posuere, tortor lectus faucibus sapien, at finibus est quam ut nibh. Fusce tortor eros, tincidunt at urna quis, vestibulum viverra libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam ut urna efficitur, congue arcu id, porttitor est. Integer luctus scelerisque eros nec tincidunt.",
    },
    {
      question: "Do I get a certification?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada aliquam eros, et finibus justo congue vitae. Nunc interdum magna leo, id vehicula tellus tincidunt ac. Vestibulum condimentum enim quis commodo commodo. Suspendisse vitae viverra purus. Nulla facilisi. Fusce et aliquam nisl, vel maximus justo. Vestibulum auctor sodales massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam, nunc eu dignissim posuere, tortor lectus faucibus sapien, at finibus est quam ut nibh. Fusce tortor eros, tincidunt at urna quis, vestibulum viverra libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam ut urna efficitur, congue arcu id, porttitor est. Integer luctus scelerisque eros nec tincidunt.",
    },
    {
      question: "Are there live sessions or support available?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada aliquam eros, et finibus justo congue vitae. Nunc interdum magna leo, id vehicula tellus tincidunt ac. Vestibulum condimentum enim quis commodo commodo. Suspendisse vitae viverra purus. Nulla facilisi. Fusce et aliquam nisl, vel maximus justo. Vestibulum auctor sodales massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam, nunc eu dignissim posuere, tortor lectus faucibus sapien, at finibus est quam ut nibh. Fusce tortor eros, tincidunt at urna quis, vestibulum viverra libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam ut urna efficitur, congue arcu id, porttitor est. Integer luctus scelerisque eros nec tincidunt.",
    },
    {
      question: "What if I miss a live Q&A session?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada aliquam eros, et finibus justo congue vitae. Nunc interdum magna leo, id vehicula tellus tincidunt ac. Vestibulum condimentum enim quis commodo commodo. Suspendisse vitae viverra purus. Nulla facilisi. Fusce et aliquam nisl, vel maximus justo. Vestibulum auctor sodales massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam, nunc eu dignissim posuere, tortor lectus faucibus sapien, at finibus est quam ut nibh. Fusce tortor eros, tincidunt at urna quis, vestibulum viverra libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam ut urna efficitur, congue arcu id, porttitor est. Integer luctus scelerisque eros nec tincidunt.",
    },
    {
      question: "Is there any prerequisite knowledge needed?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada aliquam eros, et finibus justo congue vitae. Nunc interdum magna leo, id vehicula tellus tincidunt ac. Vestibulum condimentum enim quis commodo commodo. Suspendisse vitae viverra purus. Nulla facilisi. Fusce et aliquam nisl, vel maximus justo. Vestibulum auctor sodales massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam, nunc eu dignissim posuere, tortor lectus faucibus sapien, at finibus est quam ut nibh. Fusce tortor eros, tincidunt at urna quis, vestibulum viverra libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam ut urna efficitur, congue arcu id, porttitor est. Integer luctus scelerisque eros nec tincidunt.",
    },
    {
      question: "What support will I receive during the Masterclass?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada aliquam eros, et finibus justo congue vitae. Nunc interdum magna leo, id vehicula tellus tincidunt ac. Vestibulum condimentum enim quis commodo commodo. Suspendisse vitae viverra purus. Nulla facilisi. Fusce et aliquam nisl, vel maximus justo. Vestibulum auctor sodales massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam, nunc eu dignissim posuere, tortor lectus faucibus sapien, at finibus est quam ut nibh. Fusce tortor eros, tincidunt at urna quis, vestibulum viverra libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam ut urna efficitur, congue arcu id, porttitor est. Integer luctus scelerisque eros nec tincidunt.",
    },
    {
      question:
        "How does the project submission process work for certification?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada aliquam eros, et finibus justo congue vitae. Nunc interdum magna leo, id vehicula tellus tincidunt ac. Vestibulum condimentum enim quis commodo commodo. Suspendisse vitae viverra purus. Nulla facilisi. Fusce et aliquam nisl, vel maximus justo. Vestibulum auctor sodales massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam, nunc eu dignissim posuere, tortor lectus faucibus sapien, at finibus est quam ut nibh. Fusce tortor eros, tincidunt at urna quis, vestibulum viverra libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam ut urna efficitur, congue arcu id, porttitor est. Integer luctus scelerisque eros nec tincidunt.",
    },
    {
      question: "Can I access the course content after completion?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada aliquam eros, et finibus justo congue vitae. Nunc interdum magna leo, id vehicula tellus tincidunt ac. Vestibulum condimentum enim quis commodo commodo. Suspendisse vitae viverra purus. Nulla facilisi. Fusce et aliquam nisl, vel maximus justo. Vestibulum auctor sodales massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam, nunc eu dignissim posuere, tortor lectus faucibus sapien, at finibus est quam ut nibh. Fusce tortor eros, tincidunt at urna quis, vestibulum viverra libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam ut urna efficitur, congue arcu id, porttitor est. Integer luctus scelerisque eros nec tincidunt.",
    },
  ],
};

export default function Faq({ props }: { props: Props }) {
  const { title, items } = { ...BASE_PROPS, ...props };

  return (
    <div class="w-full h-full bg-black">
      <div class="py-8 md:py-10 lg:py-20 px-4 container">
        <div class="lg:w-[80%] lg:mx-auto">
          <FaqTitle title={title ? title : "FAQs"} />

          {items.map((item, index) => (
            <Dropdown
              question={item.question}
              answer={item.answer}
              position={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
