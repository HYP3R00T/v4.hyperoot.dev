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


const project = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        tags: z.array(z.string()),
        githubRepo: z.string(), // format: "username/repo"
        draft: z.boolean().default(false)
    })
});

export const collections = { article, project };
