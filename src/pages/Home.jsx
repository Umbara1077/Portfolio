import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout.jsx';
import { footerWithDisclaimer } from '../components/Footers.jsx';
import { usePageStyle } from '../hooks/usePageStyle.js';
import { usePageMeta } from '../hooks/usePageMeta.js';
import { InView } from '../components/InView.jsx';
import homeCss from './Home.css?inline';

const HERO_NAME = "Hi, I'm Dante Corso";
const HERO_SUBTITLE = 'Cloud Integration Engineer';
const HERO_BIO =
    'I build and operate Azure cloud systems that connect business platforms, automate workflows, and put AI to practical use. My full-stack development experience extends that work to the applications people use every day.';
const TYPE_SPEED = 38;

export default function Home() {
    usePageStyle(homeCss);
    usePageMeta({
        title: `Dante Corso \u2014 ${HERO_SUBTITLE}`,
        description:
            'Dante Corso, Cloud Integration Engineer. Explore production Azure systems, API integrations, AI automation, full-stack projects, and professional experience.',
        canonical: 'https://dantecorso.com/',
        ogTitle: `Dante Corso \u2014 ${HERO_SUBTITLE}`,
        ogDescription:
            'Cloud Integration Engineer building and operating Azure systems, API integrations, and AI-powered workflows. Explore my projects, technical expertise, and résumé.',
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
        <Layout orbs={3} activeHref="/" footer={footerWithDisclaimer} mainClassName="home-page">
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
                    <Link to="/portfolio" className="hero-btn-primary">
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
                <div className="home-quick-links" aria-label="Explore expertise and experience">
                    <a href="#services-new">Areas of expertise</a>
                    <Link to="/resume">Experience &amp; résumé</Link>
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
                        <div className="glance-number">21+</div>
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
                        <span className="home-project-company">E3 IT Services · Internal Project</span>
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
                        <Link to="/portfolio" className="feat-card-link">
                            Read the case study &#8594;
                        </Link>
                    </div>

                    <div className="feat-card">
                        <span className="home-project-company">E3 IT Services · Internal Project</span>
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
                        <Link to="/portfolio" className="feat-card-link">
                            Read the case study &#8594;
                        </Link>
                    </div>

                    <div className="feat-card">
                        <span className="home-project-company">Dolce Vita Gelato</span>
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
                            rel="noopener noreferrer"
                            className="feat-card-link"
                        >
                            Try the live demo &#8594;
                        </a>
                    </div>
                </div>
            </InView>

            {/* ========== EXPERTISE ========== */}
            <InView as="section" id="services-new" className="reveal">
                <InView as="h2" className="section-title" threshold={0.5}>
                    Areas of Expertise
                </InView>
                <p className="home-section-intro">
                    The technologies and disciplines behind my work—from production cloud systems to practical AI workflows.
                </p>
                <div className="services-grid">
                    <div className="service-card">
                        <span className="service-card-icon">&#128187;</span>
                        <h3>AI Adoption &amp; Workflows</h3>
                        <p>
                            Putting ChatGPT, Claude, and Gemini to practical use: tool evaluation, workspace setup,
                            reusable prompts, team training, and AI-assisted workflows for everyday tasks.
                        </p>
                    </div>

                    <div className="service-card">
                        <span className="service-card-icon">&#128260;</span>
                        <h3>Cloud Engineering &amp; DevOps</h3>
                        <p>
                            Azure infrastructure, serverless automation, monitoring, and CI/CD pipelines, with a focus
                            on secure configuration, reliability, and visibility into production systems.
                        </p>
                    </div>

                    <div className="service-card">
                        <span className="service-card-icon">&#127760;</span>
                        <h3>Full-Stack Web Development</h3>
                        <p>
                            Web applications, customer portals, and internal dashboards. React front ends, Node.js back
                            ends, authentication, payments, and real-time data, connected in one usable platform.
                        </p>
                    </div>

                    <div className="service-card">
                        <span className="service-card-icon" aria-hidden="true">&#128250;</span>
                        <h3>Digital Signage &amp; Kiosks</h3>
                        <p>
                            Digital menu boards, promotional displays, and self-service kiosks with remote content
                            management, synchronized pricing, and real-time availability.
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
                        <h3>APIs &amp; Business Data</h3>
                        <p>
                            Connecting systems through vendor APIs, Stripe payments, Firestore and SQL databases,
                            reporting, and automated data flows that reduce manual entry.
                        </p>
                    </div>
                </div>
                <div className="home-ai-tools" aria-label="AI tools I work with and implement">
                    <h3 className="home-ai-label">AI tools I work with and implement</h3>
                    <div className="home-ai-group">
                        <h4>AI assistants &amp; workflows</h4>
                        <div className="home-ai-brands">
                            <span><img src="/images/ai-chatgpt.svg" alt="" width="24" height="24" />ChatGPT</span>
                            <span><img src="/images/ai-claude.svg" alt="" width="24" height="24" />Claude</span>
                            <span><img src="/images/ai-gemini.png" alt="" width="24" height="24" />Gemini</span>
                            <span><img src="/images/ai-grok.svg" alt="" width="24" height="24" />Grok</span>
                        </div>
                    </div>
                    <div className="home-ai-group">
                        <h4>Creative, video &amp; voice generation</h4>
                        <div className="home-ai-brands home-ai-creative">
                            <span><img src="/images/ai-higgsfield.svg" alt="" width="24" height="24" /><span>Higgsfield<small>Creative visuals &amp; video generation</small></span></span>
                            <span><img src="/images/ai-elevenlabs.svg" alt="" width="24" height="24" /><span>ElevenLabs<small>Voice models &amp; audio generation</small></span></span>
                        </div>
                    </div>
                </div>
                <div className="home-contact-row">
                    <Link to="/contact" className="hero-btn-primary">Connect with Me</Link>
                    <p>Explore my background. <Link to="/resume">View my experience and résumé →</Link></p>
                </div>
            </InView>
        </Layout>
    );
}
