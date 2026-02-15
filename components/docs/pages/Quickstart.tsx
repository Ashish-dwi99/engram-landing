import React from 'react';

export const Quickstart: React.FC = () => {
  return (
    <section>
      <h1>Quickstart</h1>
      <p>Zero to a running dashboard in 3 minutes.</p>

      <h2>1. Install Engram</h2>
      <pre className="docs-code">
        <code>{`pip install -e ".[all]"`}</code>
      </pre>
      <p>Or clone and install from source:</p>
      <pre className="docs-code">
        <code>{`git clone https://github.com/Ashish-dwi99/Engram.git
cd Engram
pip install -e ".[all]"`}</code>
      </pre>

      <h2>2. Set Your API Key</h2>
      <pre className="docs-code">
        <code>{`# Choose one provider
export GEMINI_API_KEY="your-key"     # Gemini (default)
# or
export OPENAI_API_KEY="your-key"     # OpenAI
# or
export OLLAMA_HOST="http://localhost:11434"  # Ollama (fully offline)`}</code>
      </pre>
      <div className="callout tip">
        Engram auto-detects which API key is set. No additional configuration needed.
      </div>

      <h2>3. Launch the Dashboard</h2>
      <pre className="docs-code">
        <code>{`engram-bridge --channel web`}</code>
      </pre>
      <p>
        Open <code>http://127.0.0.1:8200</code> in your browser. You should see the Engram dashboard
        with the task board, agent roster, and live feed.
      </p>

      <h2>4. Create Your First Task</h2>
      <p>Click <strong>New Task</strong> in the dashboard, or use the API:</p>
      <pre className="docs-code">
        <code>{`curl -X POST http://localhost:8200/api/tasks \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Refactor authentication module",
    "description": "Move from session-based to JWT auth"
  }'`}</code>
      </pre>
      <p>
        The task appears on the Kanban board. If agents are registered, the task router will
        auto-assign it based on agent capabilities.
      </p>

      <h2>5. Connect Your Agents</h2>
      <p>Auto-configure MCP for Claude Code, Cursor, and Codex:</p>
      <pre className="docs-code">
        <code>{`engram install`}</code>
      </pre>
      <p>Or start the memory API server for REST access:</p>
      <pre className="docs-code">
        <code>{`engram serve
# Memory API on http://127.0.0.1:8100`}</code>
      </pre>

      <h2>What You Have Now</h2>
      <table className="docs-table">
        <thead>
          <tr>
            <th>Component</th>
            <th>URL</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dashboard</td>
            <td><code>localhost:8200</code></td>
            <td>Task board, agent chat, memory inspector</td>
          </tr>
          <tr>
            <td>Memory API</td>
            <td><code>localhost:8100</code></td>
            <td>REST API for memory operations</td>
          </tr>
          <tr>
            <td>MCP Server</td>
            <td>stdio</td>
            <td>Direct integration with Claude Code, Cursor, Codex</td>
          </tr>
        </tbody>
      </table>

      <h2>Next Steps</h2>
      <ul>
        <li><a href="/docs/dashboard/">Dashboard Overview</a> — Learn the dashboard UI in detail</li>
        <li><a href="/docs/sdk/">Python SDK</a> — Integrate memory into your own agents</li>
        <li><a href="/docs/mcp-server/">MCP Server</a> — Configure Claude Code / Cursor / Codex integration</li>
        <li><a href="/docs/self-hosting/">Self-Hosting</a> — Docker, Ollama offline, persistence options</li>
      </ul>
    </section>
  );
};
