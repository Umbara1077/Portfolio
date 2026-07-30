import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useMainStylesheetDisabled, usePageStyle } from '../hooks/usePageStyle.js';
import { usePageMeta } from '../hooks/usePageMeta.js';
import { auth } from '../lib/firebase.js';
import adminCss from './admin.css?inline';

export default function Login() {
    useMainStylesheetDisabled(true);
    usePageStyle(adminCss);
    usePageMeta({ title: 'Login' });

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hasError, setHasError] = useState(false);

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/admin');
            })
            .catch((error) => {
                console.error('Error during sign-in:', error);
                setHasError(true);
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
                <h1>Sign In</h1>
                <div id="auth-section">
                    <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <button id="sign-in" onClick={handleSignIn}>
                        Sign In
                    </button>
                    <p id="auth-error" style={{ color: 'red', display: hasError ? 'block' : 'none' }}>
                        Invalid email or password. Please try again.
                    </p>
                </div>
            </div>
        </>
    );
}
