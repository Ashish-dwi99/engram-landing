import React from 'react';

export const EpisodicScenes: React.FC = () => {
  return (
    <section>
      <h1>Episodic Scenes</h1>
      <p>
        Based on <strong>CAST (Contextual Associative Scene Theory)</strong>, Engram
        clusters interactions into scenes — structured episodes defined by time, place,
        and topic. Your AI doesn't just remember facts; it remembers <em>when and where</em> it
        learned them.
      </p>

      <h2>CAST Theory</h2>
      <p>
        CAST models how humans form episodic memories. Three dimensions define scene boundaries:
      </p>
      <table className="docs-table">
        <thead>
          <tr>
            <th>Dimension</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Time</strong></td>
            <td>Temporal proximity — interactions close in time cluster together</td>
          </tr>
          <tr>
            <td><strong>Place</strong></td>
            <td>Context location — repo, project, workspace</td>
          </tr>
          <tr>
            <td><strong>Topic</strong></td>
            <td>Semantic coherence — conversations about the same subject stay grouped</td>
          </tr>
        </tbody>
      </table>
      <p>
        When any dimension shifts significantly (e.g., topic changes from "auth" to "deployment"),
        a new scene begins.
      </p>

      <h2>Scene Structure</h2>
      <p>Each scene contains:</p>
      <ul>
        <li><strong>Synopsis</strong> — LLM-generated summary of what happened</li>
        <li><strong>Characters</strong> — Agents and users involved</li>
        <li><strong>Time range</strong> — Start and end timestamps</li>
        <li><strong>Location</strong> — Project or repo context</li>
        <li><strong>Linked memories</strong> — Semantic memories extracted during this scene</li>
        <li><strong>Topic tags</strong> — Auto-discovered topics</li>
      </ul>

      <h2>Searching Scenes</h2>

      <h3>MCP Tool</h3>
      <pre className="docs-code">
        <code>{`# Search scenes by topic
search_scenes(query="architecture discussion", user_id="u123")

# Get a specific scene
get_scene(scene_id="scene_abc123")`}</code>
      </pre>

      <h3>REST API</h3>
      <pre className="docs-code">
        <code>{`# Search scenes
curl -X POST http://localhost:8100/v1/scenes/search \\
  -H "Content-Type: application/json" \\
  -d '{"query": "architecture discussion", "user_id": "u123"}'

# Get a specific scene
curl "http://localhost:8100/v1/scenes/<scene_id>"`}</code>
      </pre>

      <h2>Dual Retrieval</h2>
      <p>
        Episodic scenes work alongside semantic search. When you search, both indexes
        run in parallel:
      </p>
      <ol>
        <li><strong>Semantic path</strong> — Vector similarity across memory embeddings</li>
        <li><strong>Episodic path</strong> — Scene matching by topic, time, and context</li>
      </ol>
      <p>
        Results found by <em>both</em> pathways receive an intersection boost, surfacing
        the most contextually relevant memories.
      </p>

      <h2>Character Profiles</h2>
      <p>
        Agents and users that appear in scenes are tracked as characters. Over time,
        character profiles accumulate information about each participant's role, expertise,
        and interaction patterns — enriching scene retrieval with "who was involved" context.
      </p>

      <div className="callout tip">
        For the CAST research paper, see <a href="/docs/research/">Research</a>. For how
        scenes integrate with the full memory stack, see <a href="/docs/how-memory-works/">How Memory Works</a>.
      </div>
    </section>
  );
};
