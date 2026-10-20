/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: 'var(--ink)',
        ink2: 'var(--ink2)',
        muted: 'var(--muted)',
        bg: 'var(--bg)',
        panel: 'var(--panel)',
        'panel-alt': 'var(--panel-alt)',
        border: 'var(--border)',
        'border-strong': 'var(--border-strong)',
        brand: 'var(--brand)',
        'brand-fill': 'var(--brand-fill)',
        teal: 'var(--teal)',
        purple: 'var(--purple)',
        yellow: 'var(--yellow)',
        red: 'var(--red)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Segoe UI', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        card: 'var(--shadow)',
        lift: 'var(--shadow-lift)',
      },
    },
  },
  plugins: [],
}
