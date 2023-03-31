import React from 'react';
import Card from './Card';
import '../Styles/programs.css';
import img1 from '../images/data_science_img.jpg';
import img2 from '../images/web_development.jpg';

function Programs() {
    return(
        <>
            <div className='programs'>
                <div id='heading_container'>
                    <h1>PROGRAMS</h1>
                </div>
                <p id='Line1'>PICK A COURSE THAT SUITS YOUR REQUIREMENTS</p>
                <div className='home-page-cards'>
                    <Card
                        title1='Full Stack'
                        title2='Data Science'
                        imageUrl={img1}
                        line1='Launch your career in 30 weeks.'
                        line2='No prior coding experience needed.'
                        line3='Pay-after-placement'
                        line4='Min salary - 5LPA or above'
                        path='/Data_Science'
                        />
                    <Card
                        title1='Full Stack'
                        title2='Web Development'
                        imageUrl={img2}
                        line1='Launch your career in 30 weeks.'
                        line2='No prior coding experience needed.'
                        line3='Pay-after-placement'
                        line4='Min salary - 5LPA or above'
                        path='/web_development'
                        />
                </div>
            </div>
        </>
    )
}
export default Programs;