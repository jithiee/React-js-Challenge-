import React from 'react';

const Footer = ({length,totalItems}) => {

    const today = new Date();
    return (

        <footer>
            
            <p> 
                 {length.length} {length.length ===  1 ? 'list item' : 'list items'  } 
                 
            </p>
          <p>{totalItems} {totalItems === 1 ? "Tottal item" : "Tottal items" }  </p>
            <p>copyright &copy; {today.getFullYear()}  </p>

        </footer>

    );
}

export default Footer;
