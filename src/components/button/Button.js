import React from 'react';
import './button.css';

const Button = ({title, activate}) => {
    return (
        <div className='buttonDefault'>
            <button onClick={activate} >
                <span>{title}</span>
            </button>      
        </div>
    );
};

export default Button;