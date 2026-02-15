import React from 'react';

export const AgentHandoff: React.FC = () => {
  return (
    <section>
      <h1>Agent Handoff</h1>
      <p>
        When you switch agents mid-task — rate limit, crash, or just switching tools — Engram
        preserves the full working context. The next agent picks up exactly where the last one
        stopped. No re-explaining. No copy-pasting file paths.
      </p>

      <h2>Session Digests</h2>
      <p>
        A session digest captures everything an agent was working on: task summary, decisions made,
        files touched, remaining TODOs, and blockers. Digests are saved automatically when an agent
        pauses or can be saved explicitly.
      </p>
      <pre className="docs-code">
        <code>{`# Agent saves its context before pausing
# (automatic via Claude Code CLAUDE.md rules, or explicit)
save_session_digest({
    task_summary: "Migrating auth to JWT",
    decisions_made: ["short-lived tokens", "middleware chain"],
    files_touched: ["auth.py", "middleware.py", "routes.py"],
    todos_remaining: ["update tests", "add refresh endpoint"],
    blockers: []
})

# Next agent loads the context
get_last_session(repo="/my-project")
# → Returns full digest: task, decisions, files, TODOs`}</code>
      </pre>

      <h2>REST API</h2>
      <pre className="docs-code">
        <code>{`# Save a checkpoint
curl -X POST http://localhost:8100/v1/handoff/checkpoint \\
  -H "Authorization: Bearer <TOKEN>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "user_id": "u123",
    "agent_id": "claude-code",
    "repo_path": "/my-project",
    "task_summary": "Migrating auth to JWT",
    "decisions_made": ["short-lived tokens"],
    "files_touched": ["auth.py", "middleware.py"],
    "todos_remaining": ["update tests"]
  }'

# Resume from last session
curl -X POST http://localhost:8100/v1/handoff/resume \\
  -H "Authorization: Bearer <TOKEN>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "user_id": "u123",
    "agent_id": "codex",
    "repo_path": "/my-project",
    "objective": "continue latest task"
  }'

# List active handoff lanes
curl "http://localhost:8100/v1/handoff/lanes?user_id=u123"`}</code>
      </pre>

      <h2>Engram Bus</h2>
      <p>
        The engram bus connects all agents to the same memory store, enabling implicit knowledge
        sharing. When one agent stores a fact, all other agents can find it through scoped search.
      </p>
      <pre className="docs-code">
        <code>{`# Researcher agent stores a finding
memory.add("API rate limit is 100 req/min",
    user_id="team_alpha", agent_id="researcher")

# Coder agent finds it via search
results = memory.search("rate limits", user_id="team_alpha")
# → Returns the researcher's finding`}</code>
      </pre>

      <h2>Cross-Agent Sharing</h2>
      <p>
        Memories are scoped by <code>user_id</code>. All agents working under the same user
        share one memory store. Agent-specific filtering is available but optional:
      </p>
      <pre className="docs-code">
        <code>{`# Search all agents' memories
all_results = memory.search("project details", user_id="project_x")

# Search only one agent's memories
planner_only = memory.search("deadlines", user_id="project_x", agent_id="planner")`}</code>
      </pre>

      <h2>Trust Scores</h2>
      <p>
        Engram assigns trust scores to agents based on their write history. Trust determines
        how writes are handled:
      </p>
      <table className="docs-table">
        <thead>
          <tr>
            <th>Trust Level</th>
            <th>Score</th>
            <th>Write Behavior</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>High</strong></td>
            <td>&gt; 0.85</td>
            <td>Proposals auto-merge into long-term memory</td>
          </tr>
          <tr>
            <td><strong>Medium</strong></td>
            <td>0.5 — 0.85</td>
            <td>Queued for daily digest review</td>
          </tr>
          <tr>
            <td><strong>Low</strong></td>
            <td>&lt; 0.5</td>
            <td>Require explicit user approval</td>
          </tr>
        </tbody>
      </table>
      <pre className="docs-code">
        <code>{`# Check trust score
curl "http://localhost:8100/v1/trust?user_id=u123&agent_id=planner"

# Configure auto-merge threshold
export ENGRAM_V2_TRUST_AUTOMERGE="true"
export ENGRAM_V2_AUTO_MERGE_TRUST_THRESHOLD="0.85"`}</code>
      </pre>

      <h2>Staged Writes &amp; Conflict Resolution</h2>
      <p>
        All agent writes land in staging by default. If a proposed write conflicts with
        a protected invariant (e.g., user location), both versions are stashed for manual resolution.
      </p>
      <pre className="docs-code">
        <code>{`# Review pending proposals
curl "http://localhost:8100/v1/staging/commits?user_id=u123&status=PENDING"

# Approve a staged commit
curl -X POST http://localhost:8100/v1/staging/commits/<id>/approve

# Resolve a conflict
curl -X POST http://localhost:8100/v1/staging/conflicts/<stash_id>/resolve \\
  -d '{"resolution": "ACCEPT_PROPOSED"}'`}</code>
      </pre>

      <h2>"All But Mask" Privacy</h2>
      <p>
        When an agent queries data outside its scope, it sees structure but not details.
        This lets agents schedule and plan without seeing secrets:
      </p>
      <pre className="docs-code">
        <code>{`{
  "type": "private_event",
  "time": "2026-02-10T17:00:00Z",
  "importance": "high",
  "details": "[REDACTED]"
}`}</code>
      </pre>

      <div className="callout tip">
        Handoff works with <a href="/docs/coordination/">Coordination</a> — when an agent releases
        a task, the router can reassign it while the session digest preserves context.
      </div>
    </section>
  );
};
