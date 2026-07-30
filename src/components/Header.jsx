import { Link } from 'react-router-dom';
import { NavLinkList } from './NavLinkList.jsx';
import { ThemeToggle } from './ThemeToggle.jsx';

export function Header({ links, activeHref, logoAlt, onMenuToggle }) {
    return (
        <header>
            <nav>
                <Link to="/index.html">
                    <img src="/images/logo.jpg" alt={logoAlt} className="logo" />
                </Link>
                <div
                    className="menu-toggle"
                    onClick={(event) => {
                        event.stopPropagation();
                        onMenuToggle();
                    }}
                >
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <NavLinkList links={links} activeHref={activeHref} className="nav-links" />
                <ThemeToggle />
            </nav>
        </header>
    );
}
