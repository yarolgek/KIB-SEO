import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import './index.css';

export function createApp() {
  return (
    <StrictMode>
      <BrowserRouter>
        <ThemeProvider>
          <LanguageProvider>
            <App />
          </LanguageProvider>
        </ThemeProvider>
      </BrowserRouter>
    </StrictMode>
  );
}

// Mount the app on the client side
if (typeof window !== 'undefined') {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    createRoot(rootElement).render(createApp());
  }

  window.addEventListener('load', () => {
    setTimeout(() => {
      document.dispatchEvent(new Event('render-event'));
    }, 0);
  });
}