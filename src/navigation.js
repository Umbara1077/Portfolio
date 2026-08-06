export const SOLAR_SYSTEM_LINK = {
    href: 'https://solar.dantecorso.com',
    label: 'Solar System \u2197',
    external: true
};

export const FLIGHT_STUDY_LINK = {
    href: 'https://flight.dantecorso.com',
    label: 'Flight Study \u2197',
    external: true
};

export const MAIN_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/skills', label: 'Skills' },
    { href: '/resume', label: 'Resume' },
    { href: '/contact', label: 'Contact' },
    FLIGHT_STUDY_LINK,
    SOLAR_SYSTEM_LINK
];

export const PORTFOLIO_LINKS = [
    ...MAIN_LINKS.slice(0, 6),
    FLIGHT_STUDY_LINK,
    SOLAR_SYSTEM_LINK
];

export const CYBER_SECURITY_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Me' },
    { href: '/skills', label: 'Skills' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/devops-architecture', label: 'DevOps & Architecture' },
    { href: '/resume', label: 'Resume' },
    { href: '/contact', label: 'Contact' },
    { href: '/job-request', label: 'Submit Request' },
    FLIGHT_STUDY_LINK,
    SOLAR_SYSTEM_LINK
];
