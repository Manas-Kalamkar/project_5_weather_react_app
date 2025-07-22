import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/project_5_weather_react_app/', // ✅ required for GitHub Pages
  plugins: [react() , tailwindcss()],
})
