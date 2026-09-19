import { useState } from 'react';
import { Layout } from '../components/Layout.jsx';
import { InView } from '../components/InView.jsx';
import { footerWithDisclaimer } from '../components/Footers.jsx';
import { usePageStyle } from '../hooks/usePageStyle.js';
import { usePageMeta } from '../hooks/usePageMeta.js';
import { PORTFOLIO_LINKS } from '../navigation.js';
import portfolioCss from './Portfolio.css?inline';

const DESCRIPTION =
    'Production systems by Dante Corso: event-driven Azure automation, AI document processing, real-time business platforms, and procedural WebGL experiences. Live demos included.';

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
    'featured fullstack live',
    'featured ai cloud',
    'featured ai cloud',
    'featured ai cloud',
    'featured ai cloud',
    'featured ai',
    'featured live',
    'featured live',
    'featured live',
    'fullstack',
    'fullstack live',
    'fullstack live',
    'fullstack',
    'fullstack',
    'fullstack',
    'fullstack live',
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

function ExpandableDetails({ label = 'Show project details', children }) {
    return (
        <details className="pf-more">
            <summary>
                <span className="pf-more-closed">{label}</span>
                <span className="pf-more-open">Hide details</span>
                <span className="pf-more-arrow" aria-hidden="true">↓</span>
            </summary>
            <div className="pf-more-content">{children}</div>
        </details>
    );
}

function DolceLogo() {
    return (
        <a href="https://dolcevitasewell.com" target="_blank">
            <img src="/images/dolce-logo.png" alt="Dolce Vita Gelato" className="card-logo" loading="lazy" />
        </a>
    );
}

