import { Layout } from '../components/Layout.jsx';
import { simpleFooter } from '../components/Footers.jsx';
import { usePageStyle } from '../hooks/usePageStyle.js';
import { usePageMeta } from '../hooks/usePageMeta.js';
import { VideoContainer } from '../components/VideoContainer.jsx';
import { ServiceButton } from '../components/ServiceButton.jsx';
import serviceCss from './ServicePage.css?inline';

export default function MobileDevelopment() {
    usePageStyle(serviceCss);
    usePageMeta({ title: 'Mobile Development' });

    return (
        <Layout orbs={2} logoAlt="Precision Pixel Studios" footer={simpleFooter}>
            <section id="video">
                <VideoContainer desktopSrc="/videos/Mobile-Dev.mp4" mobileSrc="/videos/Mobile-Dev-Mobile.mp4" />
            </section>
            <section id="content">
                <h2>Mobile Development</h2>

                <div className="service">
                    <h3>Why Mobile Development?</h3>
                    <p>
                        Mobile development is crucial in today's digital landscape. With the majority of internet users
                        accessing the web through mobile devices, having a mobile app or a mobile-optimized website is
                        essential for reaching and engaging your audience. Mobile apps offer convenience, personalized
                        experiences, and can drive customer loyalty.
                    </p>
                    <p>
                        <strong>How It Helps:</strong> Mobile development allows you to reach users on their preferred
                        devices, offering seamless experiences and increasing user engagement. By leveraging the latest
                        mobile technologies, we create apps that are fast, responsive, and provide a superior user
                        experience.
                    </p>
                </div>

                <div className="service">
                    <h3>Cyber Security for Mobile Apps</h3>
                    <p>
                        <strong>Why Mobile App Security?</strong> Mobile app security is essential for protecting your
                        applications from cyber threats. Our mobile app security solutions help ensure that your apps
                        are secure, preventing unauthorized access, data breaches, and other cyber threats. We utilize
                        the latest technologies and best practices to create secure mobile applications.
                    </p>
                    <ServiceButton to="/cyber-security.html">Learn More</ServiceButton>
                </div>

                <div className="service">
                    <h3>Android Development</h3>
                    <p>
                        <strong>Why Android?</strong> Android has a massive user base and offers extensive customization
                        options. Developing for Android allows you to reach a broad audience with diverse devices. We
                        create Android apps that are optimized for performance and user experience.
                    </p>
                </div>

                <div className="service">
                    <h3>iOS Development</h3>
                    <p>
                        <strong>Why iOS?</strong> iOS users are known for their higher engagement and spending.
                        Developing for iOS ensures that your app is available on Apple’s popular devices, providing a
                        premium experience to your users. Our iOS apps are designed to leverage the full potential of
                        the platform.
                    </p>
                </div>

                <div className="service">
                    <h3>Cross-Platform Development</h3>
                    <p>
                        <strong>Why Cross-Platform?</strong> Cross-platform development allows you to build apps that
                        run on both Android and iOS from a single codebase, reducing development time and costs. Using
                        frameworks like React Native and Flutter, we create apps that provide a consistent experience
                        across platforms.
                    </p>
                </div>

                <div className="service">
                    <h3>User Experience (UX) Design</h3>
                    <p>
                        <strong>Why UX Design?</strong> UX design is critical for creating intuitive and enjoyable user
                        experiences. Good UX design ensures that your app is easy to use, meets user needs, and keeps
                        them engaged. Our UX design process is user-centered, focusing on creating apps that users love.
                    </p>
                </div>
                <ServiceButton to="/index.html">Home</ServiceButton>
            </section>
        </Layout>
    );
}
