import type { MarkdownHeading } from "astro";
import type { HeadingHierarchy } from "@/lib/types";

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