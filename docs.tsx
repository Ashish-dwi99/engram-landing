import React from 'react';
import ReactDOM from 'react-dom/client';
import { DocsApp } from './components/DocsApp';
import './index.css';
import './docs.css';

const rootElement = document.getElementById('docs-root');
if (!rootElement) throw new Error("Could not find docs root element to mount to");

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <DocsApp />
  </React.StrictMode>
);
