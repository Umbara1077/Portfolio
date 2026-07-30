import { useTheme } from '../theme.jsx';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const isLight = theme === 'light';

    return (
        <div className="theme-toggle" title="Toggle light/dark mode">
            <button
                type="button"
                className="theme-switch"
                role="switch"
                aria-checked={isLight}
                aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
                onClick={() => setTheme(isLight ? 'dark' : 'light')}
            >
                <span className="theme-switch-track"></span>
                <span className="theme-switch-thumb" aria-hidden="true">
                    {isLight ? '\u{1F319}' : '\u2600\uFE0F'}
                </span>
            </button>
        </div>
    );
}
