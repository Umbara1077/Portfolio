import { useEffect, useRef, useState } from 'react';

/**
 * Adds the `visible` class once the element scrolls into view, driving both the
 * `.reveal` fade-ups and the `.section-title` underline animation.
 */
export function InView({ as: Tag = 'div', className = '', threshold = 0.08, forceVisible = false, children, ...rest }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return undefined;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setVisible(true);
                });
            },
            { threshold }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    const classes = visible || forceVisible ? `${className} visible` : className;

    return (
        <Tag ref={ref} className={classes} {...rest}>
            {children}
        </Tag>
    );
}
