import React, { useState,useEffect } from 'react'
import '../Styles/Popup.css'
import img from '../images/popup__img.jpeg'

function Popup(props) {

    return (props.trigger)?(
    <>
        <div className='popup'>
            <div className='left--side--img'>
                <img src={img} id='popup-form-img'></img>
            </div>
            <div className='right--side--form'>
                <h2>India's Job Guaranteed Program</h2>
                <p>Trusted by 300+ Corporate Hires</p>
                <button id='close--btn' onClick={() => props.setTrigger(false)}><i class="fa-solid fa-circle-xmark fa-xl"></i></button>
                <input type='tel' placeholder='Enter your Number' className='number--input'></input>
                <label><input type='checkbox' />I agree to recieve newsletters and updates</label>
                <button type='submit' className='popup--submit--btn'>Apply Now</button>
            </div>
        </div>
    </>
  ) : "";
    }

export default Popup