const neutralPalette = {
  50: '#fafafa',
  100: '#f4f4f5',
  200: '#e4e4e7',
  300: '#d4d4d8',
  400: '#a1a1aa',
  500: '#71717a',
  600: '#52525b',
  700: '#3f3f46',
  800: '#27272a',
  900: '#18181b',
  950: '#09090b',
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: neutralPalette,
        accent: neutralPalette,
        neutral: neutralPalette,
        white: '#fafafa',
        black: '#09090b',
        blue: neutralPalette,
        indigo: neutralPalette,
        purple: neutralPalette,
        slate: neutralPalette,
        amber: neutralPalette,
        rose: neutralPalette,
        red: neutralPalette,
        green: neutralPalette,
        yellow: neutralPalette,
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
        primary: '#3f3f46',
        'primary-focus': '#27272a',
        secondary: '#71717a',
        accent: '#52525b',
        neutral: '#18181b',
        'base-100': '#f4f4f5',
        'base-200': '#e4e4e7',
        'base-300': '#d4d4d8',
        '--rounded-box': '1rem',
        '--rounded-btn': '0.75rem',
      },
    },
  ],
  darkTheme: 'dark',
}
