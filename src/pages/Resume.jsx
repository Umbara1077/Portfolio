import { useState } from 'react';
import { Layout } from '../components/Layout.jsx';
import { InView } from '../components/InView.jsx';
import { simpleFooter } from '../components/Footers.jsx';
import { usePageStyle } from '../hooks/usePageStyle.js';
import { usePageMeta } from '../hooks/usePageMeta.js';
import resumeCss from './Resume.css?inline';

const DESCRIPTION =
    'R\u00E9sum\u00E9 of Dante Corso, cloud integration engineer: Azure automation, unified backup monitoring, multi-vendor networking, and AI-powered business systems.';

const TABS = [
    { id: 'tab-experience', label: 'Experience' },
    { id: 'tab-projects', label: 'Projects' },
    { id: 'tab-skills', label: 'Skills' },
    { id: 'tab-education', label: <>Education &amp; Certifications</> }
];

const SKILL_GROUPS = [
    { title: 'Languages', chips: ['Python', 'TypeScript', 'JavaScript', 'SQL'] },
    {
        title: 'Azure',
        chips: [
            'Azure Functions',
            'Communication Services',
            'Event Grid',
            'Azure Speech',
            'Azure OpenAI',
            'AI Foundry',
            'Blob & Table Storage',
            'Static Web Apps',
            'Logic Apps',
            'Key Vault',
            'Application Insights'
        ]
    },
    {
        title: <>Web &amp; Backend</>,
        chips: [
            'React',
            'Next.js',
            'Vite',
            'Tailwind',
            'HTML',
            'CSS',
            'Node.js',
            'Express',
            'Firebase Cloud Functions'
        ]
    },
    { title: 'Data', chips: ['Firestore', 'Azure SQL', 'MongoDB', 'Azure Table Storage'] },
    {
        title: <>AI &amp; Automation</>,
        chips: ['Azure OpenAI', 'Gemini', 'Google Vision OCR', 'JSON schema validation', 'Prompt-injection hardening']
    },
    {
        title: <>APIs, DevOps &amp; Process</>,
        chips: [
            'REST',
            'OAuth 2.0',
            'Webhooks',
            'Event-driven architecture',
            'Git',
            'GitHub Actions',
            'Azure DevOps',
            'CI/CD',
            'pytest',
            'KQL',
            'Agile'
        ]
    }
];

