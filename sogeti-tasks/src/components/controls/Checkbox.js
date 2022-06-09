import { forwardRef } from 'react';

import Label from './Label';
import './Controls.css';

const Checkbox = forwardRef(({ id, defaultChecked, onClick, label, disabled }, ref) => {
    return (
        <>
            <input
                id={ id }
                ref={ ref }
                name={ id }
                defaultChecked={ defaultChecked }
                type="checkbox"
                className="form-check-input"
                disabled={ disabled ? 'disabled' : '' }
                onClick={ onClick } />
            { label && <Label id={ id } label={ label } /> }
        </>
    );
});

export default Checkbox;
