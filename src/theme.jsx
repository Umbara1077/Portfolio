import { createContext, useCallback, useContext, useLayoutEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'dvg-portfolio-theme';

const ThemeContext = createContext({ theme: 'dark', setTheme: () => {} });

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme;

    if (theme === 'light') {
        document.documentElement.style.setProperty('background-color', '#ffffff', 'important');
        document.body.style.setProperty('background-color', '#ffffff', 'important');
        document.body.style.setProperty('color', '#111111', 'important');
    } else {
        document.documentElement.style.removeProperty('background-color');
        document.body.style.removeProperty('background-color');
        document.body.style.removeProperty('color');
    }
}

function readStoredTheme() {
    try {
        const storedTheme = localStorage.getItem(STORAGE_KEY);
        return storedTheme === 'light' ? 'light' : 'dark';
    } catch {
        return 'dark';
    }
}

export function ThemeProvider({ children }) {
    const [theme, setThemeState] = useState(readStoredTheme);

    useLayoutEffect(() => {
        applyTheme(theme);
    }, [theme]);

    const setTheme = useCallback((next) => {
        const nextTheme = next === 'light' ? 'light' : 'dark';
        applyTheme(nextTheme);
        setThemeState(nextTheme);
        try {
            localStorage.setItem(STORAGE_KEY, nextTheme);
        } catch {
            /* storage unavailable — the theme still applies for this session */
        }
    }, []);

    const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    return useContext(ThemeContext);
}
