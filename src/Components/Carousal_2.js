import React from 'react'
import ImageSlider2 from './ImageSlider2'
import '../Styles/Carousal.css'
import img1 from '../images/discussion.jpg'
import img2 from '../images/apply_now.jpg'
import img3 from '../images/exams.jpg'
import img4 from '../images/payment.png'
import img5 from '../images/journey.jpg'

function Carousal2() {

  const slides=[
    {url: img1},
    {url: img2},
    {url: img3},
    {url: img4},
    {url: img5}
  ]

  return (
    <>
    <div className='ImageSlider2'>
        <ImageSlider2 slides={slides}/>
    </div>
    </>
  )
}

export default Carousal2