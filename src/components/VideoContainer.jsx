import { useState } from 'react';

/**
 * Service pages ship a desktop and a mobile cut. Only the one that can actually
 * be displayed gets a `src`, so the other file is never downloaded.
 */
export function VideoContainer({ desktopSrc, mobileSrc }) {
    const [useMobileVideo] = useState(() => window.matchMedia('(max-width: 768px)').matches);

    return (
        <div className="video-container">
            <video data-src={desktopSrc} src={useMobileVideo ? undefined : desktopSrc} autoPlay muted loop></video>
            <video
                data-src={mobileSrc}
                src={useMobileVideo ? mobileSrc : undefined}
                autoPlay
                muted
                loop
                className="mobile-video"
            ></video>
        </div>
    );
}
