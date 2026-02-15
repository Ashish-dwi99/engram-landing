import React from 'react';

export const KnowledgeGraph: React.FC = () => {
  return (
    <section>
      <h1>Knowledge Graph</h1>
      <p>
        Engram's knowledge graph extracts entities from memories and links them across
        a graph structure. This surfaces related facts that an agent never explicitly
        searched for — enabling multi-hop reasoning and contextual discovery.
      </p>

      <h2>Entity Extraction</h2>
      <p>
        When a memory is added, the LLM extracts named entities: people, projects,
        technologies, organizations, locations, and concepts. These become nodes in
        the graph:
      </p>
      <pre className="docs-code">
        <code>{`# Adding a memory triggers entity extraction
memory.add("Alice leads the Python migration at Acme Corp", user_id="u123")

# Entities extracted:
# → Alice (person)
# → Python (technology)
# → Acme Corp (organization)
# → migration (concept)`}</code>
      </pre>

      <h2>Entity Linking</h2>
      <p>
        Extracted entities are linked to existing nodes in the graph. If the same entity
        appears in multiple memories, those memories become connected through shared entities.
        This creates a web of relationships:
      </p>
      <pre className="docs-code">
        <code>{`Memory 1: "Alice leads the Python migration"
Memory 2: "The Python migration deadline is Friday"
Memory 3: "Alice prefers async patterns"

# Graph connections:
# Alice → Memory 1, Memory 3
# Python migration → Memory 1, Memory 2
# Searching for "Alice" also surfaces Memory 2 (via "Python migration")`}</code>
      </pre>

      <h2>Graph Traversal</h2>
      <p>
        The graph enables multi-hop reasoning. When searching, Engram can follow entity
        links to find indirectly related memories:
      </p>
      <pre className="docs-code">
        <code>{`# Get memories related to a specific memory
related = memory.get_related_memories(memory_id="abc123")

# Get all entities for a memory
entities = memory.get_memory_entities(memory_id="abc123")

# Get all memories mentioning an entity
alice_mems = memory.get_entity_memories(entity_name="Alice")

# Get the full graph around a memory
graph = memory.get_memory_graph(memory_id="abc123")`}</code>
      </pre>

      <h2>API Methods</h2>
      <table className="docs-table">
        <thead>
          <tr>
            <th>Method</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>get_related_memories(memory_id)</code></td>
            <td>Find memories connected through shared entities</td>
          </tr>
          <tr>
            <td><code>get_memory_entities(memory_id)</code></td>
            <td>List all entities extracted from a memory</td>
          </tr>
          <tr>
            <td><code>get_entity_memories(entity_name)</code></td>
            <td>Find all memories mentioning a specific entity</td>
          </tr>
          <tr>
            <td><code>get_memory_graph(memory_id)</code></td>
            <td>Get the full entity-relationship graph around a memory</td>
          </tr>
          <tr>
            <td><code>get_graph_stats()</code></td>
            <td>Graph statistics — node count, edge count, density</td>
          </tr>
        </tbody>
      </table>

      <h2>REST API</h2>
      <pre className="docs-code">
        <code>{`# Get graph stats
curl "http://localhost:8100/v1/graph/stats?user_id=u123"

# Get entities for a memory
curl "http://localhost:8100/v1/memories/<memory_id>/entities"

# Get memories for an entity
curl "http://localhost:8100/v1/entities/Alice/memories?user_id=u123"`}</code>
      </pre>

      <h2>Enabling the Knowledge Graph</h2>
      <pre className="docs-code">
        <code>{`from engram import Engram

memory = Engram(
    enable_graph=True  # Enabled by default
)`}</code>
      </pre>

      <div className="callout tip">
        The knowledge graph works alongside <a href="/docs/fadem/">EchoMem</a> and
        <a href="/docs/scenes/">Episodic Scenes</a> for multi-pathway retrieval.
        See <a href="/docs/how-memory-works/">How Memory Works</a> for the full data flow.
      </div>
    </section>
  );
};
