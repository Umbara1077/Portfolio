import { useLayoutEffect } from 'react';

/**
 * Mirrors the per-page `<style>` blocks the static site used: the rules are
 * appended after the global stylesheet (so they win on equal specificity) and
 * removed again when the route unmounts, so no two pages can collide.
 */
export function usePageStyle(css) {
    useLayoutEffect(() => {
        if (!css) return undefined;
        const el = document.createElement('style');
        el.textContent = css;
        document.head.appendChild(el);
        return () => {
            document.head.removeChild(el);
        };
    }, [css]);
}

/**
 * The admin and login screens were standalone documents that never loaded the
 * main stylesheet, so it has to be switched off while they are on screen.
 */
export function useMainStylesheetDisabled(disabled) {
    useLayoutEffect(() => {
        const link = document.getElementById('main-stylesheet');
        if (!link || !disabled) return undefined;
        link.disabled = true;
        return () => {
            link.disabled = false;
        };
    }, [disabled]);
}

/**
 * The cyber security and 404 documents never linked the Google Fonts
 * stylesheet, so their headings render in the system sans-serif fallback.
 */
export function useWebFontsDisabled() {
    useLayoutEffect(() => {
        const link = document.getElementById('google-fonts');
        if (!link) return undefined;
        // Only detaching the element drops the @font-face rules it registered;
        // `disabled` leaves the already-loaded faces usable.
        const anchor = link.nextSibling;
        const parent = link.parentNode;
        link.remove();
        return () => {
            parent.insertBefore(link, anchor);
        };
    }, []);
}
