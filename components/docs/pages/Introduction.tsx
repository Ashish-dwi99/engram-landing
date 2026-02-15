import React from 'react';

export const Introduction: React.FC = () => {
  return (
    <section>
      <h1>Engram Documentation</h1>
      <p>
        Engram is a memory and orchestration platform for AI agents. Your agents remember context
        across sessions, coordinate on shared tasks, and hand off work seamlessly — all from a
        local-first dashboard or programmatic API.
      </p>
      <div className="callout note">
        <strong>Early-stage software</strong> — APIs may change. Use at your own risk.
      </div>

      <h2>How It Works</h2>
      <div className="docs-diagram">
        <svg viewBox="0 0 700 220" role="img" aria-label="Engram 3-layer architecture">
          <defs>
            <linearGradient id="introStroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4b6cff" />
              <stop offset="100%" stopColor="#37d7b2" />
            </linearGradient>
          </defs>

          {/* Agents layer */}
          <rect x="50" y="20" width="600" height="45" rx="10" fill="#ffffff" stroke="url(#introStroke)" strokeWidth="2" />
          <text x="350" y="48" textAnchor="middle" fontSize="14" fontFamily="Space Grotesk, sans-serif" fill="#1a1a1a">
            Agents (Claude Code, Cursor, Codex, Custom)
          </text>

          {/* Arrows */}
          <line x1="200" y1="65" x2="200" y2="95" stroke="#9ca3af" strokeWidth="1.5" />
          <line x1="350" y1="65" x2="350" y2="95" stroke="#9ca3af" strokeWidth="1.5" />
          <line x1="500" y1="65" x2="500" y2="95" stroke="#9ca3af" strokeWidth="1.5" />

          {/* Bridge layer */}
          <rect x="50" y="95" width="600" height="45" rx="10" fill="#f0f0ff" stroke="#8b8bdb" strokeWidth="1.5" />
          <text x="350" y="123" textAnchor="middle" fontSize="14" fontFamily="Space Grotesk, sans-serif" fill="#1a1a1a">
            engram-bridge (Dashboard, Task Router, Agent Registry)
          </text>

          {/* Arrows */}
          <line x1="200" y1="140" x2="200" y2="170" stroke="#9ca3af" strokeWidth="1.5" />
          <line x1="350" y1="140" x2="350" y2="170" stroke="#9ca3af" strokeWidth="1.5" />
          <line x1="500" y1="140" x2="500" y2="170" stroke="#9ca3af" strokeWidth="1.5" />

          {/* Memory layer */}
          <rect x="50" y="170" width="600" height="45" rx="10" fill="#ffffff" stroke="url(#introStroke)" strokeWidth="2" />
          <text x="350" y="198" textAnchor="middle" fontSize="14" fontFamily="Space Grotesk, sans-serif" fill="#1a1a1a">
            Memory Kernel (FadeMem, EchoMem, CategoryMem, Knowledge Graph)
          </text>
        </svg>
      </div>

      <h2>Two Ways to Use Engram</h2>
      <table className="docs-table">
        <thead>
          <tr>
            <th></th>
            <th>Use the Dashboard</th>
            <th>Build with the SDK</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>For</strong></td>
            <td>Teams managing agent tasks visually</td>
            <td>Developers integrating memory into agents</td>
          </tr>
          <tr>
            <td><strong>Start here</strong></td>
            <td><a href="/docs/quickstart/">Quickstart</a> &rarr; <a href="/docs/dashboard/">Dashboard Overview</a></td>
            <td><a href="/docs/quickstart/">Quickstart</a> &rarr; <a href="/docs/sdk/">Python SDK</a></td>
          </tr>
          <tr>
            <td><strong>Key pages</strong></td>
            <td><a href="/docs/task-board/">Task Board</a>, <a href="/docs/coordination/">Coordination</a>, <a href="/docs/agent-chat/">Agent Chat</a></td>
            <td><a href="/docs/rest-api/">REST API</a>, <a href="/docs/mcp-server/">MCP Server</a>, <a href="/docs/handoff/">Agent Handoff</a></td>
          </tr>
        </tbody>
      </table>

      <h2>What Makes Engram Different</h2>
      <table className="docs-table">
        <thead>
          <tr>
            <th>Problem</th>
            <th>Other Tools</th>
            <th>Engram</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Switching agents = cold start</strong></td>
            <td>Manual copy/paste</td>
            <td>Session digests + auto-resume</td>
          </tr>
          <tr>
            <td><strong>Memory grows forever</strong></td>
            <td>Store everything</td>
            <td>Ebbinghaus decay, ~45% less storage</td>
          </tr>
          <tr>
            <td><strong>No task orchestration</strong></td>
            <td>External tools</td>
            <td>Built-in task board + agent routing</td>
          </tr>
          <tr>
            <td><strong>No episodic recall</strong></td>
            <td>Vector search only</td>
            <td>CAST scenes (time, place, topic)</td>
          </tr>
        </tbody>
      </table>

      <div className="callout tip">
        <strong>Ready to start?</strong> The <a href="/docs/quickstart/">Quickstart</a> gets you from zero to
        a running dashboard in under 3 minutes.
      </div>
    </section>
  );
};
