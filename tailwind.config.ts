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
        // Primary colors - Deep Green (Enhanced contrast)
        primary: {
          DEFAULT: '#2D5016',
          dark: '#1F3810',
          medium: '#3A7D44',
          light: '#4A9D5F',
          lighter: '#6BC77D',
        },
        // Secondary colors - Earth tones
        earth: {
          brown: '#8B7355',
          terra: '#A0826D',
          cream: '#D4C5B9',
        },
        // Accent colors - Technology (Expanded)
        accent: {
          turquoise: '#00C9A7',
          cyan: '#4ECDC4',
          teal: '#1A936F',
          blue: '#2E86DE',
          purple: '#5F27CD',
          orange: '#FF6348',
          yellow: '#FFC312',
        },
        // Neutral colors (Better contrast)
        neutral: {
          white: '#FFFFFF',
          offwhite: '#FAF9F6',
          lightgray: '#E8E8E8',
          gray: '#95A5A6',
          darkgray: '#2C3E50',
          mediumgray: '#5A6C7D',
          placeholder: '#95A5A6',
          black: '#1A1A1A',
        },
        // Status colors (Enhanced)
        status: {
          success: '#27AE60',
          'success-dark': '#1E8449',
          error: '#E74C3C',
          'error-dark': '#C0392B',
          warning: '#F39C12',
          'warning-dark': '#D68910',
          info: '#3498DB',
          'info-dark': '#2874A6',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #2D5016 0%, #3A7D44 100%)',
        'gradient-accent': 'linear-gradient(135deg, #1A936F 0%, #00C9A7 100%)',
        'gradient-hero': 'linear-gradient(135deg, #2D5016 0%, #1A936F 100%)',
        'gradient-warm': 'linear-gradient(135deg, #FF6348 0%, #FFC312 100%)',
        'gradient-cool': 'linear-gradient(135deg, #2E86DE 0%, #4ECDC4 100%)',
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
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class', // only style forms with explicit classes
    }),
  ],
}
export default config
