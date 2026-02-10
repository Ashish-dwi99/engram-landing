import React from 'react';
import { SpotlightCard } from './scrollx/SpotlightCard';

const StackItem = ({ title, description }: { title: string; description: string }) => (
  <SpotlightCard
    spotlightColor="255, 255, 255"
    className="rounded-2xl border border-black/5 bg-white/85 p-6 shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
  >
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
  </SpotlightCard>
);

export const MemoryStack: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
          The Memory Kernel Stack
        </h2>
        <p className="text-sm text-gray-500 max-w-sm">
          Five layers that encode, organize, link, narrate, and forget — modeled on how human memory actually works.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StackItem
          title="FadeMem — Decay & Consolidation"
          description="Ebbinghaus decay curve. Short‑term memories fade fast; frequently accessed ones promote to long‑term storage. Reference‑aware: if other agents still use a memory, it won't be garbage collected."
        />
        <StackItem
          title="EchoMem — Multi‑Modal Encoding"
          description="Five retrieval paths per memory — raw text, paraphrases, keywords, implications, and question forms. Important memories get deeper processing (1.6x strength). Re‑echo on frequent access."
        />
        <StackItem
          title="CategoryMem — Dynamic Organization"
          description="Categories emerge from content, form hierarchies up to three levels deep, and decay when unused. No manual tagging — the taxonomy evolves as new memories arrive."
        />
        <StackItem
          title="CAST Scenes — Episodic Narrative"
          description="Interactions cluster into scenes by time, place, and topic. Each scene has characters, a synopsis, and links to extracted facts. Dual retrieval boosts results that match both semantically and episodically."
        />
        <StackItem
          title="Knowledge Graph — Entity Linking"
          description="Entities are extracted and linked across memories, enabling graph traversal to surface related facts your agent never explicitly searched for."
        />
      </div>
    </div>
  );
};
