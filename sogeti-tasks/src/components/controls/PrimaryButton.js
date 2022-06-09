import './Controls.css';

export default function PrimaryButton({ submit, onClick, children }) {
    return (
        <button type={ submit ? 'submit' : 'button' } className="btn btn-secondary" onClick={ onClick }>{ children }</button>
    );
};