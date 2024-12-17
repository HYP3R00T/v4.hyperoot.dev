import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bg_base: "var(--bg-base)",
        bg_surface: "var(--bg-surface)",
        bg_elevated: "var(--bg-elevated)",
        fg_base: "var(--fg-base)",
        fg_alternate: "var(--fg-alternate)",
        fg_muted: "var(--fg-muted)",
        accent: "var(--accent)",
        accenttransparent: "var(--accenttransparent)",
      },
    },
    fontFamily: {
      sans: ["'Inter Variable'", ...defaultTheme.fontFamily.sans],
      mono: ["'JetBrains Mono'", ...defaultTheme.fontFamily.mono],
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
