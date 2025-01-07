// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";
import rehypeExternalLinks from "rehype-external-links";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://v4.hyperoot.dev",
  build: {
    format: "file",
  },
  prefetch: true,
  markdown: {
    shikiConfig: {
      theme: "css-variables",
      defaultColor: false,
    },
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
        },
      ],
    ],
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    icon({
      iconDir: "src/assets/icons",
    }),
    pagefind(),
  ],
});
