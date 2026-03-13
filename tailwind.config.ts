import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          tertiary: "var(--bg-tertiary)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)",
        },
      },
      backgroundImage: {
        'gradient-accent': 'var(--gradient-accent)',
        'glass-gradient': 'var(--glass)',
      },
      boxShadow: {
        'accent-glow': '0 8px 30px rgba(201, 96, 126, 0.25)',
        'soft': '0 2px 20px rgba(45, 34, 38, 0.06)',
        'soft-lg': '0 4px 40px rgba(45, 34, 38, 0.08)',
        'card': '0 1px 3px rgba(45, 34, 38, 0.04), 0 4px 20px rgba(45, 34, 38, 0.04)',
        'card-hover': '0 8px 40px rgba(201, 96, 126, 0.12)',
      },
    },
  },
  plugins: [],
};
export default config;
