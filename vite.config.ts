import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        rollupOptions: {
          input: {
            main: path.resolve(__dirname, 'index.html'),
            docs: path.resolve(__dirname, 'docs/index.html'),
            docsInstallation: path.resolve(__dirname, 'docs/installation/index.html'),
            docsSetup: path.resolve(__dirname, 'docs/setup/index.html'),
            docsMcp: path.resolve(__dirname, 'docs/mcp-server/index.html'),
            docsAgents: path.resolve(__dirname, 'docs/agents-integration/index.html'),
            docsArchitecture: path.resolve(__dirname, 'docs/architecture/index.html'),
            docsResearch: path.resolve(__dirname, 'docs/research/index.html'),
            docsReference: path.resolve(__dirname, 'docs/reference/index.html'),
          },
        },
      },
    };
});
