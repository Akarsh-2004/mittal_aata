import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { initNativeApp } from './utils/nativeApp';

initNativeApp();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
