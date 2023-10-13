import Image from "deco-sites/std/components/Image.tsx";

export function AuthorAvatar(author: { name: string; avatar: string }) {
  return (
    <Image
      alt={author.name + " avatar"}
      src={author.avatar}
      class="w-10 h-10 rounded-full"
      width={40}
      height={40}
      loading="eager"
      decoding="async"
      fetchPriority="high"
      preload
    />
  );
}
