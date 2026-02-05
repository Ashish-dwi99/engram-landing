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
          The Engram Memory Stack
        </h2>
        <p className="text-sm text-gray-500 max-w-sm">
          Four layers that encode, organize, link, and forget — so your agents carry only what matters.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StackItem
          title="FadeMem"
          description="Short‑term memories decay fast; frequently accessed ones promote to long‑term storage. Contradictions are detected and resolved automatically."
        />
        <StackItem
          title="EchoMem"
          description="Five retrieval paths per memory — raw text, paraphrases, keywords, implications, and question forms — with re‑echo on frequent access."
        />
        <StackItem
          title="CategoryMem"
          description="Categories emerge from content automatically, form hierarchies up to three levels deep, and decay when unused — no manual tagging required."
        />
        <StackItem
          title="Knowledge Graph"
          description="Entities are extracted from memories and linked, enabling graph traversal to find related facts your agent never explicitly searched for."
        />
      </div>
    </div>
  );
};
