
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
import { Dashboard } from './components/Dashboard';
import { CTA } from './components/CTA';
import { Waitlist } from './components/Waitlist';

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

          {/* <section className="bg-white/75 backdrop-blur-sm border-t border-black/5 py-16">
            <ProofPoints />
          </section> */}

          <section className="bg-white/80 backdrop-blur-sm border-t border-black/5 py-20">
            <Features />
          </section>

          <section id="dashboard" className="bg-white/82 backdrop-blur-sm border-t border-black/5 py-20">
            <Dashboard />
          </section>

          <section id="memory-stack" className="bg-white/85 backdrop-blur-sm border-t border-black/5 py-20">
            <MemoryStack />
          </section>

          <section id="integrations" className="bg-white/90 backdrop-blur-sm border-t border-black/5 py-20">
            <Integrations />
          </section>

          <section id="cloud" className="bg-white/92 backdrop-blur-sm border-t border-black/5 py-20">
            <Waitlist />
          </section>

          <section id="docs" className="bg-[#fdf8f5] py-0">
            <CTA />
          </section>
        </main>

        <footer className="py-10 px-6 text-center text-xs text-gray-400 bg-white/85">
          <div className="max-w-6xl mx-auto border-t border-black/5 pt-6">
            <p>&copy; 2026 Engram. The Personal Memory Kernel for AI Agents.</p>
          </div>
        </footer>
      </div>
      
      <Analytics />
    </div>
  );
}
