import React from 'react';

export const Research: React.FC = () => {
  return (
    <section>
      <h1>Research</h1>
      <p>
        Engram is built on two research papers that address how AI memory should actually work:
      </p>
      <p>
        <strong>FadeMem: Biologically-Inspired Forgetting for Efficient Agent Memory</strong> — {' '}
        <a href="https://arxiv.org/abs/2601.18642" target="_blank" rel="noreferrer">
          arXiv:2601.18642
        </a>
        <br />
        Bio-inspired decay, spaced repetition, sleep consolidation. 45% storage reduction with better retrieval.
      </p>
      <p>
        <strong>CAST: Contextual Associative Scene Theory</strong> — {' '}
        <a href="https://arxiv.org/abs/2602.06051" target="_blank" rel="noreferrer">
          arXiv:2602.06051
        </a>
        <br />
        Scene-based episodic memory that clusters interactions by time, place, and topic shifts. Your AI doesn't just remember facts — it remembers when and where it learned them.
      </p>

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
            <td>Storage Reduction</td>
            <td>~45%</td>
          </tr>
          <tr>
            <td>Multi-hop Reasoning</td>
            <td>+12% accuracy</td>
          </tr>
          <tr>
            <td>Retrieval Precision</td>
            <td>+8% on LTI-Bench</td>
          </tr>
        </tbody>
      </table>

      <h2>Biological Inspiration</h2>
      <table className="docs-table">
        <thead>
          <tr>
            <th>Neuroscience Concept</th>
            <th>Engram Implementation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ebbinghaus Forgetting Curve</td>
            <td>Exponential decay in <a href="/docs/fadem/">FadeMem</a></td>
          </tr>
          <tr>
            <td>Spaced Repetition</td>
            <td>Access boosts memory strength</td>
          </tr>
          <tr>
            <td>Sleep Consolidation</td>
            <td>SML → LML promotion during sleep cycles</td>
          </tr>
          <tr>
            <td>Production Effect</td>
            <td>Echo encoding improves retention in <a href="/docs/fadem/">EchoMem</a></td>
          </tr>
          <tr>
            <td>Elaborative Encoding</td>
            <td>Deeper processing = stronger memory (importance-based depth)</td>
          </tr>
          <tr>
            <td>Episodic Memory</td>
            <td>CAST <a href="/docs/scenes/">scene formation</a> by time, place, topic</td>
          </tr>
          <tr>
            <td>Complementary Learning Systems</td>
            <td>CLS distillation for multi-session consolidation</td>
          </tr>
        </tbody>
      </table>

      <div className="callout tip">
        For implementation details, see <a href="/docs/fadem/">FadeMem &amp; Decay</a>,
        <a href="/docs/scenes/">Episodic Scenes</a>, and <a href="/docs/how-memory-works/">How Memory Works</a>.
      </div>
    </section>
  );
};
