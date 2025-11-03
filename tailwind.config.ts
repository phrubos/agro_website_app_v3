import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors - Deep Green
        primary: {
          DEFAULT: '#2D5016',
          dark: '#2D5016',
          medium: '#3A7D44',
          light: '#4A9D5F',
        },
        // Secondary colors - Earth tones
        earth: {
          brown: '#8B7355',
          terra: '#A0826D',
          cream: '#D4C5B9',
        },
        // Accent colors - Technology
        accent: {
          turquoise: '#00C9A7',
          cyan: '#4ECDC4',
          teal: '#1A936F',
        },
        // Neutral colors
        neutral: {
          white: '#FFFFFF',
          offwhite: '#FAF9F6',
          lightgray: '#E8E8E8',
          darkgray: '#2C3E50',
          mediumgray: '#5A6C7D',
          placeholder: '#95A5A6',
        },
        // Status colors
        status: {
          success: '#27AE60',
          error: '#E74C3C',
          warning: '#F39C12',
          info: '#3498DB',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'Inter', 'sans-serif'],
        body: ['Open Sans', 'Roboto', 'sans-serif'],
        accent: ['Merriweather', 'Georgia', 'serif'],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '96px',
      },
    },
  },
  plugins: [],
}
export default config
