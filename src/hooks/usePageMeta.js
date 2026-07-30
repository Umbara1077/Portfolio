import { useLayoutEffect } from 'react';

const TAGS = [
    { key: 'description', selector: 'meta[name="description"]', create: () => makeMeta('name', 'description'), attr: 'content' },
    { key: 'canonical', selector: 'link[rel="canonical"]', create: () => makeLink('canonical'), attr: 'href' },
    { key: 'ogTitle', selector: 'meta[property="og:title"]', create: () => makeMeta('property', 'og:title'), attr: 'content' },
    { key: 'ogDescription', selector: 'meta[property="og:description"]', create: () => makeMeta('property', 'og:description'), attr: 'content' },
    { key: 'ogType', selector: 'meta[property="og:type"]', create: () => makeMeta('property', 'og:type'), attr: 'content' },
    { key: 'ogUrl', selector: 'meta[property="og:url"]', create: () => makeMeta('property', 'og:url'), attr: 'content' }
];

function makeMeta(attribute, value) {
    const el = document.createElement('meta');
    el.setAttribute(attribute, value);
    return el;
}

function makeLink(rel) {
    const el = document.createElement('link');
    el.setAttribute('rel', rel);
    return el;
}

/**
 * Each static page carried its own title and social tags. Every route declares
 * the complete set it needs; anything it omits is removed so nothing leaks
 * across navigations.
 */
export function usePageMeta(meta) {
    const { title } = meta;
    const values = TAGS.map((tag) => meta[tag.key]);

    useLayoutEffect(() => {
        document.title = title;

        TAGS.forEach((tag, index) => {
            const value = values[index];
            const existing = document.head.querySelector(tag.selector);
            if (!value) {
                if (existing) existing.remove();
                return;
            }
            const el = existing || tag.create();
            el.setAttribute(tag.attr, value);
            if (!existing) document.head.appendChild(el);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [title, ...values]);
}
