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
          The{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #e8722a 0%, #e85d45 30%, #d4607a 60%, #ff8a2b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Memory Kernel Stack
          </span>
        </h2>
        <p className="text-sm text-gray-500 max-w-sm">
          Seven layers — decay, consolidation, episodic scenes, active signals, orchestration, trust-gated writes, and cross‑agent handoff. Modeled on neuroscience, built for agents.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StackItem
          title="FadeMem — Decay & Multi‑Trace Dynamics"
          description="Ebbinghaus decay curve with Benna-Fusi multi‑timescale traces. Short‑term memories fade fast; frequently accessed ones consolidate to long‑term. Homeostatic normalization prevents runaway strength. Reference‑aware GC protects memories other agents still use."
        />
        <StackItem
          title="CLS Distillation — Sleep Consolidation"
          description="Complementary Learning Systems theory applied to agent memory. Run the sleep cycle to digest, promote, decay, and GC in one pass. Short‑term patterns distill into stable long‑term knowledge — just like biological sleep."
        />
        <StackItem
          title="CAST Scenes — Episodic Narrative"
          description="Interactions cluster into scenes by time gap, topic shift, and location change. Each scene has characters, a synopsis, and links to extracted facts. Character profiles aggregate across scenes with narrative generation."
        />
        <StackItem
          title="Active Memory — Signal Bus"
          description="Real‑time state, events, and directives with TTL tiers (noise → notable → critical → permanent). Agents broadcast what they're doing right now. Read active signals ordered by priority. Intent‑aware routing picks retrieval path automatically."
        />
        <StackItem
          title="Orchestrator — Semantic Task Routing"
          description="Agents register capabilities as memories. Tasks auto-route via semantic search over capability memories. CAS claim/release prevents conflicts. Coordination events are themselves memories — a searchable audit trail."
        />
        <StackItem
          title="Policy Gateway — Trust & Access Control"
          description="Per‑agent policies clamp capabilities, namespaces, and confidentiality scopes. Trust scoring tracks agent reliability over time — agents earn merge rights as trust grows. Staged writes with conflict detection and resolution."
        />
        <StackItem
          title="Handoff Bus — Cross‑Agent Continuity"
          description="Agent pauses — rate limit, crash, tool switch — it saves a session digest: task, decisions, files touched, TODOs, blockers. Next agent calls get_last_session and picks up where the last one stopped. Zero re‑explanation."
        />
      </div>
    </div>
  );
};
