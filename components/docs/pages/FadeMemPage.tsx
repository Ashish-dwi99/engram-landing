import React from 'react';

export const FadeMemPage: React.FC = () => {
  return (
    <section>
      <h1>FadeMem &amp; Decay</h1>
      <p>
        FadeMem implements biologically-inspired forgetting based on the Ebbinghaus forgetting
        curve. Memories decay naturally over time, promote through repeated access, and get
        garbage collected when no longer useful — reducing storage by ~45% while improving
        retrieval precision.
      </p>

      <h2>Ebbinghaus Forgetting Curve</h2>
      <p>
        Memory strength decays exponentially over time. The formula:
      </p>
      <pre className="docs-code">
        <code>{`strength(t) = initial_strength × e^(-decay_rate × time_since_last_access)

# SML: decay_rate = 0.15 (fast — working memory)
# LML: decay_rate = 0.02 (slow — long-term knowledge)`}</code>
      </pre>
      <p>
        Each time a memory is accessed, its strength is boosted and the decay timer resets.
        This mirrors spaced repetition — frequently accessed memories persist longer.
      </p>

      <h2>Dual-Layer Storage</h2>
      <table className="docs-table">
        <thead>
          <tr>
            <th>Layer</th>
            <th>Decay Rate</th>
            <th>Promotion Rule</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>SML</strong> (Short-term)</td>
            <td>0.15</td>
            <td>3+ accesses → promotes to LML</td>
          </tr>
          <tr>
            <td><strong>LML</strong> (Long-term)</td>
            <td>0.02</td>
            <td>Can be demoted back if unused for extended periods</td>
          </tr>
        </tbody>
      </table>
      <pre className="docs-code">
        <code>{`# Manually promote a memory
memory.promote(memory_id="abc123")

# Manually demote
memory.demote(memory_id="abc123")

# Get only long-term memories
important = memory.get_all(user_id="u123", layer="lml")`}</code>
      </pre>

      <h2>Reference-Aware Garbage Collection</h2>
      <p>
        When a memory's strength drops below the forgetting threshold (default 0.1), it becomes
        a candidate for removal. But FadeMem checks whether other agents still reference it
        before deleting:
      </p>
      <ul>
        <li>If referenced by other agents → skip, preserve the memory</li>
        <li>If unreferenced and below threshold → remove</li>
        <li>Stale reference links are cleaned up during sleep cycles</li>
      </ul>

      <h2>CLS Distillation</h2>
      <p>
        Inspired by the Complementary Learning Systems theory from neuroscience, Engram can
        consolidate related short-term memories into distilled long-term summaries during
        sleep cycles. This is an optional feature for multi-session use:
      </p>
      <pre className="docs-code">
        <code>{`# Run a sleep cycle with distillation
curl -X POST http://localhost:8100/v1/sleep/run \\
  -d '{
    "user_id": "u123",
    "apply_decay": true,
    "cleanup_stale_refs": true
  }'`}</code>
      </pre>

      <h2>EchoMem — Multi-Modal Encoding</h2>
      <p>
        EchoMem encodes each memory through 5 retrieval paths, so different search
        phrasings can find the same information:
      </p>
      <table className="docs-table">
        <thead>
          <tr>
            <th>Path</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Raw text</strong></td>
            <td>"User prefers Python over JavaScript"</td>
          </tr>
          <tr>
            <td><strong>Paraphrase</strong></td>
            <td>"The user's preferred programming language is Python"</td>
          </tr>
          <tr>
            <td><strong>Keywords</strong></td>
            <td>"python, javascript, preference, programming"</td>
          </tr>
          <tr>
            <td><strong>Implications</strong></td>
            <td>"Python libraries and tools are preferred for this user"</td>
          </tr>
          <tr>
            <td><strong>Question form</strong></td>
            <td>"What programming language does the user prefer?"</td>
          </tr>
        </tbody>
      </table>
      <p>
        Importance-based depth controls encoding intensity: critical information gets
        a 1.6x strength multiplier (deep encoding), routine facts get 1.0x (shallow).
      </p>

      <h2>CategoryMem — Dynamic Organization</h2>
      <p>
        Categories emerge from content rather than being predefined. CategoryMem builds
        a hierarchy up to 3 levels deep:
      </p>
      <ul>
        <li>New memories are matched to existing categories or trigger new ones</li>
        <li>Frequently accessed categories get strengthened</li>
        <li>Unused category branches decay and are eventually pruned</li>
        <li>Category matching boosts retrieval relevance</li>
      </ul>

      <h2>Key Results</h2>
      <table className="docs-table">
        <thead>
          <tr>
            <th>Metric</th>
            <th>Improvement</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Storage reduction</td>
            <td>~45%</td>
          </tr>
          <tr>
            <td>Multi-hop reasoning</td>
            <td>+12% accuracy</td>
          </tr>
          <tr>
            <td>Retrieval precision</td>
            <td>+8% on LTI-Bench</td>
          </tr>
        </tbody>
      </table>

      <h2>Configuration</h2>
      <pre className="docs-code">
        <code>{`from engram.configs.base import FadeMemConfig, EchoMemConfig, CategoryMemConfig

fadem = FadeMemConfig(
    enable_forgetting=True,
    sml_decay_rate=0.15,        # Fast decay for short-term
    lml_decay_rate=0.02,        # Slow decay for long-term
    promotion_access_threshold=3, # Accesses needed for SML → LML
    forgetting_threshold=0.1,   # Below this → candidate for removal
)

echo = EchoMemConfig(
    enable_echo=True,
    auto_depth=True,            # Automatic importance-based depth
    shallow_multiplier=1.0,
    medium_multiplier=1.3,
    deep_multiplier=1.6,
)

category = CategoryMemConfig(
    enable_categories=True,
    auto_categorize=True,
    enable_category_decay=True,
    max_category_depth=3,
)`}</code>
      </pre>

      <div className="callout tip">
        For the full research background, see <a href="/docs/research/">Research</a>. For an
        overview of all layers working together, see <a href="/docs/how-memory-works/">How Memory Works</a>.
      </div>
    </section>
  );
};
