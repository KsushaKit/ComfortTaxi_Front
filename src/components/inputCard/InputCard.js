import React from 'react';

const InputCard = ({ id ,title, value, type, handleChange }) => {
    return (
        <div>
          <label>{title}</label>
          <input id={id} defaultValue={value} onChange={handleChange} type={type} />
        </div>
    );
};

export default InputCard;