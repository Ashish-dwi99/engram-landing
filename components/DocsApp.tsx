import React from 'react';
import { DocsLayout } from './docs/DocsLayout';
import { Introduction } from './docs/pages/Introduction';
import { Installation } from './docs/pages/Installation';
import { Setup } from './docs/pages/Setup';
import { McpServer } from './docs/pages/McpServer';
import { AgentsIntegration } from './docs/pages/AgentsIntegration';
import { Architecture } from './docs/pages/Architecture';
import { Research } from './docs/pages/Research';
import { Reference } from './docs/pages/Reference';

const routes: Record<string, { key: string; component: React.ReactNode }> = {
  '': { key: 'introduction', component: <Introduction /> },
  docs: { key: 'introduction', component: <Introduction /> },
  introduction: { key: 'introduction', component: <Introduction /> },
  installation: { key: 'installation', component: <Installation /> },
  setup: { key: 'setup', component: <Setup /> },
  'mcp-server': { key: 'mcp-server', component: <McpServer /> },
  'agents-integration': { key: 'agents-integration', component: <AgentsIntegration /> },
  architecture: { key: 'architecture', component: <Architecture /> },
  research: { key: 'research', component: <Research /> },
  reference: { key: 'reference', component: <Reference /> },
};

export const DocsApp: React.FC = () => {
  const path = typeof window !== 'undefined' ? window.location.pathname : '/docs/';
  const trimmed = path.replace(/\/$/, '');
  const slug = trimmed.split('/').pop() ?? '';
  const route = routes[slug] ?? routes.docs;

  return <DocsLayout activeKey={route.key}>{route.component}</DocsLayout>;
};
