
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
  </SpotlightCard>
);

export const Features: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 items-end mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
          Four problems nobody else is solving.
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed">
          Built on FadeMem and CAST — the neuroscience papers that actually explain how memory should work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FeatureCard
          title="Nobody Forgets"
          description="Every memory layer hoards forever. Your context fills with stale facts from months ago. Engram uses the Ebbinghaus decay curve — important stuff gets reinforced, junk fades. 45% less storage, better retrieval."
          icon={(
            <svg width="38" height="38" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 32 Q12 10 20 18 Q28 26 32 8" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
              <circle cx="8" cy="32" r="2" fill="currentColor" fillOpacity="0.3"/>
              <circle cx="32" cy="8" r="2" fill="currentColor" fillOpacity="0.3"/>
            </svg>
          )}
        />

        <FeatureCard
          title="Agents Write With No Oversight"
          description="Connect an agent to a memory layer and it writes whatever it wants. No staging, no approval. Engram treats every write as a proposal. Invariant checks, conflict detection, trust scoring — agents earn merge rights over time."
          icon={(
            <svg width="38" height="38" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="6" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              <path d="M14 20l4 4 8-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="6" y1="14" x2="34" y2="14" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2"/>
            </svg>
          )}
        />

        <FeatureCard
          title="Memory Is Just 'Find Similar Text'"
          description="You're looking for 'that debugging session last Tuesday' — an episode, not a keyword match. Engram clusters interactions into CAST scenes by time, place, and topic. Dual retrieval boosts results that match both semantically and episodically."
          icon={(
            <svg width="38" height="38" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="14" cy="20" r="10" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              <circle cx="26" cy="20" r="10" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              <ellipse cx="20" cy="20" rx="4" ry="8" fill="currentColor" fillOpacity="0.1"/>
            </svg>
          )}
        />

        <FeatureCard
          title="Switching Agents Kills Your Momentum"
          description="Hit a rate limit in Claude Code? Your terminal crashes? You switch to Codex or Cursor and start from zero. Engram's handoff bus saves session digests — decisions, files touched, TODOs. Next agent loads the context and continues where you left off."
          icon={(
            <svg width="38" height="38" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 20h8m0 0l-3-3m3 3l-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M24 20h8m0 0l-3-3m3 3l-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="16" y="12" width="8" height="16" rx="2" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.08"/>
              <line x1="18" y1="17" x2="22" y2="17" stroke="currentColor" strokeWidth="0.8"/>
              <line x1="18" y1="20" x2="22" y2="20" stroke="currentColor" strokeWidth="0.8"/>
              <line x1="18" y1="23" x2="22" y2="23" stroke="currentColor" strokeWidth="0.8"/>
            </svg>
          )}
        />
      </div>
    </div>
  );
};
