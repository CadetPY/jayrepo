import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import git

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
