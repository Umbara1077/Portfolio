import { Link } from 'react-router-dom';

export function NavLinkList({ links, activeHref, className, onLinkClick }) {
    return (
        <ul className={className}>
            {links.map((link) => (
                <li key={link.href}>
                    {link.external ? (
                        <a
                            href={link.href}
                            target="_blank"
                            className={link.href === activeHref ? 'active-link' : undefined}
                            onClick={onLinkClick}
                        >
                            {link.label}
                        </a>
                    ) : (
                        <Link
                            to={link.href}
                            className={link.href === activeHref ? 'active-link' : undefined}
                            onClick={onLinkClick}
                        >
                            {link.label}
                        </Link>
                    )}
                </li>
            ))}
        </ul>
    );
}
