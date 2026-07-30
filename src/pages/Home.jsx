import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout.jsx';
import { footerWithDisclaimer } from '../components/Footers.jsx';
import { usePageStyle } from '../hooks/usePageStyle.js';
import { usePageMeta } from '../hooks/usePageMeta.js';
import { InView } from '../components/InView.jsx';
import homeCss from './Home.css?inline';

const HERO_NAME = "Hi, I'm Dante Corso";
const HERO_SUBTITLE = 'Cloud Engineer';
const HERO_BIO =
    'Cloud and full-stack engineer with a B.S. in Computer Science from Rowan University. I build event-driven Azure systems, AI automation pipelines, and real-time platforms that real businesses run on every day.';
const TYPE_SPEED = 38;

export default function Home() {
    usePageStyle(homeCss);
    usePageMeta({
        title: 'Dante Corso \u2014 Cloud Engineer',
        description:
            'Dante Corso builds event-driven Azure automation, AI pipelines, and real-time full-stack platforms that businesses run on daily. Case studies, live demos, and r\u00E9sum\u00E9.',
        canonical: 'https://dantecorso.com/',
        ogTitle: 'Dante Corso \u2014 Cloud Engineer',
        ogDescription:
            'Event-driven Azure automation, AI pipelines, and real-time full-stack platforms. Case studies and live demos.',
        ogType: 'website',
        ogUrl: 'https://dantecorso.com/'
    });

    const [typedName, setTypedName] = useState('');
    const [typingDone, setTypingDone] = useState(false);
    // Subtitle and bio appear immediately — only the name gets typed, so the
    // hero is fully readable in under a second.
    const [heroVisible, setHeroVisible] = useState(false);

    useEffect(() => {
        let index = 0;
        let timer;
        const tick = () => {
            if (index <= HERO_NAME.length) {
                setTypedName(HERO_NAME.slice(0, index));
                index += 1;
                timer = setTimeout(tick, TYPE_SPEED);
            } else {
                setTypingDone(true);
            }
        };
        tick();
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const frame = requestAnimationFrame(() => setHeroVisible(true));
        return () => cancelAnimationFrame(frame);
    }, []);

    const fadeStyle = { opacity: heroVisible ? 1 : 0, transition: 'opacity 0.5s ease' };

    return (
        <Layout orbs={3} activeHref="/index.html" footer={footerWithDisclaimer}>
            {/* ========== HERO ========== */}
            <section id="intro">
                <h1 className="hero-name" id="hero-name-el">
                    {typedName}
                    <span
                        className="hero-cursor"
                        id="hero-cursor-el"
                        style={typingDone ? undefined : { animationPlayState: 'paused', opacity: 1 }}
                    ></span>
                </h1>
                <p className="hero-subtitle-line" id="hero-subtitle-el" style={fadeStyle}>
                    {HERO_SUBTITLE}
                </p>
                <p className="hero-bio" id="hero-bio-el" style={fadeStyle}>
                    {HERO_BIO}
                </p>
                <div className="hero-ctas">
                    <Link to="/portfolio.html" className="hero-btn-primary">
                        View My Work
                    </Link>
                    <a
                        href="https://gelato-system-demo.web.app"
                        target="_blank"
                        rel="noopener"
                        className="hero-btn-outline"
                    >
                        Try a Live Demo &#8599;
                    </a>
                </div>
            </section>

            {/* ========== AT-A-GLANCE ========== */}
            <InView as="section" id="glance" className="reveal">
                <div className="glance-grid">
                    <div className="glance-card">
                        <span className="glance-icon">&#9889;</span>
                        <div className="glance-number">4</div>
                        <div className="glance-label">Production Azure Platforms</div>
                    </div>
                    <div className="glance-card">
                        <span className="glance-icon">&#128640;</span>
                        <div className="glance-number">20+</div>
                        <div className="glance-label">Projects Shipped</div>
                    </div>
                    <div className="glance-card">
                        <span className="glance-icon">&#128736;&#65039;</span>
                        <div className="glance-number text-stat">Cloud + Full-Stack</div>
                        <div className="glance-label">End-to-End Ownership</div>
                    </div>
                </div>
            </InView>

            {/* ========== FEATURED WORK ========== */}
            <InView as="section" id="featured-work" className="reveal">
                <InView as="h2" className="section-title" threshold={0.5}>
                    Featured Work
                </InView>
                <div className="featured-grid">
                    <div className="feat-card">
                        <div className="feat-card-title">Call Automation &amp; Time-Entry Platform</div>
                        <p className="feat-card-desc">
                            Event-driven Azure pipeline across three Function Apps — answers support calls, routes an
                            engineer queue with voicemail failover, transcribes with Azure Speech, and generates
                            client-ready ticket documentation with Azure OpenAI. Built with end-to-end idempotency and
                            correlation tracing so retries can never double-post.
                        </p>
                        <div className="feat-card-tags">
                            <span className="feat-card-tag">Azure Functions</span>
                            <span className="feat-card-tag">Azure OpenAI</span>
                            <span className="feat-card-tag">Python</span>
                            <span className="feat-card-tag">Event Grid</span>
                        </div>
                        <Link to="/portfolio.html" className="feat-card-link">
                            Read the case study &#8594;
                        </Link>
                    </div>

                    <div className="feat-card">
                        <div className="feat-card-title">Unified Network Monitor</div>
                        <p className="feat-card-desc">
                            Multi-vendor monitoring across UniFi, SonicWall, and Cisco Meraki fleets. Polls vendor APIs
                            every five minutes, normalizes everything into one model, and opens, tracks, and
                            auto-resolves its own tickets — with CVE enrichment and alert suppression so one incident
                            makes one ticket.
                        </p>
                        <div className="feat-card-tags">
                            <span className="feat-card-tag">Azure Functions</span>
                            <span className="feat-card-tag">Python</span>
                            <span className="feat-card-tag">Multi-Vendor APIs</span>
                            <span className="feat-card-tag">CVE / EPSS</span>
                        </div>
                        <Link to="/portfolio.html" className="feat-card-link">
                            Read the case study &#8594;
                        </Link>
                    </div>

                    <div className="feat-card">
                        <div className="feat-card-title">Full Business Operating System</div>
                        <p className="feat-card-desc">
                            Nine integrated systems built and maintained for a live retail business — mobile ordering
                            with Stripe and geofenced arrival alerts, self-order kiosk, digital signage, order
                            management, inventory, and recipe R&amp;D, all sharing one real-time Firebase backend.
                        </p>
                        <div className="feat-card-tags">
                            <span className="feat-card-tag">React</span>
                            <span className="feat-card-tag">TypeScript</span>
                            <span className="feat-card-tag">Firebase</span>
                            <span className="feat-card-tag">Stripe</span>
                        </div>
                        <a
                            href="https://gelato-system-demo.web.app"
                            target="_blank"
                            className="feat-card-link"
                        >
                            Try the live demo &#8594;
                        </a>
                    </div>
                </div>
            </InView>

            {/* ========== SERVICES ========== */}
            <InView as="section" id="services-new" className="reveal">
                <InView as="h2" className="section-title" threshold={0.5}>
                    What I Build
                </InView>
                <div className="services-grid">
                    <div className="service-card">
                        <span className="service-card-icon">&#128187;</span>
                        <h3>Software Engineering</h3>
                        <p>
                            Designing and developing efficient, scalable software solutions that optimize performance
                            and enhance functionality.
                        </p>
                    </div>

                    <div className="service-card">
                        <span className="service-card-icon">&#128260;</span>
                        <h3>Azure DevOps &amp; CI/CD</h3>
                        <p>
                            Designing and managing Azure DevOps workflows, automated CI/CD pipelines, version control,
                            and release management.
                        </p>
                    </div>

                    <div className="service-card">
                        <span className="service-card-icon">&#127760;</span>
                        <h3>Full-Stack Web Development</h3>
                        <p>
                            Crafting comprehensive web solutions — from React front-ends to Node.js back-ends — ensuring
                            seamless user experience.
                        </p>
                    </div>

                    <div className="service-card">
                        <span className="service-card-icon">&#128452;&#65039;</span>
                        <h3>Database Architecture</h3>
                        <p>
                            Designing and managing efficient databases — Firestore, SQL, and cloud-native storage — to
                            support real-time business operations.
                        </p>
                    </div>

                    <div className="service-card">
                        <span className="service-card-icon">&#128241;</span>
                        <h3>Mobile Development</h3>
                        <p>
                            Developing mobile applications tailored for Android and iOS platforms, ensuring
                            cross-platform compatibility and smooth UX.
                        </p>
                    </div>

                    <div className="service-card">
                        <span className="service-card-icon">&#128279;</span>
                        <h3>API Integrations</h3>
                        <p>
                            Building and integrating APIs — Stripe, Google Maps, OpenAI — to enhance functionality and
                            connectivity across applications.
                        </p>
                    </div>
                </div>
            </InView>
        </Layout>
    );
}
