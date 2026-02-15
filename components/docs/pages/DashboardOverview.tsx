import React from 'react';

export const DashboardOverview: React.FC = () => {
  return (
    <section>
      <h1>Dashboard Overview</h1>
      <p>
        The Engram dashboard (<code>engram-bridge</code>) is a web UI for managing agent tasks,
        viewing live agent activity, inspecting memories, and coordinating multi-agent workflows.
      </p>

      <h2>Install &amp; Launch</h2>
      <pre className="docs-code">
        <code>{`pip install -e ".[all]"
engram-bridge --channel web
# Opens at http://127.0.0.1:8200`}</code>
      </pre>

      <h2>Dashboard Tabs</h2>
      <table className="docs-table">
        <thead>
          <tr>
            <th>Tab</th>
            <th>What It Does</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Task Board</strong></td>
            <td>Kanban view of all tasks — create, assign, track, and complete work</td>
          </tr>
          <tr>
            <td><strong>Agent Roster</strong></td>
            <td>Registered agents, their capabilities, status, and trust scores</td>
          </tr>
          <tr>
            <td><strong>Live Feed</strong></td>
            <td>Real-time stream of agent activity — messages, tool calls, file changes</td>
          </tr>
          <tr>
            <td><strong>Memory Inspector</strong></td>
            <td>Browse, search, and inspect stored memories with decay and echo details</td>
          </tr>
        </tbody>
      </table>

      <h2>Configuration</h2>
      <p>
        The dashboard reads from <code>~/.engram/bridge.json</code>. Create or edit this file
        to customize behavior:
      </p>
      <pre className="docs-code">
        <code>{`{
  "channel": "web",
  "web": {
    "host": "127.0.0.1",
    "port": 8200,
    "auth_token": null
  }
}`}</code>
      </pre>
      <table className="docs-table">
        <thead>
          <tr>
            <th>Field</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>channel</code></td>
            <td><code>"web"</code></td>
            <td>Channel type — use <code>"web"</code> for the dashboard</td>
          </tr>
          <tr>
            <td><code>web.host</code></td>
            <td><code>"127.0.0.1"</code></td>
            <td>Bind address for the web server</td>
          </tr>
          <tr>
            <td><code>web.port</code></td>
            <td><code>8200</code></td>
            <td>Port for the dashboard and WebSocket connections</td>
          </tr>
          <tr>
            <td><code>web.auth_token</code></td>
            <td><code>null</code></td>
            <td>Optional bearer token for API/WebSocket authentication</td>
          </tr>
        </tbody>
      </table>

      <h2>Agent Registration</h2>
      <p>
        Agents register with the bridge to appear in the roster and receive task assignments.
        Registration can happen via the REST API or WebSocket:
      </p>
      <pre className="docs-code">
        <code>{`# Register an agent via REST
curl -X POST http://localhost:8200/api/agents \\
  -H "Content-Type: application/json" \\
  -d '{
    "agent_id": "claude-code",
    "name": "Claude Code",
    "capabilities": ["code-review", "refactoring", "testing"]
  }'`}</code>
      </pre>
      <p>
        Registered agents appear in the <strong>Agent Roster</strong> tab with their capabilities
        stored as memories for semantic matching during task routing.
      </p>

      <div className="callout tip">
        See <a href="/docs/task-board/">Task Board</a> for creating and managing tasks,
        or <a href="/docs/coordination/">Coordination</a> for how agents get auto-assigned.
      </div>
    </section>
  );
};
