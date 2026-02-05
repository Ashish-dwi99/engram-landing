
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
          Bio‑inspired memory, not a key‑value store
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed">
          Modeled on how human memory actually works: decay, consolidation, and multi‑path recall.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          title="Adaptive Retention (FadeMem)"
          description="Memories follow an Ebbinghaus decay curve — unused facts fade, frequently accessed ones promote to long‑term storage automatically."
          icon={(
            <svg width="38" height="38" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="20" cy="8" rx="10" ry="3" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              <ellipse cx="20" cy="14" rx="10" ry="3" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              <ellipse cx="20" cy="20" rx="10" ry="3" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              <ellipse cx="20" cy="26" rx="10" ry="3" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              <ellipse cx="20" cy="32" rx="10" ry="3" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            </svg>
          )}
        />

        <FeatureCard
          title="Echo Encoding (EchoMem)"
          description="Each memory is encoded as keywords, paraphrases, implications, and question forms — so your agent finds it no matter how the query is phrased."
          icon={(
            <svg width="38" height="38" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="6" cy="6" r="1.5" fill="currentColor"/>
              <circle cx="14" cy="6" r="1.5" fill="currentColor"/>
              <circle cx="22" cy="6" r="1.5" fill="currentColor"/>
              <circle cx="30" cy="6" r="1.5" fill="currentColor"/>
              <circle cx="6" cy="14" r="1.5" fill="currentColor"/>
              <circle cx="14" cy="14" r="1.5" fill="currentColor"/>
              <circle cx="22" cy="14" r="1.5" fill="currentColor"/>
              <circle cx="30" cy="14" r="1.5" fill="currentColor"/>
              <circle cx="6" cy="22" r="1.5" fill="currentColor"/>
              <circle cx="14" cy="22" r="1.5" fill="currentColor"/>
              <circle cx="22" cy="22" r="1.5" fill="currentColor"/>
              <circle cx="30" cy="22" r="1.5" fill="currentColor"/>
              <circle cx="6" cy="30" r="1.5" fill="currentColor"/>
              <circle cx="14" cy="30" r="1.5" fill="currentColor"/>
              <circle cx="22" cy="30" r="1.5" fill="currentColor"/>
              <circle cx="30" cy="30" r="1.5" fill="currentColor"/>
              <line x1="6" y1="6" x2="30" y2="30" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2"/>
              <line x1="14" y1="6" x2="30" y2="22" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2"/>
              <line x1="6" y1="14" x2="22" y2="30" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2"/>
            </svg>
          )}
        />

        <FeatureCard
          title="Scope‑Aware Sharing"
          description="Memories are scoped by user, agent, connector, or globally — so agents share what they should and isolate what they shouldn't."
          icon={(
            <svg width="38" height="38" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="6" cy="20" r="2" fill="currentColor"/>
              <circle cx="16" cy="12" r="2" fill="currentColor"/>
              <circle cx="26" cy="24" r="2" fill="currentColor"/>
              <circle cx="36" cy="16" r="2" fill="currentColor"/>
              <line x1="6" y1="20" x2="16" y2="12" stroke="currentColor" strokeWidth="1.2"/>
              <line x1="16" y1="12" x2="26" y2="24" stroke="currentColor" strokeWidth="1.2"/>
              <line x1="26" y1="24" x2="36" y2="16" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M6 30H36" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2"/>
              <path d="M6 34H36" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2"/>
              <path d="M16 12L16 30" stroke="currentColor" strokeWidth="0.6" strokeDasharray="1 2"/>
              <path d="M26 24L26 30" stroke="currentColor" strokeWidth="0.6" strokeDasharray="1 2"/>
            </svg>
          )}
        />
      </div>
    </div>
  );
};
