import Label from './Label';
import './Controls.css';

export default function Checkbox({ id, defaultChecked, onClick, label, disabled }) {
    return (
        <>
            <input id={ id } name={ id } type="checkbox" className="form-check-input" defaultChecked={ defaultChecked } disabled={ disabled ? 'disabled' : '' } onClick={ onClick } />
            { label && <Label id={ id } label={ label } /> }
        </>
    );
}
