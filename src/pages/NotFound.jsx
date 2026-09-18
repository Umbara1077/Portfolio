import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout.jsx';
import { simpleFooter } from '../components/Footers.jsx';
import { usePageStyle } from '../hooks/usePageStyle.js';
import { usePageMeta } from '../hooks/usePageMeta.js';
import notFoundCss from './NotFound.css?inline';

export default function NotFound() {
    usePageStyle(notFoundCss);
    usePageMeta({ title: '404 - Page Not Found' });

    return (
        <Layout orbs={1} footer={simpleFooter}>
            <section className="nf-page">
                <div className="nf-card">
                    <img src="/images/logo.jpg" alt="Precision Pixel Innovations" />
                    <span className="nf-code">404 Error</span>
                    <h1>Page Not Found</h1>
                    <p>Oops! The page you are looking for doesn't exist. It might have been moved or deleted.</p>
                    <Link to="/" className="btn btn-primary">
                        Go back to the homepage
                    </Link>
                </div>
            </section>
        </Layout>
    );
}
