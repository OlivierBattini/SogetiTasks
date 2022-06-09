import './Controls.css';

export default function SecondaryButton({ onClick, children }) {
    return (
        <button type="button" className="btn btn-outline-secondary" onClick={ onClick }>{ children }</button>
    );
};