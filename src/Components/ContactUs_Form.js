import React, { useState } from 'react'
import '../Styles/Popup_2.css'

function Popup_2() {

    const [inputs,setInputs] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values =>({...values,[name]:value}))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        setSubmitted(true);
    }

    if(submitted === false)
    {
        return (
            <>
                <div className='popup2'>
                    <div className='ContactUs--Details'>
                        <h1>Contact Us</h1>
                        <p id='form-fillup-text'>Please fill the form and our representative will get back to you within 2 working days</p>
                        <div className='E-mail'>
                            <i class="fa-solid fa-at" id='Email--icon'></i>
                            <section>
                                <h2>Email</h2>
                                <p>help.acelogic@gmail.com</p>
                            </section>
                        </div>
                        <div className='Phone'>
                            <i class="fa-solid fa-phone-volume"  id='phone--icon'></i>
                            <section>
                                <h2>Phone</h2>
                                <p>(+91) 9874861547</p>
                            </section>
                        </div>
                        <div className='Address'>
                            <i class="fa-solid fa-location-dot" id='Address--icon'></i>
                            <section>
                                <h2>Address</h2>
                                <p id='address-text'>18, Nri Singha Dutta Rd, Kolkata-700008</p>
                            </section>
                        </div>
                    </div>
                    <form className='ContactUs--Form'>
                        <h2>Write to Us</h2>
                        <div className='input--container'>
                            <input type='text' placeholder='Your Name*' id='Contact--inputs'></input>
                            <input type='tel' placeholder='Your Phone*' id='Contact--inputs'></input>
                            <input type='email' placeholder='Your E-mail*' id='Contact--inputs'></input>
                            <select id='Contact--inputs'>
                                <option value="" disabled selected>Select your Course*</option>
                                <option value='Data Science'>Data Science</option>
                                <option value='Web Development'>Web Development</option>
                            </select>
                            <input type='text*' placeholder='Your Message' id='Contact--inputs'></input>
                        </div>
                        <button type='submit' className='Submit'>SUBMIT</button>
                    </form>
                </div>
            </> 
        ) 
    }
    else
    {
        return(
            <>
                {/* <div className='popup2'>
                    <div className='left-side-img'>
                        <img src={img} className='popup-image'></img>
                    </div>
                    <div className='thank_you_text'>Thank you for connecting with us. We will reach out soon.</div>
                </div> */}
            </>
        )
    }
}

export default Popup_2