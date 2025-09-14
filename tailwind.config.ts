/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        aladin: ['Aladin', 'sans-serif']
      },
      colors: {
        background: "oklch(1 0 0)",
        foreground: "oklch(0.4 0 0)",
        card: "oklch(0.98 0.02 85)",
        "card-foreground": "oklch(0.4 0 0)",
        popover: "oklch(1 0 0)",
        "popover-foreground": "oklch(0.4 0 0)",
        primary: "oklch(0.55 0.15 85)",
        "primary-foreground": "oklch(1 0 0)",
        secondary: "oklch(0.6 0.2 264)",
        "secondary-foreground": "oklch(1 0 0)",
        muted: "oklch(0.98 0.02 85)",
        "muted-foreground": "oklch(0.5 0 0)",
        accent: "oklch(0.6 0.2 264)",
        "accent-foreground": "oklch(1 0 0)",
        destructive: "oklch(0.577 0.245 27.325)",
        "destructive-foreground": "oklch(0.577 0.245 27.325)",
        border: "oklch(0.9 0.02 85)",
        input: "oklch(0.98 0.02 85)",
        ring: "oklch(0.6 0.2 264 / 0.5)",
        chart1: "oklch(0.646 0.222 41.116)",
        chart2: "oklch(0.6 0.118 184.704)",
        chart3: "oklch(0.398 0.07 227.392)",
        chart4: "oklch(0.828 0.189 84.429)",
        chart5: "oklch(0.769 0.188 70.08)",
        sidebar: "oklch(1 0 0)",
        "sidebar-foreground": "oklch(0.4 0 0)",
        "sidebar-primary": "oklch(0.98 0.02 85)",
        "sidebar-primary-foreground": "oklch(0.4 0 0)",
        "sidebar-accent": "oklch(0.6 0.2 264)",
        "sidebar-accent-foreground": "oklch(1 0 0)",
        "sidebar-border": "oklch(0.9 0.02 85)",
        "sidebar-ring": "oklch(0.6 0.2 264 / 0.5)",
      },
      borderRadius: {
        sm: "calc(0.625rem - 4px)",
        md: "calc(0.625rem - 2px)",
        lg: "0.625rem",
        xl: "calc(0.625rem + 4px)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};
