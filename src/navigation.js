export const SOLAR_SYSTEM_LINK = {
    href: 'https://solar.dantecorso.com',
    label: 'Solar System \u2197',
    external: true
};

export const MAIN_LINKS = [
    { href: '/index.html', label: 'Home' },
    { href: '/about.html', label: 'About' },
    { href: '/portfolio.html', label: 'Portfolio' },
    { href: '/skills.html', label: 'Skills' },
    { href: '/resume.html', label: 'Resume' },
    { href: '/contact.html', label: 'Contact' },
    SOLAR_SYSTEM_LINK
];

/* The portfolio page has always omitted the Solar System link. */
export const PORTFOLIO_LINKS = MAIN_LINKS.slice(0, 6);

export const CYBER_SECURITY_LINKS = [
    { href: '/index.html', label: 'Home' },
    { href: '/about.html', label: 'About Me' },
    { href: '/skills.html', label: 'Skills' },
    { href: '/portfolio.html', label: 'Portfolio' },
    { href: '/devops-architecture.html', label: 'DevOps & Architecture' },
    { href: '/resume.html', label: 'Resume' },
    { href: '/contact.html', label: 'Contact' },
    { href: '/job-request.html', label: 'Submit Request' },
    SOLAR_SYSTEM_LINK
];
