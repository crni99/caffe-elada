import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'build',
        sourcemap: false,
        rollupOptions: {
            output: {
                manualChunks: {
                    'react-vendor': ['react', 'react-dom', 'react-router-dom'],
                    'i18n': ['i18next', 'react-i18next'],
                }
            }
        }
    },
    server: {
        port: 3000,
        open: false
    }
})