import React from 'react';

export const Reference: React.FC = () => {
  return (
    <section>
      <h1>Reference</h1>
      <p>API, REST, configuration, and CLI details in one place.</p>

      <h2>REST API</h2>
      <p>Start the HTTP API server:</p>
      <pre className="docs-code">
        <code>{`engram-api  # Starts on http://127.0.0.1:8100`}</code>
      </pre>
      <h3>Endpoints</h3>
      <pre className="docs-code">
        <code>{`# Add memory
curl -X POST http://localhost:8100/v1/memories \\
  -H "Content-Type: application/json" \\
  -d '{"content": "User prefers dark mode", "user_id": "u123", "agent_id": "ui_agent"}'

# Search memories
curl -X POST http://localhost:8100/v1/search \\
  -H "Content-Type: application/json" \\
  -d '{"query": "UI preferences", "user_id": "u123"}'

# Get all memories
curl "http://localhost:8100/v1/memories?user_id=u123"

# Get statistics
curl "http://localhost:8100/v1/stats?user_id=u123"

# Apply decay (forgetting)
curl -X POST http://localhost:8100/v1/decay \\
  -H "Content-Type: application/json" \\
  -d '{"user_id": "u123"}'

# Get categories
curl "http://localhost:8100/v1/categories?user_id=u123"`}</code>
      </pre>

      <h2>API Reference</h2>
      <h3>Engram Class (Simple Interface)</h3>
      <pre className="docs-code">
        <code>{`from engram import Engram

memory = Engram(
    provider="gemini",      # or "openai", "ollama" - auto-detected from env
    in_memory=False,        # True for testing
    enable_echo=True,       # Multi-modal encoding
    enable_categories=True, # Dynamic categorization
    enable_graph=True       # Knowledge graph for entity linking
)

# Add memory
memory.add(content, user_id, agent_id=None, categories=None, metadata=None)

# Search memories
memory.search(query, user_id, agent_id=None, limit=10, categories=None)

# Get all memories
memory.get_all(user_id, agent_id=None, layer=None, limit=100)

# Get statistics
memory.stats(user_id=None, agent_id=None)

# Apply decay (forgetting)
memory.decay(user_id=None, agent_id=None)`}</code>
      </pre>

      <h3>Memory Class (Full Interface)</h3>
      <pre className="docs-code">
        <code>{`from engram import Memory
from engram.configs.base import MemoryConfig

config = MemoryConfig(
    # Vector store: "qdrant" or "memory"
    # LLM: "gemini" or "openai"
    # FadeMem, EchoMem, CategoryMem configs
)

memory = Memory(config)

# All Engram methods plus:
memory.get(memory_id)
memory.update(memory_id, content)
memory.delete(memory_id)
memory.delete_all(user_id=None, agent_id=None)
memory.history(memory_id)
memory.promote(memory_id)  # SML → LML
memory.demote(memory_id)   # LML → SML
memory.fuse(memory_ids)    # Combine related memories

# Category methods
memory.get_category_tree()
memory.get_all_summaries()
memory.search_by_category(category_id)

# Knowledge graph methods
memory.get_related_memories(memory_id)
memory.get_memory_entities(memory_id)
memory.get_entity_memories(entity_name)
memory.get_memory_graph(memory_id)
memory.get_graph_stats()`}</code>
      </pre>

      <h3>Async Support</h3>
      <pre className="docs-code">
        <code>{`from engram.memory.async_memory import AsyncMemory

async with AsyncMemory() as memory:
    await memory.add("User prefers Python", user_id="u1")
    results = await memory.search("programming", user_id="u1")`}</code>
      </pre>

      <h2>Configuration</h2>
      <h3>Environment Variables</h3>
      <pre className="docs-code">
        <code>{`# LLM & Embeddings (choose one)
export GEMINI_API_KEY="your-key"    # Gemini (default)
export OPENAI_API_KEY="your-key"    # OpenAI
export OLLAMA_HOST="http://localhost:11434"  # Ollama (local, no key needed)

# Optional: Vector store
export QDRANT_HOST="localhost"
export QDRANT_PORT="6333"`}</code>
      </pre>

      <h3>Full Configuration</h3>
      <pre className="docs-code">
        <code>{`from engram.configs.base import (
    MemoryConfig,
    FadeMemConfig,
    EchoMemConfig,
    CategoryMemConfig,
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

      <h2>CLI</h2>
      <pre className="docs-code">
        <code>{`# Install MCP server for Claude/Cursor/Codex
engram-install

# Start REST API server
engram-api

# Start MCP server directly
engram-mcp

# Interactive commands
engram add "User prefers Python" --user u123
engram search "programming" --user u123
engram list --user u123
engram stats --user u123
engram decay --user u123
engram categories --user u123
engram export --user u123 --output memories.json
engram import memories.json --user u123  # Import from compatible formats`}</code>
      </pre>
    </section>
  );
};
