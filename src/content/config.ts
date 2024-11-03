import { SITE } from "@/config";
import { defineCollection, z } from "astro:content";

const article = defineCollection({
    type: "content",
    schema: z.object({
        author: z.string().default(SITE.author),
        pubDatetime: z.date(),
        modDatetime: z.date().optional().nullable(),
        title: z.string(),
        featured: z.boolean().optional().default(false),
        draft: z.boolean().optional().default(false),
        category: z.string(),
        tags: z.array(z.string()).default([""]),
        description: z.string(),
        heroImage: z.string().optional(),
    }),
});

export const collections = { article };