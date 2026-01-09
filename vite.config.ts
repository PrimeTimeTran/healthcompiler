import { defineConfig } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'

import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { componentTagger } from 'lovable-tagger'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: '::',
    port: 8081,
  },
  plugins: [react(), mode === 'development' && componentTagger()].filter(
    Boolean
  ),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
      },
      plugins: [
        visualizer({
          filename: 'dist/stats.html',
          open: true, // automatically opens in browser
          gzipSize: true,
        }),
      ],
    },
  },
}))
