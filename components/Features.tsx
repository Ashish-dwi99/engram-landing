
import React from 'react';
import { SpotlightCard } from './scrollx/SpotlightCard';

const FeatureCard = ({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) => (
  <SpotlightCard
    spotlightColor="255, 255, 255"
    className="group p-8 border border-black/5 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.05)] rounded-2xl hover:shadow-[0_18px_40px_rgba(0,0,0,0.07)] transition-all duration-500"
  >
    <div className="w-20 h-20 mb-8 text-gray-900 flex items-center justify-center border border-black/10 rounded-full bg-white group-hover:bg-black group-hover:text-white transition-all duration-500">
      {icon}
    </div>
    <h3 className="text-base font-semibold mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed mb-6">{description}</p>
    {/* <button className="text-[11px] font-semibold uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-3 transition-all text-gray-400 hover:text-gray-700">
      Read more
      <span className="text-base">→</span>
    </button> */}
  </SpotlightCard>
);

export const Features: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 items-end mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
          Agents are untrusted. Memory is yours.
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed">
          Three principles that make Engram a Personal Memory Kernel, not another vector store.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          title="Staged Writes & Verification"
          description="Every agent write is a proposal that lands in staging. Invariant checks, conflict detection, and trust scoring run before anything touches long‑term memory. You control what sticks."
          icon={(
            <svg width="38" height="38" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="6" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              <path d="M14 20l4 4 8-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="6" y1="14" x2="34" y2="14" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2"/>
            </svg>
          )}
        />

        <FeatureCard
          title="Dual Retrieval — Semantic + Episodic"
          description="Queries run against both a semantic index (facts, entities, categories) and an episodic index (CAST scenes by time/place/topic). Results that match in both get boosted."
          icon={(
            <svg width="38" height="38" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="14" cy="20" r="10" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              <circle cx="26" cy="20" r="10" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              <ellipse cx="20" cy="20" rx="4" ry="8" fill="currentColor" fillOpacity="0.1"/>
            </svg>
          )}
        />

        <FeatureCard
          title="All‑But‑Mask Scoping"
          description="Out‑of‑scope queries return structure (time, type, importance) but redact details. Agents can schedule and plan without seeing secrets. Trust scores determine write permissions."
          icon={(
            <svg width="38" height="38" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="16" r="6" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              <path d="M8 34c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              <rect x="12" y="13" width="16" height="6" rx="2" fill="currentColor" fillOpacity="0.15"/>
              <line x1="12" y1="16" x2="28" y2="16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
          )}
        />
      </div>
    </div>
  );
};
