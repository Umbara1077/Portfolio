import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { ThemeProvider } from './theme.jsx';

// The static pages put header, main, footer and the nav drawer directly in
// <body>. A wrapper element would change both the z-index order and the text
// anti-aliasing, so the app owns <body> itself.
createRoot(document.body).render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>
);
