import React from 'react';

export const AgentsIntegration: React.FC = () => {
  return (
    <section>
      <h1>Agents Integration</h1>
      <p>
        Engram is a Personal Memory Kernel designed for multi-agent workflows. Switch from Claude Code
        to Codex mid-task — the new agent picks up where you left off. Memory is shared across agents
        with scoped retrieval, staged writes, and automatic session handoff.
      </p>

      <h2>Knowledge Isolation</h2>
      <pre className="docs-code">
        <code>{`# Agent 1 stores knowledge (lands in staging)
memory.add("Project deadline is Friday", user_id="project_x", agent_id="planner")

# Agent 2 stores different knowledge
memory.add("Budget is $50k", user_id="project_x", agent_id="analyst")

# Search across all agents for a user
all_results = memory.search("project details", user_id="project_x")

# Search only one agent's knowledge
planner_results = memory.search("deadlines", user_id="project_x", agent_id="planner")`}</code>
      </pre>

      <h2>Cross-Agent Sharing</h2>
      <pre className="docs-code">
        <code>{`# Researcher agent discovers information
memory.add(
    "The API rate limit is 100 req/min",
    user_id="team_alpha",
    agent_id="researcher",
    categories=["technical", "api"]
)

# Coder agent can access shared knowledge
results = memory.search("rate limits", user_id="team_alpha")
# Returns the researcher's finding`}</code>
      </pre>

      <h2>Agent Trust & Write Permissions</h2>
      <p>
        Engram assigns trust scores to agents based on write history. Trust determines how writes
        are handled:
      </p>
      <ul>
        <li><strong>High-trust agents (&gt;0.85):</strong> Proposals auto-merge into long-term memory.</li>
        <li><strong>Medium-trust:</strong> Queued for daily digest review.</li>
        <li><strong>Low-trust:</strong> Require explicit user approval before committing.</li>
      </ul>
      <pre className="docs-code">
        <code>{`# Check agent trust score
curl "http://localhost:8100/v1/trust?user_id=u123&agent_id=planner"

# Configure auto-merge threshold
export ENGRAM_V2_TRUST_AUTOMERGE="true"
export ENGRAM_V2_AUTO_MERGE_TRUST_THRESHOLD="0.85"`}</code>
      </pre>

      <h2>"All But Mask" Policy</h2>
      <p>
        When an agent queries data outside its scope, it sees structure but not details. This lets
        agents schedule and plan without seeing secrets:
      </p>
      <pre className="docs-code">
        <code>{`{
  "type": "private_event",
  "time": "2026-02-10T17:00:00Z",
  "importance": "high",
  "details": "[REDACTED]"
}`}</code>
      </pre>

      <h2>Staged Writes & Conflict Resolution</h2>
      <pre className="docs-code">
        <code>{`# Review pending proposals
curl "http://localhost:8100/v1/staging/commits?user_id=u123&status=PENDING"

# Approve a staged commit
curl -X POST http://localhost:8100/v1/staging/commits/<id>/approve

# If a write conflicts with a protected invariant (e.g. user location),
# both versions are stashed for manual resolution
curl -X POST http://localhost:8100/v1/staging/conflicts/<stash_id>/resolve \\
  -d '{"resolution": "ACCEPT_PROPOSED"}'`}</code>
      </pre>

      <h2>Cross-Agent Handoff</h2>
      <p>
        When you switch agents — rate limit, crash, or just switching tools — Engram preserves the
        full working context. No re-explaining. No copy-pasting file paths.
      </p>
      <pre className="docs-code">
        <code>{`# Claude Code hits rate limit mid-refactor, saves context automatically:
# save_session_digest({
#   task_summary: "Migrating auth to JWT",
#   decisions_made: ["short-lived tokens", "middleware chain"],
#   files_touched: ["auth.py", "middleware.py", "routes.py"],
#   todos_remaining: ["update tests", "add refresh endpoint"],
#   blockers: []
# })

# You open Codex. It calls get_last_session and sees everything:
# → task, decisions, files, TODOs
# → Continues from where Claude Code stopped

# REST API equivalent:
curl -X POST http://localhost:8100/v1/handoff/resume \\
  -H "Authorization: Bearer <TOKEN>" \\
  -d '{"user_id":"u123","agent_id":"codex","repo_path":"/my-project"}'`}</code>
      </pre>

      <h2>OpenClaw Shared Memory</h2>
      <p>
        All your OpenClaw agents share one memory store — consistent preferences,
        shared facts, zero duplicate work.
      </p>
    </section>
  );
};
