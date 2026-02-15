import React from 'react';

export const SelfHosting: React.FC = () => {
  return (
    <section>
      <h1>Self-Hosting</h1>
      <p>
        Engram is local-first. Everything runs on your machine — no cloud required.
        This page covers installation from source, Docker deployment, persistence,
        and fully offline operation with Ollama.
      </p>

      <h2>From Source</h2>
      <pre className="docs-code">
        <code>{`git clone https://github.com/Ashish-dwi99/Engram.git
cd Engram
python3 -m venv .venv && source .venv/bin/activate

# Install with all optional dependencies
pip install -e ".[all]"

# Or with specific providers
pip install -e ".[gemini]"       # Gemini only
pip install -e ".[openai]"      # OpenAI only
pip install -e ".[gemini,qdrant]" # Gemini + Qdrant vector store

# Set your API key
export GEMINI_API_KEY="your-key"

# Start services
engram serve                       # Memory API on :8100
engram-bridge --channel web        # Dashboard on :8200`}</code>
      </pre>

      <h2>Docker</h2>
      <pre className="docs-code">
        <code>{`# Using docker compose
docker compose up -d
# Memory API at http://localhost:8100

# Or build and run manually
docker build -t engram .
docker run -p 8100:8100 -p 8200:8200 \\
  -v engram-data:/data \\
  -e GEMINI_API_KEY="your-key" \\
  engram`}</code>
      </pre>

      <h2>Persistence</h2>
      <p>
        By default, Engram stores everything in SQLite at <code>~/.engram/</code>:
      </p>
      <table className="docs-table">
        <thead>
          <tr>
            <th>File</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>~/.engram/engram.db</code></td>
            <td>Memories, categories, entities, scenes, staging</td>
          </tr>
          <tr>
            <td><code>~/.engram/bridge.json</code></td>
            <td>Bridge/dashboard configuration</td>
          </tr>
          <tr>
            <td><code>~/.engram/claude-plugin/</code></td>
            <td>Claude Code plugin files</td>
          </tr>
        </tbody>
      </table>
      <p>
        For Docker, mount <code>/data</code> to persist across container restarts.
        For Qdrant vector storage, add the Qdrant service to your compose file.
      </p>

      <h2>Fully Offline with Ollama</h2>
      <p>
        Engram supports Ollama for fully offline operation — no API keys, no cloud calls:
      </p>
      <pre className="docs-code">
        <code>{`# 1. Install Ollama (https://ollama.com)
# 2. Pull a model
ollama pull llama3.2
ollama pull nomic-embed-text

# 3. Set the Ollama host
export OLLAMA_HOST="http://localhost:11434"

# 4. Start Engram — it auto-detects Ollama
engram serve
engram-bridge --channel web`}</code>
      </pre>
      <div className="callout note">
        Ollama requires more local resources (RAM, CPU/GPU) than cloud providers.
        Performance varies by model size. For development, cloud providers are faster.
      </div>

      <h2>What engram install Does</h2>
      <p>
        The <code>engram install</code> command auto-configures MCP for all supported agents:
      </p>
      <ul>
        <li>Writes MCP config to <code>~/.claude.json</code> (Claude Code)</li>
        <li>Writes MCP config to <code>~/Library/Application Support/Claude/claude_desktop_config.json</code> (Claude Desktop)</li>
        <li>Writes MCP config to <code>~/.cursor/mcp.json</code> (Cursor)</li>
        <li>Writes MCP config to <code>~/.codex/config.toml</code> (Codex)</li>
        <li>Deploys plugin files to <code>~/.engram/claude-plugin/engram-memory/</code></li>
        <li>Forwards your API keys to all configs</li>
      </ul>

      <div className="callout tip">
        For configuration options, see <a href="/docs/configuration/">Configuration</a>.
        For the full architecture, see <a href="/docs/architecture/">Architecture</a>.
      </div>
    </section>
  );
};
