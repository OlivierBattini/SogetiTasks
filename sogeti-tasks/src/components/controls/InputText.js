import Label from './Label';
import './Controls.css';

export default function InputText({ id, defaultValue, label, disabled }) {
    return (
        <>
            { label && <Label id={ id } label={ label } /> }
            <input id={ id } name={ id } className="form-control" type="text" defaultValue={ defaultValue } disabled={ disabled ? 'disabled' : '' } />
        </>
    );
}
