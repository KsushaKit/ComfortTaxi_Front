import React from 'react';
import './buttonBack.css';
import { Link } from "react-router-dom";

const ButtonBack = ({path, title}) => {
    let pathTo = '/' + path;
    return (
        <div className='buttonBack'>
            <Link to = {pathTo}>
                <button >
                    <span>{title}</span>
                </button>      
            </Link>
        </div>
    );
};

export default ButtonBack;