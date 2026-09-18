import { Link } from 'react-router-dom';
import { NavLinkList } from './NavLinkList.jsx';
import { ThemeToggle } from './ThemeToggle.jsx';

export function Header({ links, activeHref, logoAlt, onMenuToggle, menuOpen }) {
    return (
        <header>
            <nav className="site-navigation" aria-label="Main">
                <Link to="/" className="brand-link" aria-label="Dante Corso home">
                    <img src="/images/logo.jpg" alt={logoAlt} className="logo" width="40" height="40" />
                    <span className="brand-text">
                        <span className="brand-name">Dante Corso</span>
                        <span className="brand-role">Cloud Integration Engineer</span>
                    </span>
                </Link>

                <NavLinkList links={links} activeHref={activeHref} className="nav-links" />

                <div className="header-actions">
                    <ThemeToggle />
                    <Link to="/contact" className="btn btn-primary btn-sm header-cta">
                        Get in touch
                    </Link>
                    <button
                        type="button"
                        className="menu-toggle"
                        aria-expanded={menuOpen ? 'true' : 'false'}
                        aria-controls="side-nav"
                        aria-label="Open menu"
                        onClick={(event) => {
                            event.stopPropagation();
                            onMenuToggle();
                        }}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                            <path d="M4 7h16M4 12h16M4 17h16" />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    );
}
