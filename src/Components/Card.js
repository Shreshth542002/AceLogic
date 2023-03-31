import React from 'react';
import {Link} from "react-router-dom";
import '../Styles/Card.css';

function Card({title1,title2, imageUrl,path,line1,line2,line3,line4}) {
    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={imageUrl} alt='none' className='card_img'></img>
            </div>
            <div className='title-container'>
                <h3 className='card-title1'>{title1}</h3>
                <h4 className='card-title2'>{title2}</h4>
            </div>
            <div className='body--container'>
                <p id='body-text-line1'><i class="fa-solid fa-square-check"></i>{line1}</p>
                <p id='body-text-line2'><i class="fa-solid fa-square-check"></i>{line2}</p>
                <p id='body-text-line3'><i class="fa-solid fa-square-check"></i>{line3}</p>
                <p id='body-text-line4'><i class="fa-solid fa-square-check"></i>{line4}</p>
            </div>
            <div className='btn-container'>
                <Link to={path}>
                    View More<i class="fa-solid fa-arrow-right"></i>
                </Link>
                <Link to={path}>
                    <button id='btn'>
                        Apply Now
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Card;