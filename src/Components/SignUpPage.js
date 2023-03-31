import React, { useState } from 'react'
import '../Styles/SignUpPage.css';
import { auth, db, googleProvider } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup } from 'firebase/auth';

const SignUpPage = ({index}) =>{

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPass, setLoginPass] = useState("");

    const signUp = async () =>{
        await createUserWithEmailAndPassword(auth, email,pass)
    };

    const signIn = async () =>{
        await signInWithEmailAndPassword(auth, loginEmail, loginPass)
    };

    const google = async () =>{
        await signInWithPopup(auth, googleProvider)
    }
    
    const signout = async() =>{
        await signOut(auth)
    };

    if(index === 0){
        return(
            <>
                <div className='signUp--container'>
                    <form className='signUp--form'>
                        <input 
                            type="text" 
                            placeholder='&#xf508;   Enter Full name' 
                            // onChange={(e) => setSignUpName(e.target.value)}
                            />
                        <input 
                            type="email" 
                            placeholder='&#xf0e0;   E-mail'
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        <input 
                            type="password" 
                            placeholder='&#xf023;   Password'
                            onChange={(e) => setPass(e.target.value)}
                            />
                        <input 
                            type="text" 
                            placeholder='&#xe4da;   Institute/Organization'
                            // onChange={(e) =>setSignUpValues((prev) => ({ ...prev, company: e.target.value}))}
                            />
                        <button className='signUp--btn' onClick={signUp}>Sign Up</button>
                    </form>
                    <p className='signUp--btn' onClick={google}>Sign Up with Google</p>
                </div>
            </>
        )
    }
    else{
        return(
            <>
                <div className='login--container'>
                    <form className='Login--form'>
                        <input 
                            type="email" 
                            placeholder='&#xf2bd;   E-mail'
                            onChange={(e) =>setLoginEmail(e.target.value)}>
                        </input>
                        <input 
                            type="password" 
                            placeholder='&#xf023;   Password'
                            onChange={(e) =>setLoginPass(e.target.value)}>
                        </input>
                        <button className='Login--btn'>Login</button>
                    </form>
                    <button onClick={signout}>Logout</button>
                </div>
            </>
        )
    }
}

export default SignUpPage