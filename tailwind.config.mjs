import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background_base: "var(--background-base)",
        background_surface: "var(--background-surface)",
        background_elevated: "var(--background-elevated)",
        text_base: "var(--text-base)",
        text_muted: "var(--text-muted)",
        text_subtle: "var(--text-subtle)",
        accent_purple: "var(--accent-purple)",
        accent_blue: "var(--accent-blue)",
        accent_cyan: "var(--accent-cyan)",
        accent_teal: "var(--accent-teal)",
        accent_green: "var(--accent-green)",
        accent_yellow: "var(--accent-yellow)",
        accent_orange: "var(--accent-orange)",
        accent_red: "var(--accent-red)",
        accent_purple_transparent: "var(--accent-purple-transparent)",
        accent_blue_transparent: "var(--accent-blue-transparent)",
        accent_cyan_transparent: "var(--accent-cyan-transparent)",
        accent_teal_transparent: "var(--accent-teal-transparent)",
        accent_green_transparent: "var(--accent-green-transparent)",
        accent_yellow_transparent: "var(--accent-yellow-transparent)",
        accent_orange_transparent: "var(--accent-orange-transparent)",
        accent_red_transparent: "var(--accent-red-transparent)",
      },
    },
    fontFamily: {
      sans: ["'Inter Variable'", ...defaultTheme.fontFamily.sans],
      mono: ["'JetBrains Mono'", ...defaultTheme.fontFamily.mono],
      special: ["'Allison'", ...defaultTheme.fontFamily.sans],
      serif: ["'Roboto Slab Variable'", ...defaultTheme.fontFamily.serif],
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        code: {
          counterReset: "step",
        },
        "code > .line:not(:last-child)::before": {
          content: "counter(step)",
          counterIncrement: "step",
          width: "1rem",
          marginRight: "1.5rem",
          display: "inline-block",
          textAlign: "right",
          color: "rgba(115, 138, 148, .4)",
        },
      });
    },
  ],
};
