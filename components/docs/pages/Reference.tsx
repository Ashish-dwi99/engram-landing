import React from 'react';

export const Reference: React.FC = () => {
  return (
    <section>
      <h1>Reference</h1>
      <p>API, REST, configuration, and CLI details in one place.</p>

      <h2>REST API</h2>
      <p>Start the HTTP API server:</p>
      <pre className="docs-code">
        <code>{`engram serve    # or engram-api
# Starts on http://127.0.0.1:8100
# Interactive docs at /docs`}</code>
      </pre>

      <h3>Session Tokens</h3>
      <pre className="docs-code">
        <code>{`# Create a capability session token
curl -X POST http://localhost:8100/v1/sessions \\
  -H "Content-Type: application/json" \\
  -d '{
    "user_id": "u123",
    "agent_id": "planner",
    "allowed_confidentiality_scopes": ["work", "personal"],
    "capabilities": ["search", "propose_write", "read_scene"],
    "ttl_minutes": 1440
  }'`}</code>
      </pre>

      <h3>Write (Staged by Default)</h3>
      <pre className="docs-code">
        <code>{`# Propose a write (lands in staging)
curl -X POST http://localhost:8100/v1/memories \\
  -H "Authorization: Bearer <TOKEN>" \\
  -H "Content-Type: application/json" \\
  -d '{"content": "User prefers dark mode", "user_id": "u123", "mode": "staging"}'`}</code>
      </pre>

      <h3>Search (Dual Retrieval)</h3>
      <pre className="docs-code">
        <code>{`# Search returns context packet with scene citations
curl -X POST http://localhost:8100/v1/search \\
  -H "Authorization: Bearer <TOKEN>" \\
  -H "Content-Type: application/json" \\
  -d '{"query": "UI preferences", "user_id": "u123"}'`}</code>
      </pre>

      <h3>Staging & Conflicts</h3>
      <pre className="docs-code">
        <code>{`# Review pending proposals
curl "http://localhost:8100/v1/staging/commits?user_id=u123&status=PENDING"

# Approve a staged commit
curl -X POST http://localhost:8100/v1/staging/commits/<id>/approve`}</code>
      </pre>

      <h3>Episodic Scenes</h3>
      <pre className="docs-code">
        <code>{`# Search scenes by topic
curl -X POST http://localhost:8100/v1/scenes/search \\
  -H "Content-Type: application/json" \\
  -d '{"query": "architecture discussion", "user_id": "u123"}'

# Get a specific scene
curl "http://localhost:8100/v1/scenes/<scene_id>"`}</code>
      </pre>

      <h3>Namespaces & Trust</h3>
      <pre className="docs-code">
        <code>{`# Create namespace
curl -X POST http://localhost:8100/v1/namespaces \\
  -d '{"user_id": "u123", "namespace": "workbench"}'

# Check agent trust score
curl "http://localhost:8100/v1/trust?user_id=u123&agent_id=planner"

# Sleep-cycle maintenance
curl -X POST http://localhost:8100/v1/sleep/run \\
  -d '{"user_id": "u123", "apply_decay": true, "cleanup_stale_refs": true}'`}</code>
      </pre>

      <h3>Cross-Agent Handoff</h3>
      <pre className="docs-code">
        <code>{`# Auto-resume: load context from last agent session
curl -X POST http://localhost:8100/v1/handoff/resume \\
  -H "Authorization: Bearer <TOKEN>" \\
  -H "Content-Type: application/json" \\
  -d '{"user_id":"u123","agent_id":"codex","repo_path":"/my-project","objective":"continue latest task"}'

# Save a checkpoint (agent pausing work)
curl -X POST http://localhost:8100/v1/handoff/checkpoint \\
  -H "Authorization: Bearer <TOKEN>" \\
  -H "Content-Type: application/json" \\
  -d '{"user_id":"u123","agent_id":"claude-code","repo_path":"/my-project","task_summary":"migrating auth to JWT"}'

# List active lanes
curl "http://localhost:8100/v1/handoff/lanes?user_id=u123"`}</code>
      </pre>

      <h3>Legacy Endpoints</h3>
      <pre className="docs-code">
        <code>{`# Get all memories
curl "http://localhost:8100/v1/memories?user_id=u123"

# Get statistics
curl "http://localhost:8100/v1/stats?user_id=u123"

# Apply decay (forgetting)
curl -X POST http://localhost:8100/v1/decay \\
  -d '{"user_id": "u123"}'

# Get categories
curl "http://localhost:8100/v1/categories?user_id=u123"`}</code>
      </pre>

      <h2>Python SDK</h2>
      <h3>Engram Class (Simple Interface)</h3>
      <pre className="docs-code">
        <code>{`from engram import Engram

memory = Engram(
    provider="gemini",      # or "openai", "ollama" - auto-detected from env
    in_memory=False,        # True for testing
    enable_echo=True,       # Multi-modal encoding
    enable_categories=True, # Dynamic categorization
    enable_graph=True       # Knowledge graph
)

memory.add(content, user_id, agent_id=None, categories=None, metadata=None)
memory.search(query, user_id, agent_id=None, limit=10, categories=None)
memory.get_all(user_id, agent_id=None, layer=None, limit=100)
memory.stats(user_id=None, agent_id=None)
memory.decay(user_id=None, agent_id=None)`}</code>
      </pre>

      <h3>Memory Class (Full Interface)</h3>
      <pre className="docs-code">
        <code>{`from engram import Memory

memory = Memory()

# Lifecycle
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
export GEMINI_API_KEY="your-key"                      # Gemini (default)
export OPENAI_API_KEY="your-key"                      # OpenAI
export OLLAMA_HOST="http://localhost:11434"            # Ollama (local, no key)

# v2 features (all enabled by default)
export ENGRAM_V2_POLICY_GATEWAY="true"                # Token + scope enforcement
export ENGRAM_V2_STAGING_WRITES="true"                # Writes land in staging
export ENGRAM_V2_DUAL_RETRIEVAL="true"                # Semantic + episodic search
export ENGRAM_V2_REF_AWARE_DECAY="true"               # Preserve referenced memories
export ENGRAM_V2_TRUST_AUTOMERGE="true"               # Auto-approve for trusted agents
export ENGRAM_V2_AUTO_MERGE_TRUST_THRESHOLD="0.85"    # Trust threshold for auto-merge`}</code>
      </pre>

      <h3>Full Python Configuration</h3>
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

      <h2>CLI</h2>
      <pre className="docs-code">
        <code>{`# Setup & server
engram install                     # Auto-configure all integrations
engram status                      # Version, config paths, DB stats
engram serve                       # Start REST API server
engram-mcp                         # Start MCP server directly

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
