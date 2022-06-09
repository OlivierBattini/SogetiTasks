import { forwardRef } from 'react';
import './Controls.css';

const Hidden = forwardRef(({ id, defaultValue }, ref) => {
    return (
        <>
            <input
                id={ id }
                ref={ ref }
                name={ id }
                type="hidden"
                defaultValue={ defaultValue }
            />
        </>
    );
});

export default Hidden;