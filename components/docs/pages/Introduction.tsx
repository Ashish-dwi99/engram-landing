import React from 'react';

export const Introduction: React.FC = () => {
  return (
    <section>
      <h1>Engram Documentation</h1>
      <p>
        Engram is a Personal Memory Kernel (PMK) for AI agents. It's a user-owned memory store that
        any agent can plug into to become instantly personalized. Agents read via scoped retrieval and
        can only propose writes into staging until the user approves.
      </p>
      <div className="callout tip">
        100% free, forever. No Pro tier, no usage limits, no license keys. Bring your own API key
        (Gemini, OpenAI, or Ollama). Everything runs locally by default.
      </div>

      <h2>Why Engram</h2>
      <table className="docs-table">
        <thead>
          <tr>
            <th>Capability</th>
            <th>Other Memory Layers</th>
            <th>Engram</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bio-inspired forgetting</td>
            <td>No</td>
            <td>Ebbinghaus decay curve</td>
          </tr>
          <tr>
            <td>Untrusted agent writes</td>
            <td>Store directly</td>
            <td>Staging + verification + conflict stash</td>
          </tr>
          <tr>
            <td>Episodic narrative memory</td>
            <td>No</td>
            <td>CAST scenes (time/place/topic)</td>
          </tr>
          <tr>
            <td>Multi-modal encoding</td>
            <td>Rare</td>
            <td>5 retrieval paths (EchoMem)</td>
          </tr>
          <tr>
            <td>Cross-agent sharing</td>
            <td>Per-agent silos</td>
            <td>Scoped retrieval with masking</td>
          </tr>
          <tr>
            <td>Knowledge graph</td>
            <td>Sometimes</td>
            <td>Entity extraction + linking</td>
          </tr>
          <tr>
            <td>Reference-aware decay</td>
            <td>No</td>
            <td>If other agents use it, don't delete it</td>
          </tr>
          <tr>
            <td>Hybrid search</td>
            <td>Vector only</td>
            <td>Semantic + keyword + episodic</td>
          </tr>
          <tr>
            <td>Storage efficiency</td>
            <td>Store everything</td>
            <td>~45% less</td>
          </tr>
          <tr>
            <td>MCP + REST</td>
            <td>One or the other</td>
            <td>Both, plug-and-play</td>
          </tr>
          <tr>
            <td>Self-hosted</td>
            <td>Cloud-first</td>
            <td>Local-first (127.0.0.1:8100)</td>
          </tr>
        </tbody>
      </table>

      <h2>Core Principles</h2>
      <ul>
        <li><strong>Agents are untrusted writers.</strong> Every write is a proposal that lands in staging. Trusted agents can auto-merge; others wait for approval.</li>
        <li><strong>Memory has a lifecycle.</strong> New memories start short-term (SML), promote to long-term (LML) through access, and fade via Ebbinghaus decay if unused.</li>
        <li><strong>Scoping is mandatory.</strong> Every memory is scoped by user. Out-of-scope queries see structure but not details ("all but mask").</li>
        <li><strong>Dual retrieval.</strong> Queries run semantic + episodic indexes in parallel. Results matching both get boosted.</li>
        <li><strong>Reference-aware forgetting.</strong> If other agents still use a memory, it won't be garbage collected.</li>
      </ul>

      <div className="callout tip">
        Start with <strong>Installation</strong> and <strong>Setup</strong> to go from zero to
        working memory in minutes.
      </div>
    </section>
  );
};
