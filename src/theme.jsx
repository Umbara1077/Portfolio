import { createContext, useCallback, useContext, useLayoutEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'dvg-portfolio-theme';

const ThemeContext = createContext({ theme: 'dark', setTheme: () => {}, suspend: () => () => {} });

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'light') {
        document.body.style.setProperty('background', '#ffffff', 'important');
        document.body.style.setProperty('color', '#111111', 'important');
        document.documentElement.style.setProperty('background', '#ffffff', 'important');
    } else {
        document.body.style.removeProperty('background');
        document.body.style.removeProperty('color');
        document.documentElement.style.removeProperty('background');
    }
}

function clearTheme() {
    document.documentElement.removeAttribute('data-theme');
    document.body.style.removeProperty('background');
    document.body.style.removeProperty('color');
    document.documentElement.style.removeProperty('background');
}

function readStoredTheme() {
    try {
        return localStorage.getItem(STORAGE_KEY) || 'dark';
    } catch {
        return 'dark';
    }
}

export function ThemeProvider({ children }) {
    const [theme, setThemeState] = useState(readStoredTheme);
    const [suspended, setSuspended] = useState(false);

    useLayoutEffect(() => {
        if (suspended) {
            clearTheme();
        } else {
            applyTheme(theme);
        }
    }, [theme, suspended]);

    const setTheme = useCallback((next) => {
        setThemeState(next);
        try {
            localStorage.setItem(STORAGE_KEY, next);
        } catch {
            /* storage unavailable — the theme still applies for this session */
        }
    }, []);

    const value = useMemo(() => ({ theme, setTheme, setSuspended }), [theme, setTheme]);

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    return useContext(ThemeContext);
}

/**
 * The admin and login screens were standalone documents with no theme script,
 * so neither the `data-theme` attribute nor the light-mode body overrides ever
 * reached them.
 */
export function useThemeSuspended() {
    const { setSuspended } = useTheme();

    useLayoutEffect(() => {
        setSuspended(true);
        return () => setSuspended(false);
    }, [setSuspended]);
}
