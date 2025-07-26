import { createRoot } from 'react-dom/client';
import { App } from './app';
import { AppTheme } from './theme/app-theme';

const container = document.getElementById('root');

if (!container) throw new Error('root container not found');

const root = createRoot(container);

root.render(
  <AppTheme>
    <App />
  </AppTheme>
);
