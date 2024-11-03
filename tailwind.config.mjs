import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "var(--darkest)",
        foreground: "var(--white)",
        accent: "var(--accent)",
        white: "var(--white)",
        darkest: "var(--darkest)",
        darker: "var(--darker)",
        dark: "var(--dark)",
        light: "var(--light)",
        lighter: "var(--lighter)",
        lightest: "var(--lightest)",
        blurred: "var(--blurred)",
        accenttransparent: "var(--accent-transparent)",
        blob: "var(--blob)",
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