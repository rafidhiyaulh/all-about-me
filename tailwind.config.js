/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace']
      }
    },
  },
  plugins: [require('daisyui')],
}

// DaisyUI config
module.exports.daisyui = {
  themes: [
    {
      rafi: {
        primary: '#4f46e5',
        'primary-focus': '#4338ca',
        secondary: '#8b5cf6',
        accent: '#d946ef',
        neutral: '#111827',
        'base-100': '#ffffff',
        '--rounded-box': '1rem',
        '--rounded-btn': '0.75rem',
      },
    },
  ],
  darkTheme: 'dark',
}
