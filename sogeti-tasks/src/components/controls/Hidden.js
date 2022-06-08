import './Controls.css';

export default function Hidden({ id, defaultValue }) {
    return (
        <>
            <input id={ id } name={ id } type="hidden" defaultValue={ defaultValue } />
        </>
    );
}
