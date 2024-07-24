export interface Location {
  title: string;
  text: string;
}

export interface Props {
  sentTitle: string;

  sentText: string;

  locationInfo: Location[];
}

export default function SentState({
  sentTitle,
  sentText,
  locationInfo,
}: Props) {
  return (
    <div class="flex flex-col gap-8">
      <h2
        class="text-5xl md:text-5xl italic"
        style="font-family: 'Playfair Display'"
        dangerouslySetInnerHTML={{ __html: sentTitle }}
      />
      <p class="text-md md:text-lg" dangerouslySetInnerHTML={{ __html: sentText }} />
      <div class="flex flex-col gap-3 border-y border-[#949E9E] py-8">
        {locationInfo.map((location) => (
          <div class="flex flex-col gap-1">
            <span
              class="text-[#27AE6B] txt-xl font-bold"
              style="font-family: 'Playfair Display'"
            >
              {location.title}
            </span>
            <p class="text-lg">{location.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
