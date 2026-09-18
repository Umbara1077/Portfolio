import { Link } from 'react-router-dom';
import { MAIN_LINKS, PROJECT_LINKS } from '../navigation.js';
import { FACEBOOK_ICON, GITHUB_ICON, INSTAGRAM_ICON, LINKEDIN_ICON, X_ICON } from './connect.jsx';

const YEAR = 2026;
const COPYRIGHT = `© ${YEAR} Dante Corso — Precision Pixel Innovations. All rights reserved.`;
const DISCLAIMER =
    'All logos and trademarks are the property of their respective owners. Their use on this site does not imply endorsement or affiliation.';

const SOCIAL = [
    { href: 'https://www.linkedin.com/in/dante-corso/', label: 'LinkedIn', icon: LINKEDIN_ICON },
    { href: 'https://github.com/Umbara1077', label: 'GitHub', icon: GITHUB_ICON },
    { href: 'https://www.x.com/Umbara1077?s=09', label: 'X', icon: X_ICON },
    { href: 'https://www.instagram.com/precisionpixelinnovations/', label: 'Instagram', icon: INSTAGRAM_ICON },
    { href: 'https://www.facebook.com/profile.php?id=61560372401424&mibextid=ZbWKwL', label: 'Facebook', icon: FACEBOOK_ICON }
];

/* Marker values kept for the pages that still pass them; the footer decides what to print. */
export const simpleFooter = 'simple';
export const footerWithDisclaimer = 'disclaimer';
export const legacyFooter = 'simple';

export function SiteFooter({ variant = 'simple' }) {
    return (
        <footer className="site-footer">
            <div className="shell">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link to="/" className="brand-link" aria-label="Dante Corso home">
                            <img src="/images/logo.jpg" alt="" className="logo" width="44" height="44" />
                            <span className="brand-text">
                                <span className="brand-name">Dante Corso</span>
                                <span className="brand-role">Precision Pixel Innovations</span>
                            </span>
                        </Link>
                        <p>
                            Cloud Integration Engineer building event-driven Azure systems, practical AI workflows, and
                            the full-stack applications people use every day.
                        </p>
                        <address>
                            <div>Williamstown, New Jersey</div>
                            <div>
                                <a href="tel:+18567230942">(856) 723-0942</a>
                            </div>
                            <div>
                                <a href="mailto:corsodante8@gmail.com">corsodante8@gmail.com</a>
                            </div>
                        </address>
                    </div>

                    <nav className="footer-col" aria-label="Explore">
                        <h2 className="meta">Explore</h2>
                        <ul>
                            {MAIN_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link to={link.href}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <nav className="footer-col" aria-label="Live projects">
                        <h2 className="meta">Live projects</h2>
                        <ul>
                            {PROJECT_LINKS.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                                        {link.label.replace(' ↗', '')}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <nav className="footer-col" aria-label="More">
                        <h2 className="meta">More</h2>
                        <ul>
                            <li>
                                <Link to="/devops-architecture">DevOps &amp; Architecture</Link>
                            </li>
                            <li>
                                <a href="/pdf/Dante_Corso_Resume.pdf" target="_blank" rel="noopener">
                                    R&eacute;sum&eacute; (PDF)
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="footer-bottom">
                    <div className="footer-bottom-row">
                        <p>{COPYRIGHT}</p>
                        <div className="footer-social" aria-label="Social profiles">
                            {SOCIAL.map((item) => (
                                <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label} title={item.label}>
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                    {variant === 'disclaimer' && <p className="footer-fine">{DISCLAIMER}</p>}
                </div>
            </div>
        </footer>
    );
}
