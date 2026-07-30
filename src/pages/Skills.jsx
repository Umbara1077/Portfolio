import { useState } from 'react';
import { Layout } from '../components/Layout.jsx';
import { footerWithDisclaimer } from '../components/Footers.jsx';
import { usePageMeta } from '../hooks/usePageMeta.js';
import { InView } from '../components/InView.jsx';

const DESCRIPTION =
    'Azure Functions, Python, React, TypeScript, Firebase, Azure OpenAI, CI/CD. The stack Dante Corso builds production systems with.';

function WeatherWidget() {
    const [label, setLabel] = useState('Show Local Weather');
    const [disabled, setDisabled] = useState(false);
    const [result, setResult] = useState(null);

    // Request location only after the visitor explicitly asks for weather.
    const handleClick = () => {
        setDisabled(true);
        setLabel('Fetching...');

        if (!navigator.geolocation) {
            setResult('Geolocation not supported.');
            setDisabled(false);
            setLabel('Show Local Weather');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                fetch(`/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`)
                    .then((r) => (r.ok ? r.json() : Promise.reject()))
                    .then((d) => {
                        setResult(
                            <>
                                <strong>{d.name}</strong>: {d.main.temp}&deg;F &mdash; {d.weather[0].description}
                                <br />
                                Humidity: {d.main.humidity}% &middot; Wind: {d.wind.speed} m/s
                            </>
                        );
                    })
                    .catch(() => {
                        setResult('Error loading weather data.');
                    })
                    .finally(() => {
                        setDisabled(false);
                        setLabel('Refresh Local Weather');
                    });
            },
            () => {
                setResult('Location access denied.');
                setDisabled(false);
                setLabel('Show Local Weather');
            }
        );
    };

    return (
        <div id="weather-widget">
            <button type="button" id="getWeatherBtn" className="btn" disabled={disabled} onClick={handleClick}>
                {label}
            </button>
            <div id="weather" aria-live="polite">
                {result}
            </div>
        </div>
    );
}

