import { Layout } from '../components/Layout.jsx';
import { legacyFooter } from '../components/Footers.jsx';
import { usePageStyle, useWebFontsDisabled } from '../hooks/usePageStyle.js';
import { usePageMeta } from '../hooks/usePageMeta.js';
import { VideoContainer } from '../components/VideoContainer.jsx';
import { ServiceButton } from '../components/ServiceButton.jsx';
import { CYBER_SECURITY_LINKS } from '../navigation.js';
import serviceCss from './ServicePage.css?inline';

export default function CyberSecurity() {
    usePageStyle(serviceCss);
    useWebFontsDisabled();
    usePageMeta({ title: 'Cyber Security' });

    return (
        <Layout
            orbs={0}
            links={CYBER_SECURITY_LINKS}
            activeHref="/resume.html"
            sideNavActiveHref="/resume.html"
            showSideNavClose={false}
            footer={legacyFooter}
        >
            <section id="video">
                <VideoContainer desktopSrc="/videos/cyber.mp4" mobileSrc="/videos/cyber-mobile.mp4" />
            </section>
            <section id="content">
                <h2>Cyber Security</h2>

                <div className="service">
                    <h3>Why Cyber Security?</h3>
                    <p>
                        Cyber security is essential for protecting your business from cyber threats. A robust cyber
                        security strategy helps safeguard sensitive data, maintain customer trust, and ensure business
                        continuity. Whether you are a small business or a large enterprise, implementing strong cyber
                        security measures is crucial for protecting your digital assets.
                    </p>
                    <p>
                        <strong>How It Helps:</strong> Cyber security helps prevent data breaches, cyber-attacks, and
                        other security incidents. By utilizing the latest technologies and best practices, we create
                        security solutions that are not only effective but also adaptable to the evolving threat
                        landscape.
                    </p>
                </div>

                <div className="service">
                    <h3>Web Security</h3>
                    <p>
                        <strong>Why Web Security?</strong> Web security is crucial for protecting your website from
                        cyber threats. Our web security solutions help ensure that your website is secure, preventing
                        unauthorized access, data breaches, and other cyber threats. We utilize the latest technologies
                        and best practices to create secure web applications.
                    </p>
                </div>

                <div className="service">
                    <h3>Mobile Security</h3>
                    <p>
                        <strong>Why Mobile Security?</strong> Mobile security is essential for protecting your mobile
                        applications from cyber threats. Our mobile security solutions provide comprehensive protection
                        against malware, ransomware, and other threats, ensuring that your mobile applications and data
                        are secure.
                    </p>
                </div>

                <div className="service">
                    <h3>Database Security</h3>
                    <p>
                        <strong>Why Database Security?</strong> Database security is vital for protecting your data from
                        cyber threats. Our database security services include encryption, access controls, and
                        monitoring to ensure that your data is secure and compliant with industry standards.
                    </p>
                </div>

                <ServiceButton to="/index.html">Home</ServiceButton>
            </section>
        </Layout>
    );
}
