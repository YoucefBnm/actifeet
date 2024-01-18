import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@libs': path.resolve(__dirname, './src/libs'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@sections': path.resolve(__dirname, './src/sections'),
      '@store': path.resolve(__dirname, './src/store'),
    }
  }
})
