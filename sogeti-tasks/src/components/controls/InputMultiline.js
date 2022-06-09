import { forwardRef } from 'react';

import Label from './Label';
import './Controls.css';

const InputMultiline = forwardRef(({ id, defaultValue, label, disabled }, ref) => {
    return (
        <>
            { label && <Label id={ id } label={ label } /> }
            <textarea
                id={ id }
                ref={ ref }
                name={ id }
                defaultValue={ defaultValue }
                className="form-control"
                disabled={ disabled ? 'disabled' : '' }
                rows="3"
            ></textarea>
        </>
    );
});

export default InputMultiline;