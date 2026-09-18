import { useTheme } from '../theme.jsx';

const OPTIONS = [
    {
        id: 'light',
        label: 'Light theme',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 16.5a4.5 4.5 0 110-9 4.5 4.5 0 010 9z M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.1 5.1l1.4 1.4M17.5 17.5l1.4 1.4M18.9 5.1l-1.4 1.4M6.5 17.5l-1.4 1.4" />
            </svg>
        )
    },
    {
        id: 'dark',
        label: 'Dark theme',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 14.2A8.2 8.2 0 019.8 4 8.4 8.4 0 1020 14.2z" />
            </svg>
        )
    },
    {
        id: 'system',
        label: 'System theme',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3.5 5h17v10.5h-17z M9 20h6 M12 15.5V20" />
            </svg>
        )
    }
];

export function ThemeToggle() {
    const { mode, setMode } = useTheme();

    return (
        <div className="theme-toggle" role="radiogroup" aria-label="Color theme">
            {OPTIONS.map((option) => (
                <button
                    key={option.id}
                    type="button"
                    role="radio"
                    aria-checked={mode === option.id}
                    aria-label={option.label}
                    title={option.label}
                    onClick={() => setMode(option.id)}
                >
                    {option.icon}
                </button>
            ))}
        </div>
    );
}
