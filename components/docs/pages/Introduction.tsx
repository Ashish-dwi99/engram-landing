import React from 'react';

export const Introduction: React.FC = () => {
  return (
    <section>
      <h1>Engram Documentation</h1>
      <p>
        Engram is the memory layer for AI agent orchestrators. It gives your agents persistent
        memory that learns, forgets, and shares knowledge like humans do—local‑first and production
        ready.
      </p>
      <div className="callout tip">
        Tip: Start with <strong>Installation</strong> and <strong>Setup</strong> to go from zero to
        working memory in minutes.
      </div>

      <h2>Why Engram</h2>
      <table className="docs-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Other Memory Layers</th>
            <th>Engram</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bio-inspired forgetting</td>
            <td>No</td>
            <td>Ebbinghaus decay</td>
          </tr>
          <tr>
            <td>Multi-modal encoding</td>
            <td>No</td>
            <td>5 modes (echo)</td>
          </tr>
          <tr>
            <td>Knowledge graph</td>
            <td>Sometimes</td>
            <td>Entity linking</td>
          </tr>
          <tr>
            <td>Dynamic categories</td>
            <td>Rare</td>
            <td>Auto-discovered</td>
          </tr>
          <tr>
            <td>Category decay</td>
            <td>No</td>
            <td>Bio-inspired</td>
          </tr>
          <tr>
            <td>Hybrid search</td>
            <td>Vector only</td>
            <td>Semantic + Keyword</td>
          </tr>
          <tr>
            <td>Storage efficiency</td>
            <td>Store everything</td>
            <td>~45% less</td>
          </tr>
          <tr>
            <td>MCP Server</td>
            <td>Rare</td>
            <td>Claude/Cursor/Codex</td>
          </tr>
          <tr>
            <td>Local LLMs (Ollama)</td>
            <td>Sometimes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Self-hosted</td>
            <td>Cloud-first</td>
            <td>Local-first</td>
          </tr>
        </tbody>
      </table>

      <h2>Core Principles</h2>
      <ul>
        <li>Memories fade when not accessed (Ebbinghaus decay curve).</li>
        <li>Important memories strengthen and promote to long-term storage.</li>
        <li>Echo encoding creates multiple retrieval paths.</li>
        <li>Dynamic categories evolve with your content.</li>
        <li>Hybrid search combines semantic + keyword matching.</li>
      </ul>
    </section>
  );
};
