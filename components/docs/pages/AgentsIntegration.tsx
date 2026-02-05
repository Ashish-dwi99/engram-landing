import React from 'react';

export const AgentsIntegration: React.FC = () => {
  return (
    <section>
      <h1>Agents Integration</h1>
      <p>
        Engram is designed for orchestrators and agent swarms. Memory is scoped by user and can be
        further scoped by agent, category, or team to enable isolation and sharing.
      </p>

      <h2>Knowledge Isolation</h2>
      <pre className="docs-code">
        <code>{`# Agent 1 stores knowledge
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

      <h2>OpenClaw Shared Memory</h2>
      <p>
        All your OpenClaw agents share one memory store — consistent preferences,
        shared facts, zero duplicate work.
      </p>
    </section>
  );
};
