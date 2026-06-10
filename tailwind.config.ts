import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ["var(--font-syne)", "system-ui", "sans-serif"],
        mono:    ["var(--font-space-mono)", "monospace"],
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
      },
      colors: {
        background:    "var(--background)",
        foreground:    "var(--foreground)",
        muted:         "var(--muted)",
        "muted-light": "var(--muted-light)",
        surface:       "var(--surface)",
        "surface-2":   "var(--surface-2)",
        "surface-3":   "var(--surface-3)",
        border:        "var(--border)",
        "border-hover":"var(--border-hover)",
        cyan: {
          DEFAULT: "var(--cyan)",
          dim:     "var(--cyan-dim)",
          subtle:  "var(--cyan-subtle)",
          glow:    "var(--cyan-glow)",
        },
        purple: {
          DEFAULT: "var(--purple)",
          dim:     "var(--purple-dim)",
          subtle:  "var(--purple-subtle)",
          glow:    "var(--purple-glow)",
        },
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
