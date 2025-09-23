import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    // Derive repo name for GitHub Pages base path (owner/repo)
    const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
    return {
      plugins: [react()],
      // Ensure asset paths work on GitHub Pages: https://<user>.github.io/<repo>/
      base: mode === 'production' && repo ? `/${repo}/` : '/',
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
