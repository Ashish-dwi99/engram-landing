import React from 'react';

export const Architecture: React.FC = () => {
  return (
    <section>
      <h1>Architecture</h1>
      <p>
        Engram is three layers: agents at the top, the bridge/orchestrator in the middle,
        and the memory kernel at the bottom. Each layer is independently deployable.
      </p>

      <div className="docs-diagram">
        <svg viewBox="0 0 980 900" role="img" aria-label="Engram full architecture">
          <defs>
            <linearGradient id="engramStroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4b6cff" />
              <stop offset="100%" stopColor="#37d7b2" />
            </linearGradient>
          </defs>

          {/* Agent Orchestrator */}
          <rect x="110" y="20" width="760" height="60" rx="14" fill="#ffffff" stroke="url(#engramStroke)" strokeWidth="2" />
          <text x="490" y="48" textAnchor="middle" fontSize="15" fontFamily="Space Grotesk, sans-serif" fill="#1a1a1a">
            Agents (Claude Code, Cursor, Codex, Custom)
          </text>

          {/* Three access paths */}
          <line x1="250" y1="80" x2="250" y2="120" stroke="#9ca3af" strokeWidth="2" />
          <line x1="490" y1="80" x2="490" y2="120" stroke="#9ca3af" strokeWidth="2" />
          <line x1="730" y1="80" x2="730" y2="120" stroke="#9ca3af" strokeWidth="2" />

          <rect x="170" y="120" width="160" height="50" rx="10" fill="#ffffff" stroke="#cbd5f5" />
          <text x="250" y="150" textAnchor="middle" fontSize="13" fontFamily="Space Grotesk, sans-serif" fill="#1a1a1a">MCP Server</text>

          <rect x="410" y="120" width="160" height="50" rx="10" fill="#ffffff" stroke="#cbd5f5" />
          <text x="490" y="150" textAnchor="middle" fontSize="13" fontFamily="Space Grotesk, sans-serif" fill="#1a1a1a">REST API</text>

          <rect x="650" y="120" width="160" height="50" rx="10" fill="#ffffff" stroke="#cbd5f5" />
          <text x="730" y="150" textAnchor="middle" fontSize="13" fontFamily="Space Grotesk, sans-serif" fill="#1a1a1a">WebSocket</text>

          {/* Bridge / Orchestrator */}
          <line x1="250" y1="170" x2="250" y2="210" stroke="#9ca3af" strokeWidth="2" />
          <line x1="490" y1="170" x2="490" y2="210" stroke="#9ca3af" strokeWidth="2" />
          <line x1="730" y1="170" x2="730" y2="210" stroke="#9ca3af" strokeWidth="2" />

          <rect x="130" y="210" width="720" height="70" rx="12" fill="#f0f0ff" stroke="#8b8bdb" strokeWidth="1.5" />
          <text x="490" y="237" textAnchor="middle" fontSize="14" fontFamily="Space Grotesk, sans-serif" fill="#1a1a1a">engram-bridge (Orchestrator)</text>
          <text x="490" y="262" textAnchor="middle" fontSize="11" fontFamily="Manrope, sans-serif" fill="#6c6c6c">Task Router · Agent Registry · Dashboard · Event Bus · Task Store</text>

          {/* Policy Gateway */}
          <line x1="490" y1="280" x2="490" y2="310" stroke="#9ca3af" strokeWidth="2" />
          <rect x="250" y="310" width="480" height="55" rx="12" fill="#f0f0ff" stroke="#8b8bdb" strokeWidth="1.5" />
          <text x="490" y="333" textAnchor="middle" fontSize="14" fontFamily="Space Grotesk, sans-serif" fill="#1a1a1a">Policy Gateway</text>
          <text x="490" y="352" textAnchor="middle" fontSize="11" fontFamily="Manrope, sans-serif" fill="#6c6c6c">Scopes · Masking · Quotas · Capability Tokens · Trust Scores</text>

          {/* Split: Retrieval + Ingestion */}
          <line x1="350" y1="365" x2="350" y2="400" stroke="#9ca3af" strokeWidth="2" />
          <line x1="630" y1="365" x2="630" y2="400" stroke="#9ca3af" strokeWidth="2" />

          {/* Retrieval Engine */}
          <rect x="200" y="400" width="300" height="100" rx="12" fill="#ffffff" stroke="#e5e7eb" />
          <text x="350" y="425" textAnchor="middle" fontSize="13" fontFamily="Space Grotesk, sans-serif" fill="#1a1a1a">Retrieval Engine</text>
          <text x="350" y="450" textAnchor="middle" fontSize="11" fontFamily="Manrope, sans-serif" fill="#374151">Semantic (hybrid + graph + categories)</text>
          <text x="350" y="470" textAnchor="middle" fontSize="11" fontFamily="Manrope, sans-serif" fill="#374151">Episodic (CAST scenes)</text>
          <text x="350" y="492" textAnchor="middle" fontSize="10" fontFamily="Manrope, sans-serif" fill="#9ca3af">Intersection promotion: match both → boost</text>

          {/* Ingestion Pipeline */}
          <rect x="530" y="400" width="240" height="100" rx="12" fill="#ffffff" stroke="#e5e7eb" />
          <text x="650" y="425" textAnchor="middle" fontSize="13" fontFamily="Space Grotesk, sans-serif" fill="#1a1a1a">Ingestion Pipeline</text>
          <text x="650" y="450" textAnchor="middle" fontSize="11" fontFamily="Manrope, sans-serif" fill="#374151">Text → Views → Scenes → LML</text>
          <text x="650" y="472" textAnchor="middle" fontSize="11" fontFamily="Manrope, sans-serif" fill="#374151">Staged writes + verification</text>
          <text x="650" y="492" textAnchor="middle" fontSize="10" fontFamily="Manrope, sans-serif" fill="#9ca3af">Invariants · Conflicts · PII detection</text>

          {/* Storage Row */}
          <line x1="350" y1="500" x2="350" y2="540" stroke="#9ca3af" strokeWidth="2" />
          <line x1="650" y1="500" x2="650" y2="540" stroke="#9ca3af" strokeWidth="2" />

          <rect x="130" y="540" width="230" height="55" rx="10" fill="#ffffff" stroke="#e5e7eb" />
          <text x="245" y="562" textAnchor="middle" fontSize="12" fontFamily="Space Grotesk, sans-serif" fill="#1a1a1a">Staging (SML)</text>
          <text x="245" y="580" textAnchor="middle" fontSize="10" fontFamily="Manrope, sans-serif" fill="#6c6c6c">Proposals · Diffs · Conflict Stash</text>

          <rect x="385" y="540" width="210" height="55" rx="10" fill="#ffffff" stroke="#e5e7eb" />
          <text x="490" y="562" textAnchor="middle" fontSize="12" fontFamily="Space Grotesk, sans-serif" fill="#1a1a1a">Long-Term (LML)</text>
          <text x="490" y="580" textAnchor="middle" fontSize="10" fontFamily="Manrope, sans-serif" fill="#6c6c6c">Canonical Store</text>

          <rect x="620" y="540" width="230" height="55" rx="10" fill="#ffffff" stroke="#e5e7eb" />
          <text x="735" y="562" textAnchor="middle" fontSize="12" fontFamily="Space Grotesk, sans-serif" fill="#1a1a1a">Indexes</text>
          <text x="735" y="580" textAnchor="middle" fontSize="10" fontFamily="Manrope, sans-serif" fill="#6c6c6c">Vector + Graph + Episodic</text>

          {/* Memory Stack */}
          <rect x="130" y="630" width="720" height="250" rx="14" fill="#ffffff" stroke="url(#engramStroke)" strokeWidth="1.5" />
          <text x="180" y="656" fontSize="14" fontFamily="Space Grotesk, sans-serif" fill="#1a1a1a">Memory Kernel Stack</text>

          <rect x="160" y="670" width="660" height="38" rx="8" fill="#f9fafb" stroke="#e5e7eb" />
          <text x="490" y="694" textAnchor="middle" fontSize="11" fontFamily="Manrope, sans-serif" fill="#374151">Knowledge Graph (Entity Extraction &amp; Linking)</text>

          <rect x="160" y="716" width="660" height="38" rx="8" fill="#f9fafb" stroke="#e5e7eb" />
          <text x="490" y="740" textAnchor="middle" fontSize="11" fontFamily="Manrope, sans-serif" fill="#374151">CategoryMem (Dynamic Hierarchical Organization)</text>

          <rect x="160" y="762" width="660" height="38" rx="8" fill="#f9fafb" stroke="#e5e7eb" />
          <text x="490" y="786" textAnchor="middle" fontSize="11" fontFamily="Manrope, sans-serif" fill="#374151">EchoMem (Multi-Modal Encoding — 5 retrieval paths)</text>

          <rect x="160" y="808" width="660" height="38" rx="8" fill="#f9fafb" stroke="#e5e7eb" />
          <text x="490" y="832" textAnchor="middle" fontSize="11" fontFamily="Manrope, sans-serif" fill="#374151">FadeMem (Ebbinghaus Decay · Promotion · Ref-Aware GC)</text>

          <rect x="160" y="854" width="660" height="26" rx="6" fill="#f0f0ff" stroke="#8b8bdb" strokeWidth="1" />
          <text x="490" y="872" textAnchor="middle" fontSize="10" fontFamily="Manrope, sans-serif" fill="#6c6c6c">Embeddings + LLM (Gemini / OpenAI / Ollama) · SQLite + In-memory Vectors</text>
        </svg>
      </div>

      <h2>Package Map</h2>
      <pre className="docs-code">
        <code>{`Engram/
├── engram/                  # Memory kernel
│   ├── core/                # Algorithms (decay, echo, category, conflict, fusion, retrieval)
│   ├── memory/              # User-facing API (Memory class orchestrates all layers)
│   ├── configs/             # Pydantic configuration models
│   ├── llms/                # LLM providers (gemini, openai, ollama, nvidia)
│   ├── embeddings/          # Embedding providers
│   ├── vector_stores/       # Storage backends (qdrant, in-memory)
│   ├── db/                  # SQLite persistence
│   ├── utils/               # Factory classes, LLM prompts
│   └── mcp_server.py        # MCP server for agent integration
│
├── engram-bridge/           # Orchestrator + Dashboard
│   └── engram_bridge/
│       ├── channels/        # Channel implementations
│       │   ├── web.py       # FastAPI + WebSocket + TaskStore + REST API
│       │   └── web-ui/      # React + TypeScript dashboard
│       └── config.py        # Bridge configuration
│
└── engram-landing/          # Documentation site (this site)`}</code>
      </pre>

      <h2>Providers</h2>
      <table className="docs-table">
        <thead>
          <tr>
            <th>Provider</th>
            <th>LLM</th>
            <th>Embeddings</th>
            <th>Storage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gemini (default)</td>
            <td>gemini-2.0-flash</td>
            <td>text-embedding-004</td>
            <td rowSpan={4}>SQLite + in-memory vectors (default), Qdrant (optional)</td>
          </tr>
          <tr>
            <td>OpenAI</td>
            <td>gpt-4o-mini</td>
            <td>text-embedding-3-small</td>
          </tr>
          <tr>
            <td>Ollama</td>
            <td>configurable</td>
            <td>configurable</td>
          </tr>
          <tr>
            <td>NVIDIA</td>
            <td>kimi-k2.5</td>
            <td>nv-embedqa-e5-v5</td>
          </tr>
        </tbody>
      </table>

      <h2>Key Entry Points</h2>
      <table className="docs-table">
        <thead>
          <tr>
            <th>Entry Point</th>
            <th>File</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>engram serve</code></td>
            <td><code>engram/api.py</code></td>
            <td>Memory REST API on port 8100</td>
          </tr>
          <tr>
            <td><code>engram-mcp</code></td>
            <td><code>engram/mcp_server.py</code></td>
            <td>MCP server for Claude Code / Cursor / Codex</td>
          </tr>
          <tr>
            <td><code>engram-bridge</code></td>
            <td><code>engram_bridge/main.py</code></td>
            <td>Dashboard + task orchestration on port 8200</td>
          </tr>
          <tr>
            <td><code>engram install</code></td>
            <td><code>engram/cli.py</code></td>
            <td>Auto-configure MCP for all supported agents</td>
          </tr>
        </tbody>
      </table>

      <div className="callout tip">
        For configuration details, see <a href="/docs/configuration/">Configuration</a>.
        For deployment options, see <a href="/docs/self-hosting/">Self-Hosting</a>.
      </div>
    </section>
  );
};
