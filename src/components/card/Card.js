import React from 'react';
import './card.css'
import CRUD from '../crud/CRUD';

const Card = ({ item, element }) => {
    let arr = [];
    for(var property in item) {
        arr.push(item[property]);
    }

    return (
        
        <div className='clients-data__wrapper'>
            
            <div className='clients-data__container'>
                <div className='clients-data__cards'>
                    {arr.map((item) => (
                       <div className='data_wrapper'>
                            <span key={item.id}>
                                {item}
                            </span>
                        </div>
                    ))}
                </div>

                <div className='clients-crud'>
                    {element}
                </div>

            </div>
        </div>
    );
};

export default Card;