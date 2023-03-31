import React from 'react';
import '../Styles/Card_2.css';

function Card_2({imageUrl,title}) {
    return (
        <div className='card2-container'>
            <img src={imageUrl} alt='none'></img>
            <h3>{title}</h3>
        </div>
    )
}

export default Card_2;