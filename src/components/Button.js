import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test', 'btn--secondary'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
                           children,
                           type,
                           id,
                           onClick,
                           buttonStyle,
                           buttonSize,
                           disabled
                       }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <div className='btn-mobile'>
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
                id={id}
                disabled={disabled}
            >
                {children}
            </button>
        </div>
    );
};