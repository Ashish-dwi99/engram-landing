import React, { useState } from 'react';
import { SpotlightCard } from './scrollx/SpotlightCard';

const tabs = [
  { key: 'board', label: 'Board', src: '/screenshots/board-kanban.png' },
  { key: 'agents', label: 'Agents', src: '/screenshots/coordination-agents.png' },
  { key: 'memory', label: 'Memory', src: '/screenshots/memory-view.png' },
  { key: 'chat', label: 'Chat', src: '/screenshots/chat-view.png' },
] as const;

export const Dashboard: React.FC = () => {
  const [active, setActive] = useState<string>('board');

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
          One dashboard.{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #e8722a 0%, #e85d45 30%, #d4607a 60%, #ff8a2b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Every agent, every task.
          </span>
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed max-w-lg mx-auto">
          Kanban task board, auto-routing, memory inspector, and agent chat — all in one place.
        </p>
      </div>

      {/* Tab switcher */}
      <div className="flex items-center justify-center gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              active === tab.key
                ? 'bg-black text-white shadow-md'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Screenshot display */}
      <SpotlightCard
        spotlightColor="255, 255, 255"
        className="rounded-2xl border border-black/5 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.05)] overflow-hidden"
      >
        <div className="relative w-full aspect-[16/10]">
          {tabs.map((tab) => (
            <img
              key={tab.key}
              src={tab.src}
              alt={`${tab.label} view`}
              className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${
                active === tab.key ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
      </SpotlightCard>

      {/* Quick start prompt */}
      <div className="mt-10 mb-2">
        <p className="text-center text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">
          Get started in 30 seconds
        </p>
      </div>

      {/* Install snippet */}
      <div className="mt-6 max-w-md mx-auto rounded-xl bg-[#0d0d0d] px-5 py-4 border border-white/5 shadow-[0_8px_24px_rgba(0,0,0,0.2)]">
        <div className="font-mono text-xs leading-relaxed">
          <div className="text-gray-500">
            <span className="text-green-400">$</span>{' '}
            <span className="text-gray-200">pip install</span>{' '}
            <span className="text-blue-300">"engram-bridge[web]"</span>
          </div>
          <div className="text-gray-500">
            <span className="text-green-400">$</span>{' '}
            <span className="text-gray-200">engram-bridge</span>{' '}
            <span className="text-amber-300">--channel web</span>
          </div>
          <div className="mt-2 text-gray-600 text-[11px]">
            <span>{'>'}</span> Dashboard at <span className="text-gray-400">http://127.0.0.1:8200</span> <span className="text-green-400/70">✓</span>
          </div>
        </div>
      </div>
    </div>
  );
};