export default function Skills() {
    usePageMeta({
        title: 'Skills \u2014 Dante Corso',
        description: DESCRIPTION,
        canonical: 'https://dantecorso.com/skills',
        ogTitle: 'Skills \u2014 Dante Corso',
        ogDescription: DESCRIPTION,
        ogUrl: 'https://dantecorso.com/skills'
    });

    return (
        <Layout orbs={3} activeHref="/skills" footer={footerWithDisclaimer}>
            <section id="skills">
                <InView as="h1" className="section-title reveal" threshold={0.06}>
                    My Skills
                </InView>
                <WeatherWidget />

                <InView className="service reveal" threshold={0.06}>
                    <div>
                        <h3>Software Engineering</h3>
                        <p>
                            Applying software engineering principles to design, develop, test, and maintain
                            high-quality applications. Expertise in building scalable, maintainable, and efficient
                            software solutions.
                        </p>
                        <p>
                            <strong>Methodologies:</strong> Agile, Scrum, and DevOps practices for rapid, continuous
                            delivery.
                        </p>
                        <p>
                            <strong>Version Control:</strong> Git, GitHub, and GitLab for collaborative development and
                            CI.
                        </p>
                    </div>
                </InView>

                <InView className="service reveal" threshold={0.06}>
                    <div>
                        <h3>Full Stack Development</h3>
                        <p>
                            Expertise in both front-end and back-end development, ensuring seamless integration and
                            efficient workflows.
                        </p>
                        <p>
                            <strong>Front-End:</strong> React and TypeScript with responsive, real-time UI.
                        </p>
                        <p>
                            <strong>Back-End:</strong> Node.js, Python, Java with SQL/NoSQL databases.
                        </p>
                        <p>
                            <strong>Auth &amp; Security:</strong> OAuth, JWT, and Firebase Authentication for secure
                            user management.
                        </p>
                    </div>
                </InView>

                <InView className="service reveal" threshold={0.06}>
                    <div>
                        <h3>Front-End Development</h3>
                        <p>Building intuitive and responsive user interfaces using modern web technologies.</p>
                        <p>
                            <strong>Core:</strong> HTML, CSS, JavaScript, TypeScript.
                        </p>
                        <p>
                            <strong>Frameworks:</strong> React, Next.js, and Vite for fast single-page applications.
                        </p>
                    </div>
                </InView>

                <InView className="service reveal" threshold={0.06}>
                    <div>
                        <h3>Back-End Development</h3>
                        <p>Developing secure, scalable, high-performance server-side applications.</p>
                        <p>
                            <strong>Technologies:</strong> Node.js, Express, and Python on Azure Functions and Firebase
                            Cloud Functions.
                        </p>
                        <p>
                            <strong>APIs:</strong> RESTful APIs with JSON schema validation and OAuth 2.0.
                        </p>
                    </div>
                </InView>

                <InView className="service reveal" threshold={0.06}>
                    <div>
                        <h3>WordPress Development</h3>
                        <p>Creating customized and scalable WordPress solutions for businesses.</p>
                        <p>
                            <strong>Services:</strong> Custom theme development, plugin creation, WooCommerce
                            integration.
                        </p>
                        <p>
                            <strong>Performance:</strong> Caching strategies, lazy loading, and database optimization.
                        </p>
                    </div>
                </InView>

                <InView className="service reveal" threshold={0.06}>
                    <div>
                        <h3>Database Design &amp; Management</h3>
                        <p>Expertise in designing and managing relational and non-relational databases.</p>
                        <p>
                            <strong>SQL:</strong> PostgreSQL, MySQL, and SQL Server for structured data management.
                        </p>
                        <p>
                            <strong>NoSQL:</strong> MongoDB and Firebase Firestore for real-time applications.
                        </p>
                    </div>
                </InView>

                <InView className="service reveal" threshold={0.06}>
                    <div>
                        <h3>API Development &amp; Integration</h3>
                        <p>Building and integrating APIs to enhance application functionality and connectivity.</p>
                        <p>
                            <strong>REST &amp; Webhooks:</strong> Structured, idempotent, event-driven API design.
                        </p>
                        <p>
                            <strong>Third-Party:</strong> Stripe, Google Maps, OpenWeatherMap, and more.
                        </p>
                    </div>
                </InView>

                <InView className="service reveal" threshold={0.06}>
                    <div>
                        <h3>Cloud &amp; DevOps</h3>
                        <p>Deploying and managing applications on cloud platforms with automated infrastructure.</p>
                        <p>
                            <strong>Platforms:</strong> AWS, Google Cloud, Firebase, and Microsoft Azure.
                        </p>
                        <p>
                            <strong>CI/CD:</strong> Azure DevOps pipelines and GitHub Actions.
                        </p>
                        <p>
                            <strong>Secrets &amp; Identity:</strong> Azure Key Vault and managed identity for
                            credential-free service auth.
                        </p>
                    </div>
                </InView>

                <InView className="service reveal" threshold={0.06}>
                    <div>
                        <h3>Cyber Security</h3>
                        <p>Implementing security best practices to protect applications, data, and infrastructure.</p>
                        <p>
                            <strong>Practices:</strong> CVE and EPSS monitoring, prompt-injection hardening, and
                            least-privilege secrets.
                        </p>
                        <p>
                            <strong>API Security:</strong> OAuth, JWT, and rate limiting to secure endpoints.
                        </p>
                    </div>
                </InView>

                <InView className="service reveal" threshold={0.06}>
                    <div>
                        <h3>Containerization &amp; Serverless</h3>
                        <p>Deploying containerized applications for resource efficiency and scalability.</p>
                        <p>
                            <strong>Docker:</strong> Containerizing applications for seamless deployment.
                        </p>
                        <p>
                            <strong>Serverless:</strong> Azure Functions, Azure Static Web Apps, and Firebase Cloud
                            Functions.
                        </p>
                    </div>
                </InView>

                <InView className="service reveal" threshold={0.06}>
                    <div>
                        <h3>Real-Time Applications</h3>
                        <p>Building applications with WebSockets and Firebase for real-time interactions.</p>
                        <p>
                            <strong>Technologies:</strong> Firestore real-time listeners and Firebase Realtime Database.
                        </p>
                        <p>
                            <strong>Use Cases:</strong> Live chat, notifications, collaborative apps.
                        </p>
                    </div>
                </InView>

                <InView className="service reveal" threshold={0.06}>
                    <div>
                        <h3>Mobile App Development</h3>
                        <p>
                            Building cross-platform mobile applications with a focus on performance and user experience.
                        </p>
                        <p>
                            <strong>Mobile Web:</strong> Responsive PWA-style ordering apps used daily on customer
                            phones.
                        </p>
                        <p>
                            <strong>Distribution:</strong> Packaged Android builds distributed directly to clients.
                        </p>
                        <div
                            style={{
                                marginTop: '12px',
                                display: 'flex',
                                gap: '12px',
                                alignItems: 'center',
                                flexWrap: 'wrap'
                            }}
                        >
                            <a href="https://play.google.com/store/apps" target="_blank">
                                <img
                                    src="/images/playstore.png"
                                    alt="Google Play"
                                    style={{ height: '40px', width: 'auto' }}
                                />
                            </a>
                            <a href="https://precisionpixelinnovations.dev/precisionpixel.apk" target="_blank">
                                <img
                                    src="/images/android_download.jpeg"
                                    alt="Download APK"
                                    style={{ height: '40px', width: 'auto' }}
                                />
                            </a>
                            <a href="https://developer.apple.com/" target="_blank">
                                <img
                                    src="/images/applelogo.png"
                                    alt="Apple"
                                    style={{ height: '40px', width: 'auto' }}
                                />
                            </a>
                        </div>
                    </div>
                </InView>
            </section>
        </Layout>
    );
}
