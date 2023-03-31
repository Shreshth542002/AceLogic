import React, { useState } from 'react'
import ImageSlider from './ImageSlider'
import '../Styles/Carousal.css'

function Carousal() {

    const [currentIndex,setCurrentIndex] = useState(0);

    const goToSlide1 = () => {
      setCurrentIndex(0);
    };
    const goToSlide2 = () => {
      setCurrentIndex(1);
    };
    const goToSlide3 = () => {
      setCurrentIndex(2); 
    };


  return (
    <>
    <div className='ImageSlider'>
        <div id='no1'>
          <button onClick={goToSlide1} id='carousal_btn' autoFocus>Basic Details</button>
          <button onClick={goToSlide2} id='carousal_btn'>Eligibilty and Requirements</button>
          <button onClick={goToSlide3} id='carousal_btn'>Placement Assistance</button>
        </div>
        <ImageSlider slides={currentIndex} />
    </div>
    </>
  )
}

export default Carousal