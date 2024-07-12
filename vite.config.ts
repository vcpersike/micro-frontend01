import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'microFront01',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/App.tsx',
        './ReactLogo': './src/ReactLogo.tsx',
      },
      shared: ['react', 'react-dom'],
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 3001
  },
  preview: {
    port: 3001
  }
})
