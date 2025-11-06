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
        // Primary colors - Modern Agricultural Green
        primary: {
          DEFAULT: '#2A5434',
          hover: '#1E3A26',
          active: '#152918',
          light: '#4B8B3B',
          lighter: '#6BC77D',
          dark: '#1A3220',
          medium: '#3A7D44',
        },
        // Accent colors - Technology & Innovation
        accent: {
          tech: '#00D4AA',
          innovation: '#00B894',
          data: '#00CEC9',
          ai: '#6C5CE7',
          // Earth Accents
          earth: '#8B7355',
          soil: '#6F4E37',
          wheat: '#F4E04D',
          harvest: '#FF8C42',
          // Keep old ones for compatibility
          turquoise: '#00C9A7',
          cyan: '#4ECDC4',
          teal: '#1A936F',
          blue: '#2E86DE',
          purple: '#5F27CD',
          orange: '#FF6348',
          yellow: '#FFC312',
        },
        // Neutral colors - Professional Grays
        neutral: {
          white: '#FFFFFF',
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          black: '#0A0A0A',
          // Keep old ones for compatibility
          offwhite: '#FAF9F6',
          lightgray: '#E8E8E8',
          gray: '#95A5A6',
          darkgray: '#2C3E50',
          mediumgray: '#5A6C7D',
          placeholder: '#95A5A6',
        },
        // Semantic colors - Status & Feedback
        status: {
          success: '#10B981',
          'success-light': '#34D399',
          'success-dark': '#059669',
          'success-bg': '#D1FAE5',
          error: '#EF4444',
          'error-light': '#F87171',
          'error-dark': '#DC2626',
          'error-bg': '#FEE2E2',
          warning: '#F59E0B',
          'warning-light': '#FCD34D',
          'warning-dark': '#D97706',
          'warning-bg': '#FEF3C7',
          info: '#3B82F6',
          'info-light': '#60A5FA',
          'info-dark': '#2563EB',
          'info-bg': '#DBEAFE',
        },
      },
      backgroundImage: {
        'gradient-earth': 'linear-gradient(135deg, #2A5434 0%, #6BC77D 100%)',
        'gradient-tech': 'linear-gradient(135deg, #00D4AA 0%, #00B894 100%)',
        'gradient-hero': 'linear-gradient(180deg, rgba(42,84,52,0.9) 0%, rgba(0,212,170,0.8) 100%)',
        'gradient-overlay-dark': 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
        'gradient-overlay-light': 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 100%)',
        // Keep old ones for compatibility
        'gradient-primary': 'linear-gradient(135deg, #2A5434 0%, #3A7D44 100%)',
        'gradient-accent': 'linear-gradient(135deg, #1A936F 0%, #00C9A7 100%)',
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
