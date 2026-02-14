import React from 'react';
import VenomBeam from './scrollx/VenomBeam';
import { AnimatedButton } from './scrollx/AnimatedButton';

export const CTA: React.FC = () => {
  return (
    <div className="w-full">
      <VenomBeam className="flex items-center justify-center w-full flex-col px-6 md:px-12 py-24 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-gray-900 mb-6">
          Stop re-explaining yourself
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #e8722a 0%, #e85d45 30%, #d4607a 60%, #ff8a2b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            to every agent.
          </span>
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-lg text-gray-600 text-center mb-10">
          <code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-700 text-xs font-mono">pip install engram-memory[all]</code> — set one API key, run engram‑install.
          {' '}<code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-700 text-xs font-mono">pip install engram-bridge[web]</code> for the dashboard.
          32 MCP tools. Automatic routing. Bio‑inspired decay. Staged writes. Cross‑agent handoff. One memory kernel for your entire stack.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <AnimatedButton className="bg-black text-white hover:bg-gray-900" glow asChild>
            <a href="/docs/">View docs</a>
          </AnimatedButton>
          <a
            href="https://github.com/Ashish-dwi99/Engram/"
            className="px-6 py-3 rounded-sm text-sm font-semibold border border-black/15 text-gray-600 hover:text-gray-900 hover:border-black/40 transition-all flex items-center gap-2"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.12-1.5-1.12-1.5-.92-.64.07-.63.07-.63 1.02.07 1.56 1.08 1.56 1.08.9 1.6 2.36 1.14 2.94.87.09-.68.35-1.14.63-1.4-2.22-.26-4.55-1.13-4.55-5.04 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.04a9.28 9.28 0 0 1 2.5-.35c.85 0 1.71.12 2.5.35 1.9-1.32 2.74-1.04 2.74-1.04.56 1.41.21 2.45.11 2.71.64.71 1.02 1.62 1.02 2.73 0 3.92-2.34 4.77-4.57 5.02.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.6.69.49A10.01 10.01 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
            </svg>
            View GitHub
          </a>
        </div>
      </VenomBeam>
    </div>
  );
};
