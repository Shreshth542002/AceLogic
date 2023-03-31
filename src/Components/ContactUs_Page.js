import React from 'react';
import Contact from './Contact';
import Dashboard from './Dashboard';
import Popup_2 from './ContactUs_Form';
import Whatsapp from './Whatsapp';
import '../Styles/ContactUs_Page.css';

function ContactPage() {


    return(
        <>
            <div className='Contacts'>
                <Dashboard />
            </div>
            <div className='Contact--Form--container'>
                <Popup_2 />
            </div>
            <Contact />
            <Whatsapp />
        </>
    )
}

export default ContactPage;