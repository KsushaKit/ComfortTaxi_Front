import React, {useState} from 'react';
import './search.css'

const Search = ({ handleKeyDown }) => {
    const [id, setID] = useState('');
    function change(e) {
        setID(e.target.value);
        console.log(e.target.value); 
    }
    return (
        <div className='search'>
            <input 
                type="text" 
                value={id}
                placeholder="Поиск" 
                onKeyDown={handleKeyDown(id)}
                onChange={(e) => change(e)}
            />
        </div>
    );
};

export default Search;