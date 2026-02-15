import React from 'react';

export const MemoryInspector: React.FC = () => {
  return (
    <section>
      <h1>Memory Inspector</h1>
      <p>
        The Memory Inspector lets you browse, search, and inspect all stored memories
        from the dashboard. See memory strength, decay status, echo encodings, and
        category assignments at a glance.
      </p>

      <h2>Browsing Memories</h2>
      <p>
        The inspector shows a paginated list of all memories for a given user, sorted by
        strength (strongest first). Each memory card displays:
      </p>
      <ul>
        <li><strong>Content</strong> — The stored text</li>
        <li><strong>Layer</strong> — SML (short-term) or LML (long-term)</li>
        <li><strong>Strength</strong> — Current decay value (0.0 to 1.0)</li>
        <li><strong>Categories</strong> — Assigned category tags</li>
        <li><strong>Agent</strong> — Which agent created the memory</li>
        <li><strong>Created / Last accessed</strong> — Timestamps</li>
      </ul>

      <h2>Semantic Search</h2>
      <p>
        Use the search bar to find memories by meaning, not just keywords. The search runs
        Engram's dual retrieval engine — semantic vector search combined with episodic scene
        matching. Results matching both pathways get boosted.
      </p>

      <h2>Category Tree</h2>
      <p>
        The sidebar displays the category hierarchy discovered by CategoryMem. Categories
        emerge automatically from content and organize up to 3 levels deep. Click a category
        to filter memories belonging to that branch.
      </p>

      <h2>Memory Detail</h2>
      <p>Click any memory to expand its detail view:</p>
      <ul>
        <li><strong>Echo encodings</strong> — All 5 retrieval paths: raw text, paraphrase, keywords, implications, question form</li>
        <li><strong>Strength history</strong> — How the memory's strength has changed over time</li>
        <li><strong>Access count</strong> — Number of times this memory was retrieved</li>
        <li><strong>Decay rate</strong> — Current SML or LML decay parameters</li>
        <li><strong>Related entities</strong> — Knowledge graph connections</li>
        <li><strong>Scene membership</strong> — Which episodic scenes reference this memory</li>
      </ul>

      <h2>Memory Stats</h2>
      <p>
        The stats panel at the top shows aggregate information:
      </p>
      <table className="docs-table">
        <thead>
          <tr>
            <th>Stat</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Total memories</strong></td>
            <td>Count of all stored memories</td>
          </tr>
          <tr>
            <td><strong>SML / LML split</strong></td>
            <td>How many are short-term vs long-term</td>
          </tr>
          <tr>
            <td><strong>Categories</strong></td>
            <td>Number of active category nodes</td>
          </tr>
          <tr>
            <td><strong>Entities</strong></td>
            <td>Knowledge graph entity count</td>
          </tr>
          <tr>
            <td><strong>Scenes</strong></td>
            <td>Number of episodic scenes formed</td>
          </tr>
          <tr>
            <td><strong>Avg strength</strong></td>
            <td>Average decay strength across all memories</td>
          </tr>
        </tbody>
      </table>

      <div className="callout tip">
        Use the REST API for programmatic access to the same data:
        <code>GET /v1/memories</code>, <code>GET /v1/stats</code>, <code>GET /v1/categories</code>.
        See <a href="/docs/rest-api/">REST API</a> for details.
      </div>
    </section>
  );
};
