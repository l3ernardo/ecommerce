import React from 'react';

import './button.styles.scss';


function Button({children, googleSignIn, ...otherProps}) {
    return (
        <button className={`${ googleSignIn ? 'googleSignIn' : ''} custom-button `} {...otherProps}>
            {children}
        </button>
    )
}

export default Button;
