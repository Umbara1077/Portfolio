import { useState } from 'react';
import { Layout } from '../components/Layout.jsx';
import { InView } from '../components/InView.jsx';
import { footerWithDisclaimer } from '../components/Footers.jsx';
import { usePageStyle } from '../hooks/usePageStyle.js';
import { usePageMeta } from '../hooks/usePageMeta.js';
import { PORTFOLIO_LINKS } from '../navigation.js';
import portfolioCss from './Portfolio.css?inline';

const DESCRIPTION =
    'Production systems by Dante Corso: event-driven Azure call automation, multi-vendor network monitoring, AI document processing, and a nine-system retail platform. Live demos included.';

const FILTERS = [
    { id: 'all', label: 'All' },
    { id: 'featured', label: '\u2605 Featured' },
    { id: 'ai', label: 'AI & Automation' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'cloud', label: 'Cloud & Networking' },
    { id: 'live', label: 'Live Demos' }
];

/* Kept in card order so the empty state can be derived without touching the DOM. */
const CARD_CATEGORIES = [
    'featured ai cloud',
    'featured cloud',
    'featured ai',
    'featured live',
    'cloud',
    'fullstack',
    'cloud',
    'fullstack live',
    'fullstack live',
    'fullstack',
    'fullstack',
    'fullstack',
    'fullstack live',
    'fullstack',
    'fullstack',
    'fullstack',
    'fullstack live',
    'fullstack',
    'fullstack'
];

const matches = (cat, filter) => filter === 'all' || cat.split(/\s+/).includes(filter);

function PortfolioCard({ cat, theme, featured = false, filter, filterUsed, style, children }) {
    const match = matches(cat, filter);
    const classes = ['portfolio-item', featured && 'featured', 'reveal', theme, !match && 'pf-hidden']
        .filter(Boolean)
        .join(' ');

    return (
        <InView
            as="article"
            className={classes}
            data-cat={cat}
            threshold={0.06}
            forceVisible={filterUsed && match}
            style={style}
        >
            {children}
        </InView>
    );
}

function LiveStatus({ children }) {
    return (
        <span className="pf-status live">
            <span className="pf-live-dot"></span>
            {children}
        </span>
    );
}

function PrivateStatus({ children }) {
    return (
        <span className="pf-status private">
            <span className="pf-live-dot"></span>
            {children}
        </span>
    );
}

function CardTags({ tags }) {
    return (
        <div className="card-tags">
            {tags.map((tag) => (
                <span className="card-tag" key={tag}>
                    {tag}
                </span>
            ))}
        </div>
    );
}

function Highlights({ items }) {
    return (
        <ul className="pf-highlights">
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
}

function DolceLogo() {
    return (
        <a href="https://dolcevitasewell.com" target="_blank">
            <img src="/images/dolce-logo.png" alt="Dolce Vita Gelato" className="card-logo" loading="lazy" />
        </a>
    );
}

function LiveApiDemo() {
    const [label, setLabel] = useState('Try a Live API');
    const [disabled, setDisabled] = useState(false);
    const [weather, setWeather] = useState(null);

    const tryWeatherApi = () => {
        setDisabled(true);
        setLabel('Fetching...');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    fetch(`/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`)
                        .then((r) => (r.ok ? r.json() : Promise.reject()))
                        .then((d) => {
                            setWeather(
                                <>
                                    <strong>{d.name}</strong>: {d.main.temp}&deg;F &mdash; {d.weather[0].description}
                                </>
                            );
                            setLabel('Try Again');
                            setDisabled(false);
                        })
                        .catch(() => {
                            setWeather('Could not load weather.');
                            setLabel('Try a Live API');
                            setDisabled(false);
                        });
                },
                () => {
                    setWeather('Location access denied.');
                    setLabel('Try a Live API');
                    setDisabled(false);
                }
            );
        } else {
            setWeather('Geolocation not supported.');
            setDisabled(false);
        }
    };

    return (
        <>
            <button id="getWeatherBtn" disabled={disabled} onClick={tryWeatherApi}>
                {label}
            </button>
            <div id="weather">{weather}</div>
        </>
    );
}

