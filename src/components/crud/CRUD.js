import React, { useEffect } from 'react';
import './crud.css'

const CRUD = ({elements}) => {
    return (
        <div className='crud'>
            {elements.map((element) => (
                <span >
                    {element}
                </span>
            ))}
        </div>
    );
};

export default CRUD;