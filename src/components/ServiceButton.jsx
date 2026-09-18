import { Link } from 'react-router-dom';

export function ServiceButton({ to, children }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.5rem' }}>
            <Link to={to} className="btn btn-primary">
                {children}
            </Link>
        </div>
    );
}
