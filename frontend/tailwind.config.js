/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": {
          DEFAULT: "hsl(215, 90%, 55%)",
          foreground: "hsl(210, 40%, 98%)",
        },
        "background": "hsl(0, 0%, 0%)",
        "foreground": "hsl(210, 40%, 98%)",
        "card": {
          DEFAULT: "hsl(0, 0%, 4%)",
          foreground: "hsl(210, 40%, 98%)",
        },
        "muted": {
          DEFAULT: "hsl(215, 10%, 15%)",
          foreground: "hsl(215, 20%, 65%)",
        },
        "input": "hsl(215, 10%, 15%)",
        "ring": "hsl(215, 90%, 60%)",
        "border": "hsl(215, 10%, 20%)",
        "brand-blue": "hsl(215, 100%, 50%)",
      },
      fontFamily: {
        "display": ["Plus Jakarta Sans", "Noto Sans", "sans-serif"],
        "mono": ["Fira Code", "monospace"],
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "sm": "0.375rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      animation: {
        'gradient-pan': 'gradient-pan 15s ease infinite',
      },
      keyframes: {
        'gradient-pan': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      }
    },
  },
  plugins: [],
}
