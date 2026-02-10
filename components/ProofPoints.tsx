import React from 'react';
import { StatsCount } from './scrollx/StatsCount';

export const ProofPoints: React.FC = () => {
  const stats = React.useMemo(
    () => [
      {
        value: 45,
        prefix: '~',
        suffix: '%',
        label: 'less storage via bio‑inspired forgetting',
      },
      {
        value: 0,
        suffix: ' cold starts',
        label: 'when switching agents — handoff bus passes full context',
      },
      {
        value: 76.1,
        suffix: '%',
        label: 'Locomo benchmark score vs 68.3% baseline',
      },
    ],
    []
  );

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
          Your memory kernel, by the numbers.
        </h2>
        <p className="text-sm text-gray-500 max-w-sm">
          Benchmarks in docs; results vary by workload.
        </p>
      </div>

      <StatsCount
        showDividers={false}
        stats={stats}
      />
    </div>
  );
};
