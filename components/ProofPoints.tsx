import React from 'react';
import { StatsCount } from './scrollx/StatsCount';

export const ProofPoints: React.FC = () => {
  const stats = React.useMemo(
    () => [
      {
        value: 45,
        prefix: '~',
        suffix: '%',
        label: 'less storage vs store‑everything baselines',
      },
      {
        value: 5,
        suffix: ' paths',
        label: 'per memory via EchoMem encoding',
      },
      {
        value: 0,
        suffix: ' cloud',
        label: 'required — fully local‑first',
      },
    ],
    []
  );

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
          Lean memory. Higher recall.
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
