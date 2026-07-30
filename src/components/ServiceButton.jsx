import { Link } from 'react-router-dom';

// The service pages have always overridden the global `.btn` look with this
// inline blue pill, so it has to stay an inline style to keep winning.
const BUTTON_STYLE = {
    display: 'inline-block',
    padding: '10px 20px',
    color: '#fff',
    backgroundColor: '#007bff',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '16px'
};

export function ServiceButton({ to, children }) {
    return (
        <div style={{ textAlign: 'center' }}>
            <Link to={to} className="btn" style={BUTTON_STYLE}>
                {children}
            </Link>
        </div>
    );
}
