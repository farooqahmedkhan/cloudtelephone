import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig( {
  plugins: [vue(), VueDevTools(),
  ],
  resolve: {
    alias: {
      '@': path.resolve( __dirname, './src' ),
      '~': path.resolve( __dirname, './components' ),
    },
  }
} )
