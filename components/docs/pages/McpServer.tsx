import React from 'react';

export const McpServer: React.FC = () => {
  return (
    <section>
      <h1>MCP Server</h1>
      <p>
        Engram ships as an MCP server with 10 tools out of the box, plus a Claude Code
        plugin that injects relevant memories into context before the LLM even sees your message.
      </p>

      <h2>Automatic Installation</h2>
      <pre className="docs-code">
        <code>{`engram-install`}</code>
      </pre>

      <h2>Manual Configuration</h2>
      <p>Claude Code / Claude Desktop:</p>
      <pre className="docs-code">
        <code>{`{
  "mcpServers": {
    "engram-memory": {
      "command": "python",
      "args": ["-m", "engram.mcp_server"],
      "env": {
        "GEMINI_API_KEY": "your-api-key"
      }
    }
  }
}`}</code>
      </pre>

      <p>Cursor:</p>
      <pre className="docs-code">
        <code>{`{
  "mcpServers": {
    "engram-memory": {
      "command": "python",
      "args": ["-m", "engram.mcp_server"],
      "env": {
        "GEMINI_API_KEY": "your-api-key"
      }
    }
  }
}`}</code>
      </pre>

      <p>OpenAI Codex:</p>
      <pre className="docs-code">
        <code>{`[mcp_servers.engram-memory]
command = "python"
args = ["-m", "engram.mcp_server"]

[mcp_servers.engram-memory.env]
GEMINI_API_KEY = "your-api-key"`}</code>
      </pre>

      <h2>Claude Code Plugin (Proactive Memory)</h2>
      <pre className="docs-code">
        <code>{`/plugin install engram-memory --path ~/.engram/claude-plugin`}</code>
      </pre>
      <p>
        The plugin injects relevant memories before Claude sees your prompt. If the API is
        unreachable, it fails quietly and Claude continues normally.
      </p>

      <h2>Available MCP Tools</h2>
      <table className="docs-table">
        <thead>
          <tr>
            <th>Tool</th>
            <th>Description</th>
            <th>Example Use</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>add_memory</td>
            <td>Store a new memory</td>
            <td>Remember a user preference</td>
          </tr>
          <tr>
            <td>search_memory</td>
            <td>Find relevant memories</td>
            <td>Find UI preferences</td>
          </tr>
          <tr>
            <td>get_all_memories</td>
            <td>List all stored memories</td>
            <td>Audit knowledge</td>
          </tr>
          <tr>
            <td>get_memory</td>
            <td>Get a specific memory by ID</td>
            <td>Retrieve exact memory</td>
          </tr>
          <tr>
            <td>update_memory</td>
            <td>Update memory content</td>
            <td>Correct outdated info</td>
          </tr>
          <tr>
            <td>delete_memory</td>
            <td>Remove a memory</td>
            <td>Delete sensitive data</td>
          </tr>
          <tr>
            <td>get_memory_stats</td>
            <td>Get storage statistics</td>
            <td>Monitor health</td>
          </tr>
          <tr>
            <td>apply_memory_decay</td>
            <td>Run forgetting algorithm</td>
            <td>Scheduled cleanup</td>
          </tr>
          <tr>
            <td>engram_context</td>
            <td>Load session digest</td>
            <td>Call at conversation start</td>
          </tr>
          <tr>
            <td>remember</td>
            <td>Quick-save a fact</td>
            <td>Store preference instantly</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
