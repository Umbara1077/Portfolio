import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout.jsx';
import { simpleFooter } from '../components/Footers.jsx';
import { usePageStyle } from '../hooks/usePageStyle.js';
import { usePageMeta } from '../hooks/usePageMeta.js';
import {
    FloatDots,
    GITHUB_ICON,
    INSTAGRAM_ICON,
    LINKEDIN_ICON,
    MagneticCta,
    SocialCard
} from '../components/connect.jsx';
import connectCss from './Connect.css?inline';

const CARDS = [
    {
        href: 'https://www.linkedin.com/in/dante-corso/',
        brand: 'linkedin',
        icon: LINKEDIN_ICON,
        platform: 'LinkedIn',
        description: 'Professional network, career updates, and industry connections.',
        handle: 'dante-corso',
        action: 'Connect'
    },
    {
        href: 'https://github.com/Umbara1077',
        brand: 'github',
        icon: GITHUB_ICON,
        platform: 'GitHub',
        description: "Open source projects, repos, and code I've shipped in the wild.",
        handle: 'Umbara1077',
        action: 'Follow'
    },
    {
        href: 'https://www.instagram.com/precisionpixelstudio/',
        brand: 'instagram',
        icon: INSTAGRAM_ICON,
        platform: 'Instagram',
        description: 'Behind-the-scenes builds, creative projects, and studio work.',
        handle: '@precisionpixelstudio',
        action: 'Follow'
    }
];

export default function Connect() {
    usePageStyle(connectCss);
    usePageMeta({ title: 'Connect \u2014 Dante Corso' });

    return (
        <Layout orbs={3} footer={simpleFooter}>
            <section id="connect-page">
                <div className="connect-spotlight"></div>
                <FloatDots />
                <div className="connect-inner">
                    <div className="availability-badge">
                        <span className="dot"></span>
                        Available for new opportunities
                    </div>

                    <p className="connect-eyebrow">Get In Touch</p>
                    <h1 className="connect-headline">
                        Let's <span className="gold">Connect</span>
                    </h1>
                    <p className="connect-subtitle">
                        Open to new opportunities, collaborations, and conversations. Find me on the platforms below —
                        or send me a direct message.
                    </p>

                    <div className="social-grid">
                        {CARDS.map((card, index) => (
                            <SocialCard key={card.brand} {...card} index={index} stagger={140} />
                        ))}
                    </div>

                    <div className="connect-divider">or send a message</div>

                    <MagneticCta as={Link} to="/contact.html">
                        &#9993;&#65039; Send Me a Message <span className="arrow">&#8594;</span>
                    </MagneticCta>
                </div>
            </section>
        </Layout>
    );
}
