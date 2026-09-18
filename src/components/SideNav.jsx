import { Link } from 'react-router-dom';
import { NavLinkList } from './NavLinkList.jsx';

export function SideNav({ links, activeHref, isOpen, isNavigating, showCloseButton = true, onClose, onLinkClick }) {
    const classes = ['side-nav'];
    if (isOpen) classes.push('is-open');
    if (isNavigating) classes.push('is-navigating');

    return (
        <div id="side-nav" className={classes.join(' ')} aria-hidden={isOpen ? 'false' : 'true'}>
            <div className="side-nav-head">
                <span className="meta">Menu</span>
                {showCloseButton && (
                    <button type="button" className="close-btn" aria-label="Close menu" onClick={onClose}>
                        &times;
                    </button>
                )}
            </div>
            <NavLinkList links={links} activeHref={activeHref} onLinkClick={onLinkClick} />
            <div className="side-nav-foot">
                <Link to="/contact" className="btn btn-primary" onClick={onLinkClick}>
                    Get in touch
                </Link>
                <a className="btn" href="/pdf/Dante_Corso_Resume.pdf" target="_blank" rel="noopener" onClick={onLinkClick}>
                    Download résumé
                </a>
            </div>
        </div>
    );
}
