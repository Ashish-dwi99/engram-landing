import React from 'react';

type NavItem = {
  label: string;
  href: string;
  key: string;
};

type NavGroup = {
  title: string;
  items: NavItem[];
};

const navGroups: NavGroup[] = [
  {
    title: 'Getting Started',
    items: [
      { label: 'Introduction', href: '/docs/', key: 'introduction' },
      { label: 'Installation', href: '/docs/installation/', key: 'installation' },
      { label: 'Setup', href: '/docs/setup/', key: 'setup' },
    ],
  },
  {
    title: 'Integrations',
    items: [
      { label: 'MCP Server', href: '/docs/mcp-server/', key: 'mcp-server' },
      { label: 'Agents Integration', href: '/docs/agents-integration/', key: 'agents-integration' },
    ],
  },
  {
    title: 'Platform',
    items: [
      { label: 'Architecture', href: '/docs/architecture/', key: 'architecture' },
      { label: 'FadeMem Research', href: '/docs/research/', key: 'research' },
    ],
  },
  {
    title: 'Reference',
    items: [
      { label: 'API + REST + CLI', href: '/docs/reference/', key: 'reference' },
    ],
  },
];

export const DocsLayout: React.FC<{
  activeKey: string;
  children: React.ReactNode;
}> = ({ activeKey, children }) => {
  return (
    <div className="docs-page">
      <header className="docs-header">
        <a className="docs-logo" href="/docs/">
          <svg
            width="18"
            height="18"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <line x1="5" y1="6" x2="26" y2="6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="9" y1="11" x2="29" y2="11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="6" y1="16" x2="22" y2="16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="10" y1="21" x2="30" y2="21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="4" y1="26" x2="20" y2="26" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <span>Engram Docs</span>
        </a>
        <div className="docs-header-actions">
          <a
            className="docs-cta-secondary"
            href="https://github.com/Ashish-dwi99/Engram"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a className="docs-cta" href="/">Back to Engram</a>
        </div>
      </header>

      <div className="docs-layout">
        <aside className="docs-sidebar">
          <h4>Documentation</h4>
          <nav className="docs-nav">
            {navGroups.map((group) => (
              <div key={group.title} className="docs-nav-group">
                <div className="docs-nav-title">{group.title}</div>
                {group.items.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    className={item.key === activeKey ? 'active' : ''}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </aside>

        <main className="docs-content">
          {children}
          <div className="docs-footer">
            Built for AI agents that need to remember what matters.
          </div>
        </main>
      </div>
    </div>
  );
};
