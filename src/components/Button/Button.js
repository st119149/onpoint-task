import React from 'react';

import './Button.scss';

export default function Button({onClickButton, textContent}) {
    return (
        <button className="button" onClick={onClickButton}>
            <div className="button__arrow">
                <span></span>
            </div>
            {textContent}
        </button>
    )
}