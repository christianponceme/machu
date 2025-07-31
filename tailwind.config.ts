import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#2e4536",
          50: "#f0f4f1",
          100: "#dce6df",
          200: "#b9cdc0",
          300: "#96b4a1",
          400: "#739b82",
          500: "#508263",
          600: "#2e4536",
          700: "#253a2b",
          800: "#1c2e20",
          900: "#132315",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#d68e28",
          50: "#fdf8f0",
          100: "#faf0e1",
          200: "#f5e1c3",
          300: "#f0d2a5",
          400: "#ebc387",
          500: "#e6b469",
          600: "#d68e28",
          700: "#b8771f",
          800: "#9a6016",
          900: "#7c490d",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "#f7f5dd",
          50: "#fefefe",
          100: "#fdfdfc",
          200: "#fbfbf9",
          300: "#f9f9f6",
          400: "#f7f7f3",
          500: "#f7f5dd",
          600: "#f0edc4",
          700: "#e9e5ab",
          800: "#e2dd92",
          900: "#dbd579",
          foreground: "hsl(var(--accent-foreground))",
        },
        light: {
          DEFAULT: "#ffecba",
          50: "#fffef9",
          100: "#fffdf3",
          200: "#fffbe7",
          300: "#fff9db",
          400: "#fff7cf",
          500: "#ffecba",
          600: "#ffe49e",
          700: "#ffdc82",
          800: "#ffd466",
          900: "#ffcc4a",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
