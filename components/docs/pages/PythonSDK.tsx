import React from 'react';

export const PythonSDK: React.FC = () => {
  return (
    <section>
      <h1>Python SDK</h1>
      <p>
        Engram provides two Python interfaces: <code>Engram</code> for simple usage
        and <code>Memory</code> for full control over the memory lifecycle.
      </p>

      <h2>Installation</h2>
      <pre className="docs-code">
        <code>{`pip install -e ".[all]"

# Or with specific providers
pip install -e ".[gemini]"       # Gemini only
pip install -e ".[openai]"      # OpenAI only
pip install -e ".[qdrant]"      # Qdrant vector store`}</code>
      </pre>

      <h2>Engram Class (Simple Interface)</h2>
      <pre className="docs-code">
        <code>{`from engram import Engram

memory = Engram(
    provider="gemini",      # or "openai", "ollama" — auto-detected from env
    in_memory=False,        # True for testing
    enable_echo=True,       # Multi-modal encoding
    enable_categories=True, # Dynamic categorization
    enable_graph=True       # Knowledge graph
)

# Store a memory
memory.add("User prefers Python over JavaScript", user_id="u123")

# Search by meaning
results = memory.search("programming preferences", user_id="u123")

# List all memories
all_mems = memory.get_all(user_id="u123")

# Get stats
memory.stats(user_id="u123")

# Run decay (forgetting)
memory.decay(user_id="u123")`}</code>
      </pre>

      <h2>Memory Class (Full Interface)</h2>
      <pre className="docs-code">
        <code>{`from engram import Memory

memory = Memory()

# Core operations
memory.add(content, user_id, agent_id=None, categories=None, metadata=None)
memory.search(query, user_id, agent_id=None, limit=10, categories=None)
memory.get(memory_id)
memory.update(memory_id, content)
memory.delete(memory_id)
memory.delete_all(user_id=None, agent_id=None)
memory.get_all(user_id, agent_id=None, layer=None, limit=100)

# Lifecycle
memory.history(memory_id)        # Access history
memory.promote(memory_id)        # SML → LML
memory.demote(memory_id)         # LML → SML
memory.fuse(memory_ids)          # Combine related memories

# Categories
memory.get_category_tree()
memory.get_all_summaries()
memory.search_by_category(category_id)

# Knowledge graph
memory.get_related_memories(memory_id)
memory.get_memory_entities(memory_id)
memory.get_entity_memories(entity_name)
memory.get_memory_graph(memory_id)
memory.get_graph_stats()`}</code>
      </pre>

      <h2>Async Support</h2>
      <pre className="docs-code">
        <code>{`from engram.memory.async_memory import AsyncMemory

async with AsyncMemory() as memory:
    await memory.add("User prefers Python", user_id="u1")
    results = await memory.search("programming", user_id="u1")`}</code>
      </pre>

      <h2>Pydantic Configuration</h2>
      <p>
        All configuration is done through Pydantic models. Pass a <code>MemoryConfig</code> to
        customize behavior:
      </p>
      <pre className="docs-code">
        <code>{`from engram.configs.base import (
    MemoryConfig, FadeMemConfig, EchoMemConfig, CategoryMemConfig,
)

config = MemoryConfig(
    fadem=FadeMemConfig(
        enable_forgetting=True,
        sml_decay_rate=0.15,
        lml_decay_rate=0.02,
        promotion_access_threshold=3,
        forgetting_threshold=0.1,
    ),
    echo=EchoMemConfig(
        enable_echo=True,
        auto_depth=True,
        shallow_multiplier=1.0,
        medium_multiplier=1.3,
        deep_multiplier=1.6,
    ),
    category=CategoryMemConfig(
        enable_categories=True,
        auto_categorize=True,
        enable_category_decay=True,
        max_category_depth=3,
    ),
)`}</code>
      </pre>

      <h2>Providers</h2>
      <table className="docs-table">
        <thead>
          <tr>
            <th>Provider</th>
            <th>LLM</th>
            <th>Embeddings</th>
            <th>Env Variable</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Gemini</strong> (default)</td>
            <td>gemini-2.0-flash</td>
            <td>text-embedding-004</td>
            <td><code>GEMINI_API_KEY</code></td>
          </tr>
          <tr>
            <td><strong>OpenAI</strong></td>
            <td>gpt-4o-mini</td>
            <td>text-embedding-3-small</td>
            <td><code>OPENAI_API_KEY</code></td>
          </tr>
          <tr>
            <td><strong>Ollama</strong></td>
            <td>configurable</td>
            <td>configurable</td>
            <td><code>OLLAMA_HOST</code></td>
          </tr>
          <tr>
            <td><strong>NVIDIA</strong></td>
            <td>kimi-k2.5</td>
            <td>nv-embedqa-e5-v5</td>
            <td><code>NVIDIA_API_KEY</code></td>
          </tr>
        </tbody>
      </table>

      <h2>Staged Writes</h2>
      <p>
        By default, agent writes land in staging as proposals. High-trust agents auto-merge;
        others wait for approval.
      </p>
      <pre className="docs-code">
        <code>{`# Staged write (default for agents)
memory.add("User's location is Delhi", user_id="u123", agent_id="planner")

# Direct write (trusted local CLI)
memory.add("User prefers Python", user_id="u123", mode="direct")`}</code>
      </pre>

      <h2>Scoped Retrieval</h2>
      <pre className="docs-code">
        <code>{`# Search all agents' memories for a user
all_results = memory.search("project details", user_id="project_x")

# Search only one agent's memories
planner_results = memory.search("deadlines", user_id="project_x", agent_id="planner")

# Filter by layer
lml_only = memory.get_all(user_id="u123", layer="lml")`}</code>
      </pre>

      <div className="callout tip">
        For HTTP access, see the <a href="/docs/rest-api/">REST API</a>.
        For MCP integration with Claude Code, see <a href="/docs/mcp-server/">MCP Server</a>.
      </div>
    </section>
  );
};
