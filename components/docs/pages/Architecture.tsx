import React from 'react';

export const Architecture: React.FC = () => {
  return (
    <section>
      <h1>Architecture</h1>
      <p>Engram combines layered memory systems with flexible integration points.</p>

      <div className="docs-diagram">
        <svg viewBox="0 0 980 720" role="img" aria-label="Engram architecture flow chart">
          <defs>
            <linearGradient id="engramStroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4b6cff" />
              <stop offset="100%" stopColor="#37d7b2" />
            </linearGradient>
          </defs>

          <rect x="110" y="30" width="760" height="70" rx="14" fill="#ffffff" stroke="url(#engramStroke)" strokeWidth="2" />
          <text x="490" y="60" textAnchor="middle" fontSize="16" fontFamily="Space Grotesk, sans-serif" fill="#1a1a1a">
            Agent Orchestrator
          </text>
          <text x="490" y="82" textAnchor="middle" fontSize="12" fontFamily="Manrope, sans-serif" fill="#6c6c6c">
            Claude Code · Codex · LangChain · Custom orchestrators
          </text>

          <line x1="490" y1="100" x2="490" y2="130" stroke="#9ca3af" strokeWidth="2" />
          <line x1="260" y1="130" x2="720" y2="130" stroke="#9ca3af" strokeWidth="2" />
          <line x1="260" y1="130" x2="260" y2="170" stroke="#9ca3af" strokeWidth="2" />
          <line x1="490" y1="130" x2="490" y2="170" stroke="#9ca3af" strokeWidth="2" />
          <line x1="720" y1="130" x2="720" y2="170" stroke="#9ca3af" strokeWidth="2" />

          <rect x="180" y="170" width="160" height="60" rx="12" fill="#ffffff" stroke="#cbd5f5" />
          <text x="260" y="205" textAnchor="middle" fontSize="13" fontFamily="Space Grotesk, sans-serif" fill="#1a1a1a">
            Agent 1
          </text>
          <rect x="410" y="170" width="160" height="60" rx="12" fill="#ffffff" stroke="#cbd5f5" />
          <text x="490" y="205" textAnchor="middle" fontSize="13" fontFamily="Space Grotesk, sans-serif" fill="#1a1a1a">
            Agent 2
          </text>
          <rect x="640" y="170" width="160" height="60" rx="12" fill="#ffffff" stroke="#cbd5f5" />
          <text x="720" y="205" textAnchor="middle" fontSize="13" fontFamily="Space Grotesk, sans-serif" fill="#1a1a1a">
            Agent 3
          </text>

          <line x1="260" y1="230" x2="260" y2="260" stroke="#9ca3af" strokeWidth="2" />
          <line x1="490" y1="230" x2="490" y2="260" stroke="#9ca3af" strokeWidth="2" />
          <line x1="720" y1="230" x2="720" y2="260" stroke="#9ca3af" strokeWidth="2" />
          <line x1="260" y1="260" x2="720" y2="260" stroke="#9ca3af" strokeWidth="2" />
          <line x1="490" y1="260" x2="490" y2="300" stroke="#9ca3af" strokeWidth="2" />

          <rect x="120" y="300" width="740" height="310" rx="18" fill="#ffffff" stroke="url(#engramStroke)" strokeWidth="2" />
          <text x="170" y="330" fontSize="14" fontFamily="Space Grotesk, sans-serif" fill="#1a1a1a">
            Engram Memory Core
          </text>

          <rect x="170" y="350" width="640" height="50" rx="10" fill="#f9fafb" stroke="#e5e7eb" />
          <text x="490" y="380" textAnchor="middle" fontSize="12" fontFamily="Manrope, sans-serif" fill="#374151">
            Knowledge Graph Layer (Entity Extraction & Linking)
          </text>

          <rect x="170" y="415" width="640" height="50" rx="10" fill="#f9fafb" stroke="#e5e7eb" />
          <text x="490" y="445" textAnchor="middle" fontSize="12" fontFamily="Manrope, sans-serif" fill="#374151">
            CategoryMem Layer (Dynamic Organization)
          </text>

          <rect x="170" y="480" width="640" height="50" rx="10" fill="#f9fafb" stroke="#e5e7eb" />
          <text x="490" y="510" textAnchor="middle" fontSize="12" fontFamily="Manrope, sans-serif" fill="#374151">
            EchoMem Layer (Multi-Modal Encoding & Retrieval)
          </text>

          <rect x="170" y="545" width="640" height="50" rx="10" fill="#f9fafb" stroke="#e5e7eb" />
          <text x="490" y="575" textAnchor="middle" fontSize="12" fontFamily="Manrope, sans-serif" fill="#374151">
            FadeMem Layer (Decay, Promotion & Consolidation)
          </text>

          <rect x="170" y="620" width="200" height="60" rx="10" fill="#ffffff" stroke="#e5e7eb" />
          <text x="270" y="642" textAnchor="middle" fontSize="11" fontFamily="Manrope, sans-serif" fill="#374151">
            <tspan x="270" dy="0">Embeddings</tspan>
            <tspan x="270" dy="14">(Gemini / OpenAI / Ollama)</tspan>
          </text>

          <rect x="390" y="620" width="200" height="60" rx="10" fill="#ffffff" stroke="#e5e7eb" />
          <text x="490" y="642" textAnchor="middle" fontSize="11" fontFamily="Manrope, sans-serif" fill="#374151">
            <tspan x="490" dy="0">LLM</tspan>
            <tspan x="490" dy="14">(Gemini / OpenAI / Ollama)</tspan>
          </text>

          <rect x="610" y="620" width="200" height="60" rx="10" fill="#ffffff" stroke="#e5e7eb" />
          <text x="710" y="642" textAnchor="middle" fontSize="11" fontFamily="Manrope, sans-serif" fill="#374151">
            <tspan x="710" dy="0">Vector Store</tspan>
            <tspan x="710" dy="14">(Qdrant / In-memory)</tspan>
          </text>
        </svg>
      </div>

      <h2>FadeMem: Decay & Consolidation</h2>
      <pre className="docs-code">
        <code>{`New Memory → Short-term (SML) → Decay or Promotion → Long-term (LML)`}</code>
      </pre>
      <ul>
        <li>Adaptive decay based on time and access.</li>
        <li>Automatic promotion for frequently accessed memories.</li>
        <li>Conflict resolution for contradictions.</li>
      </ul>

      <h2>EchoMem: Multi-Modal Encoding</h2>
      <p>
        Each memory is stored with multiple retrieval paths (keywords, paraphrases, implications)
        for higher recall across different query styles.
      </p>

      <h2>CategoryMem: Dynamic Organization</h2>
      <p>
        Categories emerge automatically from content, decay when unused, and improve precision
        during retrieval.
      </p>
    </section>
  );
};
