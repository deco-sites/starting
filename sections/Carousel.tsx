import CarouselIsland from '../islands/Carousel.tsx';
import type { Image } from "$live/std/ui/types/Image.ts";

export interface Props {
  images: Array<{ title: string; text: string; image: Image; author: Image }>;
}

export default function Carousel({images}: Props) {
  
  return (
    
    <section class="relative py-4 md:bg-white-green overflow-hidden">
      <CarouselIsland images={images}></CarouselIsland>
    </section>
  );
}
