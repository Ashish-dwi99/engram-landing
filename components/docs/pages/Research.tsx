import React from 'react';

export const Research: React.FC = () => {
  return (
    <section>
      <h1>Research</h1>
      <p>
        Engram is built on two papers that address how AI memory should actually work:
      </p>
      <p>
        <strong>FadeMem: Biologically‑Inspired Forgetting for Efficient Agent Memory</strong> — {' '}
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
      <ul>
        <li>Ebbinghaus Forgetting Curve → Exponential decay</li>
        <li>Spaced Repetition → Access boosts strength</li>
        <li>Sleep Consolidation → SML → LML promotion</li>
        <li>Production Effect → Echo encoding improves retention</li>
        <li>Elaborative Encoding → Deeper processing = stronger memory</li>
      </ul>
    </section>
  );
};
