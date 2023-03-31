import React from 'react';
import './Small_Card.css';
// import img1 from '../public/images/logo transparent.';

function Small_Card({title, imageUrl}) {
    return (
        <div className='s-card-container'>
            <div className='s-image-container'>
                <img src='../public/images/logo transparent.png' alt='none'></img>
            </div>
            <div className='s-card-title'>
                <h3>{title}</h3>
            </div>
            {/* <div className='btn'>
                <button id='btn'>
                </button>
            </div> */}
        </div>
    )
}

export default Small_Card;