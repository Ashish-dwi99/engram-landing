import React from 'react';

export const Research: React.FC = () => {
  return (
    <section>
      <h1>FadeMem Research</h1>
      <p>
        Engram is based on the paper <strong>FadeMem: Biologically‑Inspired Forgetting for Efficient Agent Memory</strong> (arXiv:2601.18642).
      </p>
      <p>
        Read the paper:{' '}
        <a href="https://arxiv.org/abs/2601.18642" target="_blank" rel="noreferrer">
          arxiv.org/abs/2601.18642
        </a>
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
