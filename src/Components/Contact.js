import React from 'react';
import '../Styles/Contact.css';

function Contact() {
    return (
        <>
        <div className='Contact'>
          <p>Follow us</p>
          <div className='contact-links'>
            <div id='instagram'><a href='https://instagram.com/acelogic__?igshid=YzdkMWQ2MWU=' id='instagram-link'><i className="fa-brands fa-instagram"></i></a></div>
            <div id='facebook'><a href='https://www.facebook.com/AceLogicEducation?mibextid=LQQJ4d' id='facebook-link'><i className="fa-brands fa-facebook" /></a></div>
            <div id='linkedin'><a href='https://www.linkedin.com/company/acelogic/' id='linkedin-link'><i className="fa-brands fa-linkedin" /></a></div>
          </div>
          <div id='contact-child'>

          <ul className='contact--list1'>
            <li><a>Alumni</a></li>
            <li><a>Our team</a></li>
            <li><a>Careers</a></li>
            <li><a>Referral Programs</a></li>
            <li><a>Learn</a></li>
          </ul>
          <ul className='contact--list2'>
            <li><a>Hire from us</a></li>
            <li><a>Our investors</a></li>
            <li><a>Testimonials</a></li>
            <li><a>Blog</a></li>
            <li><a>Scholarship</a></li>
          </ul>
          <ul className='contact--list3'>
            <li><a>About us</a></li>
            <li><a>FAQ</a></li>
            <li><a>Newstream</a></li>
            <li><a>Contact Us</a></li>
          </ul>
          </div>
          <p id='p'>Copyright here</p>
        </div>
        </>
    )
}

export default Contact;