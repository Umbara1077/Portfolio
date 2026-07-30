import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist',
        // The APK and the marketing videos must stay as standalone files.
        assetsInlineLimit: 0
    }
});
