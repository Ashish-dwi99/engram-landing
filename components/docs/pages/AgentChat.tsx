import React from 'react';

export const AgentChat: React.FC = () => {
  return (
    <section>
      <h1>Agent Chat</h1>
      <p>
        The dashboard provides two chat modes: a general chat for open-ended conversations
        with agents, and task-scoped chat for follow-ups within a specific task context.
      </p>

      <h2>General Chat</h2>
      <p>
        Use the <strong>Live Feed</strong> tab for general-purpose agent interaction. Messages
        sent here are broadcast to all connected agents. Responses stream back in real-time.
      </p>

      <h2>Task-Scoped Chat</h2>
      <p>
        Open any task from the <a href="/docs/task-board/">Task Board</a> to enter the task
        detail view. The <strong>Follow-up input</strong> at the bottom sends messages scoped
        to that task's agent. The agent receives the full task context with each follow-up.
      </p>

      <h2>WebSocket Protocol</h2>
      <p>
        The dashboard communicates with agents over a WebSocket connection at
        <code>ws://localhost:8200/ws</code>. Messages are JSON objects with a <code>type</code> field:
      </p>
      <table className="docs-table">
        <thead>
          <tr>
            <th>Message Type</th>
            <th>Direction</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>task_execute</code></td>
            <td>Client &rarr; Agent</td>
            <td>Start executing a task</td>
          </tr>
          <tr>
            <td><code>task_followup</code></td>
            <td>Client &rarr; Agent</td>
            <td>Send a follow-up message within a task</td>
          </tr>
          <tr>
            <td><code>task_text</code></td>
            <td>Agent &rarr; Client</td>
            <td>Streamed text response from the agent</td>
          </tr>
          <tr>
            <td><code>task_edit</code></td>
            <td>Agent &rarr; Client</td>
            <td>File edit performed by the agent</td>
          </tr>
          <tr>
            <td><code>task_tool_use</code></td>
            <td>Agent &rarr; Client</td>
            <td>Tool invocation details</td>
          </tr>
          <tr>
            <td><code>task_process</code></td>
            <td>Agent &rarr; Client</td>
            <td>Shell command execution and output</td>
          </tr>
          <tr>
            <td><code>task_file_change</code></td>
            <td>Agent &rarr; Client</td>
            <td>Notification of a file creation or modification</td>
          </tr>
          <tr>
            <td><code>task_complete</code></td>
            <td>Agent &rarr; Client</td>
            <td>Task execution finished</td>
          </tr>
        </tbody>
      </table>

      <h2>Live Feed</h2>
      <p>
        The live feed tab shows a chronological stream of all agent activity across every task.
        Each entry includes the agent name, message type, and timestamp. Click any entry to jump
        to its parent task.
      </p>

      <h2>Message Routing</h2>
      <p>
        Messages include a <code>metadata</code> field with a <code>task_id</code> for routing.
        The bridge uses this to direct follow-up messages to the correct agent and associate
        responses with the right task conversation thread.
      </p>
      <pre className="docs-code">
        <code>{`// WebSocket message structure
{
  "type": "task_followup",
  "content": "Also add rate limiting to the endpoint",
  "metadata": {
    "task_id": "task_abc123"
  }
}`}</code>
      </pre>

      <div className="callout tip">
        All chat messages are persisted by the bridge. Refresh the page and the full
        conversation history reloads.
      </div>
    </section>
  );
};
