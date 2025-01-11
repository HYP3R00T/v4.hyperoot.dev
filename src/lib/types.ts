import type { MarkdownHeading } from "astro";
import type { CollectionEntry } from "astro:content";

// For HeadSEO.astro
export interface HeadSEOProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  contentType: string;
}

// For BaseLayout.astro
export interface BaseLayoutProps extends HeadSEOProps { }

// For FormattedDate.astro
export interface FormattedDateProps {
  date?: Date;
}

// Make similar changes to config.ts in content folder
export type ArticleData = {
  author: string;
  pubDatetime?: Date;
  modDatetime?: Date | null;
  title: string;
  featured: boolean;
  draft: boolean;
  category: string;
  tags: string[];
  description?: string;
  cover?: string;
  coverAlt?: string;
};

// Define the type for article collection
export type ArticleProps = CollectionEntry<"article">;

// For article/[...slug].astro
export interface Heading {
  text: string;
  depth: number;
  slug: string;
}

// For ArticleLayout.astro
export interface ArticlePostLayoutProps extends ArticleData {
  headings: Heading[];
}

// Make similar changes to config.ts in content folder
export type ProjectData = {
  title: string;
  description: string;
  altDescription: string;
  pubDatetime?: Date;
  modDatetime?: Date | null;
  tags: string[];
  githubRepo: string;
  documentation?: string;
  featured: boolean;
  draft: boolean;
  cover?: string;
  coverAlt?: string;
};

// Define the type for project collection
export type ProjectProps = CollectionEntry<"project">;


// For social links (config.ts)
export interface SocialObjects {
  name: string;
  href: string;
  active: boolean;
  linkTitle: string;
}


// For TableofContents.astro
export interface HeadingProps {
  headings: {
    depth: number;
    text: string;
    slug: string;
  }[];
}

// Define heading hierarchy so that we can generate ToC
export interface HeadingHierarchy extends MarkdownHeading {
  subheadings: HeadingHierarchy[];
}
