/* Line icons drawn to match the 24px, 1.6-stroke style used across the site. */

const base = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true'
};

export const ArrowRight = (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
);

export const ArrowUpRight = (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 12L12 4M6 4h6v6" />
    </svg>
);

export const IconSparkles = (
    <svg {...base}>
        <path d="M12 3l1.8 4.9L19 9.7l-5.2 1.8L12 16.4l-1.8-4.9L5 9.7l5.2-1.8zM18.5 15l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" />
    </svg>
);

export const IconCloud = (
    <svg {...base}>
        <path d="M7 18h9.5a3.5 3.5 0 000-7 5 5 0 00-9.7 1.2A3.4 3.4 0 007 18z" />
    </svg>
);

export const IconCode = (
    <svg {...base}>
        <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />
    </svg>
);

export const IconScreen = (
    <svg {...base}>
        <path d="M3.5 5h17v10.5h-17z M9 20h6 M12 15.5V20" />
    </svg>
);

export const IconPhone = (
    <svg {...base}>
        <path d="M8 3h8a1.5 1.5 0 011.5 1.5v15A1.5 1.5 0 0116 21H8a1.5 1.5 0 01-1.5-1.5v-15A1.5 1.5 0 018 3z M10.5 18h3" />
    </svg>
);

export const IconLink = (
    <svg {...base}>
        <path d="M10 14a3.5 3.5 0 005 0l3-3a3.5 3.5 0 00-5-5l-1 1 M14 10a3.5 3.5 0 00-5 0l-3 3a3.5 3.5 0 005 5l1-1" />
    </svg>
);

export const IconServer = (
    <svg {...base}>
        <path d="M4 5h16v5H4zM4 14h16v5H4z M7.5 7.5h.01 M7.5 16.5h.01 M11 7.5h3 M11 16.5h3" />
    </svg>
);

export const IconShield = (
    <svg {...base}>
        <path d="M12 3l7 3v5.5c0 4.3-2.9 8.2-7 9.5-4.1-1.3-7-5.2-7-9.5V6l7-3z M9.2 12.2l2 2 3.6-3.9" />
    </svg>
);

export const IconWrench = (
    <svg {...base}>
        <path d="M15 4.5a4.5 4.5 0 00-5.6 5.6L4 15.5V20h4.5l5.4-5.4A4.5 4.5 0 0019.5 9L17 11.5 14.5 9 17 6.5z" />
    </svg>
);

export const IconPhoneCall = (
    <svg {...base}>
        <path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.25c1.1.37 2.3.57 3.6.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1z" />
    </svg>
);

export const IconDatabase = (
    <svg {...base}>
        <path d="M12 3c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3z M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6 M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </svg>
);

export const IconStore = (
    <svg {...base}>
        <path d="M4 9l1.2-4h13.6L20 9 M4 9h16v2a2.5 2.5 0 01-5 0 2.5 2.5 0 01-5 0 2.5 2.5 0 01-5 0V9z M5.5 13v7h13v-7 M10 20v-4h4v4" />
    </svg>
);

export const IconMail = (
    <svg {...base}>
        <path d="M4 6h16v12H4z M4 7l8 6 8-6" />
    </svg>
);

export const IconGraduation = (
    <svg {...base}>
        <path d="M3 9l9-4 9 4-9 4-9-4z M7 11v4.5c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V11 M21 9v6" />
    </svg>
);

export const IconQuote = (
    <svg {...base}>
        <path d="M6 15a3 3 0 010-6h1V7a4 4 0 00-4 4v6h6v-4H6z M15 15a3 3 0 010-6h1V7a4 4 0 00-4 4v6h6v-4h-3z" />
    </svg>
);
