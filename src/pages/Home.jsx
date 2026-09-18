import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout.jsx';
import { footerWithDisclaimer } from '../components/Footers.jsx';
import { usePageStyle } from '../hooks/usePageStyle.js';
import { usePageMeta } from '../hooks/usePageMeta.js';
import { InView } from '../components/InView.jsx';
import {
    ArrowRight,
    ArrowUpRight,
    IconCloud,
    IconCode,
    IconLink,
    IconPhone,
    IconScreen,
    IconSparkles
} from '../components/Icons.jsx';
import homeCss from './Home.css?inline';

const HERO_SUBTITLE = 'Cloud Integration Engineer';
const HERO_BIO =
    'I build and operate Azure cloud systems that connect business platforms, automate workflows, and put AI to practical use. My full-stack development experience extends that work to the applications people use every day.';

const SYSTEMS = [
    { name: 'ACS Call Automation', kind: 'Azure Communication Services · Speech · OpenAI', value: 'Production' },
    { name: 'Unified Backup Monitor', kind: 'Four vendor platforms', value: '525 assets' },
    { name: 'Unified Network Monitor', kind: 'UniFi · SonicWall · Meraki', value: '3 vendors' },
    { name: 'On-Call Engineer Routing', kind: 'Ticket intelligence', value: 'Automated' },
    { name: 'Dolce Vita Platform', kind: 'Website · Ordering · Kiosk · Signage · Inventory', value: '10 systems' },
    { name: 'Emberknot', kind: 'Private connection app', value: 'In development' }
];

const FEATURED = [
    {
        company: 'E3 IT Services · Internal Project',
        title: 'Call Automation & Time-Entry Platform',
        description:
            'Event-driven Azure pipeline across three Function Apps — answers support calls, routes an engineer queue with voicemail failover, transcribes with Azure Speech, and generates client-ready ticket documentation with Azure OpenAI. Built with end-to-end idempotency and correlation tracing so retries can never double-post.',
        tags: ['Azure Functions', 'Azure OpenAI', 'Python', 'Event Grid'],
        icon: IconCloud,
        footLabel: 'Status',
        footValue: 'Private · Production',
        link: { to: '/portfolio', label: 'Read the case study' }
    },
    {
        company: 'E3 IT Services · Internal Project',
        title: 'Unified Network Monitor',
        description:
            'Multi-vendor monitoring across UniFi, SonicWall, and Cisco Meraki fleets. Polls vendor APIs every five minutes, normalizes everything into one model, and opens, tracks, and auto-resolves its own tickets — with CVE enrichment and alert suppression so one incident makes one ticket.',
        tags: ['Azure Functions', 'Python', 'Multi-Vendor APIs', 'CVE / EPSS'],
        icon: IconLink,
        footLabel: 'Poll cadence',
        footValue: 'Every 5 min',
        link: { to: '/portfolio', label: 'Read the case study' }
    },
    {
        company: 'Dolce Vita Gelato',
        title: 'Full Business Operating System',
        description:
            'Nine integrated systems built and maintained for a live retail business — mobile ordering with Stripe and geofenced arrival alerts, self-order kiosk, digital signage, order management, inventory, and recipe R&D, all sharing one real-time Firebase backend.',
        tags: ['React', 'TypeScript', 'Firebase', 'Stripe'],
        icon: IconScreen,
        footLabel: 'Backend',
        footValue: 'Real-time Firebase',
        link: { href: 'https://gelato-system-demo.web.app', label: 'Try the live demo' }
    }
];

