import { Link } from 'react-router-dom';
import { usePageStyle, useWebFontsDisabled } from '../hooks/usePageStyle.js';
import { usePageMeta } from '../hooks/usePageMeta.js';
import notFoundCss from './NotFound.css?inline';

export default function NotFound() {
    usePageStyle(notFoundCss);
    useWebFontsDisabled();
    usePageMeta({ title: '404 - Page Not Found' });

    return (
        <div className="container">
            <img src="/images/logo.jpg" alt="Precison Pixel Studios" />
            <h1>404 Error</h1>
            <h2>Page Not Found</h2>
            <p>Oops! The page you are looking for doesn't exist. It might have been moved or deleted.</p>
            <p>
                Go back to the <Link to="/">homepage</Link>
            </p>
        </div>
    );
}
