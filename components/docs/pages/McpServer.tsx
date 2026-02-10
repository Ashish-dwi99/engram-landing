import React from 'react';

export const McpServer: React.FC = () => {
  return (
    <section>
      <h1>MCP Server</h1>
      <p>
        Engram ships as an MCP server with 14 tools out of the box — including staged writes,
        episodic scene search, and conflict resolution. The Claude Code plugin adds proactive
        memory injection before the LLM sees your message.
      </p>

      <h2>Automatic Installation</h2>
      <pre className="docs-code">
        <code>{`engram install`}</code>
      </pre>
      <p>This auto-configures Claude Code, Claude Desktop, Cursor, and Codex.</p>

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

      <p>Cursor (<code>~/.cursor/mcp.json</code>):</p>
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

      <p>OpenAI Codex (<code>~/.codex/config.toml</code>):</p>
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
      <table className="docs-table">
        <thead>
          <tr>
            <th>Component</th>
            <th>What it does</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>UserPromptSubmit hook</td>
            <td>Queries Engram and injects matching memories into context. Stdlib-only, under 2s latency.</td>
          </tr>
          <tr>
            <td>/engram:remember</td>
            <td>Save a fact or preference on the spot</td>
          </tr>
          <tr>
            <td>/engram:search</td>
            <td>Search memories by topic</td>
          </tr>
          <tr>
            <td>/engram:forget</td>
            <td>Delete a memory (confirms before removing)</td>
          </tr>
          <tr>
            <td>/engram:status</td>
            <td>Show memory-store stats at a glance</td>
          </tr>
          <tr>
            <td>Skill</td>
            <td>Standing instructions for when to save, search, and surface memories</td>
          </tr>
        </tbody>
      </table>

      <h2>Available MCP Tools</h2>
      <table className="docs-table">
        <thead>
          <tr>
            <th>Tool</th>
            <th>Description</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>add_memory</td>
            <td>Store a new memory (lands in staging by default)</td>
            <td>Write</td>
          </tr>
          <tr>
            <td>search_memory</td>
            <td>Semantic + keyword + episodic search</td>
            <td>Retrieval</td>
          </tr>
          <tr>
            <td>get_all_memories</td>
            <td>List all stored memories</td>
            <td>Retrieval</td>
          </tr>
          <tr>
            <td>get_memory</td>
            <td>Get a specific memory by ID</td>
            <td>Retrieval</td>
          </tr>
          <tr>
            <td>update_memory</td>
            <td>Update memory content</td>
            <td>Write</td>
          </tr>
          <tr>
            <td>delete_memory</td>
            <td>Remove a memory</td>
            <td>Write</td>
          </tr>
          <tr>
            <td>get_memory_stats</td>
            <td>Storage statistics and health</td>
            <td>Lifecycle</td>
          </tr>
          <tr>
            <td>apply_memory_decay</td>
            <td>Run the forgetting algorithm</td>
            <td>Lifecycle</td>
          </tr>
          <tr>
            <td>engram_context</td>
            <td>Session-start digest (top memories, LML first)</td>
            <td>Retrieval</td>
          </tr>
          <tr>
            <td>remember</td>
            <td>Quick-save a fact (no LLM extraction)</td>
            <td>Write</td>
          </tr>
          <tr>
            <td>propose_write</td>
            <td>Create a staged write proposal (default safe path)</td>
            <td>Write</td>
          </tr>
          <tr>
            <td>list_pending_commits</td>
            <td>Inspect staged write queue</td>
            <td>Lifecycle</td>
          </tr>
          <tr>
            <td>resolve_conflict</td>
            <td>Resolve invariant conflicts</td>
            <td>Lifecycle</td>
          </tr>
          <tr>
            <td>search_scenes / get_scene</td>
            <td>Episodic CAST scene retrieval with masking</td>
            <td>Retrieval</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
