import React from 'react';
import { StatsCount } from './scrollx/StatsCount';

export const ProofPoints: React.FC = () => {
  const stats = React.useMemo(
    () => [
      {
        value: 32,
        suffix: '',
        label: 'MCP tools — retrieval, writes, handoff, decay, signals, profiles',
      },
      {
        value: 44,
        suffix: '+',
        label: 'REST API endpoints with session auth and staged writes',
      },
      {
        value: 76.1,
        suffix: '%',
        label: 'LoCoMo benchmark — vs 68.3% baseline (arXiv 2601.18642)',
      },
    ],
    []
  );

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
          Your memory kernel,{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #e8722a 0%, #e85d45 30%, #d4607a 60%, #ff8a2b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            by the numbers.
          </span>
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
