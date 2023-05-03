import React from 'react';
import './header.css'

const Header = ({title, elements}) => {
    return (
        <div className='header-container'>
            <div className='header-left'>
                <span>{title}</span>
            </div>
            <div className='header-right'>
                {elements.search}
                {elements.button}
            </div>
        </div>
    );
};

export default Header;