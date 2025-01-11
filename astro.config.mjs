// @ts-check
import { defineConfig } from "astro/config";

import AutoImport from "astro-auto-import";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
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
    AutoImport({
      imports: [
        
        "./src/components/core/Card.astro",

        
      ],
    }),
    mdx(),
    icon({
      iconDir: "src/assets/icons",
    }),
  ],
});
