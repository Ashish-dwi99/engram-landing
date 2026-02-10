import React from 'react';

export const Introduction: React.FC = () => {
  return (
    <section>
      <h1>Engram Documentation</h1>
      <p>
        Engram is a Personal Memory Kernel (PMK) for AI agents. Hit a rate limit in Claude Code?
        Open Codex — it already knows what you were doing. One memory kernel shared across every agent,
        with bio-inspired forgetting, staged writes, and episodic recall.
      </p>
      <div className="callout note">
        <strong>Early-stage software</strong> — not recommended for production use. APIs may change. Use at your own risk.
      </div>
      <div className="callout tip">
        Open source, local-first. Bring your own API key
        (Gemini, OpenAI, or Ollama for fully offline). Everything runs on 127.0.0.1:8100 by default.
      </div>

      <h2>Four Problems Nobody Else Is Solving</h2>
      <table className="docs-table">
        <thead>
          <tr>
            <th>Problem</th>
            <th>Other Memory Layers</th>
            <th>Engram</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Switching agents = cold start</strong></td>
            <td>Manual copy/paste context</td>
            <td>Handoff bus — session digests, auto-resume</td>
          </tr>
          <tr>
            <td><strong>Nobody forgets</strong></td>
            <td>Store everything forever</td>
            <td>Ebbinghaus decay curve, ~45% less storage</td>
          </tr>
          <tr>
            <td><strong>Agents write with no oversight</strong></td>
            <td>Store directly</td>
            <td>Staging + verification + trust scoring</td>
          </tr>
          <tr>
            <td><strong>No episodic memory</strong></td>
            <td>Vector search only</td>
            <td>CAST scenes (time/place/topic)</td>
          </tr>
          <tr>
            <td>Multi-modal encoding</td>
            <td>Single embedding</td>
            <td>5 retrieval paths (EchoMem)</td>
          </tr>
          <tr>
            <td>Cross-agent sharing</td>
            <td>Per-agent silos</td>
            <td>Scoped retrieval with all-but-mask privacy</td>
          </tr>
          <tr>
            <td>Reference-aware decay</td>
            <td>No</td>
            <td>If other agents use it, don't delete it</td>
          </tr>
          <tr>
            <td>Knowledge graph</td>
            <td>Sometimes</td>
            <td>Entity extraction + linking</td>
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
        <li><strong>Switching agents shouldn't mean starting over.</strong> When an agent pauses — rate limit, crash, tool switch — it saves a session digest. The next agent loads it and continues. Zero re-explanation.</li>
        <li><strong>Memory has a lifecycle.</strong> New memories start short-term (SML), promote to long-term (LML) through access, and fade via Ebbinghaus decay if unused.</li>
        <li><strong>Agents are untrusted writers.</strong> Every write is a proposal that lands in staging. Trusted agents can auto-merge; others wait for approval.</li>
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
