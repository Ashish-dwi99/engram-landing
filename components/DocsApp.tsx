import React from 'react';
import { DocsLayout } from './docs/DocsLayout';
import { Introduction } from './docs/pages/Introduction';
import { Quickstart } from './docs/pages/Quickstart';
import { DashboardOverview } from './docs/pages/DashboardOverview';
import { TaskBoard } from './docs/pages/TaskBoard';
import { AgentChat } from './docs/pages/AgentChat';
import { Coordination } from './docs/pages/Coordination';
import { MemoryInspector } from './docs/pages/MemoryInspector';
import { PythonSDK } from './docs/pages/PythonSDK';
import { RestAPI } from './docs/pages/RestAPI';
import { McpServer } from './docs/pages/McpServer';
import { AgentHandoff } from './docs/pages/AgentHandoff';
import { HowMemoryWorks } from './docs/pages/HowMemoryWorks';
import { FadeMemPage } from './docs/pages/FadeMemPage';
import { EpisodicScenes } from './docs/pages/EpisodicScenes';
import { KnowledgeGraph } from './docs/pages/KnowledgeGraph';
import { Architecture } from './docs/pages/Architecture';
import { Configuration } from './docs/pages/Configuration';
import { SelfHosting } from './docs/pages/SelfHosting';
import { Research } from './docs/pages/Research';

const routes: Record<string, { key: string; component: React.ReactNode }> = {
  '': { key: 'introduction', component: <Introduction /> },
  docs: { key: 'introduction', component: <Introduction /> },
  introduction: { key: 'introduction', component: <Introduction /> },
  quickstart: { key: 'quickstart', component: <Quickstart /> },
  dashboard: { key: 'dashboard', component: <DashboardOverview /> },
  'task-board': { key: 'task-board', component: <TaskBoard /> },
  'agent-chat': { key: 'agent-chat', component: <AgentChat /> },
  coordination: { key: 'coordination', component: <Coordination /> },
  'memory-inspector': { key: 'memory-inspector', component: <MemoryInspector /> },
  sdk: { key: 'sdk', component: <PythonSDK /> },
  'rest-api': { key: 'rest-api', component: <RestAPI /> },
  'mcp-server': { key: 'mcp-server', component: <McpServer /> },
  handoff: { key: 'handoff', component: <AgentHandoff /> },
  'how-memory-works': { key: 'how-memory-works', component: <HowMemoryWorks /> },
  fadem: { key: 'fadem', component: <FadeMemPage /> },
  scenes: { key: 'scenes', component: <EpisodicScenes /> },
  'knowledge-graph': { key: 'knowledge-graph', component: <KnowledgeGraph /> },
  architecture: { key: 'architecture', component: <Architecture /> },
  configuration: { key: 'configuration', component: <Configuration /> },
  'self-hosting': { key: 'self-hosting', component: <SelfHosting /> },
  research: { key: 'research', component: <Research /> },
};

export const DocsApp: React.FC = () => {
  const path = typeof window !== 'undefined' ? window.location.pathname : '/docs/';
  const trimmed = path.replace(/\/$/, '');
  const slug = trimmed.split('/').pop() ?? '';
  const route = routes[slug] ?? routes.docs;

  return <DocsLayout activeKey={route.key}>{route.component}</DocsLayout>;
};
