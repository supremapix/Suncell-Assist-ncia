import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

document.head.querySelectorAll('link[rel="canonical"],meta[name="description"],meta[name="robots"],meta[property^="og:"],meta[name^="twitter:"],script[type="application/ld+json"]').forEach(node => node.remove());

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
