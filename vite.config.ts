import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: "./", // ensures correct asset loading on Netlify
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // allows "@/..." imports
    },
  },
})
