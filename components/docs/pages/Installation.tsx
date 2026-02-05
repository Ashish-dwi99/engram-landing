import React from 'react';

export const Installation: React.FC = () => {
  return (
    <section>
      <h1>Installation</h1>
      <p>Install Engram with all optional dependencies for a full local setup.</p>

      <pre className="docs-code">
        <code>{`# Clone the repository
git clone https://github.com/Ashish-dwi99/Engram.git
cd Engram

# Install with all dependencies
pip install -e ".[all]"

# Set your API key
export GEMINI_API_KEY="your-key"  # or OPENAI_API_KEY`}</code>
      </pre>

      <p>Or install directly from GitHub:</p>
      <pre className="docs-code">
        <code>{`pip install "engram[all] @ git+https://github.com/Ashish-dwi99/Engram.git"`}</code>
      </pre>

      <div className="callout note">
        Note: Gemini is the default provider. You can also use OpenAI or local Ollama.
      </div>
    </section>
  );
};
