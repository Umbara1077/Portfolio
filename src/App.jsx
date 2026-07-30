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
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/connect" element={<Connect />} />
                <Route path="/web-development" element={<WebDevelopment />} />
                <Route path="/mobile-development" element={<MobileDevelopment />} />
                <Route path="/cyber-security" element={<CyberSecurity />} />
                <Route path="/devops-architecture" element={<DevOpsArchitecture />} />
                <Route path="/job-request" element={<JobRequest />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}
