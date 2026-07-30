import { useTheme } from '../theme.jsx';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const isLight = theme === 'light';

    return (
        <div className="theme-toggle" title="Toggle light/dark mode">
            <label className="theme-switch" aria-label="Toggle theme">
                <input
                    type="checkbox"
                    id="theme-checkbox"
                    checked={isLight}
                    onChange={(event) => setTheme(event.target.checked ? 'light' : 'dark')}
                />
                <span className="theme-switch-track"></span>
                <span className="theme-switch-thumb">{isLight ? '\u{1F319}' : '\u2600\uFE0F'}</span>
            </label>
        </div>
    );
}
