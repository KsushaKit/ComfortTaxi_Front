import React from 'react';
import Breadcrumbs from '../../breadcrumbs/Breadcrumbs';
import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <Breadcrumbs />
            <div>
                <button>BUTTON</button>
            </div>
        </div>
    );
};

export default Header;