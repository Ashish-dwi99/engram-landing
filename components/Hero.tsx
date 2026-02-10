import React from 'react';
import { BackgroundMeteors } from './scrollx/BackgroundMeteors';
import { AnimatedButton } from './scrollx/AnimatedButton';

export const Hero: React.FC = () => {
  return (
    <section id="platform" className="relative">
      <BackgroundMeteors className="min-h-[70vh] flex items-center justify-center px-6 md:px-12 pt-24 pb-24 text-center">
        <div className="max-w-4xl w-full mx-auto flex flex-col items-center">
          <p className="text-[11px] uppercase tracking-[0.35em] text-gray-400 mb-6 text-center">
            Personal Memory Kernel for AI Agents
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-gray-900 mb-6 text-center">
            One memory store.
            <br />
            Every agent, personalized.
          </h1>
          <p className="text-sm md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10 text-center">
            A user-owned memory kernel any agent can plug into.
            Scoped reads, staged writes, biological forgetting.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <AnimatedButton className="bg-black text-white hover:bg-gray-900" glow asChild>
              <a href="/docs/">View docs</a>
            </AnimatedButton>
            <a
              href="https://github.com/Ashish-dwi99/Engram/"
              className="px-6 py-3 rounded-sm text-sm font-semibold border border-black/15 text-gray-600 hover:text-gray-900 hover:border-black/40 transition-all"
            >
              View GitHub
            </a>
          </div>
          <p className="mt-10 text-xs text-gray-400">
            100% free, forever. Bring your own API key. MCP‑native for Claude Code, Cursor, and Codex.
          </p>
        </div>
      </BackgroundMeteors>
    </section>
  );
};
