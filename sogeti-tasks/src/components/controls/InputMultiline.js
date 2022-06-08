import Label from './Label';
import './Controls.css';

export default function InputMultiline({ id, children, label, disabled }) {
    return (
        <>
            { label && <Label id={ id } label={ label } /> }
            <textarea id={ id } name={ id } className="form-control" disabled={ disabled ? 'disabled' : '' } rows="3" defaultValue={ children }></textarea>
        </>
    );
}