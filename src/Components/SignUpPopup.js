import React, { useState } from 'react';
import '../Styles/SignUpPopup.css';
import SignUpPage from './SignUpPage';

function SignUpPopup(props) {

    const [index,setIndex] = useState(0);

    const goToLogin = () =>{
        setIndex(1);
    }

    const goToSignUp = () =>{
        setIndex(0);
    }

    return (props.trigger) ? (
        <>
            <div className='SignUpContainer'>
                <h1>Please Login to Continue</h1>
                <i class="fa-solid fa-circle-xmark" onClick={() => props.setTrigger(false)}></i>
                <div className='slide--container'>
                    <div className='button--container'>
                        <button onClick={goToSignUp} id='signUpSwitch'>Sign Up</button>
                        <button onClick={goToLogin} id='signUpSwitch'>Login</button>
                    </div>
                    <div className='SignUp'>
                        <SignUpPage index={index}/>
                    </div>
                    <p>Already have an account? <br/> <span onClick={goToLogin}>Login Here</span></p>
                </div>
            </div>
        </>
    ) : "" ;
}

export default SignUpPopup