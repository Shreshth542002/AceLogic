import React, { useRef, useState } from "react";
import image from '../images/working_girl_img.png';
import image1 from '../images/lectures.jpeg';
import image2 from '../images/capstone.jpeg';
import image3 from '../images/certification.jpeg';
import image4 from '../images/land_job.png';
import img1 from '../images/dollar.png';
import img2 from '../images/access.jpg';
import img3 from '../images/mentorship.png';
import img4 from '../images/support.png';
import img5 from '../images/nocostemi.jpeg';
import img6 from '../images/softskills.jpeg';
import '../Styles/Data_Science.css';
import Dashboard from "./Dashboard";
import Carousal from "./Carousal";
import Carousal2 from "./Carousal_2";
import Card_2 from "./Card_2";
import Contact from "./Contact";
import Whatsapp from "./Whatsapp";
import Faq_Section from "./Faq_Section";

function DataScience() {
    const [currentIndex,setCurrentIndex] = useState(0);

    const parentRef = useRef();

    return (    
        <>
            <div className="data_science_navcontainer">
                <Dashboard />
                <div className="kinda_moto">
                    <h1>Data Science</h1>
                    <p>Become a job ready software developer in 30 weeks at minimal upfront fees. Pay us only if you get a job that pays you 5LPA or more.</p>
                    <button id="apply_btn">Apply Now</button>
                </div>
            </div>
            <div id="job_guarentee">
                <img id="working_girl" src={image}></img>
                <div id="job_text">
                    <h1>Job Guaranteed Program in Data Science</h1>
                    <p>Acelogic's Job Guaranteed Program in Data Science equips individuals with skills and knowledge to pursue a career in data science. The program is job-guaranteed, with curriculum covering Python programming, data analysis, machine learning, and data visualization. Personalized career guidance and support are also included.</p>
                </div>
            </div>
            <div id="headingcontainer">
                <h1>Course Details</h1>
            </div>
            <Carousal />
            <div id="headingcontainer">
                <h1>Course Roadmap</h1>
            </div>
            <div id="Roadmap">
                <Card_2 imageUrl={image1} title='Live Classes' />
                <Card_2 imageUrl={image2} title='5+ Capstone Projects' />
                <Card_2 imageUrl={image3} title='Get Certified' />
                <Card_2 imageUrl={image4} title='Land your dream job' />
            </div>
            <div id="headingcontainer">
                <h1>Admission Procedure</h1>
            </div>
            <Carousal2 />
            <div id="headingcontainer">
                <h1>Course Features</h1>
            </div>
            <div className="rows">
                <Card_2 imageUrl={img1} title='Refundable Registration Fee' />
                <Card_2 imageUrl={img2} title='Lifetime Access'/>
                <Card_2 imageUrl={img3} title='1:1 mentorship'/>
                <Card_2 imageUrl={img4} title='24/7 Chat support'/>
                <Card_2 imageUrl={img5} title='Easy Finance'/>
                <Card_2 imageUrl={img6} title='Soft Skill Training'/>
            </div>
            <div className="Faq">
                <h2>Frequently asked Questions</h2>
                <Faq_Section label="What is the eligibilty criteria?">
                    <p>Geekster programs are for people who are interested to build their career in tech. You are eligible to apply if you are a final year student, a recent graduate or a working professional</p>
                </Faq_Section>
                <Faq_Section label="Do I need a Computer Science degree to join?">
                    <p>Having a CS only background is not a prerequisite for applying to the program. We encourage all engineering candidates willing to build a career in tech to apply irrespective of their branch background</p>
                </Faq_Section>
                <Faq_Section label="I am a working professional, will I be able to join?">
                    <p>The classes are scheduled during after office hours on working days and on the weekends</p>
                </Faq_Section>
                <Faq_Section label="What if I miss a class?">
                    <p>All classes are live sessions but are recorded and available on the student’s dashboard throughout the course duration for future reference. If a student misses out on a class, he/she can attend the session later at a convenient time.</p>
                </Faq_Section>
                <Faq_Section label="Why is the intake size of AceLogic batch low ?">
                    <p>Batch sizes are kept low to ensure personal focus on development of each candidate. However, we create new batches every month, if you are not selected in the current batch, you can apply again for the upcoming batch. Please keep checking the AceLogic website or follow us on Facebook about the announcement of a new batch.</p>
                </Faq_Section>
                <Faq_Section label="I want to pursue higher studies, should I join the program?">
                    <p>The program is designed to upskill people in latest tech and increase their earning potential. If you plan to pursue higher studies you can join the program to learn, but we would recommend joining with a prepaid payment plan</p>
                </Faq_Section>
                <Faq_Section label="How are the mentors assigned to the students?">
                    <p>All our mentors are senior engineers working with top product companies. Mentors are assigned to students after due consideration of skill, experience and target companies of each candidate.</p>
                </Faq_Section>
                <Faq_Section label="Does college CGPA have any role in selection at Geekster?">
                    <p>CGPA has no role in selection of a candidate. The selection process is strictly based on the performance in the assessment test.</p>
                </Faq_Section>
                <Faq_Section label="If I clear the exam but do not want to join the current batch, will the exam result be valid for admission in upcoming batches?">
                    <p>The test results are valid for admission into a specific batch only. If a student wants to enroll in an upcoming batch then he/she needs to clear the entrance test specific to that batch.</p>
                </Faq_Section>
            </div>
            <Contact />
            <Whatsapp />
        </>
    )
}
export default DataScience;