export default function Resume() {
    usePageStyle(resumeCss);
    usePageMeta({
        title: 'Resume \u2014 Dante Corso',
        description: DESCRIPTION,
        canonical: 'https://dantecorso.com/resume.html',
        ogTitle: 'R\u00E9sum\u00E9 \u2014 Dante Corso',
        ogDescription: DESCRIPTION,
        ogUrl: 'https://dantecorso.com/resume.html'
    });

    const [activeTab, setActiveTab] = useState('tab-experience');

    const sectionClass = (id) => `resume-section${activeTab === id ? ' active-section' : ''}`;

    return (
        <Layout orbs={2} activeHref="/resume.html" mainClassName="container" footer={simpleFooter}>
            <section id="resume">
                <InView className="resume-header-card rz-reveal">
                    <div className="resume-header-main">
                        <span className="rz-eyebrow">R&eacute;sum&eacute;</span>
                        <h1 className="resume-name">Dante Corso</h1>
                        <p className="resume-title">Cloud Integration Engineer</p>
                        <p className="resume-summary">
                            I build and operate event-driven Azure systems that connect telephony, AI services, vendor
                            APIs, and business platforms. At a managed services provider, I own four production platforms
                            end to end, including call automation, unified backup monitoring, multi-vendor network
                            monitoring, and on-call routing.
                        </p>
                        <div className="rz-cta-row">
                            <a
                                className="rz-btn primary"
                                href="/pdf/Dante_Corso_Resume.pdf"
                                target="_blank"
                                rel="noopener"
                                download
                            >
                                &#11015; Download R&eacute;sum&eacute; (PDF)
                            </a>
                        </div>
                    </div>
                    <div className="resume-header-meta">
                        <p>
                            <strong>Location:</strong> Williamstown, NJ
                        </p>
                        <p>
                            <strong>Phone:</strong> <a href="tel:+18567230942">(856) 723-0942</a>
                        </p>
                        <p>
                            <strong>Email:</strong> <a href="mailto:corsodante8@gmail.com">corsodante8@gmail.com</a>
                        </p>
                        <p>
                            <strong>Portfolio:</strong>{' '}
                            <a href="https://dantecorso.com" target="_blank">
                                dantecorso.com
                            </a>
                        </p>
                        <p>
                            <strong>LinkedIn:</strong>{' '}
                            <a href="https://www.linkedin.com/in/dante-corso/" target="_blank">
                                linkedin.com/in/dante-corso
                            </a>
                        </p>
                        <p>
                            <strong>GitHub:</strong>{' '}
                            <a href="https://github.com/Umbara1077" target="_blank">
                                github.com/Umbara1077
                            </a>
                        </p>
                    </div>
                </InView>

                {/* Impact metrics */}
                <InView className="rz-stats rz-reveal">
                    <div className="rz-stat">
                        <b>4</b>
                        <span>Production cloud platforms</span>
                    </div>
                    <div className="rz-stat">
                        <b>525</b>
                        <span>Backup assets monitored daily</span>
                    </div>
                    <div className="rz-stat">
                        <b>50%</b>
                        <span>Less inventory lookup time</span>
                    </div>
                    <div className="rz-stat">
                        <b>20+</b>
                        <span>Production projects shipped</span>
                    </div>
                </InView>

                <div className="resume-tabs">
                    {TABS.map((tab) => (
                        <button
                            key={tab.id}
                            className={`resume-tab${activeTab === tab.id ? ' active' : ''}`}
                            data-target={`#${tab.id}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Experience */}
                <section id="tab-experience" className={sectionClass('tab-experience')}>
                    <h2>Experience</h2>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3>E3 IT Services</h3>
                                    <span className="timeline-role">Cloud Integration Engineer</span>
                                    <span className="timeline-dates">2024 – Present</span>
                                </div>
                                <div className="rz-tags">
                                    <span className="rz-tag">Azure Functions</span>
                                    <span className="rz-tag">Azure OpenAI</span>
                                    <span className="rz-tag">Azure Speech</span>
                                    <span className="rz-tag">Event Grid</span>
                                    <span className="rz-tag">Python</span>
                                    <span className="rz-tag">Node.js</span>
                                    <span className="rz-tag">React 19</span>
                                    <span className="rz-tag">Azure DevOps</span>
                                </div>
                                <div className="rz-project-block">
                                    <h4 className="rz-project-heading">
                                        Call Automation Platform — ACS → Speech → Azure OpenAI → Autotask
                                    </h4>
                                    <ul>
                                        <li>
                                            Architected a call automation platform across three Python Azure Function
                                            Apps — answers inbound Azure Communication Services calls, routes them
                                            through an ordered Microsoft Teams engineer queue with automatic voicemail
                                            failover, records to Blob Storage, transcribes with Azure Speech batch jobs,
                                            and generates client-ready documentation with Azure OpenAI, posting the
                                            finished time entry to the engineer's active Autotask ticket with no manual
                                            step.
                                        </li>
                                        <li>
                                            Designed table-backed idempotency around every external side effect — Event
                                            Grid events, recording uploads, AI analyses, and ticket posts — so
                                            at-least-once webhook delivery and retries cannot produce duplicates. Failed
                                            operations release their claim row so redelivery retries safely.
                                        </li>
                                        <li>
                                            Built a sanitized correlation ID propagated across ten hops, from the first
                                            webhook through storage, Speech, the model, and the ticket note — making any
                                            call traceable end to end from a single KQL query.
                                        </li>
                                        <li>
                                            Hardened the AI layer against prompt injection: transcripts are treated as
                                            untrusted data and scrubbed of control characters, signed URLs, connection
                                            strings, and instruction-override phrases; model output is schema-constrained
                                            and re-validated before any external write. Engineer identity comes from
                                            verified Teams metadata, not model inference.
                                        </li>
                                        <li>
                                            Built a React 19 + TypeScript operations dashboard on Azure Static Web Apps —
                                            service health, storage analytics, a searchable recording and transcript
                                            explorer with HTTP Range–based seekable audio, and Azure Cost Management
                                            integration reporting cost per call.
                                        </li>
                                    </ul>
                                </div>

                                <div className="rz-project-block">
                                    <h4 className="rz-project-heading">
                                        Unified Backup System — Datto BCDR / Endpoint / SaaS → Axcient x360Recover
                                    </h4>
                                    <ul>
                                        <li>
                                            Built and operate a Node 20 Azure Functions backup monitoring platform
                                            spanning Datto BCDR, Datto Endpoint, Datto SaaS Protection, and Axcient
                                            x360Recover, normalizing roughly 525 protected assets into one stable issue
                                            model for reliable day-over-day deltas and one-ticket-per-issue automation.
                                        </li>
                                        <li>
                                            Designed per-source health and staleness safeguards so vendor outages fail
                                            loudly instead of creating false green results, backed by 96 dependency-free
                                            tests that cover collection, normalization, archiving, reporting, and failure
                                            scenarios before every deployment.
                                        </li>
                                        <li>
                                            Ships a daily Microsoft Teams exception report, a live engineer triage
                                            console, and an indefinite Blob Storage archive behind a latest-state API
                                            that returns current results without calling a vendor.
                                        </li>
                                    </ul>
                                </div>

                                <div className="rz-project-block">
                                    <h4 className="rz-project-heading">
                                        Unified Network Monitor — UniFi / SonicWall / Cisco Meraki → Autotask
                                    </h4>
                                    <ul>
                                        <li>
                                            Built a multi-vendor network monitor across UniFi, SonicWall, and Cisco
                                            Meraki fleets — polls vendor APIs every five minutes, normalizes them into
                                            one model, and opens, tracks, and auto-resolves Autotask tickets through a
                                            Table Storage state machine, with pure detection modules under unit test and
                                            alert suppression so one incident makes one ticket.
                                        </li>
                                        <li>
                                            Added a daily advisory pipeline enriching vendor security advisories with NVD
                                            CVE detail and FIRST EPSS exploit-probability scores, matched against
                                            deployed firmware; plus CI/CD pipelines in Azure DevOps standardizing
                                            releases across client environments.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3>P&amp;S Ravioli Company</h3>
                                    <span className="timeline-role">Full Stack Developer (Freelance)</span>
                                    <span className="timeline-dates">2024</span>
                                </div>
                                <div className="rz-tags">
                                    <span className="rz-tag">Firestore</span>
                                    <span className="rz-tag">Dashboards</span>
                                    <span className="rz-tag">PDF Reporting</span>
                                    <span className="rz-tag">Multi-Location</span>
                                </div>
                                <ul>
                                    <li>
                                        Built a real-time inventory platform on Firestore with auto-generated UPC
                                        barcodes and multi-location stock tracking, reducing inventory lookup time by{' '}
                                        <strong>50%</strong>.
                                    </li>
                                    <li>
                                        Designed role-based dashboards for drivers and managers with advanced filtering,
                                        search, and live analytics.
                                    </li>
                                    <li>
                                        Automated PDF reporting pipelines that replaced manual audit and logistics
                                        reporting.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3>Dolce Vita Gelato</h3>
                                    <span className="timeline-role">Full Stack Developer</span>
                                    <span className="timeline-dates">2023 – 2024</span>
                                </div>
                                <div className="rz-tags">
                                    <span className="rz-tag">React</span>
                                    <span className="rz-tag">TypeScript</span>
                                    <span className="rz-tag">Firebase</span>
                                    <span className="rz-tag">Stripe</span>
                                    <span className="rz-tag">Geofencing</span>
                                </div>
                                <ul>
                                    <li>
                                        Designed, built, and maintained an entire company software stack — nine
                                        integrated systems on one shared real-time Firebase backend, so a change in one
                                        place updates everywhere instantly.{' '}
                                        <a href="https://gelato-system-demo.web.app" target="_blank" rel="noopener">
                                            <strong>Try the live demo →</strong>
                                        </a>
                                    </li>
                                    <li>
                                        Built the customer mobile ordering app — animated themed UI, full cart and Stripe
                                        checkout, and GPS geofenced check-in that pings staff the moment a customer
                                        reaches the pickup zone, with orders feeding a unified real-time queue.{' '}
                                        <a href="https://dolcevitasewell-mobileorder.com" target="_blank" rel="noopener">
                                            <strong>View live →</strong>
                                        </a>
                                    </li>
                                    <li>
                                        Architected the digital signage and product management platform — in-store
                                        displays sync menu, pricing, and promotions from Firebase in real time, while the
                                        admin panel controls active flavors, sold-out toggles, and daily specials, pushed
                                        live to every screen instantly.
                                    </li>
                                    <li>
                                        Built a React + TypeScript Recipe &amp; Flavor Lab that digitizes the gelato
                                        recipe workbook — automated ingredient scaling math, flavor management, and live
                                        Firestore sync replace manual spreadsheet workflows.
                                    </li>
                                    <li>
                                        Developed a multi-module Inventory &amp; Supply Management platform for tracking
                                        ingredient stock across locations — add, use, transfer, search, and process order
                                        queues, all secured with Firebase Auth.
                                    </li>
                                    <li>
                                        Unified all tools under a private Command Center dashboard and Staff Passport
                                        portal, giving the team role-gated single-click access to every operational
                                        system.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects */}
                <section id="tab-projects" className={sectionClass('tab-projects')}>
                    <h2>Highlighted Projects</h2>
                    <div className="resume-grid">
                        {/* ACS Call Transcription (E3) */}
                        <div className="resume-card rz-featured">
                            <span className="rz-star">&#9733; Featured</span>
                            <h3>ACS Call Transcription &amp; Time-Entry Automation</h3>
                            <p className="badge">
                                Azure Functions • Azure Communication Services • Azure Speech • Azure OpenAI • Python •
                                Autotask
                            </p>
                            <p>
                                Three-stage serverless pipeline built for E3 IT Services. The first Function App answers
                                incoming ACS calls, plays consent audio, records the conversation, and uploads WAV chunks
                                to Blob Storage. The second transcribes recordings using Azure Speech batch jobs and
                                sends the transcript to Azure OpenAI for structured analysis, extracting engineer name,
                                full transcript, and a professional time-entry summary. The third resolves the engineer
                                in Autotask and posts the generated note to their active ticket. Full idempotency
                                tracking, correlation ID tracing, and prompt-injection safeguards throughout.
                            </p>
                        </div>

                        {/* Unified Backup System (E3) */}
                        <div className="resume-card rz-featured">
                            <span className="rz-star">&#9733; Featured</span>
                            <h3>Unified Backup System</h3>
                            <p className="badge">
                                Azure Functions • Node.js • Datto BCDR • Datto Endpoint • SaaS Protection • Axcient
                                x360Recover
                            </p>
                            <p>
                                Production monitoring platform covering roughly 525 backup assets across four vendor
                                platforms. Nine Azure Functions collect, normalize, archive, and report vendor health
                                through one stable issue model, with per-source outage isolation, read-time staleness
                                checks, and one-ticket-per-issue automation. A 96-test dependency-free suite gates every
                                deployment, while daily Teams exception reports, a live engineer triage console, and an
                                indefinite Blob archive keep failures visible and auditable.
                            </p>
                        </div>

                        {/* Insurance PDF AI Comparison Platform */}
                        <div className="resume-card rz-featured">
                            <span className="rz-star">&#9733; Featured</span>
                            <h3>Insurance PDF AI Comparison Platform</h3>
                            <p className="badge">React • Firebase • Cloud Functions • Gemini</p>
                            <p>
                                Secure, internal platform for Funari Public Adjusters that ingests carrier and public
                                adjuster estimates, runs OCR via Cloud Functions, and uses Gemini to generate an
                                AI-powered, side-by-side Markdown synopsis. Supports PDF and Excel export for negotiation
                                and client reporting.
                            </p>
                        </div>

                        {/* Interactive 3D Solar System */}
                        <div className="resume-card rz-featured">
                            <span className="rz-star">&#9733; Featured</span>
                            <h3>Interactive 3D Solar System</h3>
                            <p className="badge">JavaScript • Three.js • WebGL • Firebase Hosting</p>
                            <p>
                                Fully interactive 3D solar system built with Three.js, featuring real-time rendering,
                                smooth camera transitions, and clickable celestial bodies. Users can explore planets,
                                asteroid belts, comets, and deep-space objects while viewing dynamically generated
                                educational data and orbital visuals.{' '}
                                <a
                                    href="https://solar.dantecorso.com"
                                    target="_blank"
                                    style={{ color: 'var(--accent-2)', textDecoration: 'none', fontWeight: 600 }}
                                >
                                    &nbsp;Launch &#8594;
                                </a>
                            </p>
                        </div>

                        {/* Network Manager Portal (E3) */}
                        <div className="resume-card">
                            <h3>Network Manager Portal</h3>
                            <p className="badge">
                                UniFi • SonicWall • CVE Monitoring • Network Analytics • Autotask
                            </p>
                            <p>
                                Comprehensive multi-site network monitoring and analytics platform for E3 IT Services.
                                Monitors UniFi access points, switches, and gateways alongside SonicWall firewalls in
                                real time — tracking latency, bandwidth, device health, and uptime across all client
                                sites. Sends instant site-down alerts and automatically creates Autotask tickets on
                                detected failures. CVE monitoring flags known vulnerabilities on active firmware
                                versions, while the analytics dashboard surfaces traffic trends, anomaly patterns, and
                                per-device performance history.
                            </p>
                        </div>

                        {/* On-Call Management Web App (E3) */}
                        <div className="resume-card">
                            <h3>On-Call IT Engineer Management System</h3>
                            <p className="badge">Azure Functions • Notifications • Autotask • Automation</p>
                            <p>
                                Internal E3 IT Services platform that manages on-call engineer rotations and automates
                                ticket notification delivery. When an on-call ticket is created, the system identifies
                                the assigned engineer, sends real-time notifications, and delivers a full contextual
                                breakdown — priority, affected systems, ticket history, and recommended context —
                                ensuring engineers are fully briefed before they respond. Reduced mean on-call response
                                time by <strong>25%</strong>.
                            </p>
                        </div>

                        {/* On-Call & Ticket Intelligence Tools */}
                        <div className="resume-card">
                            <h3>Autotask AI Query &amp; Intelligence Platform</h3>
                            <p className="badge">Azure AI Foundry • Autotask • Static Web App</p>
                            <p>
                                AI-driven query and analytics layer for Autotask that turns natural language into
                                structured JSON queries across tickets, tasks, projects, opportunities, and contracts,
                                then feeds results into a secondary AI bot for summaries and deep insights. Surfaced via
                                a static web UI for the E3 engineering team.
                            </p>
                        </div>

                        <div className="resume-card">
                            <h3>Information Dashboard</h3>
                            <p className="badge">React • TypeScript • Vite • TanStack Query • Firebase</p>
                            <p>
                                Production-grade information dashboard aggregating live data across multiple domains,
                                including weather, markets, technology services, world news, and media. Built with a
                                scalable feature-based architecture, the application delivers real-time updates,
                                responsive UI state management, and a polished dark-themed interface optimized for fast
                                situational awareness.{' '}
                                <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>
                                    &nbsp;&#128274; Sign-in protected — available on request
                                </span>
                            </p>
                        </div>

                        {/* Mobile Ordering System */}
                        <div className="resume-card">
                            <h3>Mobile Ordering System (Dolce Vita)</h3>
                            <p className="badge">Node.js • Firebase • Stripe • Geolocation</p>
                            <p>
                                End-to-end mobile ordering solution where customers order from their phones, customize
                                items, and pay via Stripe. Integrates with in-store systems, supports curbside and table
                                service, and drives a real-time order status page with location-based automatic
                                check-ins.
                            </p>
                        </div>

                        {/* DVG Recipe & Flavor Lab */}
                        <div className="resume-card">
                            <h3>Gelato Recipe &amp; Flavor Lab</h3>
                            <p className="badge">React • TypeScript • Vite • Tailwind • Firebase • Firestore</p>
                            <p>
                                Internal React + TypeScript web app built for Dolce Vita Gelato that replaces the manual
                                Excel recipe workbook. Browse and create gelato flavors, select bases, manage
                                ingredients, and let the app handle all scaling math automatically. Recipes sync live to
                                Firestore and are accessible to the team from any device. Firebase Auth protected.
                            </p>
                        </div>

                        {/* Web Digital Signage */}
                        <div className="resume-card">
                            <h3>Web Digital Signage</h3>
                            <p className="badge">Firebase • Responsive Web • Admin Panel</p>
                            <p>
                                Dynamic signage system that cycles menus, promo videos, and animations based on business
                                hours. Content, pricing, and availability are fully controlled from a remote admin panel
                                and synced to the display in real time.
                            </p>
                        </div>

                        {/* Kiosk Application */}
                        <div className="resume-card">
                            <h3>In-Store Kiosk Application</h3>
                            <p className="badge">JavaScript • Firebase • UX Design</p>
                            <p>
                                Interactive kiosk experience that plays looping media when idle and switches to a
                                touch-driven menu when engaged. Reflects real-time stock, flavor availability, and
                                specials from the same backend as the mobile ordering and signage systems.
                            </p>
                        </div>

                        {/* Order Manager */}
                        <div className="resume-card">
                            <h3>Order Manager &amp; Operations Dashboard</h3>
                            <p className="badge">Firebase • Real-Time UI • Geofencing</p>
                            <p>
                                Central order management console for Dolce Vita that aggregates mobile, kiosk, and
                                in-store orders into a unified queue. Staff can update statuses, track real-time
                                progress, and respond to automatic check-ins when customers arrive for pickup.
                            </p>
                        </div>

                        {/* Inventory Management System for P&S */}
                        <div className="resume-card">
                            <h3>Inventory Management System (P&amp;S Ravioli)</h3>
                            <p className="badge">Firestore • Data Visualization • Multi-Location</p>
                            <p>
                                Real-time inventory platform with auto-generated barcodes, multi-location stock tracking,
                                interactive tables, and analytics dashboards. Reduced lookup time and improved driver
                                routing decisions across store locations.
                            </p>
                        </div>

                        {/* DVG Inventory & Supply Management */}
                        <div className="resume-card">
                            <h3>Gelato Inventory &amp; Supply Management</h3>
                            <p className="badge">JavaScript • Firebase Auth • Firestore • Multi-Module</p>
                            <p>
                                Multi-module supply tracking platform for Dolce Vita Gelato. Separate modules handle
                                adding incoming stock, logging usage, transferring inventory between locations,
                                processing order queues, searching inventory, and viewing an admin overview. Each route
                                is secured with Firebase Auth and all data is stored in Firestore for real-time access
                                across the team.
                            </p>
                        </div>

                        {/* Generic Inventory Management */}
                        <div className="resume-card">
                            <h3>Reusable Inventory Management Platform</h3>
                            <p className="badge">Web App • Alerts • Reporting</p>
                            <p>
                                A generalized inventory framework used as the basis for multiple clients, featuring
                                low-stock alerts, real-time updates, and reporting tools that can be adapted to different
                                businesses and product catalogs.
                            </p>
                        </div>

                        {/* Task Management System */}
                        <div className="resume-card">
                            <h3>Task Management System</h3>
                            <p className="badge">React • Firebase Auth • Firestore</p>
                            <p>
                                Full-stack task manager with user authentication, categorized boards, dark mode, and
                                real-time task syncing. Uses Firestore indexing for fast querying and React hooks for
                                smooth, interactive UI updates.
                            </p>
                        </div>

                        {/* API Integrations: Stripe & Google Maps */}
                        <div className="resume-card">
                            <h3>API Integrations: Stripe &amp; Google Maps</h3>
                            <p className="badge">Stripe • Google Maps • REST APIs</p>
                            <p>
                                Implemented secure payment flows with Stripe and location-aware experiences with Google
                                Maps, including address validation, embedded maps, and location-based logic to enhance
                                customer experiences.
                            </p>
                        </div>

                        {/* Video Training Web App */}
                        <div className="resume-card">
                            <h3>Video Training Web App</h3>
                            <p className="badge">Firebase • Auth • Progress Tracking</p>
                            <p>
                                Training portal that tracks user completion of video modules, stores progress in
                                Firestore, and sends email notifications when trainings are completed, enabling
                                lightweight LMS-style functionality.
                            </p>
                        </div>

                        {/* Onsite Invoice Generator & Payment System */}
                        <div className="resume-card">
                            <h3>Onsite Invoice Generator &amp; Payment System</h3>
                            <p className="badge">Custom Billing • Payments • Email</p>
                            <p>
                                Tool for service providers to create invoices on-site, process payments, and send
                                receipts instantly. Supports preset and custom pricing, email notifications, and a
                                streamlined cashflow workflow.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Skills */}
                <section id="tab-skills" className={sectionClass('tab-skills')}>
                    <h2>Skills</h2>
                    <div className="skills-chips">
                        {SKILL_GROUPS.map((group, index) => (
                            <div className="skills-group" key={index}>
                                <h3>{group.title}</h3>
                                <div className="chip-row">
                                    {group.chips.map((chip) => (
                                        <span className="chip" key={chip}>
                                            {chip}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education + Certs */}
                <section id="tab-education" className={sectionClass('tab-education')}>
                    <h2>Education &amp; Certifications</h2>
                    <div className="resume-grid">
                        {/* Rowan University */}
                        <div className="resume-card">
                            <h3>B.S. Computer Science — Networking Systems Concentration</h3>
                            <p>
                                Rowan University — <strong>Class of 2024</strong>
                            </p>
                        </div>

                        {/* Rowan College of South Jersey */}
                        <div className="resume-card">
                            <h3>Associate of Science, Computer Science</h3>
                            <p>
                                Rowan College of South Jersey — <strong>Class of 2022</strong>
                            </p>
                        </div>

                        {/* Eagle Scout */}
                        <div className="resume-card">
                            <h3>Eagle Scout</h3>
                            <p>
                                <strong>Boy Scouts of America • Achieved in 2017</strong>
                            </p>
                        </div>

                        {/* Azure AI-900 */}
                        <div className="resume-card">
                            <h3>Microsoft Certified: Azure AI Fundamentals</h3>
                            <p>
                                <strong>AI-900 • 2025</strong>
                            </p>
                        </div>

                        {/* MS-900 */}
                        <div className="resume-card">
                            <h3>Microsoft Certified: Microsoft 365 Fundamentals</h3>
                            <p>
                                <strong>MS-900 • 2024</strong>
                            </p>
                        </div>

                        {/* Studying: Azure Developer Associate */}
                        <div className="resume-card">
                            <h3>Microsoft Certified: Azure Developer Associate</h3>
                            <p>
                                <strong>Exam AZ-204</strong>
                            </p>
                            <p className="small-note">
                                Actively studying — focusing on building, integrating, and deploying Azure cloud-native
                                solutions.
                            </p>
                        </div>
                    </div>
                </section>
            </section>
        </Layout>
    );
}
