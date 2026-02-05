
import React, { Suspense } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GridLines } from './components/GridLines';
import { Features } from './components/Features';
import { RibbonBackground } from './components/RibbonBackground';
import { ProofPoints } from './components/ProofPoints';
import { MemoryStack } from './components/MemoryStack';
import { Integrations } from './components/Integrations';
import { CTA } from './components/CTA';

export default function App() {
  return (
    <div className="page-shell">
      <div className="ribbon-layer opacity-95">
        <Suspense fallback={null}>
          <RibbonBackground />
        </Suspense>
      </div>

      <GridLines />

      <div className="relative z-10 flex flex-col">
        <Navbar />

        <main className="relative">
          <Hero />

          <section className="bg-white/75 backdrop-blur-sm border-t border-black/5 py-16">
            <ProofPoints />
          </section>

          <section className="bg-white/80 backdrop-blur-sm border-t border-black/5 py-20">
            <Features />
          </section>

          <section id="memory-stack" className="bg-white/85 backdrop-blur-sm border-t border-black/5 py-20">
            <MemoryStack />
          </section>

          <section id="integrations" className="bg-white/90 backdrop-blur-sm border-t border-black/5 py-20">
            <Integrations />
          </section>

          <section id="docs" className="bg-[#f7f7fb] py-0">
            <CTA />
          </section>
        </main>

        <footer className="py-10 px-6 text-center text-xs text-gray-400 bg-white/85">
          <div className="max-w-6xl mx-auto border-t border-black/5 pt-6">
            <p>&copy; 2026 Engram. Memory for agent orchestrators.</p>
          </div>
        </footer>
      </div>
      
      <Analytics />
    </div>
  );
}
