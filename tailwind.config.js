/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B4332',
          light: '#2D6A4F',
          dark: '#081C15',
        },
        accent: {
          blue: '#60A5FA',
          gold: '#F59E0B',
        },
        success: '#059669',
        warning: '#D97706',
        error: '#DC2626',
        info: '#3B82F6',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(rgba(27, 67, 50, 0.8), rgba(8, 28, 21, 0.9))',
      },
      spacing: {
        '128': '32rem',
      },
      height: {
        'hero': '600px',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
  safelist: [
    'bg-white',
    'text-white',
    'text-gray-600',
    'text-gray-400',
    'text-gray-300',
    'bg-gray-100',
    'bg-gray-50',
    'border-gray-200',
    'border-gray-100',
    'hover:bg-gray-100',
    'hover:text-white',
    'hover:bg-primary',
    'hover:text-primary',
    'hover:bg-primary-dark',
    'hover:text-primary-dark',
  ],
}
