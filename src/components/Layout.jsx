import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BgOrbs } from './BgOrbs.jsx';
import { Header } from './Header.jsx';
import { SideNav } from './SideNav.jsx';
import { SiteFooter } from './Footers.jsx';
import { MAIN_LINKS } from '../navigation.js';

export function Layout({
    orbs = 3,
    links = MAIN_LINKS,
    sideNavLinks,
    activeHref,
    sideNavActiveHref,
    showSideNavClose = true,
    logoAlt = 'Dante Corso',
    mainClassName,
    footer = 'simple',
    children
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [isNavigating, setIsNavigating] = useState(false);
    const location = useLocation();

    const close = useCallback(() => setIsOpen(false), []);

    const toggle = useCallback(() => {
        setIsOpen((current) => {
            if (current) return false;
            setIsNavigating(false);
            return true;
        });
    }, []);

    // `is-navigating` drops the drawer without a transition when a link is
    // followed, so the panel never lingers over the next page.
    const handleLinkClick = useCallback(() => {
        setIsNavigating(true);
        setIsOpen(false);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.key === 'Escape') close();
        };
        document.addEventListener('keydown', onKeyDown);
        window.addEventListener('pagehide', close);
        window.addEventListener('pageshow', close);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
            window.removeEventListener('pagehide', close);
            window.removeEventListener('pageshow', close);
        };
    }, [close]);

    // Lock page scroll while the mobile panel is open.
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const backdropClasses = [isOpen && 'is-visible', isNavigating && 'is-navigating'].filter(Boolean).join(' ');
    const footerVariant = typeof footer === 'string' ? footer : 'simple';

    return (
        <>
            <BgOrbs count={orbs} />

            <Header links={links} activeHref={activeHref} logoAlt={logoAlt} onMenuToggle={toggle} menuOpen={isOpen} />

            <SideNav
                links={sideNavLinks || links}
                activeHref={sideNavActiveHref || activeHref}
                isOpen={isOpen}
                isNavigating={isNavigating}
                showCloseButton={showSideNavClose}
                onClose={close}
                onLinkClick={handleLinkClick}
            />

            <main id="main" className={mainClassName}>{children}</main>

            <SiteFooter variant={footerVariant} />

            <div id="nav-backdrop" className={backdropClasses || undefined} onClick={close}></div>
        </>
    );
}
