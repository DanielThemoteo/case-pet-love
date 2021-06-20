import React from 'react';

import './styles.css';
function Card({children}){
    return(
        <div className="content">
            {children}
        </div>
    );
}

export default Card;