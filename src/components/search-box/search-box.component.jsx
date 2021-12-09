import React from 'react';

import './search-box.style.css'

// this component is to gatter search text, no state has changed
export const SearchBox = ({placeholder, handleChange}) => (
    <input 
        type='search' 
        className='search' 
        placeholder= {placeholder} 
        onChange = {handleChange} 
        />

)