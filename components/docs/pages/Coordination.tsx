import React from 'react';

export const Coordination: React.FC = () => {
  return (
    <section>
      <h1>Coordination</h1>
      <p>
        Engram's coordination layer automatically routes tasks to the best-matching agent
        based on semantic capability matching, manages agent registration, and tracks
        task ownership across multi-agent workflows.
      </p>

      <h2>Agent Registry</h2>
      <p>
        When agents register with the bridge, their capabilities are stored as memories
        in Engram's vector store. This enables semantic matching — the task router doesn't
        need exact keyword matches, it understands meaning.
      </p>
      <pre className="docs-code">
        <code>{`# Register an agent with capabilities
curl -X POST http://localhost:8200/api/agents \\
  -H "Content-Type: application/json" \\
  -d '{
    "agent_id": "code-reviewer",
    "name": "Code Reviewer",
    "capabilities": [
      "code review",
      "security audit",
      "performance analysis",
      "best practices enforcement"
    ]
  }'`}</code>
      </pre>

      <h2>Task Router</h2>
      <p>
        The task router is a semantic matching engine that assigns incoming tasks to agents.
        When a new task arrives:
      </p>
      <ol>
        <li>Task description is embedded as a query vector</li>
        <li>Agent capabilities (stored as memories) are searched semantically</li>
        <li>Best-matching agent is selected based on cosine similarity</li>
        <li>Task is assigned and the agent receives it via WebSocket</li>
      </ol>
      <p>
        This means a task like "Review the auth module for SQL injection" will match an agent
        with capability "security audit" even without exact keyword overlap.
      </p>

      <h2>Auto-Routing Configuration</h2>
      <p>
        Auto-routing is enabled by default when agents are registered. Configure it in
        <code>~/.engram/bridge.json</code>:
      </p>
      <pre className="docs-code">
        <code>{`{
  "channel": "web",
  "web": {
    "host": "127.0.0.1",
    "port": 8200
  }
}`}</code>
      </pre>

      <h2>Agent Roster</h2>
      <p>
        The <strong>Agent Roster</strong> tab in the dashboard shows all registered agents with:
      </p>
      <ul>
        <li><strong>Status</strong> — Online, busy, or offline</li>
        <li><strong>Capabilities</strong> — Listed skills and specializations</li>
        <li><strong>Active tasks</strong> — Currently assigned work</li>
        <li><strong>Trust score</strong> — Write permission level based on history</li>
      </ul>

      <h2>Claim &amp; Release</h2>
      <p>
        Agents can explicitly claim or release tasks via the API:
      </p>
      <pre className="docs-code">
        <code>{`# Agent claims a task
curl -X POST http://localhost:8200/api/tasks/<task_id>/claim \\
  -H "Content-Type: application/json" \\
  -d '{"agent_id": "claude-code"}'

# Agent releases a task (e.g., rate limited)
curl -X POST http://localhost:8200/api/tasks/<task_id>/release \\
  -H "Content-Type: application/json" \\
  -d '{"agent_id": "claude-code"}'`}</code>
      </pre>
      <p>
        When a task is released, the task router can re-assign it to another available agent.
        The releasing agent's progress is preserved in the task conversation.
      </p>

      <h2>Event Audit Log</h2>
      <p>
        All coordination events are logged — task assignments, claims, releases, and completions.
        This history is visible in the task detail view and accessible via the API:
      </p>
      <pre className="docs-code">
        <code>{`# Get task event history
curl http://localhost:8200/api/tasks/<task_id>/events`}</code>
      </pre>

      <div className="callout tip">
        Combine coordination with <a href="/docs/handoff/">Agent Handoff</a> for seamless
        mid-task agent switching with full context preservation.
      </div>
    </section>
  );
};