export default function Portfolio() {
    usePageStyle(portfolioCss);
    usePageMeta({
        title: 'Portfolio \u2014 Dante Corso',
        description: DESCRIPTION,
        canonical: 'https://dantecorso.com/portfolio',
        ogTitle: 'Portfolio \u2014 Dante Corso',
        ogDescription: DESCRIPTION,
        ogUrl: 'https://dantecorso.com/portfolio'
    });

    const [filter, setFilter] = useState('all');
    const [filterUsed, setFilterUsed] = useState(false);

    const shown = CARD_CATEGORIES.filter((cat) => matches(cat, filter)).length;
    // Section banners/labels only make sense in the full, ordered view.
    const structuralHidden = filter !== 'all' ? ' pf-hidden' : '';

    const cardProps = { filter, filterUsed };

    return (
        <Layout
            orbs={3}
            links={PORTFOLIO_LINKS}
            activeHref="/portfolio"
            footer={footerWithDisclaimer}
        >
            <section id="portfolio">
                <InView className="pf-hero reveal" threshold={0.06}>
                    <span className="pf-eyebrow">Selected Work</span>
                    <h1>Projects That Ship &amp; Scale</h1>
                    <p className="pf-sub">
                        A cross-section of production systems I've designed and built — enterprise AI &amp; Azure
                        automation, real-time full-stack platforms for real clients, and live 3D web experiences you can
                        open right now.
                    </p>
                    <div className="pf-stats">
                        <div className="pf-stat">
                            <b>20+</b>
                            <span>Projects Shipped</span>
                        </div>
                        <div className="pf-stat">
                            <b>5</b>
                            <span>Live Deployments</span>
                        </div>
                        <div className="pf-stat">
                            <b>AI &middot; Azure</b>
                            <span>Cloud &amp; Automation</span>
                        </div>
                        <div className="pf-stat">
                            <b>Real</b>
                            <span>Client Work</span>
                        </div>
                    </div>
                </InView>

                <InView className="pf-filters reveal" threshold={0.06} id="pfFilters">
                    {FILTERS.map((item) => (
                        <button
                            key={item.id}
                            className={`pf-filter-btn${filter === item.id ? ' active' : ''}`}
                            data-filter={item.id}
                            onClick={() => {
                                setFilter(item.id);
                                setFilterUsed(true);
                            }}
                        >
                            {item.label}
                        </button>
                    ))}
                </InView>

                <div className="portfolio-grid" id="pfGrid">
                    {/* ============ FEATURED ============ */}

                    {/* FEATURED: ACS Automation Pipeline */}
                    <PortfolioCard cat="featured ai cloud" theme="card-theme-ai" featured {...cardProps}>
                        <div className="pf-badges">
                            <span className="pf-flag">&#9733; Featured</span>
                            <PrivateStatus>Private Internal Tool</PrivateStatus>
                        </div>
                        <span className="pf-company">E3 IT Services</span>
                        <div className="pf-featured-head">
                            <h2>ACS Call Transcription &amp; Time-Entry Automation</h2>
                        </div>
                        <p className="short-desc">
                            A three-stage Azure Functions pipeline that automates the full lifecycle of a support call —
                            answers incoming Azure Communication Services calls, plays consent audio, records the
                            conversation, and stores WAV chunks to Blob Storage. A second app transcribes via Azure
                            Speech batch transcription and sends the transcript to Azure OpenAI for structured analysis;
                            a third resolves the engineer to an Autotask resource, finds their active ticket, and posts a
                            professional time-entry note automatically.
                        </p>
                        <Highlights
                            items={[
                                '3-stage event-driven Azure pipeline',
                                'Azure OpenAI structured extraction',
                                'End-to-end idempotency tracking',
                                'Zero-touch Autotask ticket notes'
                            ]}
                        />
                        <CardTags
                            tags={[
                                'Azure Functions',
                                'Azure OpenAI',
                                'Azure Speech',
                                'Python',
                                'Event Grid',
                                'Autotask'
                            ]}
                        />
                        <div className="card-overlay">
                            <span className="card-private-badge">&#128274; Private Internal Tool</span>
                        </div>
                    </PortfolioCard>

                    {/* FEATURED: Unified Backup System */}
                    <PortfolioCard cat="featured cloud" theme="card-theme-default" featured {...cardProps}>
                        <div className="pf-badges">
                            <span className="pf-flag">&#9733; Featured</span>
                            <PrivateStatus>Private Internal Tool</PrivateStatus>
                        </div>
                        <span className="pf-company">E3 IT Services</span>
                        <div className="pf-featured-head">
                            <h2>Unified Backup System</h2>
                        </div>
                        <p className="short-desc">
                            A production Azure Functions platform that monitors roughly 525 backup assets across Datto
                            BCDR, Datto Endpoint, Datto SaaS Protection, and Axcient x360Recover. Nine Node.js functions
                            normalize every vendor's failures into one stable issue model, isolate source outages and
                            stale data, and preserve daily history without allowing missing data to appear healthy.
                        </p>
                        <Highlights
                            items={[
                                '525 backup assets across four platforms',
                                'Stable one-ticket-per-issue automation',
                                '96 dependency-free deployment tests',
                                'Daily Teams reports and live triage console'
                            ]}
                        />
                        <CardTags tags={['Azure Functions', 'Node.js', 'Datto', 'Axcient', 'Blob Storage']} />
                        <div className="card-overlay">
                            <span className="card-private-badge">&#128274; Private Internal Tool</span>
                        </div>
                    </PortfolioCard>

                    {/* FEATURED: Funari AI PDF */}
                    <PortfolioCard cat="featured ai" theme="card-theme-finance" featured {...cardProps}>
                        <div className="pf-badges">
                            <span className="pf-flag">&#9733; Featured</span>
                            <PrivateStatus>Private Client Tool</PrivateStatus>
                        </div>
                        <div className="pf-featured-head">
                            <img
                                src="/images/funari-logo.png"
                                alt="Funari Public Adjusters"
                                className="card-logo"
                                loading="lazy"
                            />
                            <h2>Funari Public Adjusters — AI PDF Platform</h2>
                        </div>
                        <p className="short-desc">
                            A secure React + Firebase platform built for a real insurance-adjusting firm. Adjusters
                            upload carrier estimate PDFs; the app runs Google Vision OCR, then uses Gemini AI to generate
                            side-by-side discrepancy reports that surface underpaid line items — exportable to PDF or
                            Excel. What used to take hours of manual line-by-line comparison now takes seconds.
                        </p>
                        <Highlights
                            items={[
                                'Gemini AI discrepancy analysis',
                                'Google Vision OCR on carrier PDFs',
                                'One-click PDF & Excel export',
                                'Firebase-secured, per-user data'
                            ]}
                        />
                        <CardTags tags={['React', 'Gemini AI', 'Vision OCR', 'Firebase']} />
                        <div className="card-overlay">
                            <span className="card-private-badge">
                                &#128274; Private Client Tool — walkthrough on request
                            </span>
                        </div>
                    </PortfolioCard>

                    {/* FEATURED: 3D Solar System (LIVE) */}
                    <PortfolioCard
                        cat="featured live"
                        theme="card-theme-space"
                        featured
                        style={{ borderColor: 'rgba(100,80,200,0.4)' }}
                        {...cardProps}
                    >
                        <div className="pf-badges">
                            <span className="pf-flag">&#9733; Featured</span>
                            <LiveStatus>Live Now</LiveStatus>
                        </div>
                        <div className="pf-featured-head">
                            <img
                                src="/images/solarlogo.png"
                                alt="3D Solar System"
                                className="card-logo"
                                loading="lazy"
                                style={{ filter: 'drop-shadow(0 0 10px rgba(150,120,255,0.8))' }}
                            />
                            <h2>Interactive 3D Solar System</h2>
                        </div>
                        <p className="short-desc">
                            A real-time, fully interactive solar system rendered in the browser with Three.js and WebGL —
                            orbit every planet, glide through the asteroid belt, and travel out into deep space. A
                            from-scratch 3D engine showcase: custom camera controls, orbital mechanics, lighting, and
                            thousands of GPU-drawn stars, all running at 60fps with no plugins.
                        </p>
                        <Highlights
                            items={[
                                'Three.js / WebGL, 60fps',
                                'Real orbital motion & scale',
                                'Free-fly camera controls',
                                'GPU-drawn starfield'
                            ]}
                        />
                        <CardTags tags={['Three.js', 'WebGL', 'JavaScript']} />
                        <div
                            className="card-overlay"
                            style={{ background: 'rgba(3,3,15,0.98)', borderTopColor: 'rgba(100,80,200,0.4)' }}
                        >
                            <a
                                href="https://solar.dantecorso.com"
                                target="_blank"
                                className="card-cta"
                                style={{ color: '#c8b8ff' }}
                            >
                                Launch Experience &#8594;
                            </a>
                        </div>
                    </PortfolioCard>

                    {/* ============ MORE PROJECTS ============ */}
                    <div className={`pf-section-label${structuralHidden}`} data-label="">
                        More Projects
                    </div>

                    {/* Network Manager Portal */}
                    <PortfolioCard cat="cloud" theme="card-theme-default" {...cardProps}>
                        <div className="pf-badges">
                            <PrivateStatus>Private Internal Tool</PrivateStatus>
                        </div>
                        <span className="pf-company">E3 IT Services</span>
                        <h2>Network Manager Portal</h2>
                        <p className="short-desc">
                            Network monitoring and analytics portal covering UniFi access points, switches, and gateways
                            alongside SonicWall firewalls across multiple client sites. Tracks real-time latency,
                            bandwidth, and uptime with instant site-down alerts and automatic ticket creation. CVE
                            monitoring flags known vulnerabilities on active firmware — a single pane of glass for a
                            multi-site network.
                        </p>
                        <CardTags
                            tags={['UniFi', 'SonicWall', 'CVE Monitoring', 'Network Analytics', 'Auto Ticketing']}
                        />
                        <div className="card-overlay">
                            <span className="card-private-badge">&#128274; Private Internal Tool</span>
                        </div>
                    </PortfolioCard>

                    {/* Personal Information Dashboard (available on request — sign-in protected) */}
                    <PortfolioCard cat="fullstack" theme="card-theme-ai" {...cardProps}>
                        <div className="pf-badges">
                            <PrivateStatus>By Request</PrivateStatus>
                        </div>
                        <img
                            src="/images/logo.jpg"
                            alt="Information Dashboard"
                            className="card-logo"
                            loading="lazy"
                        />
                        <h2>Personal Information Dashboard</h2>
                        <p className="short-desc">
                            Centralized React + TypeScript dashboard pulling live data from stock markets, weather APIs,
                            cybersecurity CVE feeds, and tech news — all in one compact, fast interface built on TanStack
                            Query.
                        </p>
                        <CardTags tags={['React', 'TypeScript', 'TanStack Query']} />
                        <div className="card-overlay">
                            <span className="card-private-badge">
                                &#128274; Sign-in protected — available on request
                            </span>
                        </div>
                    </PortfolioCard>

                    {/* On-Call IT Engineer Management */}
                    <PortfolioCard cat="cloud" theme="card-theme-default" {...cardProps}>
                        <div className="pf-badges">
                            <PrivateStatus>Private Internal Tool</PrivateStatus>
                        </div>
                        <span className="pf-company">E3 IT Services</span>
                        <h2>On-Call IT Engineer Management System</h2>
                        <p className="short-desc">
                            Internal platform for managing on-call rotations and engineer availability — when an on-call
                            ticket comes in, it identifies the assigned engineer, sends real-time notifications, and
                            delivers a full ticket breakdown: priority, affected systems, history, and context. Engineers
                            are informed and ready before they even pick up the phone.
                        </p>
                        <CardTags tags={['Notifications', 'Autotask', 'Automation', 'On-Call Management']} />
                        <div className="card-overlay">
                            <span className="card-private-badge">&#128274; Private Internal Tool</span>
                        </div>
                    </PortfolioCard>

                    {/* 3D Print Shop (LIVE) */}
                    <PortfolioCard cat="fullstack live" theme="card-theme-shop" {...cardProps}>
                        <div className="pf-badges">
                            <LiveStatus>Live</LiveStatus>
                        </div>
                        <img src="/images/3dlogo.png" alt="3D Print Shop" className="card-logo" loading="lazy" />
                        <h2>3D Print Shop — E-Commerce Storefront</h2>
                        <p className="short-desc">
                            Full e-commerce storefront for premium multi-color 3D prints — product catalog with search
                            and sort, Stripe Checkout via Cloud Functions, and server-side wholesale discount codes.
                        </p>
                        <CardTags tags={['Firebase', 'Stripe', 'Cloud Functions']} />
                        <div className="card-overlay">
                            <a href="https://shop.dantecorso.com" target="_blank" className="card-cta">
                                Visit Shop &#8594;
                            </a>
                        </div>
                    </PortfolioCard>

                    {/* API Integrations Demo (interactive/live) */}
                    <PortfolioCard cat="fullstack live" theme="card-theme-default" {...cardProps}>
                        <div className="pf-badges">
                            <LiveStatus>Interactive</LiveStatus>
                        </div>
                        <img
                            src="/images/api-def.jpg"
                            alt="API Integrations"
                            className="card-logo"
                            loading="lazy"
                            style={{ borderRadius: '6px' }}
                        />
                        <h2>Live API Integrations Demo</h2>
                        <p className="short-desc">
                            Interactive demo showcasing Stripe payment flows, Google Maps location services, and
                            real-time weather data via OpenWeatherMap — try a live location-based API call directly from
                            this card.
                        </p>
                        <CardTags tags={['Stripe', 'Google Maps', 'OpenWeatherMap']} />
                        <LiveApiDemo />
                        <div className="card-overlay">
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                Click above to see it in action
                            </span>
                        </div>
                    </PortfolioCard>

                    {/* P&S Ravioli Inventory */}
                    <PortfolioCard cat="fullstack" theme="card-theme-default" {...cardProps}>
                        <div className="pf-badges">
                            <PrivateStatus>Private</PrivateStatus>
                        </div>
                        <img src="/images/P&SLogo.png" alt="P&S Ravioli" className="card-logo" loading="lazy" />
                        <h2>P&amp;S Ravioli — Inventory Management</h2>
                        <p className="short-desc">
                            Web-based inventory platform for P&amp;S Ravioli with auto-generated UPC barcodes,
                            multi-location stock tracking, real-time analytics dashboards, and role-based access for
                            drivers and managers.
                        </p>
                        <CardTags tags={['Firestore', 'Analytics', 'Multi-Location']} />
                        <div className="card-overlay">
                            <span className="card-private-badge">&#128274; Private Client Tool</span>
                        </div>
                    </PortfolioCard>

                    {/* ============ FLAGSHIP: DOLCE VITA GELATO ============ */}
                    <InView
                        className={`pf-group-banner reveal${structuralHidden}`}
                        threshold={0.06}
                        data-banner=""
                        data-cat="fullstack"
                    >
                        <img src="/images/dolce-logo.png" alt="Dolce Vita Gelato" loading="lazy" />
                        <div>
                            <span className="pf-group-eyebrow">Flagship Client Platform</span>
                            <h2>Dolce Vita Gelato — Full Business Operating System</h2>
                            <p>
                                An entire company's software stack, designed, built, and maintained end-to-end: nine
                                integrated systems spanning in-store digital signage, self-order kiosks, mobile ordering
                                with Stripe &amp; geofenced arrival alerts, staff tooling, recipe R&amp;D, and inventory
                                — all sharing one real-time Firebase backend so a change in one place updates everywhere
                                instantly.
                            </p>
                            <div className="pf-group-stats">
                                <span>9 Integrated Systems</span>
                                <span>Real-Time Firebase Sync</span>
                                <span>Stripe Payments</span>
                                <span>Geofencing</span>
                                <span>React &middot; TS &middot; Vanilla JS</span>
                            </div>
                        </div>
                    </InView>

                    {/* DVG — Command Center */}
                    <PortfolioCard cat="fullstack" theme="card-theme-gelato" {...cardProps}>
                        <div className="pf-badges">
                            <PrivateStatus>Private</PrivateStatus>
                        </div>
                        <DolceLogo />
                        <h2>DVG — Command Center</h2>
                        <p className="short-desc">
                            The private nerve center for all Dolce Vita Gelato operations — a Firebase-authenticated
                            dashboard with 9 animated morphing-blob buttons that launch every internal system: Digital
                            Signage &amp; Gelato Management, the Self-Order Kiosk, Mobile Ordering, Order Manager, Staff
                            Passport, Recipe Lab, Inventory, and more. Every DVG tool flows through here.
                        </p>
                        <CardTags tags={['Firebase Auth', 'JavaScript', 'Admin Dashboard']} />
                        <div className="card-overlay">
                            <span className="card-private-badge">&#128274; Private Admin Tool</span>
                        </div>
                    </PortfolioCard>

                    {/* DVG — Digital Signage & Gelato Management */}
                    <PortfolioCard cat="fullstack" theme="card-theme-gelato" {...cardProps}>
                        <div className="pf-badges">
                            <PrivateStatus>Private</PrivateStatus>
                        </div>
                        <DolceLogo />
                        <h2>DVG — Digital Signage &amp; Gelato Management</h2>
                        <p className="short-desc">
                            A dual-purpose private platform — the customer-facing side drives the in-store display
                            screens with real-time Firebase sync, looping video backgrounds, and auto-switching seasonal
                            layouts. The admin side is a full gelato management system: control active flavors, toggle
                            sold-out items, update pricing, manage daily specials, and push changes live to every display
                            instantly.
                        </p>
                        <CardTags tags={['Firebase', 'Real-Time Sync', 'Gelato Management', 'Admin Panel']} />
                        <div className="card-overlay">
                            <span className="card-private-badge">&#128274; Private Admin Tool</span>
                        </div>
                    </PortfolioCard>

                    {/* DVG — Mobile Ordering (LIVE) */}
                    <PortfolioCard cat="fullstack live" theme="card-theme-gelato" {...cardProps}>
                        <div className="pf-badges">
                            <LiveStatus>Live</LiveStatus>
                        </div>
                        <DolceLogo />
                        <h2>DVG — Mobile Ordering</h2>
                        <p className="short-desc">
                            Customer-facing mobile ordering app built for Dolce Vita Gelato — features an animated
                            Italian-themed UI, a full cart and checkout flow powered by Stripe, and GPS-based geofenced
                            check-in that automatically pings staff the moment a customer arrives. Orders land directly
                            in the Order Manager in real time.
                        </p>
                        <CardTags tags={['Firebase', 'Stripe', 'Geolocation']} />
                        <div className="card-overlay">
                            <a href="https://dolcevitasewell-mobileorder.com" target="_blank" className="card-cta">
                                View Project &#8594;
                            </a>
                        </div>
                    </PortfolioCard>

                    {/* DVG — Self-Order Kiosk */}
                    <PortfolioCard cat="fullstack" theme="card-theme-gelato" {...cardProps}>
                        <div className="pf-badges">
                            <PrivateStatus>Private</PrivateStatus>
                        </div>
                        <DolceLogo />
                        <h2>DVG — Self-Order Kiosk</h2>
                        <p className="short-desc">
                            In-store touchscreen ordering kiosk designed for the DVG counter — displays looping branded
                            video content when idle, then switches to a full interactive menu on first touch. Sold-out
                            items are toggled from the admin panel and reflect on the kiosk instantly. Orders feed into
                            the same real-time queue as mobile and walk-in orders.
                        </p>
                        <CardTags tags={['JavaScript', 'Firebase', 'Touch UX']} />
                        <div className="card-overlay">
                            <span className="card-private-badge">&#128274; Private Internal Tool</span>
                        </div>
                    </PortfolioCard>

                    {/* DVG — Order Manager */}
                    <PortfolioCard cat="fullstack" theme="card-theme-gelato" {...cardProps}>
                        <div className="pf-badges">
                            <PrivateStatus>Private</PrivateStatus>
                        </div>
                        <DolceLogo />
                        <h2>DVG — Order Manager</h2>
                        <p className="short-desc">
                            Staff-facing order management console that pulls mobile app, kiosk, and walk-in orders into a
                            single real-time Firestore-backed queue. Geofencing automatically surfaces an arrival alert
                            the moment a mobile customer enters the pickup zone — no manual check-in needed.
                        </p>
                        <CardTags tags={['Firebase', 'Real-Time', 'Geofencing']} />
                        <div className="card-overlay">
                            <span className="card-private-badge">&#128274; Private Internal Tool</span>
                        </div>
                    </PortfolioCard>

                    {/* DVG — Staff Passport */}
                    <PortfolioCard cat="fullstack" theme="card-theme-gelato" {...cardProps}>
                        <div className="pf-badges">
                            <PrivateStatus>Private</PrivateStatus>
                        </div>
                        <DolceLogo />
                        <h2>DVG — Staff Passport</h2>
                        <p className="short-desc">
                            Role-gated internal staff portal for Dolce Vita Gelato employees — secured with Firebase
                            Authentication so only approved team members get in. Once authenticated, staff get one-click
                            access to their assigned operational tools, schedules, shift resources, and internal
                            workflows. Roles control exactly what each employee can see and do.
                        </p>
                        <CardTags tags={['Firebase Auth', 'Firebase', 'Internal Tool']} />
                        <div className="card-overlay">
                            <span className="card-private-badge">&#128274; Private Internal Tool</span>
                        </div>
                    </PortfolioCard>

                    {/* DVG — Interactive Demo (LIVE) */}
                    <PortfolioCard cat="fullstack live" theme="card-theme-gelato" {...cardProps}>
                        <div className="card-demo-ribbon">DEMO</div>
                        <div className="pf-badges">
                            <LiveStatus>Try It Live</LiveStatus>
                        </div>
                        <DolceLogo />
                        <h2>DVG — Interactive Demo</h2>
                        <p className="short-desc">
                            A fully interactive demo environment showcasing the Gelato Management System, Digital Signage
                            display, and Mobile Ordering app — all running on realistic fake data. Explore how flavors
                            are managed, how the in-store displays update in real time, and how the mobile ordering flow
                            works, without touching any live production data.
                        </p>
                        <CardTags tags={['Live Demo', 'Firebase', 'Fake Data']} />
                        <div className="card-overlay">
                            <a href="https://gelato-system-demo.web.app" target="_blank" className="card-cta">
                                Try the Demo &#8594;
                            </a>
                        </div>
                    </PortfolioCard>

                    {/* DVG — Recipe & Flavor Lab */}
                    <PortfolioCard cat="fullstack" theme="card-theme-gelato" {...cardProps}>
                        <div className="pf-badges">
                            <PrivateStatus>Private</PrivateStatus>
                        </div>
                        <DolceLogo />
                        <h2>DVG — Recipe &amp; Flavor Lab</h2>
                        <p className="short-desc">
                            A React + TypeScript internal tool that replaces the gelato recipe workbook — browse and
                            create flavors, select bases, manage ingredients, and let the app handle all the scaling math
                            automatically. Built with Vite, Tailwind, and Firestore so recipes are always live and
                            accessible to the team.
                        </p>
                        <CardTags tags={['React', 'TypeScript', 'Firebase', 'Tailwind']} />
                        <div className="card-overlay">
                            <span className="card-private-badge">&#128274; Private Internal Tool</span>
                        </div>
                    </PortfolioCard>

                    {/* DVG — Inventory & Supply Management */}
                    <PortfolioCard cat="fullstack" theme="card-theme-gelato" {...cardProps}>
                        <div className="pf-badges">
                            <PrivateStatus>Private</PrivateStatus>
                        </div>
                        <DolceLogo />
                        <h2>DVG — Inventory &amp; Supply Management</h2>
                        <p className="short-desc">
                            A dedicated Firebase-authenticated supply tracking platform for Dolce Vita Gelato — add
                            incoming stock, log usage, transfer items between locations, process order queues, and search
                            inventory all from a modular dashboard. Each operation lives in its own protected module,
                            with a full admin overview for managers.
                        </p>
                        <CardTags tags={['Firebase Auth', 'Firestore', 'Vanilla JS', 'Multi-Module']} />
                        <div className="card-overlay">
                            <span className="card-private-badge">&#128274; Private Internal Tool</span>
                        </div>
                    </PortfolioCard>

                    <div className="pf-empty" id="pfEmpty" style={shown === 0 ? { display: 'block' } : undefined}>
                        No projects in this category.
                    </div>
                </div>
            </section>
        </Layout>
    );
}
