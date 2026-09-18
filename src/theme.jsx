import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'dvg-portfolio-theme';
const MODES = ['light', 'dark', 'system'];

const ThemeContext = createContext({ theme: 'light', mode: 'system', setMode: () => {}, setTheme: () => {} });

function systemPrefersDark() {
    try {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
        return false;
    }
}

function resolve(mode) {
    if (mode === 'dark') return 'dark';
    if (mode === 'light') return 'light';
    return systemPrefersDark() ? 'dark' : 'light';
}

function applyTheme(theme) {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.style.colorScheme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0b1620' : '#f6f8fa');
}

function readStoredMode() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return MODES.includes(stored) ? stored : 'system';
    } catch {
        return 'system';
    }
}

export function ThemeProvider({ children }) {
    const [mode, setModeState] = useState(readStoredMode);
    const [theme, setThemeState] = useState(() => resolve(readStoredMode()));

    useLayoutEffect(() => {
        const next = resolve(mode);
        setThemeState(next);
        applyTheme(next);
    }, [mode]);

    // Follow the OS while in "system" mode.
    useEffect(() => {
        if (mode !== 'system') return undefined;
        const media = window.matchMedia('(prefers-color-scheme: dark)');
        const onChange = () => {
            const next = resolve('system');
            setThemeState(next);
            applyTheme(next);
        };
        media.addEventListener('change', onChange);
        return () => media.removeEventListener('change', onChange);
    }, [mode]);

    const setMode = useCallback((next) => {
        const nextMode = MODES.includes(next) ? next : 'system';
        setModeState(nextMode);
        try {
            localStorage.setItem(STORAGE_KEY, nextMode);
        } catch {
            /* storage unavailable — the theme still applies for this session */
        }
    }, []);

    // Backwards-compatible helper: setting a concrete theme pins that mode.
    const setTheme = useCallback((next) => setMode(next === 'dark' ? 'dark' : 'light'), [setMode]);

    const value = useMemo(() => ({ theme, mode, setMode, setTheme }), [theme, mode, setMode, setTheme]);

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    return useContext(ThemeContext);
}
