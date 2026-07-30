import { NavLinkList } from './NavLinkList.jsx';

export function SideNav({ links, activeHref, isOpen, isNavigating, showCloseButton, onClose, onLinkClick }) {
    const classes = ['side-nav'];
    if (isOpen) classes.push('is-open');
    if (isNavigating) classes.push('is-navigating');

    return (
        <div id="side-nav" className={classes.join(' ')} aria-hidden={isOpen ? 'false' : 'true'}>
            {showCloseButton && (
                <span className="close-btn" onClick={onClose}>
                    &times;
                </span>
            )}
            <NavLinkList links={links} activeHref={activeHref} onLinkClick={onLinkClick} />
        </div>
    );
}
