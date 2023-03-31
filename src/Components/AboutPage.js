import React, { useRef, useState } from "react";
import Contact from "./Contact";
import Dashboard from "./Dashboard";
import Whatsapp from './Whatsapp';
import '../Styles/AboutPage.css';
import Faq_Section from "./Faq_Section";
import img1 from '../images/mission.jpeg';
import img2 from '../images/values.jpeg'
import img3 from '../images/vision.jpeg'
import { Link } from "react-router-dom";

function AboutPage() {
 
    return(
        <>
            <div className="aboutUs--navContainer">    
                <Dashboard />
                <div className="about_us_content">
                    <h2>Vision, Mission, Values</h2>
                    <p>Aim for the stars.</p>
                </div>
            </div>
            <div className="vision">
                <img src={img3} className='vision_img'></img>
                <div className="vision_text">
                    <h1 className="vision_heading">VISION</h1>
                    <p className="our_vision">To be the leading provider of accessible and industry-relevant education in the fields of data science and web development, empowering individuals to pursue fulfilling and rewarding careers in these industries.</p>
                </div>
            </div>
            <div className="mission">
                <div className="mission_text">
                    <h1 className="mission_heading">MISSION</h1>
                    <p className="our_mission">To bridge the skills gap in the data science and web development industries by providing accessible, high-quality, job-guaranteed training programs. Our focus is on empowering individuals to pursue fulfilling and rewarding careers in these fields by providing practical, industry-relevant education and personalized support.</p>
                </div>
                    <img src={img1} className='mission_img'></img>
            </div>
            <div className="values">
                <img src={img2} className='values_img'></img>
                <div className="values_text">
                    <h1 className="values_heading">VALUES</h1>
                    <p className="our_values">Acelogic's value is  to providing accessible education, striving for excellence in their programs, building a strong community, and embracing innovation in the field of data science and web development.</p>
                </div>
            </div>
            <div className="Faq">
                <h2>Frequently asked Questions</h2>
                <Faq_Section label="What if I leave the course in between?">
                    <ul>
                        <li>Unit 1: You have to pay us nothing to drop out of Unit 1 and if you think that AceLogic is not for you.</li>
                        <li>Unit 2-4: If you leave our course between these units, you are liable to pay a sum of INR 50,000/-</li>
                        <li>Unit 5-6: If you leave our course between the last 2 units, you have to pay the full PAP amount for the course.</li>
                        <p>You can click <Link to='/Fees&Pap'>here</Link> and visit our Fees & PAP page</p>
                    </ul>
                </Faq_Section>
                <Faq_Section label="Where is AceLogic located?">
                    <p>The AceLogic head office is located in Kolkata, India. Both our Web Development and Data Analytics courses are held live online in an interactive environment.</p>
                </Faq_Section>
                <Faq_Section label="Does AceLogic help me get a job?">
                    <p>The Web Development & Data Analytics space is amongst the most in-demand and ever-growing sectors in India. Our in-house placements team is dedicated to launching your career. It works with over 1400 placement partners like MPL, Dream11, Samsung, Instamojo, Paytm, Nobroker, ShareChat, Revvsales etc. Our executive will help you prepare your resume, portfolio, build your digital profile, practice interviews and even help you when it comes to salary negotiation.However, at the end of the day, you are the one who would apply, give the interview and get the job.</p>
                </Faq_Section>
                <Faq_Section label="Is attendance mandatory?">
                    <p>Yes, a minimum of 90% attendance is required to complete our courses. You also need to follow the guidelines mentioned in AceLogic's Code of Conduct Policy.</p>
                </Faq_Section>
                <Faq_Section label="Who is eligible to apply for a AceLogic course?">
                    <p>To be eligible you must have:</p>
                </Faq_Section>
                <Faq_Section label="What is the medium of instruction?">
                    <p>The medium of instruction at AceLogic is English. All lectures are delivered in English. As part of the curriculum, we also help you develop your written and verbal communication skills that help you become more employable.</p>
                </Faq_Section>
                <Faq_Section label="Will I receive a degree or certificate when I graduate from AceLogic?">
                    <p>We do issue a certificate of completion upon graduation. But, AceLogic is not a degree institution and we do not grant Bachelors or Masters Degrees. The core focus at AceLogic is on skill development and holistic learning. With that in mind, we have not tied up with any education institution for certification.</p>
                </Faq_Section>
                <Faq_Section label="The course hours don’t work for me. Can I attend classes in my own time?">
                    <p>No. You are required to attend classes in the defined time slot and are required to maintain 90% attendance for all our courses. If for any reason you are not able to attend your classes during your course, with prior permission, recorded lectures will be made available to you. However, please note, it won’t be as effective as attending live classes.</p>
                </Faq_Section>
                <Faq_Section label="Do you offer loaner laptops for prospective students?">
                    <p>Not at the moment.</p>
                </Faq_Section>
                <Faq_Section label="Does college CGPA play any role in the program?">
                    <p>No, your college CGPA does not play any role in your entry to our courses.</p>
                </Faq_Section>
                <Faq_Section label="What do you look for in candidates when they apply to AceLogic?">
                    <p>AceLogic is a fast-paced, immersive, online education experience. It's important to ask yourself, "Is this right for me?" Below are a few of the qualities it will take to be successful in our courses:
                        <ul>
                            <li>Determination </li>
                            <li>Proactiveness</li>
                            <li>Career-focussed</li>
                        </ul>
                        </p>
                </Faq_Section>
                <Faq_Section label="Are you a self-learner?">
                    <p>Learning to code or design is only one piece of the puzzle. You'll rarely be shown how to solve problems in the workplace, so AceLogic students graduate with the ability to autonomously tackle unique problems wherever they face them.</p>
                </Faq_Section>
                <Faq_Section label="What do I do if I don't have a Pan Card/Adhaar Card?">
                    <p>At the time of admission, having an Aadhaar is mandatory. PAN Card is not mandatory at the time of admission, but you will need to get a PAN number before you move to Unit 2.</p>
                </Faq_Section>
                <Faq_Section label="Do I have to take the first job I am offered?">
                    <p>No, we do not control where you choose to work. However, we do recommend not over-optimising your job search and getting a job as soon as possible. Once you reject an offer, you cannot go back to it if the position is filled.</p>
                    <strong>Terms and conditions apply.</strong>
                </Faq_Section>
                <Faq_Section label="What is the course fee?">
                    <p>You can learn at INR 0 upfront fees with AceLogic. You pay us if you earn 5 Lakhs per annum (CTC) or more after course completion.</p>
                </Faq_Section>
            </div>
            <Contact />
            <Whatsapp />
        </>
    )
}

export default AboutPage;