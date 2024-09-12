import React from 'react';

const SearchItem = ({search , setSearch }) => {
  return (
<>
  <form action="" onSubmit={(e)=>e.preventDefault()} >
      <label htmlFor="serach"></label>
      <input 
            type="text" 
            placeholder='search item'
            role='searchbox'
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
            
            />

  </form>
</>
  );
}

export default SearchItem;
