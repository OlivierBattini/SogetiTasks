import './Controls.css';

export default function PrimaryButton({ onClick, children }) {
    return (
        <button type="button" className="btn btn-secondary" onClick={ onClick }>{ children }</button>
    );
};
