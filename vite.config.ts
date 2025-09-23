import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      plugins: [react()],
      // Static base for GitHub Pages. Change this to match your repository name.
      // Example: https://<user>.github.io/<repo>/
      base: mode === 'production' ? '/simple-portfolio-site-demo/' : '/',
      build: {
        outDir: 'docs',
        assetsDir: 'assets',
        emptyOutDir: true,
      },
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
