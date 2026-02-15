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
            docsQuickstart: path.resolve(__dirname, 'docs/quickstart/index.html'),
            docsDashboard: path.resolve(__dirname, 'docs/dashboard/index.html'),
            docsTaskBoard: path.resolve(__dirname, 'docs/task-board/index.html'),
            docsAgentChat: path.resolve(__dirname, 'docs/agent-chat/index.html'),
            docsCoordination: path.resolve(__dirname, 'docs/coordination/index.html'),
            docsMemoryInspector: path.resolve(__dirname, 'docs/memory-inspector/index.html'),
            docsSdk: path.resolve(__dirname, 'docs/sdk/index.html'),
            docsRestApi: path.resolve(__dirname, 'docs/rest-api/index.html'),
            docsMcp: path.resolve(__dirname, 'docs/mcp-server/index.html'),
            docsHandoff: path.resolve(__dirname, 'docs/handoff/index.html'),
            docsHowMemoryWorks: path.resolve(__dirname, 'docs/how-memory-works/index.html'),
            docsFadem: path.resolve(__dirname, 'docs/fadem/index.html'),
            docsScenes: path.resolve(__dirname, 'docs/scenes/index.html'),
            docsKnowledgeGraph: path.resolve(__dirname, 'docs/knowledge-graph/index.html'),
            docsArchitecture: path.resolve(__dirname, 'docs/architecture/index.html'),
            docsConfiguration: path.resolve(__dirname, 'docs/configuration/index.html'),
            docsSelfHosting: path.resolve(__dirname, 'docs/self-hosting/index.html'),
            docsResearch: path.resolve(__dirname, 'docs/research/index.html'),
          },
        },
      },
    };
});