const SERVICES = [
    {
        icon: IconSparkles,
        title: 'AI Adoption & Workflows',
        text: 'Putting ChatGPT, Claude, and Gemini to practical use: tool evaluation, workspace setup, reusable prompts, team training, and AI-assisted workflows for everyday tasks.',
        meta: ['Model', 'In your tools']
    },
    {
        icon: IconCloud,
        title: 'Cloud Engineering & DevOps',
        text: 'Azure infrastructure, serverless automation, monitoring, and CI/CD pipelines, with a focus on secure configuration, reliability, and visibility into production systems.',
        meta: ['Platform', 'Azure']
    },
    {
        icon: IconCode,
        title: 'Full-Stack Web Development',
        text: 'Web applications, customer portals, and internal dashboards. React front ends, Node.js back ends, authentication, payments, and real-time data, connected in one usable platform.',
        meta: ['Stack', 'React + Node']
    },
    {
        icon: IconScreen,
        title: 'Digital Signage & Kiosks',
        text: 'Digital menu boards, promotional displays, and self-service kiosks with remote content management, synchronized pricing, and real-time availability.',
        meta: ['Content', 'Remote managed']
    },
    {
        icon: IconPhone,
        title: 'Mobile Development',
        text: 'Developing mobile applications tailored for Android and iOS platforms, ensuring cross-platform compatibility and smooth UX.',
        meta: ['Targets', 'iOS + Android']
    },
    {
        icon: IconLink,
        title: 'APIs & Business Data',
        text: 'Connecting systems through vendor APIs, Stripe payments, Firestore and SQL databases, reporting, and automated data flows that reduce manual entry.',
        meta: ['Integration', 'Vendor APIs']
    }
];

const AI_ASSISTANTS = [
    { src: '/images/ai-chatgpt.svg', name: 'ChatGPT' },
    { src: '/images/ai-claude.svg', name: 'Claude' },
    { src: '/images/ai-gemini.png', name: 'Gemini' },
    { src: '/images/ai-grok.svg', name: 'Grok' }
];

const AI_CREATIVE = [
    { src: '/images/ai-higgsfield.svg', name: 'Higgsfield', note: 'Creative visuals & video generation' },
    { src: '/images/ai-elevenlabs.svg', name: 'ElevenLabs', note: 'Voice models & audio generation' }
];

function Stagger({ index, children, className = "" }) {
    return (
        <div className={`hero-stagger ${className}`.trim()} style={{ "--stagger-delay": `${0.08 + index * 0.09}s` }}>
            {children}
        </div>
    );
}

