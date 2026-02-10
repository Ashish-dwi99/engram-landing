import React from 'react';

export const Setup: React.FC = () => {
  return (
    <section>
      <h1>Setup</h1>
      <p>Initialize Engram and start storing memory for your agents.</p>

      <h2>Quick Usage</h2>
      <pre className="docs-code">
        <code>{`from engram import Engram

memory = Engram()
memory.add("User prefers Python over JavaScript", user_id="u123")
results = memory.search("programming preferences", user_id="u123")`}</code>
      </pre>

      <h2>Memory Layers</h2>
      <p>
        Memories start in short-term storage (SML) and promote to long-term (LML) through repeated
        access. Unused memories decay following the Ebbinghaus curve.
      </p>
      <pre className="docs-code">
        <code>{`# Get only long-term memories
important = memory.get_all(user_id="u123", layer="lml")

# Manually promote critical memory
memory.promote(memory_id="abc123")`}</code>
      </pre>

      <h2>Staged Writes (v2 Default)</h2>
      <p>
        By default, agent writes land in staging as proposal commits. High-trust agents auto-merge;
        others wait for approval.
      </p>
      <pre className="docs-code">
        <code>{`# propose_write lands in staging
memory.add("User's location is Delhi", user_id="u123", agent_id="planner")

# If it conflicts with an existing invariant (e.g. "location = Bengaluru"),
# both versions are stashed for manual resolution.

# Direct write (trusted local CLI only)
memory.add("User prefers Python", user_id="u123", mode="direct")`}</code>
      </pre>

      <h2>Cross-Agent Sharing</h2>
      <pre className="docs-code">
        <code>{`# Researcher discovers information
memory.add("API rate limit is 100 req/min",
    user_id="team_alpha", agent_id="researcher")

# Another agent finds it via scoped retrieval
results = memory.search("rate limits", user_id="team_alpha")`}</code>
      </pre>

      <h2>Starting the API Server</h2>
      <pre className="docs-code">
        <code>{`engram serve    # or engram-api
# Runs on http://127.0.0.1:8100
# Interactive docs at /docs`}</code>
      </pre>

      <h2>Cross-Agent Handoff</h2>
      <p>
        When you switch agents mid-task, Engram preserves the working context automatically.
        This is configured out of the box by <code>engram install</code>.
      </p>
      <pre className="docs-code">
        <code>{`# Claude Code saves context when it pauses (automatic via CLAUDE.md rules):
# save_session_digest(task="migrating auth", files=["auth.py"], ...)

# When you open Codex, it loads the context (automatic via AGENTS.md rules):
# get_last_session(repo="/my-project")
# → Sees task, decisions, files touched, remaining TODOs`}</code>
      </pre>

      <div className="callout tip">
        Tip: Run <code>engram status</code> to check version, installed integrations, and database stats.
      </div>
    </section>
  );
};
