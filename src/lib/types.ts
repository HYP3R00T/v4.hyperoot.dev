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
export interface BaseLayoutProps extends HeadSEOProps {}

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

// Define the type for docs collection
export type ArticleProps = CollectionEntry<"article">;

// For article/[...slug].astro
export interface Heading {
  text: string;
  depth: number;
  slug: string;
}

// For DocsLayout.astro
export interface ArticlePostLayoutProps extends ArticleData {
  headings: Heading[];
}

// ! Anything below this is not needed as of now
// Define the type for docs collection
// export type ArticleProps = CollectionEntry<"article"> & {
//   data: ArticleData;
// };

// Make similar changes to config.ts in content folder
export type ProjectData = {
  title: string;
  description: string;
  date: Date;
  tags: string[];
  githubRepo: string;
  draft: boolean;
};

// Define the type for docs collection
export type ProjectProps = CollectionEntry<"project"> & {
  data: ProjectData;
};

export interface ProjectPostLayoutProps extends ProjectData {
  headings: Heading[];
}

export interface ExperienceProps {
  job_title: string;
  description: string;
  duration: string;
  tags?: string[];
  url: string;
}

export interface ProjectsProps {
  name: string;
  description: string;
  tags?: string[];
  homepage_url: string;
}

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

export interface SideNavItem {
  label: string;
  href: string;
}
