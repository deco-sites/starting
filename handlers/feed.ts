import { Handler } from "deco/mod.ts";
import { ConnInfo } from "std/http/server.ts";
import {
  getBlogPath,
  Post,
  PostList,
  SupportedLocales,
} from "deco-sites/starting/components/utils/Blog.ts";

interface Props {
  title: string;
  description: string;
  locale: SupportedLocales;
  list: PostList;
}

function xmlEncode(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function generateItemXML(post: Post, locale: SupportedLocales): string {
  const {
    body,
    date,
    path,
    author,
    authorAvatar = "",
    authorRole = "",
    readTime = "",
    img,
  } = post;

  const pubDate = new Date(date).toUTCString();

  return `
    <item>
      <title>${xmlEncode(body[locale]?.title ?? "")}</title>
      <link>https://deco.cx${getBlogPath(path, locale)}</link>
      <description>${xmlEncode(body[locale]?.descr ?? "")}</description>
      <pubDate>${pubDate}</pubDate>
      <author>${xmlEncode(author)}</author>
      <authorAvatar>${xmlEncode(authorAvatar)}</authorAvatar>
      <authorRole>${xmlEncode(authorRole)}</authorRole>
      <readTime>${xmlEncode(readTime)}</readTime>
      <image>${xmlEncode(img)}</image>
    </item>
  `;
}

export default function BlogRSS({
  title,
  description,
  list,
  locale = "en",
}: Props): Handler {
  return (_req: Request, _ctx: ConnInfo) => {
    const currentDate = new Date().toUTCString();
    const itemsXML = list.posts
      .map((post: Post) => generateItemXML(post, locale))
      .join("\n");

    const rss = `<?xml version="1.0" encoding="UTF-8" ?>
      <rss version="2.0">
        <channel>
          <title>${title}</title>
          <link>https://deco.cx/${locale}/blog</link>
          <description>${description}</description>
          <language>${locale === "en" ? "en-US" : "pt-BR"}</language>
          <lastBuildDate>${currentDate}</lastBuildDate>
          ${itemsXML}
        </channel>
      </rss>`;

    return new Response(rss, {
      headers: {
        "content-type": "text/xml",
      },
    });
  };
}
