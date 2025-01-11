import { SITE } from "@/config";
import { defineCollection, z } from "astro:content";

const article = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional().default(false),
      draft: z.boolean().optional().default(false),
      category: z.string(),
      tags: z.array(z.string()).default([""]),
      description: z.string(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
    }),
});

const project = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      altDescription: z.string(),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      tags: z.array(z.string()),
      githubRepo: z.string(), // format: "username/repo"
      documentation: z.string().optional(),
      featured: z.boolean().optional().default(false),
      draft: z.boolean().default(false),
      cover: image().optional(),
      coverAlt: z.string().optional(),
    }),
});

export const collections = { article, project };
