import React from 'react';
import { SpotlightCard } from './scrollx/SpotlightCard';

const integrations = [
  {
    name: 'Claude Code',
    description: 'MCP server + proactive plugin with memory injection hook',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="5" width="22" height="18" rx="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 13h4M8 16h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="21" cy="9" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Cursor',
    description: 'Drop-in MCP config — works instantly',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 6l16 8-7 3-3 7z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M15 17l5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'OpenAI Codex',
    description: 'TOML config for multi-agent workflows',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="14" cy="14" r="3.5" stroke="currentColor" strokeWidth="1.2" />
        <line x1="14" y1="5" x2="14" y2="8" stroke="currentColor" strokeWidth="1.2" />
        <line x1="14" y1="20" x2="14" y2="23" stroke="currentColor" strokeWidth="1.2" />
        <line x1="5" y1="14" x2="8" y2="14" stroke="currentColor" strokeWidth="1.2" />
        <line x1="20" y1="14" x2="23" y2="14" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    name: 'REST API',
    description: 'Session tokens, staged writes, scene search',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 10l-4 4 4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 10l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 6l-4 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'OpenClaw',
    description: 'Shared memory across agent swarms',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="7" cy="20" r="2.5" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="21" cy="20" r="2.5" stroke="currentColor" strokeWidth="1.3" />
        <line x1="14" y1="10.5" x2="7" y2="17.5" stroke="currentColor" strokeWidth="1.1" />
        <line x1="14" y1="10.5" x2="21" y2="17.5" stroke="currentColor" strokeWidth="1.1" />
        <line x1="9.5" y1="20" x2="18.5" y2="20" stroke="currentColor" strokeWidth="1.1" />
      </svg>
    ),
  },
];

const ToolBadge = ({ label }: { label: string }) => (
  <span className="px-2.5 py-1 rounded-md bg-white/10 text-[11px] font-medium text-gray-300 border border-white/5">
    {label}
  </span>
);

export const Integrations: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
          One install. Every agent remembers.
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed max-w-lg mx-auto">
          Run <code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-700 text-xs font-mono">engram-install</code> and
          Engram auto-configures itself for every tool in your stack.
        </p>
      </div>

      {/* Integration cards grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {integrations.map((item) => (
          <SpotlightCard
            key={item.name}
            spotlightColor="255, 255, 255"
            className="group p-5 border border-black/5 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.04)] rounded-2xl hover:shadow-[0_14px_34px_rgba(0,0,0,0.08)] hover:border-black/10 transition-all duration-500"
          >
            <div className="w-12 h-12 mb-4 text-gray-400 group-hover:text-gray-900 flex items-center justify-center border border-black/8 rounded-xl bg-gray-50 group-hover:bg-black group-hover:text-white transition-all duration-500">
              {item.icon}
            </div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.name}</h3>
            <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
          </SpotlightCard>
        ))}
      </div>

      {/* Terminal install card */}
      <div className="rounded-2xl bg-[#0d0d0d] p-6 md:p-8 mb-8 border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
        <div className="flex items-center gap-2 mb-5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
          <span className="ml-3 text-[11px] text-gray-500 font-mono">terminal</span>
        </div>
        <div className="font-mono text-sm leading-loose">
          <div className="text-gray-500">
            <span className="text-green-400">$</span>{' '}
            <span className="text-gray-200">pip install</span>{' '}
            <span className="text-blue-300">"engram[all]"</span>
          </div>
          <div className="text-gray-500">
            <span className="text-green-400">$</span>{' '}
            <span className="text-gray-200">export</span>{' '}
            <span className="text-purple-300">GEMINI_API_KEY</span>
            <span className="text-gray-400">=</span>
            <span className="text-amber-300">"your-key"</span>
          </div>
          <div className="text-gray-500">
            <span className="text-green-400">$</span>{' '}
            <span className="text-gray-200">engram-install</span>
          </div>
          <div className="mt-3 text-gray-500 text-xs leading-relaxed">
            <span className="text-gray-600">{'>'}</span> Configured Claude Code <span className="text-green-400/70">✓</span>
            <br />
            <span className="text-gray-600">{'>'}</span> Configured Claude Desktop <span className="text-green-400/70">✓</span>
            <br />
            <span className="text-gray-600">{'>'}</span> Configured Cursor <span className="text-green-400/70">✓</span>
            <br />
            <span className="text-gray-600">{'>'}</span> Configured OpenAI Codex <span className="text-green-400/70">✓</span>
            <br />
            <span className="text-gray-600">{'>'}</span> Deployed Claude Code plugin <span className="text-green-400/70">✓</span>
          </div>
        </div>
      </div>

      {/* MCP banner */}
      <div id="mcp">
        <SpotlightCard
          spotlightColor="120, 120, 200"
          className="rounded-2xl border border-black/5 bg-white p-8 md:p-10 shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2.5 py-1 rounded-md bg-black text-white text-[10px] font-semibold uppercase tracking-[0.15em]">
                  MCP
                </span>
                <h3 className="text-lg font-semibold text-gray-900">Native protocol, not a wrapper</h3>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed max-w-lg mb-5">
                Engram exposes 14 tools over the Model Context Protocol — including staged writes, scene search,
                and conflict resolution. The Claude Code plugin goes further with a UserPromptSubmit hook that
                injects relevant memories into context before the LLM even sees your message.
              </p>
              <div className="flex flex-wrap gap-2">
                <ToolBadge label="search_memory" />
                <ToolBadge label="propose_write" />
                <ToolBadge label="search_scenes" />
                <ToolBadge label="remember" />
                <ToolBadge label="engram_context" />
                <ToolBadge label="resolve_conflict" />
                <span className="px-2.5 py-1 rounded-md bg-gray-50 text-[11px] font-medium text-gray-400 border border-black/5">
                  + 8 more
                </span>
              </div>
            </div>
            <div className="flex-shrink-0 w-full md:w-auto">
              <div className="rounded-xl bg-gray-50 border border-black/5 p-5 text-center md:text-left">
                <div className="text-4xl font-semibold text-gray-900 mb-1">14</div>
                <div className="text-xs text-gray-400 uppercase tracking-[0.15em] font-medium mb-3">MCP tools</div>
                <div className="flex flex-col gap-1.5 text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    Retrieval: search, scenes, context
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Writes: propose, stage, resolve conflicts
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Lifecycle: decay, stats, remember
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
};
