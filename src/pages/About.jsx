import { Layout } from '../components/Layout.jsx';
import { simpleFooter } from '../components/Footers.jsx';
import { usePageMeta } from '../hooks/usePageMeta.js';
import { InView } from '../components/InView.jsx';

const DESCRIPTION =
    'Cloud and full-stack engineer in South Jersey. B.S. Computer Science, Rowan University. Builds event-driven Azure systems and real-time platforms for real businesses.';

export default function About() {
    usePageMeta({
        title: 'About \u2014 Dante Corso',
        description: DESCRIPTION,
        canonical: 'https://dantecorso.com/about',
        ogTitle: 'About \u2014 Dante Corso',
        ogDescription: DESCRIPTION,
        ogUrl: 'https://dantecorso.com/about'
    });

    return (
        <Layout orbs={2} activeHref="/about" mainClassName="container" footer={simpleFooter}>
            <section id="about">
                <InView as="h1" className="section-title reveal">
                    About Me
                </InView>
                <InView className="about-content reveal">
                    <div className="about-text">
                        <p>
                            My name is Dante, and I'm a cloud and full-stack engineer. I graduated from Rowan University
                            with a B.S. in Computer Science, concentrating in Networking Systems — which is why I tend to
                            end up where software meets infrastructure.
                        </p>
                        <p>
                            Most of my work lives in two places. At a managed services provider I build event-driven
                            Azure platforms — a pipeline that turns recorded support calls into finished ticket
                            documentation using Azure Speech and Azure OpenAI, and a multi-vendor network monitor that
                            opens and resolves its own tickets across UniFi, SonicWall, and Cisco Meraki fleets.
                            Alongside that I've built entire software stacks for small businesses: mobile ordering with
                            payments and geofencing, kiosks, digital signage, and inventory systems that staff use every
                            day.
                        </p>
                        <p>
                            What I care about most is the unglamorous part — idempotency, tracing, and sensible failure
                            modes. Anything that writes to production should be safe to retry, and you should be able to
                            reconstruct what happened from one query.
                        </p>
                    </div>
                    <div className="about-image">
                        <img src="/images/me.jpg" alt="Dante Corso" />
                    </div>
                </InView>

                <div className="education-skills">
                    <InView className="education reveal">
                        <h2>Education</h2>
                        <ul>
                            <li>
                                <strong>Rowan University</strong> — B.S. Computer Science, Networking Systems
                                Concentration <em>(May 2024)</em>
                            </li>
                            <br />
                            <li>
                                <strong>Rowan College of South Jersey</strong> — A.S. Computer Science
                            </li>
                        </ul>
                    </InView>
                    <InView className="education reveal">
                        <h2>Testimonials</h2>
                        <ul>
                            <li>
                                "Dante is a fantastic developer. His work on our mobile ordering system was flawless!" —
                                Dolce Vita Gelateria
                            </li>
                            <br />
                            <li>
                                "Dante did an amazing job on our kiosk ordering system. Everything works perfectly!" —
                                Dolce Vita Gelateria
                            </li>
                        </ul>
                    </InView>
                    <InView className="skills reveal">
                        <h2>Core Skills</h2>
                        <ul className="skills-list">
                            <li>Azure Functions &amp; Event-Driven Systems</li>
                            <li>API &amp; Vendor Integration</li>
                            <li>AI Pipelines (Azure OpenAI, Gemini)</li>
                            <li>React &amp; TypeScript</li>
                            <li>Python &amp; Node.js</li>
                            <li>Azure DevOps &amp; CI/CD</li>
                        </ul>
                    </InView>
                </div>
            </section>
        </Layout>
    );
}
