// Mobile navigation is intentionally independent from Firebase so it is usable
// as soon as the document is parsed, even on a slow third-party connection.
(function () {
    function getElements() {
        return {
            sideNav: document.getElementById('side-nav'),
            backdrop: document.getElementById('nav-backdrop')
        };
    }

    window.openSideNav = function () {
        const { sideNav, backdrop } = getElements();
        if (!sideNav || !backdrop) return;
        sideNav.classList.remove('is-navigating');
        backdrop.classList.remove('is-navigating');
        sideNav.classList.add('is-open');
        backdrop.classList.add('is-visible');
        sideNav.setAttribute('aria-hidden', 'false');
    };

    window.closeSideNav = function () {
        const { sideNav, backdrop } = getElements();
        if (!sideNav || !backdrop) return;
        sideNav.classList.remove('is-open');
        backdrop.classList.remove('is-visible');
        sideNav.setAttribute('aria-hidden', 'true');
    };

    window.toggleSideNav = function () {
        const { sideNav } = getElements();
        if (sideNav && sideNav.classList.contains('is-open')) {
            window.closeSideNav();
        } else {
            window.openSideNav();
        }
    };

    document.addEventListener('DOMContentLoaded', function () {
        let backdrop = document.getElementById('nav-backdrop');
        if (!backdrop) {
            backdrop = document.createElement('div');
            backdrop.id = 'nav-backdrop';
            document.body.appendChild(backdrop);
        }

        const sideNav = document.getElementById('side-nav');
        if (sideNav) sideNav.setAttribute('aria-hidden', 'true');

        // Service pages provide desktop and mobile videos. Load only the one
        // that can actually be displayed instead of downloading both files.
        const useMobileVideo = window.matchMedia('(max-width: 768px)').matches;
        document.querySelectorAll('.video-container video[data-src]').forEach(function (video) {
            const isMobileVideo = video.classList.contains('mobile-video');
            if (isMobileVideo === useMobileVideo) {
                video.src = video.dataset.src;
            }
        });

        backdrop.addEventListener('click', window.closeSideNav);

        const menuToggle = document.querySelector('.menu-toggle');
        // Some legacy pages already call toggleSideNav inline. Never bind a
        // second handler to those buttons, which would toggle twice per tap.
        if (menuToggle && !menuToggle.hasAttribute('onclick')) {
            menuToggle.addEventListener('click', function (event) {
                event.stopPropagation();
                window.toggleSideNav();
            });
        }

        document.querySelectorAll('#side-nav a').forEach(function (link) {
            link.addEventListener('click', function () {
                // Remove the overlay immediately while the next document loads.
                sideNav.classList.add('is-navigating');
                backdrop.classList.add('is-navigating');
                window.closeSideNav();
            });
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') window.closeSideNav();
        });

        // A browser can preserve a page while the drawer is mid-transition.
        // Always restore a fully closed state when leaving or returning.
        window.addEventListener('pagehide', window.closeSideNav);
        window.addEventListener('pageshow', window.closeSideNav);
    });
}());
