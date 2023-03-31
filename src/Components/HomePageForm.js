import React from 'react'
import '../Styles/HomePageForm.css'

function HomePageForm() {
  return (
    <>
        <div className='home-form'>
            <div className='left-side-text'>
                <h1>Enroll Now</h1>
                <p>Take the first step towards a rewarding tech career</p>
            </div>
            <div id='form--separator'></div>
            <form className='right-side-form'>
                <h2>Register For Our Courses</h2>
                <input type="text" className='form-input' placeholder='Enter Full Name*'></input>
                <input type="email" className='form-input' placeholder='Enter Email*'></input>
                <input type='number' className='form-input' placeholder='Enter Number*'></input>
                <select name='Degree' className='form-select'>
                    <option value='' disabled selected>Select Highest Degree</option>
                    <option>Bachelors</option>
                    <option>Masters</option>
                    <option>Ph.d</option>
                    <option>Higer Secondary</option>
                </select>
                <br />
                <select name='Year' className='form-select' placeholder='Passout year*'>
                    <option value='' disabled selected>Select Passout Year</option>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>
                </select>
                <br />
                <select name='Program' className='form-select'>
                    <option value='' disabled selected>Select Your Course</option>
                    <option>Data Science</option>
                    <option>Web Development</option>
                </select>
                <input type="submit" className='form-button' value='Enroll Now'></input>
            </form>
        </div>
    </>
  )
}

export default HomePageForm