import { Layout } from '../components/Layout.jsx';
import { simpleFooter } from '../components/Footers.jsx';
import { usePageStyle } from '../hooks/usePageStyle.js';
import { usePageMeta } from '../hooks/usePageMeta.js';
import {
    FACEBOOK_ICON,
    FloatDots,
    GITHUB_ICON,
    INSTAGRAM_ICON,
    LINKEDIN_ICON,
    MagneticCta,
    SocialCard,
    X_ICON
} from '../components/connect.jsx';
import contactCss from './Contact.css?inline';

const CARDS = [
    {
        href: 'https://www.linkedin.com/in/dante-corso/',
        brand: 'linkedin',
        icon: LINKEDIN_ICON,
        platform: 'LinkedIn',
        handle: 'dante-corso',
        action: 'Connect'
    },
    {
        href: 'https://github.com/Umbara1077',
        brand: 'github',
        icon: GITHUB_ICON,
        platform: 'GitHub',
        handle: 'Umbara1077',
        action: 'Follow'
    },
    {
        href: 'https://www.x.com/Umbara1077?s=09',
        brand: 'xtwitter',
        icon: X_ICON,
        platform: 'Twitter / X',
        handle: '@Umbara1077',
        action: 'Follow'
    },
    {
        href: 'https://www.instagram.com/precisionpixelinnovations/',
        brand: 'instagram',
        icon: INSTAGRAM_ICON,
        platform: 'Instagram',
        handle: '@precisionpixelinnovations',
        action: 'Follow'
    },
    {
        href: 'https://www.facebook.com/profile.php?id=61560372401424&mibextid=ZbWKwL',
        brand: 'facebook',
        icon: FACEBOOK_ICON,
        platform: 'Facebook',
        handle: 'Precision Pixel',
        action: 'Follow'
    }
];

export default function Contact() {
    usePageStyle(contactCss);
    usePageMeta({ title: 'Contact \u2014 Dante Corso' });

    return (
        <Layout orbs={2} activeHref="/contact" footer={simpleFooter}>
            <section id="connect-page">
                <div className="connect-spotlight"></div>
                <FloatDots />
                <div className="connect-inner">
                    <p className="connect-eyebrow">Get In Touch</p>
                    <h1 className="connect-headline">
                        Connect <span className="gold">with Me</span>
                    </h1>
                    <p className="connect-subtitle">
                        Always happy to talk shop, collaborate, or connect. Reach me directly, or find me on the
                        platforms below.
                    </p>

                    <div className="contact-chips">
                        <a href="tel:+18567230942" className="contact-chip">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                            </svg>
                            <span className="chip-label">Phone</span> (856) 723-0942
                        </a>
                        <a href="mailto:corsodante8@gmail.com" className="contact-chip">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                            <span className="chip-label">Personal</span> corsodante8@gmail.com
                        </a>
                    </div>

                    <div className="social-grid">
                        {CARDS.map((card, index) => (
                            <SocialCard key={card.brand} {...card} index={index} stagger={120} />
                        ))}
                    </div>

                    <div className="connect-divider">or send a message</div>

                    <MagneticCta href="mailto:corsodante8@gmail.com">
                        &#9993;&#65039; Send Me a Message <span className="arrow">&#8594;</span>
                    </MagneticCta>
                </div>
            </section>
        </Layout>
    );
}
