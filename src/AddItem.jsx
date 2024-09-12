import React from 'react';
import { useRef } from 'react';

const AddItem = ({newItem , setNewItem , handleSubmit}) => {
    const inputRef = useRef()
  return (
   <>
   
   <form action="" onSubmit={handleSubmit}>
        <input 
        autoFocus
        ref={inputRef}
        type="text" 
        placeholder='Add item'
        value={newItem}
        required
        onChange={(e)=>setNewItem(e.target.value) }
        />
        <button
                type='submit'
                onClick={()=>inputRef.current.focus()}
                >
              Add item 
        </button>

   </form>
   </>
  );
}

export default AddItem;