export default function Home() {
    usePageStyle(homeCss);
    usePageMeta({
        title: `Dante Corso — ${HERO_SUBTITLE}`,
        description:
            'Dante Corso, Cloud Integration Engineer. Explore production Azure systems, API integrations, AI automation, full-stack projects, and professional experience.',
        canonical: 'https://dantecorso.com/',
        ogTitle: `Dante Corso — ${HERO_SUBTITLE}`,
        ogDescription:
            'Cloud Integration Engineer building and operating Azure systems, API integrations, and AI-powered workflows. Explore my projects, technical expertise, and résumé.',
        ogType: 'website',
        ogUrl: 'https://dantecorso.com/'
    });

    return (
        <Layout orbs={1} activeHref="/" footer={footerWithDisclaimer} mainClassName="home-page">
            {/* ========== HERO ========== */}
            <section id="intro" className="hero">
                <div className="grid-bg hero-grid" aria-hidden="true"></div>
                <div className="hero-glow" aria-hidden="true"></div>
                <div className="shell hero-shell">
                    <div className="hero-copy">
                        <Stagger index={0}>
                            <p className="meta meta-inline">
                                <span className="pip pip-brand" aria-hidden="true"></span>
                                Cloud Integration Engineer · Williamstown, NJ
                            </p>
                        </Stagger>
                        <Stagger index={1}>
                            <h1 className="fluid-display hero-name">
                                Hi, I&rsquo;m Dante Corso.
                                <br />
                                <span className="text-brand">{HERO_SUBTITLE}.</span>
                            </h1>
                        </Stagger>
                        <Stagger index={2}>
                            <p className="hero-bio">{HERO_BIO}</p>
                        </Stagger>
                        <Stagger index={3}>
                            <div className="hero-ctas">
                                <Link to="/portfolio" className="btn btn-primary btn-lg">
                                    View My Work
                                </Link>
                                <a
                                    href="https://gelato-system-demo.web.app"
                                    target="_blank"
                                    rel="noopener"
                                    className="btn btn-lg"
                                >
                                    Try a Live Demo {ArrowUpRight}
                                </a>
                            </div>
                        </Stagger>
                        <Stagger index={4}>
                            <dl className="hero-stats">
                                <div>
                                    <dt className="meta">Production Azure platforms</dt>
                                    <dd>4</dd>
                                </div>
                                <div>
                                    <dt className="meta">Projects shipped</dt>
                                    <dd>21+</dd>
                                </div>
                                <div>
                                    <dt className="meta">End-to-end ownership</dt>
                                    <dd>Cloud + Full-Stack</dd>
                                </div>
                            </dl>
                        </Stagger>
                        <Stagger index={5}>
                            <div className="home-quick-links">
                                <a href="#services-new" className="arrow-link">
                                    Areas of expertise {ArrowRight}
                                </a>
                                <Link to="/resume" className="arrow-link">
                                    Experience &amp; résumé {ArrowRight}
                                </Link>
                            </div>
                        </Stagger>
                    </div>

                    <Stagger index={2} className="hero-panel-wrap">
                        <svg className="hero-hex" viewBox="0 0 400 400" fill="none" aria-hidden="true" focusable="false">
                            <defs>
                                <pattern id="dc-hex" width="56" height="48.5" patternUnits="userSpaceOnUse" patternTransform="scale(1.15)">
                                    <path d="M14 0 L42 0 L56 24.25 L42 48.5 L14 48.5 L0 24.25 Z" stroke="var(--border-brand)" strokeWidth="1" fill="none" opacity="0.5" />
                                </pattern>
                                <radialGradient id="dc-hex-fade" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stopColor="#fff" stopOpacity="0.9" />
                                    <stop offset="70%" stopColor="#fff" stopOpacity="0.25" />
                                    <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                                </radialGradient>
                                <mask id="dc-hex-mask">
                                    <rect width="400" height="400" fill="url(#dc-hex-fade)" />
                                </mask>
                            </defs>
                            <rect width="400" height="400" fill="url(#dc-hex)" mask="url(#dc-hex-mask)" />
                        </svg>
                        <div className="hero-panel">
                            <div className="hero-panel-head">
                                <img src="/images/me.jpg" alt="Dante Corso" className="hero-avatar" width="40" height="40" />
                                <div className="hero-panel-title">
                                    <span className="hero-panel-name">Dante Corso</span>
                                    <span className="meta">Systems in production</span>
                                </div>
                                <span className="meta hero-panel-ok">
                                    <span className="pip pip-live pip-ok" aria-hidden="true"></span>
                                    All running
                                </span>
                            </div>
                            <ul className="hero-panel-list">
                                {SYSTEMS.map((system) => (
                                    <li key={system.name}>
                                        <span className="pip pip-ok" aria-hidden="true"></span>
                                        <div className="hero-panel-copy">
                                            <p className="hero-panel-item">{system.name}</p>
                                            <p className="hero-panel-kind">{system.kind}</p>
                                        </div>
                                        <span className="font-mono hero-panel-value">{system.value}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="hero-panel-foot">
                                <span className="meta">Williamstown · Southern NJ</span>
                                <span className="meta">B.S. CS · Rowan University</span>
                            </div>
                        </div>
                    </Stagger>
                </div>
            </section>

            {/* ========== FEATURED WORK ========== */}
            <section id="featured-work" className="band">
                <div className="shell">
                    <InView className="section-head reveal" threshold={0.2}>
                        <div className="section-head-copy">
                            <p className="meta meta-inline">
                                <span className="pip pip-brand" aria-hidden="true"></span>
                                Featured work
                            </p>
                            <h2 className="fluid-h2">Systems that run every day, not demos that stop at the prototype</h2>
                            <p className="lead">
                                Production platforms I own end to end — from event-driven Azure automation for a managed
                                services provider to the connected software a live retail business runs on.
                            </p>
                        </div>
                        <Link to="/portfolio" className="arrow-link">
                            All projects {ArrowRight}
                        </Link>
                    </InView>

                    <div className="featured-grid">
                        {FEATURED.map((item, index) => (
                            <InView key={item.title} className="reveal" threshold={0.15} style={{ transitionDelay: `${index * 0.08}s` }}>
                                <article className="card card-hover feat-card">
                                    <div className="feat-card-top">
                                        <span className="icon-box">{item.icon}</span>
                                        <span className="home-project-company">{item.company}</span>
                                    </div>
                                    <h3 className="fluid-h3 feat-card-title">{item.title}</h3>
                                    <p className="feat-card-desc">{item.description}</p>
                                    <div className="feat-card-tags">
                                        {item.tags.map((tag) => (
                                            <span className="tag" key={tag}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="feat-card-foot">
                                        <span className="meta">{item.footLabel}</span>
                                        <span className="font-mono feat-card-value">{item.footValue}</span>
                                    </div>
                                    {item.link.href ? (
                                        <a href={item.link.href} target="_blank" rel="noopener noreferrer" className="arrow-link feat-card-link">
                                            {item.link.label} {ArrowUpRight}
                                        </a>
                                    ) : (
                                        <Link to={item.link.to} className="arrow-link feat-card-link">
                                            {item.link.label} {ArrowRight}
                                        </Link>
                                    )}
                                </article>
                            </InView>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== EXPERTISE ========== */}
            <section id="services-new" className="band band-sunken">
                <div className="shell">
                    <InView className="section-head reveal" threshold={0.2}>
                        <div className="section-head-copy">
                            <p className="meta meta-inline">
                                <span className="pip pip-brand" aria-hidden="true"></span>
                                Areas of expertise
                            </p>
                            <h2 className="fluid-h2">The disciplines behind the work</h2>
                            <p className="lead">
                                The technologies and disciplines behind my work — from production cloud systems to
                                practical AI workflows.
                            </p>
                        </div>
                        <Link to="/skills" className="arrow-link">
                            Full skill set {ArrowRight}
                        </Link>
                    </InView>

                    <div className="services-grid">
                        {SERVICES.map((service, index) => (
                            <InView key={service.title} className="reveal" threshold={0.15} style={{ transitionDelay: `${(index % 3) * 0.08}s` }}>
                                <article className="card card-hover service-card">
                                    <div className="service-card-top">
                                        <span className="icon-box">{service.icon}</span>
                                        <span className="pip pip-ok service-card-pip" aria-hidden="true"></span>
                                    </div>
                                    <h3 className="fluid-h3">{service.title}</h3>
                                    <p>{service.text}</p>
                                    <div className="service-card-foot">
                                        <span className="meta">{service.meta[0]}</span>
                                        <span className="font-mono service-card-value">{service.meta[1]}</span>
                                    </div>
                                </article>
                            </InView>
                        ))}
                    </div>

                    <InView className="home-ai-tools reveal" threshold={0.2} aria-label="AI tools I work with and implement">
                        <div className="home-ai-head">
                            <p className="meta meta-inline meta-wrap">
                                <span className="pip pip-brand" aria-hidden="true"></span>
                                AI tools I work with and implement
                            </p>
                        </div>
                        <div className="home-ai-groups">
                            <div className="home-ai-group">
                                <h3 className="meta">AI assistants &amp; workflows</h3>
                                <div className="home-ai-brands">
                                    {AI_ASSISTANTS.map((tool) => (
                                        <span key={tool.name}>
                                            <img src={tool.src} alt="" width="24" height="24" loading="lazy" />
                                            {tool.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="home-ai-group">
                                <h3 className="meta">Creative, video &amp; voice generation</h3>
                                <div className="home-ai-brands home-ai-creative">
                                    {AI_CREATIVE.map((tool) => (
                                        <span key={tool.name}>
                                            <img src={tool.src} alt="" width="24" height="24" loading="lazy" />
                                            <span>
                                                {tool.name}
                                                <small>{tool.note}</small>
                                            </span>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </InView>
                </div>
            </section>

            {/* ========== CTA BAND ========== */}
            <section id="home-cta" className="cta-band">
                <div className="cta-band-glow" aria-hidden="true"></div>
                <div className="shell cta-band-shell">
                    <div className="cta-band-copy">
                        <p className="meta meta-inline cta-band-meta">
                            <span className="pip pip-live" aria-hidden="true"></span>
                            Let&rsquo;s connect
                        </p>
                        <h2 className="fluid-h2">Explore my background, or start a conversation.</h2>
                        <p className="lead">
                            See the experience behind the systems, or reach out directly about cloud, AI, and full-stack
                            work.
                        </p>
                    </div>
                    <div className="cta-band-actions">
                        <Link to="/contact" className="btn btn-inverse btn-lg">
                            Connect with Me
                        </Link>
                        <Link to="/resume" className="btn btn-inverse-outline btn-lg">
                            View my experience &amp; résumé {ArrowRight}
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
