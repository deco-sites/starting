import { asset } from "$fresh/runtime.ts";

export interface ChallengeProps {
  title: string;

  /** @format html */
  description?: string;
}

export default function Challenge(
  { title, description }: ChallengeProps,
) {
  return (
    <div
      class="w-full bg-[#0A2121] bg-cover"
      style={{ backgroundImage: `url(${asset("/BackgroundChallenge.png")})` }}
    >
      <div class="xl:container xl:mx-auto mx-5 md:mx-10 flex flex-col md:flex-row py-6 md:py-12 items-center">
        <div class="font-semibold text-[#FFFFFF] text-[40px] md:text-[60px] lg:text-[80px] text-center">
          {title}
        </div>
        <div class="flex flex-col items-start bg-[#EFF0F0] text-[#0D1717] p-2 px-4 gap-2 md:px-6 md:gap-4 h-max md:w-[80%]">
          {description && (
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
          )}
        </div>
      </div>
    </div>
  );
}
