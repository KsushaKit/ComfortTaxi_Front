import React from 'react';
import './table.css';


//items is array
const Table = ({ titles, cards }) => {
    return (
        <div>
            <div className='clients'>
                
                <div className='clients-data'>
                    {titles.map((title) => (
                        <span >
                            {title}
                        </span>
                    ))}
                </div>

                {cards.map((card) => (
                    <span>
                        {card}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Table;