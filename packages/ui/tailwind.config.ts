// tailwind config is required for editor support
import type { Config } from "tailwindcss";

const config: Config = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      md: { max: "768px" },
    },

    extend: {
      colors: {
        background: {
          DEFAULT: "hsl(var(--tw-background))",
          muted: "hsl(var(--tw-background-muted))",
        },
        primary: {
          DEFAULT: "hsl(var(--tw-primary))",
          muted: "hsl(var(--tw-primary-muted))",
        },
        disabled: {
          DEFAULT: "hsl(var(--tw-disabled))",
          foreground: "hsl(var(--tw-disabled-foreground))",
        },
        border: "hsl(var(--tw-border))",
        error: "hsl(var(--tw-error))",
      },
      fontFamily: {
        mackinac: ["Mackinac"],
        grotesk: ["Grotesk"],
      },
      maxWidth: {
        content: "1100px",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("completed", "&:where([data-completed])");
      addVariant("progress", "&:where([data-progress])");
    },
  ],
};

export default config;
