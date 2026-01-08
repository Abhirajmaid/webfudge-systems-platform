/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './modules/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        brand: {
          primary: '#F5630F',     // RGB(245, 99, 15) - Primary Orange
          dark: '#1A1A1A',        // RGB(26, 26, 26) - Primary Dark
          light: '#FFFAF7',       // RGB(255, 250, 247) - Primary Light
          white: '#FFFFFF',       // Pure White
        },

        // Extended Orange Palette
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#F5630F',  // Primary Brand
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },

        // Yellow/Gold for Gradients
        yellow: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },

        // Dark shades
        dark: {
          DEFAULT: '#1A1A1A',
          50: '#f8f8f8',
          100: '#e8e8e8',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#4d4d4d',
          700: '#333333',
          800: '#262626',
          900: '#1A1A1A',
        },
      },

      // Brand Gradients
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #F5630F 0%, #fb923c 50%, #eab308 100%)',
        'gradient-orange': 'linear-gradient(135deg, #F5630F 0%, #fb923c 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #F5630F 0%, #fdba74 50%, #fde047 100%)',
        'gradient-warm': 'linear-gradient(135deg, #fff7ed 0%, #FFFAF7 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1A1A1A 0%, #262626 100%)',
      },

      // Box Shadows
      boxShadow: {
        'brand': '0 4px 14px 0 rgba(245, 99, 15, 0.25)',
        'brand-lg': '0 10px 40px 0 rgba(245, 99, 15, 0.2)',
        'dark': '0 4px 14px 0 rgba(26, 26, 26, 0.15)',
      },

      // Font Family
      fontFamily: {
        sans: ['Host Grotesk', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        primary: ['Host Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Host Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
