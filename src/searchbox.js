import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
<div className='pa2'>
   <input className='pa3 ba b--green bg-lightest-blue w-60'
         type='search'
         placeholder ='Search Courses' 
         onChange={searchChange}
    />
</div>
   
    )
}
export default SearchBox;