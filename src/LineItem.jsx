import React from 'react';

const LineItem = ({item , handleCheck , handleDelete}) => {
  return (
   <>
        <li  className='item'  >
                    <input 
                    type="checkbox" 
                    checked={item.checked}
                    onChange={()=>{handleCheck(item.id)}}
                    />
                    <label htmlFor=""
            
                    style={(item.checked) ? {textDecoration: 'line-through'}:null}
                    onClick={()=>{handleCheck(item.id)}}
                    > {item.tittle} </label>
                    <button
                    onClick={()=>handleDelete(item.id)}
                    >
                        delete
                    </button>

            </li>
   </>
  );
}

export default LineItem;
