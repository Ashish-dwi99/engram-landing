import React from 'react';

export const Installation: React.FC = () => {
  return (
    <section>
      <h1>Installation</h1>
      <p>Install Engram and configure it for your agent stack in under five minutes.</p>

      <h2>Quick Start</h2>
      <pre className="docs-code">
        <code>{`pip install -e ".[all]"            # 1. Install
export GEMINI_API_KEY="your-key"   # 2. Set one API key
engram install                     # 3. Auto-configure everything`}</code>
      </pre>
      <p>Restart your agent. Done — it now has persistent memory across sessions.</p>

      <h2>From Source</h2>
      <pre className="docs-code">
        <code>{`git clone https://github.com/Ashish-dwi99/Engram.git
cd Engram
python3 -m venv .venv && source .venv/bin/activate
pip install -e ".[all]"

# Set your API key (choose one)
export GEMINI_API_KEY="your-key"   # Gemini (default)
# or OPENAI_API_KEY for OpenAI
# or OLLAMA_HOST for local Ollama (no key needed)`}</code>
      </pre>

      <h2>Docker</h2>
      <pre className="docs-code">
        <code>{`docker compose up -d
# API available at http://localhost:8100`}</code>
      </pre>
      <p>Or build manually:</p>
      <pre className="docs-code">
        <code>{`docker build -t engram .
docker run -p 8100:8100 -v engram-data:/data \\
  -e GEMINI_API_KEY="your-key" engram`}</code>
      </pre>

      <h2>What engram install Does</h2>
      <ul>
        <li>Writes MCP config to <code>~/.claude.json</code> (Claude Code)</li>
        <li>Writes MCP config to <code>~/Library/Application Support/Claude/claude_desktop_config.json</code> (Claude Desktop)</li>
        <li>Writes MCP config to <code>~/.cursor/mcp.json</code> (Cursor)</li>
        <li>Writes MCP config to <code>~/.codex/config.toml</code> (Codex)</li>
        <li>Deploys plugin files to <code>~/.engram/claude-plugin/engram-memory/</code></li>
        <li>Forwards your API keys to all configs</li>
      </ul>

      <div className="callout note">
        Note: Gemini is the default provider. OpenAI and local Ollama are fully supported.
        Engram auto-detects which API key is set.
      </div>
    </section>
  );
};
