import { Layout } from '../components/Layout.jsx';
import { footerWithDisclaimer } from '../components/Footers.jsx';
import { usePageMeta } from '../hooks/usePageMeta.js';
import { usePageStyle } from '../hooks/usePageStyle.js';
import { InView } from '../components/InView.jsx';
import { MAIN_LINKS, PROJECT_LINKS } from '../navigation.js';
import liveProjectsCss from './LiveProjects.css?inline';

const PROJECTS = [
    {
        ...PROJECT_LINKS[0],
        theme: 'gelato',
        title: 'Dolce Vita Gelateria',
        logo: '/images/dolce-logo.png',
        type: 'Connected business platform',
        description: 'Visit the live Dolce Vita Sewell website for current hours, flavors in the case, the full flavor rotation, caffè, cakes, events, and shop information; order ahead through the connected mobile ordering app; or explore the system demo covering digital signage and inventory management.',
        tags: ['Italian Rustic', 'Live Website', 'Live Flavors', 'Mobile Ordering', 'Digital Signage', 'Inventory Management', 'System Demo'],
        links: [
            { href: 'https://dolcevitasewell.com', label: 'Visit website' },
            { href: 'https://mobileorder.dolcevitasewell.com', label: 'Order ahead' },
            { href: PROJECT_LINKS[0].href, label: 'Digital signage demo' }
        ]
    },
    {
        ...PROJECT_LINKS[1],
        theme: 'gridiron',
        logo: '/images/gridiron-logo.svg',
        title: 'Gridiron \u2014 NFL Tracker',
        type: 'Live sports data app \u00B7 ESPN API',
        description:
            'A full NFL season tracker built on the ESPN API: live scores with quarter-by-quarter line scores, kickoff countdowns, broadcast networks and betting lines; division standings with playoff seeding; a live postseason picture; a personal team hub; and written reports generated from the season data. Twelve seasons are browsable back to 2015, and the interface repaints in your team\u2019s colors.',
        tags: ['React', 'ESPN API', 'Cloudflare Pages', 'Live Scores', 'PWA', 'Web Push']
    },
    {
        ...PROJECT_LINKS[2],
        theme: 'shop',
        title: '3D Print Shop',
        type: 'Live e-commerce storefront',
        description: 'A complete storefront for made-to-order 3D printed décor and collectibles, including product discovery, cart flows, and Stripe checkout.',
        tags: ['E-Commerce', 'Firebase', 'Stripe']
    },
    {
        ...PROJECT_LINKS[3],
        theme: 'ember',
        title: 'Emberknot',
        logo: '/images/emberknot-logo.svg',
        type: 'Private connection app · In development',
        description: 'A private app for two people built around small gestures, shared moments, important dates, and a relationship Atlas. The product site and interactive previews are live.',
        tags: ['Mobile Product', 'Shared Memories', 'Interactive Atlas']
    },
    {
        ...PROJECT_LINKS[4],
        theme: 'flight',
        title: 'From Summit to Sea',
        type: 'Interactive WebGL flight study',
        description: 'A scroll-controlled flight from alpine dawn to an open-ocean sunset, with procedural terrain, aircraft, atmosphere, ocean, ships, and wildlife.',
        tags: ['Three.js', 'WebGL', 'GLSL']
    },
    {
        ...PROJECT_LINKS[5],
        theme: 'space',
        title: 'Interactive 3D Solar System',
        type: 'Real-time browser experience',
        description: 'Orbit every planet, travel through the asteroid belt, and explore a GPU-rendered starfield in a fully interactive Three.js experience.',
        tags: ['Three.js', 'WebGL', '3D']
    }
];

export default function LiveProjects() {
    usePageStyle(liveProjectsCss);
    usePageMeta({
        title: 'Live Projects — Dante Corso',
        description: 'Open live software demos and interactive web experiences built by Dante Corso.',
        canonical: 'https://dantecorso.com/live-projects'
    });

    return (
        <Layout orbs={3} links={MAIN_LINKS} activeHref="/live-projects" footer={footerWithDisclaimer} mainClassName="live-projects-page">
            <section className="live-projects-hero">
                <span>Live Work</span>
                <h1>Projects You Can Open and Explore</h1>
                <p>Working demos, deployed products, and interactive experiences—organized in one place.</p>
            </section>
            <section className="live-project-list" aria-label="Live projects">
                {PROJECTS.map((project, index) => (
                    <InView as="article" className={`live-project-card live-theme-${project.theme} reveal`} key={project.href}>
                        {project.theme === 'ember' && <div className="live-card-particles" aria-hidden="true"><i>♥</i><i>♥</i><i>♥</i><i>♥</i><i>♥</i><i>♥</i><b>♡</b><b>♡</b></div>}
                        {project.theme === 'flight' && <div className="live-card-flight-art" aria-hidden="true"><span className="live-plane">✈</span><span className="live-flight-line" /></div>}
                        {project.theme === 'gelato' && <div className="live-italian-mark" aria-hidden="true"><span /><span /><span /></div>}
                        {project.theme === 'space' && <div className="live-card-stars" aria-hidden="true"></div>}
                        <div className="live-project-number">0{index + 1}</div>
                        <div className="live-project-copy">
                            <span className="live-project-type">{project.type}</span>
                            <h2>{project.logo && <img className="live-project-logo" src={project.logo} alt="" />}{project.title}</h2>
                            <p>{project.description}</p>
                            <div className="live-project-tags">
                                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                            </div>
                        </div>
                        {project.links ? (
                            <div className="live-project-actions">
                                {project.links.map((link) => (
                                    <a href={link.href} target="_blank" rel="noopener noreferrer" key={link.href}>
                                        {link.label} <span aria-hidden="true">↗</span>
                                    </a>
                                ))}
                            </div>
                        ) : (
                            <a href={project.href} target="_blank" rel="noopener noreferrer">Open project <span aria-hidden="true">↗</span></a>
                        )}
                    </InView>
                ))}
            </section>
        </Layout>
    );
}
