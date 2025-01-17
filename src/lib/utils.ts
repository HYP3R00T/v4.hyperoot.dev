import type { MarkdownHeading } from "astro";
import type { HeadingHierarchy } from "@/lib/types";
import type { CollectionEntry } from "astro:content";
import { SITE } from "@/config";

// Helper function to capitalize the first letter of a string
export const capitalizeFirstLetter = (str: string) => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
};

// create headings for ToC
export function createHeadingHierarchy(headings: MarkdownHeading[]) {
    const topLevelHeadings: HeadingHierarchy[] = [];

    headings.forEach((heading) => {
        const h = {
            ...heading,
            subheadings: [],
        };

        if (h.depth >= 2) {
            topLevelHeadings.push(h);
        } else {
            let parent = topLevelHeadings[topLevelHeadings.length - 1];
            if (parent) {
                parent.subheadings.push(h);
            }
        }
    });

    return topLevelHeadings;
}

export const postFilter = ({ data }: CollectionEntry<"article">) => {
  const isPublishTimePassed =
    Date.now() >
    new Date(data.pubDatetime).getTime() - SITE.scheduledPostMargin;
  return !data.draft && (import.meta.env.DEV || isPublishTimePassed);
};

export const getSortedPosts = (posts: CollectionEntry<"article">[]) => {
  return posts
    .filter(postFilter)
    .sort(
      (a, b) =>
        Math.floor(
          new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000
        ) -
        Math.floor(
          new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000
        )
    );
};