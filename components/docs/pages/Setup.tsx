import React from 'react';

export const Setup: React.FC = () => {
  return (
    <section>
      <h1>Setup</h1>
      <p>Initialize Engram in minutes and start storing memory for your agents.</p>

      <h2>Quick Usage</h2>
      <pre className="docs-code">
        <code>{`from engram import Engram

memory = Engram()
memory.add("User prefers Python over JavaScript", user_id="u123")
results = memory.search("programming preferences", user_id="u123")`}</code>
      </pre>

      <h2>Memory Layers</h2>
      <pre className="docs-code">
        <code>{`# Short-term (SML): Fast decay, recent context
# Long-term (LML): Slow decay, important facts

important = memory.get_all(user_id="u123", layer="lml")
memory.promote(memory_id="abc123")  # Manually promote critical memory`}</code>
      </pre>

      <div className="callout tip">
        Tip: For production workloads, configure vector storage and embeddings. See the Reference
        page for full configuration options.
      </div>
    </section>
  );
};
