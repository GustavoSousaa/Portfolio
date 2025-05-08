/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#E5F2FF',
          100: '#CCE4FF',
          200: '#99C9FF',
          300: '#66ADFF',
          400: '#3392FF',
          500: '#0A84FF', // Main primary color
          600: '#0064D0',
          700: '#0049A2',
          800: '#003375',
          900: '#001C47',
        },
        secondary: {
          50: '#F5F5F7',
          100: '#E8E8ED',
          200: '#D1D1DB',
          300: '#B9B9C5',
          400: '#8E8E93', // Main secondary color
          500: '#636366',
          600: '#48484A',
          700: '#3A3A3C',
          800: '#2C2C2E',
          900: '#1C1C1E',
        },
        accent: {
          50: '#FFF4E5',
          100: '#FFE8CC',
          200: '#FFD299',
          300: '#FFBC66',
          400: '#FFA633',
          500: '#FF9F0A', // Main accent color
          600: '#D17D00',
          700: '#A35F00',
          800: '#744400',
          900: '#462900',
        },
        success: {
          50: '#E6F7E6',
          100: '#D1F2D1',
          500: '#34C759', // Main success color
        },
        warning: {
          50: '#FFF9E5',
          100: '#FFF3CC',
          500: '#FFCC00', // Main warning color
        },
        error: {
          50: '#FFE5E5',
          100: '#FFCCCC',
          500: '#FF3B30', // Main error color
        },
      },
      spacing: {
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '12': '48px',
        '16': '64px',
        '24': '96px',
        '32': '128px',
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      },
    },
  },
  plugins: [],
}