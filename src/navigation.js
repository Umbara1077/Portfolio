export const SOLAR_SYSTEM_LINK = {
    href: 'https://solar.dantecorso.com',
    label: 'Solar System \u2197',
    external: true
};

export const MAIN_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/skills', label: 'Skills' },
    { href: '/resume', label: 'Resume' },
    { href: '/contact', label: 'Contact' },
    SOLAR_SYSTEM_LINK
];

/* The portfolio page has always omitted the Solar System link. */
export const PORTFOLIO_LINKS = MAIN_LINKS.slice(0, 6);

export const CYBER_SECURITY_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Me' },
    { href: '/skills', label: 'Skills' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/devops-architecture', label: 'DevOps & Architecture' },
    { href: '/resume', label: 'Resume' },
    { href: '/contact', label: 'Contact' },
    { href: '/job-request', label: 'Submit Request' },
    SOLAR_SYSTEM_LINK
];