function E3Logo({ className = 'card-logo e3-card-logo' }) {
    return (
        <img
            src="/images/e3-logo.png"
            alt="E3 IT Services"
            className={className}
            loading="lazy"
        />
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
                            <b>22+</b>
                            <span>Projects Shipped</span>
                        </div>
                        <div className="pf-stat">
                            <b>8</b>
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

                    <div className={`pf-section-label pf-section-label-strong${structuralHidden}`}>
                        Product Spotlight
                    </div>

                    <PortfolioCard cat="featured fullstack live" theme="card-theme-emberknot" featured {...cardProps}>
                        <div className="emberknot-sparks" aria-hidden="true">
                            <span>♥</span><span>♥</span><span>♥</span><span>♡</span>
                            <span>♥</span><span>♡</span><span>♥</span><span>♡</span>
                        </div>
                        <div className="pf-badges">
                            <span className="pf-flag">Project Spotlight</span>
                            <span className="pf-status development">App in Development</span>
                        </div>
                        <span className="pf-company">Personal Product · Emberknot</span>
                        <h2><img src="/images/emberknot-logo.svg" alt="" className="emberknot-heading-logo" />Emberknot — A Private Connection App for Two</h2>
                        <p className="short-desc">
                            I’m building Emberknot around a simple idea: staying close should not require another
                            conversation to keep up with. It is a private space for two people to send small gestures,
                            share everyday moments, and keep the dates and memories that matter to them—whether they
                            are in the same city or far apart. It is not a dating service or a public social network.
                        </p>
                        <ExpandableDetails label="Show Emberknot features">
                            <div className="emberknot-details">
                                <div>
                                    <h3>Small gestures, everyday connection</h3>
                                    <p>
                                        The core interaction is a quick tap: thinking of you, a hug, missing you, or a
                                        personal gesture. Notes, photos, moods, and shared focus sessions extend that
                                        connection without turning every moment into a message that needs a reply.
                                    </p>
                                </div>
                                <div>
                                    <h3>A shared history and calendar</h3>
                                    <p>
                                        A timeline brings moments together, with saved memories, recurring anniversaries,
                                        dates, and trip countdowns. The shared Atlas adds an interactive globe of places
                                        the pair chooses to record, along with when they visited and why each place mattered.
                                    </p>
                                </div>
                                <div>
                                    <h3>Designed beyond the app screen</h3>
                                    <p>
                                        Planned support spans iPhone, Android, and Apple Watch. Widgets, Lock Screen
                                        interactions, and Live Activities are part of the product direction, making those
                                        small gestures accessible without always opening the app.
                                    </p>
                                </div>
                                <div>
                                    <h3>Private by design</h3>
                                    <p>
                                        The product is designed around invite-code pairing and one connection at a time,
                                        without public profiles, follower counts, or discovery feeds. Check-ins are manual,
                                        not location tracking, and the shared Atlas uses places entered by the users.
                                    </p>
                                </div>
                            </div>
                        </ExpandableDetails>
                        <CardTags tags={['Mobile App', 'Two-Person Connection', 'Shared Memories', 'Widgets', 'Interactive Atlas']} />
                        <div className="emberknot-actions">
                            <a href="https://emberknot.com" target="_blank" rel="noopener noreferrer" className="card-cta">
                                Explore Emberknot &#8599;
                            </a>
                            <p>Public website and interactive previews are live. The mobile app is in development—not yet released.</p>
                        </div>
                    </PortfolioCard>

                    <div className={`pf-section-label${structuralHidden}`}>
                        Cloud &amp; AI Engineering
                    </div>

                    <InView
                        className={`pf-group-banner pf-e3-overview reveal${structuralHidden}`}
                        threshold={0.06}
                        data-banner=""
                        data-cat="featured ai cloud"
                    >
                        <E3Logo className="pf-e3-logo" />
                        <div>
                            <span className="pf-group-eyebrow">E3 IT Services · Cloud Integration Engineering</span>
                            <h2>Four Production Platforms for Automated IT Operations</h2>
                            <p>
                                A connected body of Azure engineering work that turns calls, backup failures, network
                                telemetry, security advisories, and urgent tickets into reliable operational workflows.
                                These systems combine serverless processing, live data, tiered access, AI-assisted
                                analysis, vendor APIs, and Autotask automation for day-to-day service delivery.
                            </p>
                            <div className="pf-e3-platforms" aria-label="E3 engineering platforms">
                                <span><b>01</b> ACS Call Automation</span>
                                <span><b>02</b> Unified Backup System</span>
                                <span><b>03</b> Unified Network Monitor</span>
                                <span><b>04</b> On-Call Automation</span>
                            </div>
                        </div>
                    </InView>

                    {/* FEATURED: ACS Automation Pipeline */}
                    <PortfolioCard cat="featured ai cloud" theme="card-theme-ai e3-acs-featured" featured {...cardProps}>
                        <div className="pf-badges">
                            <span className="pf-flag">&#9733; Featured</span>
                            <PrivateStatus>Private Internal Tool</PrivateStatus>
                        </div>
                        <span className="pf-company">E3 IT Services</span>
                        <div className="pf-featured-head">
                            <E3Logo />
                            <h2>ACS Call Automation Platform</h2>
                        </div>
                        <p className="short-desc">
                            A production communications and workflow platform that answers inbound support calls,
                            routes engineers through a live tiered queue, records and processes conversations, and
                            completes the documentation path into Autotask automatically.
                        </p>
                        <ExpandableDetails>
                            <p className="pf-detail-copy">
                                Three Python Azure Function Apps coordinate Azure Communication Services call events,
                                consent audio, Microsoft Teams engineer routing, automatic voicemail failover, Blob
                                Storage recording, Azure Speech batch transcription, Azure OpenAI analysis, and
                                verified engineer-to-ticket resolution. A React and TypeScript operations dashboard
                                adds live service data, searchable recordings and transcripts, seekable audio, storage
                                analytics, cost-per-call reporting, and access appropriate to each operational tier.
                            </p>
                            <Highlights
                                items={[
                                    'Live ACS call events and WebSocket-driven status',
                                    'Tiered engineer access and ordered Teams routing',
                                    'Automatic recording, Speech transcription, and AI documentation',
                                    'Voicemail failover and zero-touch Autotask time entries',
                                    'Ten-hop correlation tracing and safe retry idempotency',
                                    'Prompt-injection safeguards and schema-validated AI output',
                                    'Searchable audio and transcript operations dashboard',
                                    'Azure cost, storage, and service-health analytics'
                                ]}
                            />
                        </ExpandableDetails>
                        <CardTags
                            tags={[
                                'Azure Functions',
                                'Azure Communication Services',
                                'Azure OpenAI',
                                'Azure Speech',
                                'Python',
                                'Event Grid',
                                'WebSockets',
                                'React 19',
                                'Autotask'
                            ]}
                        />
                        <div className="card-overlay">
                            <span className="card-private-badge">&#128274; Private Internal Tool</span>
                        </div>
                    </PortfolioCard>

                    {/* FEATURED: Unified Backup System */}
                    <PortfolioCard cat="featured ai cloud" theme="card-theme-default compact-featured" featured {...cardProps}>
                        <div className="pf-badges">
                            <span className="pf-flag">&#9733; Featured</span>
                            <PrivateStatus>Private Internal Tool</PrivateStatus>
                        </div>
                        <span className="pf-company">E3 IT Services</span>
                        <div className="pf-featured-head">
                            <E3Logo />
                            <h2>Unified Backup System</h2>
                        </div>
                        <p className="short-desc">
                            A production Azure monitoring platform that unifies the health of roughly 525 backup assets
                            across four vendor ecosystems.
                        </p>
                        <ExpandableDetails>
                            <p className="pf-detail-copy">
                                Nine Node.js functions normalize vendor failures into one stable issue model, isolate
                                source outages and stale data, and preserve daily history without treating missing data as healthy.
                            </p>
                            <Highlights
                                items={[
                                    '525 backup assets across four platforms',
                                    'Stable one-ticket-per-issue automation',
                                    '96 dependency-free deployment tests',
                                    'Daily Teams reports and live triage console'
                                ]}
                            />
                        </ExpandableDetails>
                        <CardTags tags={['Azure Functions', 'Node.js', 'Datto', 'Axcient', 'Blob Storage']} />
                        <div className="card-overlay">
                            <span className="card-private-badge">&#128274; Private Internal Tool</span>
                        </div>
                    </PortfolioCard>

                    {/* FEATURED: Unified Network Monitoring & Automation */}
                    <PortfolioCard cat="featured ai cloud" theme="card-theme-ai compact-featured" featured {...cardProps}>
                        <div className="pf-badges">
                            <span className="pf-flag">&#9733; Featured</span>
                            <PrivateStatus>Private Internal Tool</PrivateStatus>
                        </div>
                        <span className="pf-company">E3 IT Services</span>
                        <div className="pf-featured-head">
                            <E3Logo />
                            <h2>Unified Network Monitoring &amp; Automation Platform</h2>
                        </div>
                        <p className="short-desc">
                            A cloud operations platform that normalizes UniFi, SonicWall, and Cisco Meraki telemetry
                            across client environments and drives incident response automatically.
                        </p>
                        <ExpandableDetails>
                            <p className="pf-detail-copy">
                                Five-minute vendor polling feeds one health model and a Table Storage state machine that
                                opens, tracks, and auto-resolves Autotask tickets without duplicating incidents. A daily
                                security pipeline enriches vendor advisories with NVD CVE data and FIRST EPSS scores,
                                then matches the risk against firmware actually deployed in the field.
                            </p>
                            <Highlights items={['UniFi, SonicWall, and Meraki normalization', 'One-incident, one-ticket state management', 'NVD and EPSS vulnerability enrichment', 'Automated detection, alerting, and resolution']} />
                        </ExpandableDetails>
                        <CardTags tags={['Azure', 'Multi-Vendor APIs', 'Autotask', 'CVE Intelligence', 'Automation']} />
                        <div className="card-overlay"><span className="card-private-badge">&#128274; Private Internal Tool</span></div>
                    </PortfolioCard>

                    {/* FEATURED: On-Call Automation */}
                    <PortfolioCard cat="featured ai cloud" theme="card-theme-default compact-featured" featured {...cardProps}>
                        <div className="pf-badges">
                            <span className="pf-flag">&#9733; Featured</span>
                            <PrivateStatus>Private Internal Tool</PrivateStatus>
                        </div>
                        <span className="pf-company">E3 IT Services</span>
                        <div className="pf-featured-head"><E3Logo /><h2>On-Call Engineer Routing &amp; Ticket Intelligence</h2></div>
                        <p className="short-desc">
                            An Azure automation platform that resolves the active on-call engineer and delivers urgent
                            service tickets with the context required to respond immediately.
                        </p>
                        <ExpandableDetails>
                            <p className="pf-detail-copy">
                                The system manages rotations and availability, detects qualifying Autotask tickets,
                                identifies the assigned engineer, and sends real-time notifications containing priority,
                                affected systems, ticket history, and actionable context before the engineer responds.
                            </p>
                            <Highlights items={['Automated on-call rotation resolution', 'Real-time engineer notifications', 'Context-rich Autotask ticket delivery', '25% reduction in mean on-call response time']} />
                        </ExpandableDetails>
                        <CardTags tags={['Azure Functions', 'Autotask', 'Notifications', 'Routing Automation']} />
                        <div className="card-overlay"><span className="card-private-badge">&#128274; Private Internal Tool</span></div>
                    </PortfolioCard>

                    {/* FEATURED: Funari AI PDF */}
                    <PortfolioCard cat="featured ai" theme="card-theme-finance compact-featured" featured {...cardProps}>
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
                            A secure React and Firebase platform that turns carrier estimate PDFs into side-by-side
                            discrepancy reports for a public-adjusting firm.
                        </p>
                        <ExpandableDetails>
                            <p className="pf-detail-copy">
                                Google Vision OCR extracts the source document before Gemini analyzes underpaid line
                                items. Adjusters can review the results and export the finished report to PDF or Excel.
                            </p>
                            <Highlights
                                items={[
                                    'Gemini AI discrepancy analysis',
                                    'Google Vision OCR on carrier PDFs',
                                    'One-click PDF & Excel export',
                                    'Firebase-secured, per-user data'
                                ]}
                            />
                        </ExpandableDetails>
                        <CardTags tags={['React', 'Gemini AI', 'Vision OCR', 'Firebase']} />
                        <div className="card-overlay">
                            <span className="card-private-badge">
                                &#128274; Private internal tool
                            </span>
                        </div>
                    </PortfolioCard>

                    <InView
                        className={`pf-group-banner pf-dvg-overview reveal${structuralHidden}`}
                        threshold={0.06}
                        data-banner=""
                        data-cat="fullstack live"
                    >
                        <img src="/images/dolce-logo.png" alt="Dolce Vita Gelateria" loading="lazy" />
                        <div>
                            <a className="pf-group-eyebrow pf-dvg-section-link" href="#dolce-vita-projects">
                                Connected Full-Stack Business Platform
                            </a>
                            <h2>Dolce Vita Gelateria — Customer Experiences &amp; Operations</h2>
                            <p>
                                A connected digital ecosystem designed and built across the entire business: a public
                                website with live hours and flavors, mobile ordering and Stripe checkout, in-store
                                digital signage, self-service ordering, real-time fulfillment, staff access, recipe
                                development, inventory management, and the secure operations command center that ties
                                the private tools together through shared Firebase data.
                            </p>
                        </div>
                        <div className="pf-dvg-overview-actions">
                            <a className="pf-dvg-details-link" href="#dolce-vita-projects">View Project Details Below &#8595;</a>
                            <a href="https://dolcevitasewell.com" target="_blank" rel="noopener noreferrer">Visit Website &#8599;</a>
                            <a href="https://mobileorder.dolcevitasewell.com" target="_blank" rel="noopener noreferrer">Order Ahead &#8599;</a>
                            <a href="https://gelato-system-demo.web.app" target="_blank" rel="noopener noreferrer">Explore System Demo &#8599;</a>
                        </div>
                    </InView>

                    <div className={`pf-section-label${structuralHidden}`}>
                        Interactive Live Experiences
                    </div>

                    {/* FEATURED: 3D Solar System (LIVE) */}
                    <PortfolioCard
                        cat="featured live"
                        theme="card-theme-space"
                        featured
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
                            />
                            <h2>Interactive 3D Solar System</h2>
                        </div>
                        <p className="short-desc">
                            A real-time, fully interactive solar system rendered in the browser with Three.js and WebGL —
                            orbit every planet, glide through the asteroid belt, and travel out into deep space. A
                            from-scratch 3D engine showcase: custom camera controls, orbital mechanics, lighting, and
                            thousands of GPU-drawn stars, all running at 60fps with no plugins.
                        </p>
                        <ExpandableDetails>
                            <Highlights
                                items={[
                                    'Three.js / WebGL, 60fps',
                                    'Real orbital motion & scale',
                                    'Free-fly camera controls',
                                    'GPU-drawn starfield'
                                ]}
                            />
                        </ExpandableDetails>
                        <CardTags tags={['Three.js', 'WebGL', 'JavaScript']} />
                        <div className="card-overlay">
                            <a
                                href="https://solar.dantecorso.com"
                                target="_blank"
                                className="card-cta"
                            >
                                Launch Experience &#8594;
                            </a>
                        </div>
                    </PortfolioCard>

                    {/* FEATURED: From Summit to Sea (LIVE) */}
                    <PortfolioCard cat="featured live" theme="card-theme-flight" featured {...cardProps}>
                        <div className="pf-badges">
                            <span className="pf-flag">&#9733; Featured</span>
                            <LiveStatus>Live Experience</LiveStatus>
                        </div>
                        <a
                            href="https://flight.dantecorso.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flight-card-preview-link"
                        >
                            <img
                                src="https://flight.dantecorso.com/assets/og-flight-study.png"
                                alt="From Summit to Sea interactive WebGL flight study"
                                className="flight-card-preview"
                                loading="lazy"
                            />
                        </a>
                        <span className="pf-company">Independent Creative Engineering</span>
                        <div className="pf-featured-head">
                            <h2>From Summit to Sea &mdash; Interactive WebGL Flight Study</h2>
                        </div>
                        <p className="short-desc">
                            A continuous, scroll-controlled flight from alpine dawn to an open-ocean sunset. Every
                            aircraft, mountain, cloud, wave, ship, and animal is generated in code at runtime&mdash;no
                            downloaded 3D models, game engine, or build step.
                        </p>
                        <ExpandableDetails>
                            <Highlights
                                items={[
                                    'Three selectable aircraft lofted at true scale',
                                    'Custom GLSL atmosphere and depth-aware volumetric fog',
                                    '160K-vertex terrain, Gerstner ocean, ships, and wildlife',
                                    'Adaptive GPU quality tiers and reduced-motion support'
                                ]}
                            />
                        </ExpandableDetails>
                        <CardTags tags={['Three.js', 'WebGL 2', 'GLSL', 'GSAP', 'Procedural 3D']} />
                        <div className="card-overlay">
                            <a
                                href="https://flight.dantecorso.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card-cta"
                            >
                                Fly the Experience &#8594;
                            </a>
                        </div>
                    </PortfolioCard>

                    {/* ============ MORE PROJECTS ============ */}
                    <div className={`pf-section-label pf-more-projects-label${structuralHidden}`} data-label="">
                        More Projects
                    </div>

                    {/* FEATURED: Gridiron NFL Tracker (LIVE) */}
                    <PortfolioCard cat="featured live" theme="card-theme-gridiron pf-secondary-project" featured {...cardProps}>
                        <div className="pf-badges">
                            <span className="pf-flag">&#9733; Featured</span>
                            <LiveStatus>Live Now</LiveStatus>
                        </div>
                        <span className="pf-company">Personal Product &middot; Gridiron</span>
                        <div className="pf-featured-head">
                            <img
                                src="/images/gridiron-logo.svg"
                                alt="Gridiron"
                                className="card-logo"
                                loading="lazy"
                            />
                            <h2>Gridiron &mdash; NFL Season Tracker</h2>
                        </div>
                        <p className="short-desc">
                            A complete NFL tracking app built on ESPN&rsquo;s football data. Live scores carry
                            quarter-by-quarter line scores, kickoff countdowns, broadcast networks, spreads and
                            over/unders; division standings show playoff seeds, point differentials and streaks; and a
                            live postseason picture ranks all fourteen contenders in both conferences. Twelve seasons
                            are browsable back to 2015, and the entire interface repaints in the colors of whichever
                            team you follow.
                        </p>
                        <ExpandableDetails>
                            <p className="pf-detail-copy">
                                The browser never calls ESPN directly &mdash; a Cloudflare Pages Function proxies the
                                public football feeds from the same origin, which keeps the client free of CORS
                                workarounds and vendor keys. Every screen renders from one normalized model of teams,
                                games and records, so the scoreboard, standings, playoff seeding and generated reports
                                can never disagree with each other. A written report layer turns that same data into
                                plain-English weekly recaps, team reports and league leaders that visitors can copy or
                                download. The app ships as an installable PWA with a service worker and VAPID Web Push,
                                so kickoff and score alerts reach a phone home screen without an app store.
                            </p>
                            <Highlights
                                items={[
                                    'Live scores with line scores, countdowns, networks and odds',
                                    'Preseason, regular season and playoffs across twelve seasons',
                                    'Division standings with seeds, differentials and streaks',
                                    'Live playoff picture and bracket for both conferences',
                                    'My Team hub with splits, form and the full schedule',
                                    'Reports generated from live data, copyable and downloadable',
                                    'Per-team color theming across the entire interface',
                                    'Installable PWA with service worker and Web Push alerts'
                                ]}
                            />
                        </ExpandableDetails>
                        <CardTags
                            tags={[
                                'React',
                                'Vite',
                                'ESPN API',
                                'Cloudflare Pages',
                                'Edge Functions',
                                'PWA',
                                'Web Push'
                            ]}
                        />
                        <div className="card-overlay">
                            <a
                                href="https://nfl-gridiron.pages.dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card-cta"
                            >
                                Open Gridiron &#8599;
                            </a>
                        </div>
                    </PortfolioCard>

                    {/* Personal Information Dashboard (available on request — sign-in protected) */}
                    <PortfolioCard cat="fullstack" theme="card-theme-ai pf-secondary-project" {...cardProps}>
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

                    {/* 3D Print Shop (LIVE) */}
                    <PortfolioCard cat="fullstack live" theme="card-theme-shop pf-secondary-project" {...cardProps}>
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
                    <PortfolioCard cat="fullstack live" theme="card-theme-default pf-secondary-project" {...cardProps}>
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
                    <PortfolioCard cat="fullstack" theme="card-theme-default pf-secondary-project" {...cardProps}>
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
                        id="dolce-vita-projects"
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
                                An entire company's software stack, designed, built, and maintained end-to-end: ten
                                integrated systems spanning the public website, in-store digital signage, self-order kiosks, mobile ordering
                                with Stripe &amp; geofenced arrival alerts, staff tooling, recipe R&amp;D, and inventory
                                — all sharing one real-time Firebase backend so a change in one place updates everywhere
                                instantly.
                            </p>
                            <div className="pf-group-stats">
                                <span>10 Integrated Systems</span>
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
                        <h2>Dolce Vita — Operations Command Center</h2>
                        <p className="short-desc">
                            A secure, Firebase-authenticated operations hub that gives approved staff one organized
                            entry point to Dolce Vita&apos;s connected business systems. Role-aware navigation brings
                            digital signage and flavor management, kiosk and mobile ordering, order fulfillment, staff
                            resources, recipe development, and inventory tools together without exposing private
                            applications publicly.
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

                    {/* DVG — Public Website (LIVE) */}
                    <PortfolioCard cat="fullstack live" theme="card-theme-gelato" {...cardProps}>
                        <div className="pf-badges">
                            <LiveStatus>Live</LiveStatus>
                        </div>
                        <DolceLogo />
                        <h2>Dolce Vita Sewell — Public Website</h2>
                        <p className="short-desc">
                            Full-stack customer website for Dolce Vita Gelateria in Sewell, built around live shop data.
                            It shows today&apos;s open or closed status and hours, the flavors currently in the case, the
                            shop&apos;s rotating catalog of more than 100 flavors, dairy-free options, caffè and cakes,
                            events, the shop story, visit information, and a direct path into online ordering. Flavor
                            availability is kept current from the same connected menu data used by the shop.
                        </p>
                        <CardTags tags={['Full Stack', 'Live Hours', 'Live Flavors', 'Responsive Web', 'Firebase']} />
                        <div className="card-overlay">
                            <a href="https://dolcevitasewell.com" target="_blank" rel="noopener noreferrer" className="card-cta">
                                Visit Website &#8594;
                            </a>
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
                        <CardTags tags={['Full Stack', 'Firebase', 'Stripe', 'Geolocation']} />
                        <div className="card-overlay">
                            <a href="https://mobileorder.dolcevitasewell.com" target="_blank" rel="noopener noreferrer" className="card-cta">
                                Order Ahead &#8594;
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
                        <h2>DVG Gelato Shop Demo — Website, Digital Menus &amp; Mobile Ordering</h2>
                        <p className="short-desc">
                            An interactive, browser-based showcase of connected gelateria software: a web admin panel,
                            digital menu boards, mobile ordering, and inventory management. Explore how menu changes,
                            flavor availability, and stock connect across the tools using sample data, without touching
                            live production systems.
                        </p>
                        <CardTags tags={['Live Demo', 'Firebase', 'Fake Data']} />
                        <div className="card-overlay">
                            <a href="https://gelato-system-demo.web.app" target="_blank" rel="noopener noreferrer" className="card-cta">
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
