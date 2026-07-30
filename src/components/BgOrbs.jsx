import { useLayoutEffect, useRef } from 'react';
import { useTheme } from '../theme.jsx';

export function BgOrbs({ count = 3 }) {
    const ref = useRef(null);
    const { theme } = useTheme();

    useLayoutEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (theme === 'light') {
            el.style.setProperty('opacity', '0', 'important');
        } else {
            el.style.removeProperty('opacity');
        }
    }, [theme]);

    if (count === 0) return null;

    return (
        <div className="bg-orbs" ref={ref}>
            <div className="bg-orb bg-orb-1"></div>
            <div className="bg-orb bg-orb-2"></div>
            {count > 2 && <div className="bg-orb bg-orb-3"></div>}
        </div>
    );
}
