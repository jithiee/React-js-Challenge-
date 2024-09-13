import React, { useEffect, useState } from 'react';

const Footer = ({length,totalItems}) => {
    const [displayLength  , setDisplayLength] = useState(length.length);
    
    const today = new Date();

    useEffect(()=>{
        const timer = setTimeout(()=>{
           setDisplayLength(length.length) // Set the length after 1 seconds
        },1000)

         // Clean up the timer to avoid memory leaks
        return ()=> clearTimeout(timer)

    },[length]) // Re-run effect when length changes



    return (

        <footer>
            
            <p> 
                 {displayLength} {displayLength ===  1 ? 'list item' : 'list items'  } 
                 
            </p>
          <p>{totalItems} {totalItems === 1 ? "Tottal item" : "Tottal items" }  </p>
            <p>copyright &copy; {today.getFullYear()}  </p>

        </footer>

    );
}

export default Footer;
