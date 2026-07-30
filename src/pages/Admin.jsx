import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useMainStylesheetDisabled, usePageStyle } from '../hooks/usePageStyle.js';
import { usePageMeta } from '../hooks/usePageMeta.js';
import { auth } from '../lib/firebase.js';
import { PROCESS_INTERVAL_MS, processAllEntries } from '../lib/emailNotifications.js';
import adminCss from './admin.css?inline';

export default function Admin() {
    useMainStylesheetDisabled(true);
    usePageStyle(adminCss);
    usePageMeta({ title: 'Admin Page' });

    const navigate = useNavigate();
    const [signedIn, setSignedIn] = useState(false);

    useEffect(() => {
        return onAuthStateChanged(auth, (user) => {
            if (user) {
                setSignedIn(true);
            } else {
                navigate('/login');
            }
        });
    }, [navigate]);

    // Queued submissions are flushed on load and then twice a day.
    useEffect(() => {
        processAllEntries();
        const timer = setInterval(processAllEntries, PROCESS_INTERVAL_MS);
        return () => clearInterval(timer);
    }, []);

    const handleSignOut = () => {
        signOut(auth).catch((error) => {
            console.error('Error during sign-out:', error);
        });
    };

    return (
        <>
            <div className="bg-orbs">
                <div className="bg-orb bg-orb-1"></div>
                <div className="bg-orb bg-orb-2"></div>
            </div>
            <div className="container">
                <Link to="/">
                    <img src="/images/logo.jpg" alt="Precision Pixel" className="logo" />
                </Link>
                <h1>Admin Page</h1>
                <div id="content-section" style={{ display: signedIn ? 'block' : 'none' }}>
                    <p>Protected content visible only to authenticated users.</p>
                    <button id="sign-out" onClick={handleSignOut}>
                        Sign Out
                    </button>
                </div>
            </div>
        </>
    );
}
