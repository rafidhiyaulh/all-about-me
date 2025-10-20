import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // When deploying to GitHub Pages under a repo (username.github.io/repo),
  // set the base to the repo path so assets are referenced correctly.
  base: '/all-about-me/',
  build: {
    outDir: 'docs'
  },
  server: {
    port: 3000,
    host: true
  }
})
