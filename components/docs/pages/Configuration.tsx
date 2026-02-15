import React from 'react';

export const Configuration: React.FC = () => {
  return (
    <section>
      <h1>Configuration</h1>
      <p>
        Engram is configured through environment variables, Python config objects, and
        the <code>bridge.json</code> file. This page is the complete reference for all settings.
      </p>

      <h2>Environment Variables</h2>
      <h3>API Keys (choose one)</h3>
      <pre className="docs-code">
        <code>{`export GEMINI_API_KEY="your-key"                      # Gemini (default provider)
export OPENAI_API_KEY="your-key"                      # OpenAI
export OLLAMA_HOST="http://localhost:11434"            # Ollama (local, no key)
export NVIDIA_API_KEY="your-key"                       # NVIDIA (Kimi K2.5)`}</code>
      </pre>

      <h3>Feature Flags</h3>
      <pre className="docs-code">
        <code>{`export ENGRAM_V2_POLICY_GATEWAY="true"                # Token + scope enforcement
export ENGRAM_V2_STAGING_WRITES="true"                # Writes land in staging
export ENGRAM_V2_DUAL_RETRIEVAL="true"                # Semantic + episodic search
export ENGRAM_V2_REF_AWARE_DECAY="true"               # Preserve referenced memories
export ENGRAM_V2_TRUST_AUTOMERGE="true"               # Auto-approve for trusted agents
export ENGRAM_V2_AUTO_MERGE_TRUST_THRESHOLD="0.85"    # Trust threshold for auto-merge`}</code>
      </pre>

      <h2>Bridge Configuration</h2>
      <p>
        The dashboard reads from <code>~/.engram/bridge.json</code>:
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
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>channel</code></td>
            <td>string</td>
            <td><code>"web"</code></td>
            <td>Channel type for the bridge</td>
          </tr>
          <tr>
            <td><code>web.host</code></td>
            <td>string</td>
            <td><code>"127.0.0.1"</code></td>
            <td>Bind address for the web server</td>
          </tr>
          <tr>
            <td><code>web.port</code></td>
            <td>int</td>
            <td><code>8200</code></td>
            <td>Port for the dashboard and WebSocket</td>
          </tr>
          <tr>
            <td><code>web.auth_token</code></td>
            <td>string | null</td>
            <td><code>null</code></td>
            <td>Bearer token for API/WebSocket auth</td>
          </tr>
        </tbody>
      </table>

      <h2>Python Configuration</h2>
      <p>
        All memory kernel settings use Pydantic models. Pass them when initializing:
      </p>
      <pre className="docs-code">
        <code>{`from engram.configs.base import (
    MemoryConfig, FadeMemConfig, EchoMemConfig, CategoryMemConfig,
)

config = MemoryConfig(
    fadem=FadeMemConfig(
        enable_forgetting=True,
        sml_decay_rate=0.15,        # Short-term decay rate
        lml_decay_rate=0.02,        # Long-term decay rate
        promotion_access_threshold=3, # Accesses for SML → LML
        forgetting_threshold=0.1,   # Below this → candidate for removal
    ),
    echo=EchoMemConfig(
        enable_echo=True,
        auto_depth=True,
        shallow_multiplier=1.0,     # Routine info strength
        medium_multiplier=1.3,
        deep_multiplier=1.6,        # Critical info strength
    ),
    category=CategoryMemConfig(
        enable_categories=True,
        auto_categorize=True,
        enable_category_decay=True,
        max_category_depth=3,
    ),
)`}</code>
      </pre>

      <h2>FadeMemConfig</h2>
      <table className="docs-table">
        <thead>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>enable_forgetting</code></td>
            <td>bool</td>
            <td><code>True</code></td>
            <td>Enable Ebbinghaus decay</td>
          </tr>
          <tr>
            <td><code>sml_decay_rate</code></td>
            <td>float</td>
            <td><code>0.15</code></td>
            <td>Short-term memory decay speed</td>
          </tr>
          <tr>
            <td><code>lml_decay_rate</code></td>
            <td>float</td>
            <td><code>0.02</code></td>
            <td>Long-term memory decay speed</td>
          </tr>
          <tr>
            <td><code>promotion_access_threshold</code></td>
            <td>int</td>
            <td><code>3</code></td>
            <td>Accesses needed for SML → LML promotion</td>
          </tr>
          <tr>
            <td><code>forgetting_threshold</code></td>
            <td>float</td>
            <td><code>0.1</code></td>
            <td>Strength below which memories may be removed</td>
          </tr>
        </tbody>
      </table>

      <h2>EchoMemConfig</h2>
      <table className="docs-table">
        <thead>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>enable_echo</code></td>
            <td>bool</td>
            <td><code>True</code></td>
            <td>Enable multi-modal encoding</td>
          </tr>
          <tr>
            <td><code>auto_depth</code></td>
            <td>bool</td>
            <td><code>True</code></td>
            <td>Automatically set encoding depth by importance</td>
          </tr>
          <tr>
            <td><code>shallow_multiplier</code></td>
            <td>float</td>
            <td><code>1.0</code></td>
            <td>Strength multiplier for routine information</td>
          </tr>
          <tr>
            <td><code>medium_multiplier</code></td>
            <td>float</td>
            <td><code>1.3</code></td>
            <td>Strength multiplier for moderate importance</td>
          </tr>
          <tr>
            <td><code>deep_multiplier</code></td>
            <td>float</td>
            <td><code>1.6</code></td>
            <td>Strength multiplier for critical information</td>
          </tr>
        </tbody>
      </table>

      <h2>CategoryMemConfig</h2>
      <table className="docs-table">
        <thead>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>enable_categories</code></td>
            <td>bool</td>
            <td><code>True</code></td>
            <td>Enable dynamic categorization</td>
          </tr>
          <tr>
            <td><code>auto_categorize</code></td>
            <td>bool</td>
            <td><code>True</code></td>
            <td>Automatically assign categories on add</td>
          </tr>
          <tr>
            <td><code>enable_category_decay</code></td>
            <td>bool</td>
            <td><code>True</code></td>
            <td>Prune unused category branches</td>
          </tr>
          <tr>
            <td><code>max_category_depth</code></td>
            <td>int</td>
            <td><code>3</code></td>
            <td>Maximum hierarchy depth</td>
          </tr>
        </tbody>
      </table>

      <h2>CLI Reference</h2>
      <pre className="docs-code">
        <code>{`# Setup & server
engram install                     # Auto-configure all integrations
engram status                      # Version, config paths, DB stats
engram serve                       # Start REST API server (port 8100)
engram-mcp                         # Start MCP server (stdio)
engram-bridge --channel web        # Start dashboard (port 8200)

# Memory operations
engram add "User prefers Python" --user u123
engram search "programming" --user u123
engram list --user u123
engram stats --user u123
engram decay --user u123
engram categories --user u123

# Import & export
engram export --user u123 --output memories.json
engram import memories.json --user u123`}</code>
      </pre>
    </section>
  );
};
