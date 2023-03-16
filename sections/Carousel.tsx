import CarouselIsland from '../islands/Carousel.tsx';
import type { Image } from "$live/std/ui/types/Image.ts";

export interface Props {
  images: Array<{ title: string; text: string; image: Image; author: Image }>;
}

export default function Carousel({images}: Props) {
  
  return (
    
    <section class="md:bg-white-green">
      <CarouselIsland images={images}></CarouselIsland>
    </section>
  );
}
