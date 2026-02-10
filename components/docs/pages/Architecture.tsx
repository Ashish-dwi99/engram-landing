import React from 'react';

export const Architecture: React.FC = () => {
  return (
    <section>
      <h1>Architecture</h1>
      <p>
        Engram is a Personal Memory Kernel (PMK) — not just a vector store with an API. It solves
        four problems: switching agents kills your momentum, nobody forgets, agents write with no oversight,
        and memory is just "find similar text." Built on FadeMem and CAST research papers.
      </p>

      <div className="docs-diagram">
        <svg viewBox="0 0 980 850" role="img" aria-label="Engram v2 architecture">
          <defs>
            <linearGradient id="engramStroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4b6cff" />
              <stop offset="100%" stopColor="#37d7b2" />
            </linearGradient>
          </defs>

          {/* Agent Orchestrator */}
          <rect x="110" y="20" width="760" height="60" rx="14" fill="#ffffff" stroke="url(#engramStroke)" strokeWidth="2" />
          <text x="490" y="48" textAnchor="middle" fontSize="15" fontFamily="Space Grotesk, sans-serif" fill="#1a1a1a">
            Agent Orchestrator (Claude Code · Cursor · Codex · Custom)
          </text>

          {/* MCP + REST */}
          <line x1="350" y1="80" x2="350" y2="120" stroke="#9ca3af" strokeWidth="2" />
          <line x1="630" y1="80" x2="630" y2="120" stroke="#9ca3af" strokeWidth="2" />
          <rect x="270" y="120" width="160" height="50" rx="10" fill="#ffffff" stroke="#cbd5f5" />
          <text x="350" y="150" textAnchor="middle" fontSize="13" fontFamily="Space Grotesk, sans-serif" fill="#1a1a1a">MCP Server</text>
          <rect x="550" y="120" width="160" height="50" rx="10" fill="#ffffff" stroke="#cbd5f5" />
          <text x="630" y="150" textAnchor="middle" fontSize="13" fontFamily="Space Grotesk, sans-serif" fill="#1a1a1a">REST API</text>

          {/* Policy Gateway */}
          <line x1="350" y1="170" x2="350" y2="200" stroke="#9ca3af" strokeWidth="2" />
          <line x1="630" y1="170" x2="630" y2="200" stroke="#9ca3af" strokeWidth="2" />
          <line x1="350" y1="200" x2="630" y2="200" stroke="#9ca3af" strokeWidth="2" />
          <line x1="490" y1="200" x2="490" y2="230" stroke="#9ca3af" strokeWidth="2" />
          <rect x="250" y="230" width="480" height="55" rx="12" fill="#f0f0ff" stroke="#8b8bdb" strokeWidth="1.5" />
          <text x="490" y="253" textAnchor="middle" fontSize="14" fontFamily="Space Grotesk, sans-serif" fill="#1a1a1a">Policy Gateway</text>
          <text x="490" y="272" textAnchor="middle" fontSize="11" fontFamily="Manrope, sans-serif" fill="#6c6c6c">Scopes · Masking · Quotas · Capability Tokens · Trust Scores</text>

          {/* Split: Retrieval + Ingestion */}
          <line x1="350" y1="285" x2="350" y2="320" stroke="#9ca3af" strokeWidth="2" />
          <line x1="630" y1="285" x2="630" y2="320" stroke="#9ca3af" strokeWidth="2" />

          {/* Retrieval Engine */}
          <rect x="200" y="320" width="300" height="120" rx="12" fill="#ffffff" stroke="#e5e7eb" />
          <text x="350" y="345" textAnchor="middle" fontSize="13" fontFamily="Space Grotesk, sans-serif" fill="#1a1a1a">Retrieval Engine</text>
          <rect x="220" y="355" width="260" height="30" rx="6" fill="#f9fafb" stroke="#e5e7eb" />
          <text x="350" y="375" textAnchor="middle" fontSize="11" fontFamily="Manrope, sans-serif" fill="#374151">Semantic (hybrid + graph + categories)</text>
          <rect x="220" y="390" width="260" height="30" rx="6" fill="#f9fafb" stroke="#e5e7eb" />
          <text x="350" y="410" textAnchor="middle" fontSize="11" fontFamily="Manrope, sans-serif" fill="#374151">Episodic (CAST scenes)</text>
          <text x="350" y="432" textAnchor="middle" fontSize="10" fontFamily="Manrope, sans-serif" fill="#9ca3af">Intersection promotion: match both → boost</text>

          {/* Ingestion Pipeline */}
          <rect x="530" y="320" width="240" height="120" rx="12" fill="#ffffff" stroke="#e5e7eb" />
          <text x="650" y="345" textAnchor="middle" fontSize="13" fontFamily="Space Grotesk, sans-serif" fill="#1a1a1a">Ingestion Pipeline</text>
          <text x="650" y="370" textAnchor="middle" fontSize="11" fontFamily="Manrope, sans-serif" fill="#374151">Text → Views</text>
          <text x="650" y="390" textAnchor="middle" fontSize="11" fontFamily="Manrope, sans-serif" fill="#374151">Views → Scenes</text>
          <text x="650" y="410" textAnchor="middle" fontSize="11" fontFamily="Manrope, sans-serif" fill="#374151">Scenes → LML</text>
          <text x="650" y="432" textAnchor="middle" fontSize="10" fontFamily="Manrope, sans-serif" fill="#9ca3af">Write Verification: invariants + conflicts</text>

          {/* Storage Row */}
          <line x1="350" y1="440" x2="350" y2="480" stroke="#9ca3af" strokeWidth="2" />
          <line x1="650" y1="440" x2="650" y2="480" stroke="#9ca3af" strokeWidth="2" />

          <rect x="130" y="480" width="230" height="55" rx="10" fill="#ffffff" stroke="#e5e7eb" />
          <text x="245" y="502" textAnchor="middle" fontSize="12" fontFamily="Space Grotesk, sans-serif" fill="#1a1a1a">Staging (SML)</text>
          <text x="245" y="520" textAnchor="middle" fontSize="10" fontFamily="Manrope, sans-serif" fill="#6c6c6c">Proposals · Diffs · Conflict Stash</text>

          <rect x="385" y="480" width="210" height="55" rx="10" fill="#ffffff" stroke="#e5e7eb" />
          <text x="490" y="502" textAnchor="middle" fontSize="12" fontFamily="Space Grotesk, sans-serif" fill="#1a1a1a">Long-Term (LML)</text>
          <text x="490" y="520" textAnchor="middle" fontSize="10" fontFamily="Manrope, sans-serif" fill="#6c6c6c">Canonical Store</text>

          <rect x="620" y="480" width="230" height="55" rx="10" fill="#ffffff" stroke="#e5e7eb" />
          <text x="735" y="502" textAnchor="middle" fontSize="12" fontFamily="Space Grotesk, sans-serif" fill="#1a1a1a">Indexes</text>
          <text x="735" y="520" textAnchor="middle" fontSize="10" fontFamily="Manrope, sans-serif" fill="#6c6c6c">Vector + Graph + Episodic</text>

          {/* Memory Stack */}
          <rect x="130" y="570" width="720" height="260" rx="14" fill="#ffffff" stroke="url(#engramStroke)" strokeWidth="1.5" />
          <text x="180" y="596" fontSize="14" fontFamily="Space Grotesk, sans-serif" fill="#1a1a1a">Memory Kernel Stack</text>

          <rect x="160" y="610" width="660" height="38" rx="8" fill="#f9fafb" stroke="#e5e7eb" />
          <text x="490" y="634" textAnchor="middle" fontSize="11" fontFamily="Manrope, sans-serif" fill="#374151">Knowledge Graph (Entity Extraction & Linking)</text>

          <rect x="160" y="656" width="660" height="38" rx="8" fill="#f9fafb" stroke="#e5e7eb" />
          <text x="490" y="680" textAnchor="middle" fontSize="11" fontFamily="Manrope, sans-serif" fill="#374151">CategoryMem (Dynamic Hierarchical Organization)</text>

          <rect x="160" y="702" width="660" height="38" rx="8" fill="#f9fafb" stroke="#e5e7eb" />
          <text x="490" y="726" textAnchor="middle" fontSize="11" fontFamily="Manrope, sans-serif" fill="#374151">EchoMem (Multi-Modal Encoding — 5 retrieval paths)</text>

          <rect x="160" y="748" width="660" height="38" rx="8" fill="#f9fafb" stroke="#e5e7eb" />
          <text x="490" y="772" textAnchor="middle" fontSize="11" fontFamily="Manrope, sans-serif" fill="#374151">FadeMem (Ebbinghaus Decay · Promotion · Ref-Aware GC)</text>

          <rect x="160" y="794" width="660" height="26" rx="6" fill="#f0f0ff" stroke="#8b8bdb" strokeWidth="1" />
          <text x="490" y="812" textAnchor="middle" fontSize="10" fontFamily="Manrope, sans-serif" fill="#6c6c6c">Embeddings + LLM (Gemini / OpenAI / Ollama) · SQLite + In-memory Vectors</text>
        </svg>
      </div>

      <h2>Key Flows</h2>

      <h3>Read: Query → Context Packet</h3>
      <pre className="docs-code">
        <code>{`Agent calls search_memory or POST /v1/search
  → Policy Gateway enforces scope, quotas, masking
  → Dual retrieval: semantic index + episodic index (parallel)
  → Intersection promotion: results matching in both get boosted
  → Returns Context Packet (token-budgeted, with scene citations)`}</code>
      </pre>

      <h3>Write: Agent Proposal → Staging</h3>
      <pre className="docs-code">
        <code>{`Agent calls propose_write or POST /v1/memories
  → Lands in Staging SML as a Proposal Commit
  → Provenance recorded (agent, time, scope, trust score)
  → Verification runs:
      • Invariant contradiction check → stash if conflict
      • Duplication detection
      • PII risk detection → require manual approval if high
  → High-trust agents: auto-merge
  → Others: wait for user approval or daily digest`}</code>
      </pre>

      <h2>The Memory Stack</h2>

      <h3>FadeMem — Decay & Consolidation</h3>
      <ul>
        <li>Ebbinghaus decay: memories fade based on time and access patterns.</li>
        <li>Dual-layer: short-term (SML, fast decay) → long-term (LML, slow decay).</li>
        <li>Automatic promotion for frequently accessed memories.</li>
        <li>Reference-aware: if other agents still use a memory, it won't be garbage collected.</li>
      </ul>

      <h3>EchoMem — Multi-Modal Encoding</h3>
      <ul>
        <li>Five retrieval paths: raw text, paraphrases, keywords, implications, question forms.</li>
        <li>Importance-based depth: critical info gets 1.6x strength multiplier.</li>
        <li>Re-echo on frequent access strengthens encoding.</li>
      </ul>

      <h3>CategoryMem — Dynamic Organization</h3>
      <ul>
        <li>Categories emerge from content, not predefined.</li>
        <li>Hierarchies up to 3 levels deep, with category decay for unused branches.</li>
      </ul>

      <h3>CAST Scenes — Episodic Narrative</h3>
      <ul>
        <li>Interactions cluster into scenes by three dimensions: time, place, and topic.</li>
        <li>Each scene has characters, a synopsis, and links to extracted semantic memories.</li>
        <li>Dual retrieval boosts results that match both semantically and episodically.</li>
      </ul>

      <h3>Knowledge Graph — Entity Linking</h3>
      <ul>
        <li>Entities extracted from memories and linked across the graph.</li>
        <li>Graph traversal surfaces related facts the agent never explicitly searched for.</li>
      </ul>

      <h3>Handoff Bus — Cross-Agent Continuity</h3>
      <ul>
        <li>When an agent pauses — rate limit, crash, tool switch — it saves a session digest.</li>
        <li>Digest includes: task summary, decisions made, files touched, remaining TODOs, blockers.</li>
        <li>Next agent calls <code>get_last_session</code> and gets the full context. Zero re-explanation.</li>
        <li>Supports lane-based checkpointing for long-running tasks across multiple agents.</li>
      </ul>
      <pre className="docs-code">
        <code>{`Claude Code (rate limited)
  → save_session_digest(task, decisions, files, todos, blockers)

Codex (picks up)
  → get_last_session(repo="/my-project")
  → Gets full context, continues where Claude Code stopped`}</code>
      </pre>
    </section>
  );
};
