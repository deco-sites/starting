import { asset } from "$fresh/runtime.ts";
import Icon from "site/components/ui/Icon.tsx";

export function JoinDiscordCTA({
  label,
  buttonLabel,
}: {
  label: string;
  buttonLabel: string;
}) {
  return (
    <div class="w-full relative flex justify-between overflow-hidden bg-decorative-three-900 rounded-2xl text-base-700 p-4">
      <div class="flex flex-col h-full justify-between items-start gap-4">
        <span class="lg:text-[20px] font-semibold">{label}</span>
        <a 
          class="flex text-sm gap-2 px-4 py-2 items-center text-white bg-base-700 rounded-[500px]" 
          href="https://deco.cx/discord"
          target="_blank"
        >
          <Icon id="DiscordButton" size={16} />
          <span>{buttonLabel}</span>
          <Icon id="ArrowRight" size={16} />
        </a>
      </div>
      <img class="absolute right-0 bottom-0 h-[80px] lg:h-[110px]" src={asset('/docs/capybara.png')} alt="" />
    </div>
  );
}
