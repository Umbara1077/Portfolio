import { useLayoutEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Skills from './pages/Skills.jsx';
import Resume from './pages/Resume.jsx';
import Contact from './pages/Contact.jsx';
import Connect from './pages/Connect.jsx';
import WebDevelopment from './pages/WebDevelopment.jsx';
import MobileDevelopment from './pages/MobileDevelopment.jsx';
import CyberSecurity from './pages/CyberSecurity.jsx';
import DevOpsArchitecture from './pages/DevOpsArchitecture.jsx';
import JobRequest from './pages/JobRequest.jsx';
import Login from './pages/Login.jsx';
import Admin from './pages/Admin.jsx';
import NotFound from './pages/NotFound.jsx';

// Following a link used to load a fresh document, which always started at the
// top of the page.
function ScrollToTop() {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/index.html" element={<Home />} />
                <Route path="/about.html" element={<About />} />
                <Route path="/portfolio.html" element={<Portfolio />} />
                <Route path="/skills.html" element={<Skills />} />
                <Route path="/resume.html" element={<Resume />} />
                <Route path="/contact.html" element={<Contact />} />
                <Route path="/connect.html" element={<Connect />} />
                <Route path="/web-development.html" element={<WebDevelopment />} />
                <Route path="/mobile-development.html" element={<MobileDevelopment />} />
                <Route path="/cyber-security.html" element={<CyberSecurity />} />
                <Route path="/devops-architecture.html" element={<DevOpsArchitecture />} />
                <Route path="/job-request.html" element={<JobRequest />} />
                <Route path="/login.html" element={<Login />} />
                <Route path="/admin.html" element={<Admin />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}
