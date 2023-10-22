import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import App from './app/App';
import {ErrorBoundary} from './app/providers/ErrorBoundary';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Container root is not find');
}

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </BrowserRouter>,
);
