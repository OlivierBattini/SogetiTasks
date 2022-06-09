import { forwardRef } from 'react';

import Label from './Label';
import './Controls.css';

const InputText = forwardRef(({ id, defaultValue, label, disabled }, ref) => {
    return (
        <>
            { label && <Label id={ id } label={ label } /> }
            <input
                id={ id }
                ref={ ref }
                name={ id }
                defaultValue={ defaultValue }
                className="form-control"
                type="text"
                disabled={ disabled ? 'disabled' : '' }
            />
        </>
    );
});

export default InputText;