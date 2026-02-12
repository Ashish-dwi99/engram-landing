import React, { useState } from 'react';

export const Waitlist: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Replace with your Formspree endpoint
    try {
      await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  };

  return (
    <div id="cloud" className="max-w-4xl mx-auto px-6 md:px-12 text-center">
      <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-gray-400 mb-4">
        Coming Soon
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
        <span
          style={{
            background: 'linear-gradient(135deg, #e8722a 0%, #e85d45 30%, #d4607a 60%, #ff8a2b 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Hosted Cloud
        </span>
      </h2>
      <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto mb-8">
        Zero setup. Sync across devices. Team dashboards and memory analytics.
        All 32 MCP tools + REST API — without managing infrastructure or API keys.
      </p>

      {submitted ? (
        <p className="text-sm font-medium text-gray-700">
          You're on the list. We'll be in touch.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="w-full sm:flex-1 px-4 py-2.5 text-sm border border-black/10 rounded-sm bg-white focus:outline-none focus:border-black/30 transition-colors"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2.5 bg-black text-white text-[11px] font-semibold tracking-[0.2em] uppercase rounded-sm hover:bg-gray-900 transition-colors"
          >
            Join Waitlist
          </button>
        </form>
      )}
    </div>
  );
};
