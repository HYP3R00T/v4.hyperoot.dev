import type { ProjectProps } from "@/lib/types";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "@/config";

export async function GET(context: { site: any; }) {
    const posts: ProjectProps[] = await getCollection("article");
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: posts.map((post: ProjectProps) => ({
      title: post.data.tile,
      pubDate: post.data.pubDatetime,
      description: post.data.description,
      link: `/article/${post.slug}`,
    })),
    customData: `<language>en-us</language>`,
  });
}
