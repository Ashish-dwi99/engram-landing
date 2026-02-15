import React from 'react';

export const TaskBoard: React.FC = () => {
  return (
    <section>
      <h1>Task Board</h1>
      <p>
        The task board is a Kanban-style interface for creating, tracking, and managing work
        across your agents. Tasks flow through columns as agents pick them up and complete them.
      </p>

      <h2>Kanban Columns</h2>
      <table className="docs-table">
        <thead>
          <tr>
            <th>Column</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Backlog</strong></td>
            <td>Tasks created but not yet assigned or started</td>
          </tr>
          <tr>
            <td><strong>In Progress</strong></td>
            <td>An agent is actively working on the task</td>
          </tr>
          <tr>
            <td><strong>Review</strong></td>
            <td>Work is done, awaiting human review or approval</td>
          </tr>
          <tr>
            <td><strong>Done</strong></td>
            <td>Completed and archived</td>
          </tr>
        </tbody>
      </table>

      <h2>Creating Tasks</h2>

      <h3>From the Dashboard</h3>
      <p>
        Click <strong>New Task</strong> in the top-right of the task board. Fill in the title,
        description, and optional tags. The task lands in <strong>Backlog</strong>.
      </p>

      <h3>From the REST API</h3>
      <pre className="docs-code">
        <code>{`curl -X POST http://localhost:8200/api/tasks \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Add JWT authentication",
    "description": "Replace session tokens with short-lived JWTs",
    "tags": ["auth", "security"]
  }'`}</code>
      </pre>

      <h3>From MCP (Claude Code / Cursor)</h3>
      <p>
        Agents with MCP access can create tasks directly through the bridge tools:
      </p>
      <pre className="docs-code">
        <code>{`# MCP tool call from an agent
create_task(
  title="Add JWT authentication",
  description="Replace session tokens with short-lived JWTs"
)`}</code>
      </pre>

      <h2>Task Detail View</h2>
      <p>Click any task card to open the detail view. It includes:</p>
      <ul>
        <li><strong>Conversation</strong> — Full thread of agent messages, tool calls, and user follow-ups</li>
        <li><strong>Processes</strong> — Running or completed shell commands</li>
        <li><strong>Files</strong> — Files created or modified during the task</li>
        <li><strong>Follow-up input</strong> — Send additional instructions to the agent working on it</li>
      </ul>

      <h2>Auto-Execute Flow</h2>
      <p>
        When a task is created and the <a href="/docs/coordination/">task router</a> is active,
        the following happens automatically:
      </p>
      <ol>
        <li>Task lands in <strong>Backlog</strong></li>
        <li>Task router matches the task description against agent capabilities</li>
        <li>Best-matching agent is assigned and receives the task via WebSocket</li>
        <li>Agent begins execution — task moves to <strong>In Progress</strong></li>
        <li>Agent streams updates (text, edits, tool use) back to the task detail view</li>
        <li>On completion, task moves to <strong>Done</strong></li>
      </ol>

      <h2>Projects &amp; Tags</h2>
      <p>
        Organize tasks with tags for filtering. Tags appear as colored chips on task cards
        and can be used to filter the board view.
      </p>

      <div className="callout tip">
        Tasks created via the API or MCP appear instantly on the dashboard — no refresh needed.
        The board updates in real-time over WebSocket.
      </div>
    </section>
  );
};
