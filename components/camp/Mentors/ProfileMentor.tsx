import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import Icon from "$store/components/camp/ui/Icon.tsx";

/**
 * @titleBy type
 */

interface Contact {
  type: "Linkedin" | "Git-hub" | "Twitter";
  href: string;
}

/**
 * @titleBy nameMentor
 */
export interface Props {
  image: {
    src: LiveImage;
    alt: string;
  };
  nameMentor: string;
  profession: string;
  /**
   * @format html
   */
  content: string;
  contacts: Contact[];
}

export default function ProfileMentor({ props }: { props: Props }) {
  const { image, nameMentor, profession, content, contacts } = props;

  return (
    <div class="w-full flex flex-col gap-3 md:w-4/12">
      <Image
        src={image.src}
        alt={image.alt}
        width={200}
        height={200}
        class="xl:max-h-[260px] 2xl:max-h-[330px] object-cover rounded-3xl bordeer border-[5px] border-[#113032] md:w-full md:h-auto"
      >
      </Image>
      <div class="flex flex-col gap-2">
        <h4 class="text-2xl text-primary md:text-[1.4rem] lg:text-2xl">
          {nameMentor}
        </h4>
        <h5 class="text-xl">{profession}</h5>
      </div>
      <span
        class="text-white text-base"
        dangerouslySetInnerHTML={{ __html: content }}
      >
      </span>
      <div class="flex flex-row gap-6">
        {contacts.map((contact) => (
          <a
            href={contact.href}
            class="text-primary hover:opacity-70 duration-300 ease-in-out"
          >
            <Icon id={contact.type} size={32}></Icon>
          </a>
        ))}
      </div>
    </div>
  );
}
