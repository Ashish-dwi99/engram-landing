
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="w-full h-[72px] px-6 md:px-12 flex items-center justify-between sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="flex items-center gap-10">
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="flex items-center justify-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="5" y1="6" x2="26" y2="6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <line x1="9" y1="11" x2="29" y2="11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <line x1="6" y1="16" x2="22" y2="16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <line x1="10" y1="21" x2="30" y2="21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <line x1="4" y1="26" x2="20" y2="26" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </div>
          <span className="font-semibold text-xs tracking-[0.3em] uppercase text-gray-700">Engram</span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-[11px] font-medium text-gray-500 tracking-[0.12em] uppercase">
          <a href="#platform" className="hover:text-black transition-colors">Platform</a>
          <a href="#memory-stack" className="hover:text-black transition-colors">Memory Stack</a>
          <a href="#integrations" className="hover:text-black transition-colors">Integrations</a>
          <a href="#mcp" className="hover:text-black transition-colors">MCP</a>
          <a href="#cloud" className="hover:text-black transition-colors">Cloud</a>
          <a href="/docs/" className="hover:text-black transition-colors">Docs</a>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <a
          href="https://github.com/Ashish-dwi99/Engram/"
          className="text-gray-500 hover:text-black px-3 py-2 border border-black/10 rounded-sm flex items-center gap-2"
          aria-label="Engram GitHub"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.12-1.5-1.12-1.5-.92-.64.07-.63.07-.63 1.02.07 1.56 1.08 1.56 1.08.9 1.6 2.36 1.14 2.94.87.09-.68.35-1.14.63-1.4-2.22-.26-4.55-1.13-4.55-5.04 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.04a9.28 9.28 0 0 1 2.5-.35c.85 0 1.71.12 2.5.35 1.9-1.32 2.74-1.04 2.74-1.04.56 1.41.21 2.45.11 2.71.64.71 1.02 1.62 1.02 2.73 0 3.92-2.34 4.77-4.57 5.02.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.6.69.49A10.01 10.01 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
          </svg>
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase">GitHub</span>
        </a>
        <a
          href="/docs/"
          className="bg-black text-white px-5 py-2 rounded-sm text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-gray-900 transition-colors"
        >
          Read Docs
        </a>
      </div>
    </nav>
  );
};
