import React from 'react';

export const RestAPI: React.FC = () => {
  return (
    <section>
      <h1>REST API</h1>
      <p>
        Engram exposes two HTTP services: the <strong>Memory API</strong> (port 8100)
        for memory operations, and the <strong>Bridge API</strong> (port 8200) for task
        management and coordination.
      </p>

      <h2>Starting the Servers</h2>
      <pre className="docs-code">
        <code>{`# Memory API server
engram serve                  # http://127.0.0.1:8100
# Interactive docs at /docs

# Dashboard + Bridge API
engram-bridge --channel web   # http://127.0.0.1:8200`}</code>
      </pre>

      <h2>Authentication</h2>
      <p>
        Create a capability-scoped session token for authenticated access:
      </p>
      <pre className="docs-code">
        <code>{`curl -X POST http://localhost:8100/v1/sessions \\
  -H "Content-Type: application/json" \\
  -d '{
    "user_id": "u123",
    "agent_id": "planner",
    "allowed_confidentiality_scopes": ["work", "personal"],
    "capabilities": ["search", "propose_write", "read_scene"],
    "ttl_minutes": 1440
  }'`}</code>
      </pre>

      <h2>Memory Endpoints (Port 8100)</h2>

      <h3>Write (Staged by Default)</h3>
      <pre className="docs-code">
        <code>{`curl -X POST http://localhost:8100/v1/memories \\
  -H "Authorization: Bearer <TOKEN>" \\
  -H "Content-Type: application/json" \\
  -d '{"content": "User prefers dark mode", "user_id": "u123", "mode": "staging"}'`}</code>
      </pre>

      <h3>Search (Dual Retrieval)</h3>
      <pre className="docs-code">
        <code>{`curl -X POST http://localhost:8100/v1/search \\
  -H "Authorization: Bearer <TOKEN>" \\
  -H "Content-Type: application/json" \\
  -d '{"query": "UI preferences", "user_id": "u123"}'`}</code>
      </pre>

      <h3>List Memories</h3>
      <pre className="docs-code">
        <code>{`curl "http://localhost:8100/v1/memories?user_id=u123"`}</code>
      </pre>

      <h3>Staging &amp; Conflicts</h3>
      <pre className="docs-code">
        <code>{`# Review pending proposals
curl "http://localhost:8100/v1/staging/commits?user_id=u123&status=PENDING"

# Approve a staged commit
curl -X POST http://localhost:8100/v1/staging/commits/<id>/approve

# Resolve a conflict
curl -X POST http://localhost:8100/v1/staging/conflicts/<stash_id>/resolve \\
  -d '{"resolution": "ACCEPT_PROPOSED"}'`}</code>
      </pre>

      <h3>Episodic Scenes</h3>
      <pre className="docs-code">
        <code>{`# Search scenes
curl -X POST http://localhost:8100/v1/scenes/search \\
  -H "Content-Type: application/json" \\
  -d '{"query": "architecture discussion", "user_id": "u123"}'

# Get a specific scene
curl "http://localhost:8100/v1/scenes/<scene_id>"`}</code>
      </pre>

      <h3>Namespaces &amp; Trust</h3>
      <pre className="docs-code">
        <code>{`# Create namespace
curl -X POST http://localhost:8100/v1/namespaces \\
  -d '{"user_id": "u123", "namespace": "workbench"}'

# Check agent trust score
curl "http://localhost:8100/v1/trust?user_id=u123&agent_id=planner"`}</code>
      </pre>

      <h3>Decay &amp; Maintenance</h3>
      <pre className="docs-code">
        <code>{`# Apply decay
curl -X POST http://localhost:8100/v1/decay \\
  -d '{"user_id": "u123"}'

# Run sleep cycle (consolidation + cleanup)
curl -X POST http://localhost:8100/v1/sleep/run \\
  -d '{"user_id": "u123", "apply_decay": true, "cleanup_stale_refs": true}'

# Get stats
curl "http://localhost:8100/v1/stats?user_id=u123"

# Get categories
curl "http://localhost:8100/v1/categories?user_id=u123"`}</code>
      </pre>

      <h3>Handoff</h3>
      <pre className="docs-code">
        <code>{`# Save a checkpoint
curl -X POST http://localhost:8100/v1/handoff/checkpoint \\
  -H "Authorization: Bearer <TOKEN>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "user_id": "u123",
    "agent_id": "claude-code",
    "repo_path": "/my-project",
    "task_summary": "migrating auth to JWT"
  }'

# Resume from last session
curl -X POST http://localhost:8100/v1/handoff/resume \\
  -H "Authorization: Bearer <TOKEN>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "user_id": "u123",
    "agent_id": "codex",
    "repo_path": "/my-project"
  }'

# List active lanes
curl "http://localhost:8100/v1/handoff/lanes?user_id=u123"`}</code>
      </pre>

      <h2>Bridge API Endpoints (Port 8200)</h2>

      <h3>Tasks</h3>
      <pre className="docs-code">
        <code>{`# Create a task
curl -X POST http://localhost:8200/api/tasks \\
  -H "Content-Type: application/json" \\
  -d '{"title": "Refactor auth", "description": "Move to JWT"}'

# List tasks
curl http://localhost:8200/api/tasks

# Get task detail
curl http://localhost:8200/api/tasks/<task_id>

# Update task status
curl -X PATCH http://localhost:8200/api/tasks/<task_id> \\
  -H "Content-Type: application/json" \\
  -d '{"status": "done"}'`}</code>
      </pre>

      <h3>Agents</h3>
      <pre className="docs-code">
        <code>{`# Register an agent
curl -X POST http://localhost:8200/api/agents \\
  -H "Content-Type: application/json" \\
  -d '{
    "agent_id": "claude-code",
    "name": "Claude Code",
    "capabilities": ["code-review", "refactoring"]
  }'

# List registered agents
curl http://localhost:8200/api/agents`}</code>
      </pre>

      <h3>Coordination</h3>
      <pre className="docs-code">
        <code>{`# Claim a task
curl -X POST http://localhost:8200/api/tasks/<task_id>/claim \\
  -d '{"agent_id": "claude-code"}'

# Release a task
curl -X POST http://localhost:8200/api/tasks/<task_id>/release \\
  -d '{"agent_id": "claude-code"}'

# Get task events
curl http://localhost:8200/api/tasks/<task_id>/events`}</code>
      </pre>

      <div className="callout tip">
        The Memory API (8100) has interactive Swagger docs at <code>/docs</code>.
        For MCP-based access from Claude Code, see <a href="/docs/mcp-server/">MCP Server</a>.
      </div>
    </section>
  );
};
