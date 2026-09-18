/**
 * Fixed page backdrop: a faint grid that fades out down the page plus a soft
 * brand glow in the top-right (and a second, dimmer one bottom-left when
 * `count` asks for more than one).
 */
export function BgOrbs({ count = 3 }) {
    if (count === 0) return null;

    return (
        <div className="page-bg" aria-hidden="true">
            <div className="page-bg-grid"></div>
            <div className="page-bg-glow"></div>
            {count > 1 && <div className="page-bg-glow page-bg-glow-2"></div>}
        </div>
    );
}
