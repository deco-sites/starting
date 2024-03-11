import type { HTMLWidget } from "apps/admin/widgets.ts";

export interface Props {
  title: HTMLWidget;
}

const DEFAULT_TEXT =
  '<p><span style="font-size: 36pt;" data-mce-style="font-size: 36pt;"><strong>Rich Text</strong></span></p><p><span style="font-size: 24pt;" data-mce-style="font-size: 24pt;"><strong>Rich Text</strong></span></p><p><span style="font-size: 18pt;" data-mce-style="font-size: 18pt;"><strong>Rich Text</strong></span></p><p><span style="font-size: 14pt;" data-mce-style="font-size: 14pt;"><strong>Rich Text</strong></span></p>';

export default function HowItWorks(
  { title = DEFAULT_TEXT }: Props,
) {
  return (
    <section class="relative py-20 max-w-screen">
      <div class="mx-6 lg:container lg:mx-auto flex justify-center items-center flex-col gap-20">
        <h2
          class="font-medium text-white text-[36px] lg:text-[72px] leading-[100%] text-center max-w-4xl z-10"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        {/* Enroll Card */}
        <div className="w-[1280px] h-[625px] flex justify-center items-center gap-16">
          <div className="p-16 bg-[#000D0D] rounded-3xl flex-col justify-start items-center gap-10 flex">
            <h3 className="text-white text-[40px] font-semibold font-['Albert Sans'] leading-4">
              Challenge Timeline
            </h3>
            <div className="divider" />

            <div>
              <p>
                Every 2 fridays we will announce a new Theme on Discord,
                sparking a 12-day marathon of design and development. It's your
                time to think, innovate, and execute. Example of themes:
              </p>
              <br />
              <p>
                ”Back to School": 🎒✏️ "Transform classroom boredom into a
                digital adventure! Create an educational portal where learning
                is as fun as playing a game. Bonus for interactivity and designs
                that make students forget they're studying!"
              </p>
              <br />
              <p>
                "Carnival": 🎉🎭 "Samba, glitter, and bytes! Develop a website
                for a virtual carnival parade where the joy is contagious and
                the design is more colorful than a parade at Sapucaí. Surprise
                with effects that make everyone want to dance!"
              </p>
            </div>
            <div>
              <h4>
                Showcase Your Masterpiece
              </h4>
              <p>
                Submit your landing page creation in the dedicated
                #landing-page-contest channel on Discord by the deadline.

                Ensure your submission stands out in 3 evaluation criterias:
                creativity, performance, and design.

                Our team will then select the top 3 landing pages submitted and
                the community will decide who should win the 1st, 2nd and 3rd
                places.
              </p>
            </div>

            <a
              href="https://discord.com/channels/985687648595243068/1215655908630208512"
              target="_blank"
              className="px-8 py-3 absolute bottom-[56px] bg-[#02F67C] rounded-full justify-start items-center gap-2 inline-flex"
            >
              <span className="text-black text-xl font-medium font-['Albert Sans']">
                Enroll now on Landing Page Contest
              </span>
            </a>
          </div>
        </div>
        {/* Enroll Card Final */}
      </div>
    </section>
  );
}
