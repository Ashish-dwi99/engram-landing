import React from 'react';

export const HowMemoryWorks: React.FC = () => {
  return (
    <section>
      <h1>How Memory Works</h1>
      <p>
        Engram's memory kernel is a 4-layer stack that processes, stores, and retrieves
        memories using biologically-inspired algorithms. This page explains the data flow
        for adding, searching, and decaying memories.
      </p>

      <h2>The Memory Stack</h2>
      <table className="docs-table">
        <thead>
          <tr>
            <th>Layer</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Knowledge Graph</strong></td>
            <td>Entity extraction and linking — surfaces related facts across memories</td>
          </tr>
          <tr>
            <td><strong>CategoryMem</strong></td>
            <td>Dynamic hierarchical organization — categories emerge from content</td>
          </tr>
          <tr>
            <td><strong>EchoMem</strong></td>
            <td>Multi-modal encoding — 5 retrieval paths per memory</td>
          </tr>
          <tr>
            <td><strong>FadeMem</strong></td>
            <td>Ebbinghaus decay, dual-layer storage (SML/LML), reference-aware GC</td>
          </tr>
        </tbody>
      </table>

      <h2>Add Flow</h2>
      <p>When you call <code>memory.add(content, user_id)</code>:</p>
      <pre className="docs-code">
        <code>{`1. Memory extraction
   Text → LLM extracts discrete facts and entities

2. EchoMem encoding
   Each fact → 5 views: raw, paraphrase, keywords, implications, question-form
   Importance scoring → critical facts get 1.6x strength multiplier

3. CategoryMem categorization
   Content → matched to existing categories or new ones are created
   Hierarchies up to 3 levels deep

4. Knowledge graph
   Entities extracted → linked to existing entity nodes
   New relationships discovered

5. Vector embedding
   All views → embedded and stored in the vector index

6. Storage
   Memory lands in SML (short-term) with initial strength 1.0
   Staged writes go through verification first`}</code>
      </pre>

      <h2>Search Flow</h2>
      <p>When you call <code>memory.search(query, user_id)</code>:</p>
      <pre className="docs-code">
        <code>{`1. Query embedding
   Query text → vector embedding

2. Dual retrieval (parallel)
   a. Semantic search — vector similarity across all echo views
   b. Episodic search — CAST scene matching by time/place/topic

3. Category boosting
   Results in matching categories get relevance boost

4. Intersection promotion
   Results found by BOTH semantic and episodic paths get boosted

5. Re-ranking
   Echo-based re-ranking using multiple view similarities

6. Context packet
   Token-budgeted results with scene citations returned`}</code>
      </pre>

      <h2>Decay Flow</h2>
      <p>When decay runs (manually or on schedule):</p>
      <pre className="docs-code">
        <code>{`1. Ebbinghaus decay
   Each memory's strength reduces based on time since last access
   SML decays faster (rate 0.15) than LML (rate 0.02)

2. Promotion check
   SML memories accessed 3+ times → promoted to LML

3. Forgetting threshold
   Memories below strength 0.1 → candidates for removal

4. Reference-aware GC
   If other agents still reference a memory → skip removal

5. Category decay
   Unused category branches lose strength
   Empty categories pruned`}</code>
      </pre>

      <h2>SML vs LML</h2>
      <table className="docs-table">
        <thead>
          <tr>
            <th></th>
            <th>SML (Short-term)</th>
            <th>LML (Long-term)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Entry</strong></td>
            <td>All new memories start here</td>
            <td>Promoted from SML after repeated access</td>
          </tr>
          <tr>
            <td><strong>Decay rate</strong></td>
            <td>Fast (0.15 default)</td>
            <td>Slow (0.02 default)</td>
          </tr>
          <tr>
            <td><strong>Purpose</strong></td>
            <td>Working memory, recent context</td>
            <td>Stable knowledge, confirmed facts</td>
          </tr>
          <tr>
            <td><strong>Promotion</strong></td>
            <td>After 3 accesses → LML</td>
            <td>Can be demoted back to SML</td>
          </tr>
        </tbody>
      </table>

      <h2>Staged Writes</h2>
      <p>
        Agent writes land in staging by default. The verification pipeline checks for
        invariant contradictions, duplicates, and PII risk before committing:
      </p>
      <ul>
        <li><strong>High-trust agents</strong> (&gt;0.85) — auto-merge</li>
        <li><strong>Medium-trust</strong> — queued for daily digest review</li>
        <li><strong>Low-trust</strong> — require explicit user approval</li>
        <li><strong>Conflicts</strong> — both versions stashed for manual resolution</li>
      </ul>

      <div className="callout tip">
        For deep dives into specific layers, see <a href="/docs/fadem/">FadeMem &amp; Decay</a>,
        <a href="/docs/scenes/">Episodic Scenes</a>, and <a href="/docs/knowledge-graph/">Knowledge Graph</a>.
      </div>
    </section>
  );
};
