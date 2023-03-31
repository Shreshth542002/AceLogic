import React from 'react'
import '../Styles/Hiring.css'
import Dashboard from './Dashboard';
import Contact from './Contact';
import img1 from '../images/corporate sector logo.jpeg';
import img2 from '../images/Hiring.jpeg'
import Whatsapp from './Whatsapp'

function HiringPage() {
  return (
    <>
        <div className='hiring_navcontainer'>
          <Dashboard />
          <div className='Hiring__container'>
              <img src={img2} alt='None' className='please'></img>
              <div className='right-side-text'>
                  {/* <section>
                    <h1 className='corporate'>Corporate <p id='sector'> Sector</p></h1>
                    <img src={img1} alt='None'></img>
                  </section> */}
                  <h2>HIRE FROM US</h2>
                  <h3>TOP NOTCH TALENTS</h3>
                  <p>AceLogic helps to deliver the right talent for your </p>
                  <p>company with the perfect skills to make </p>
                  <p> your business top notch.</p>
                  <button ><a href="javascript:setTimeout(()=>{window. location = '#itemId' });">GET STARTED</a></button>
              </div>
          </div>
        </div>
        <h2 id='perfection--heading'>What makes AceLogic's Learner Perfect!</h2>
        <div className='Why-AceLogic'> 
          <div className='Data--Science'>
            <h2>Data Science</h2>
                <ul id='sec1'>
                  <li>
                    <i class="fa-solid fa-chart-line"></i>
                    <div className='xyz'>
                      <p>1000+ Hours</p>
                      <p>Analytical Skill Training</p>
                    </div>
                  </li>
                  <li>
                    <i class="fa-sharp fa-solid fa-chalkboard-user"></i>
                    <div className='xyz'>
                      <p>120+ Hours </p>
                      <p className='line2'>Soft Skill Development</p>
                    </div>
                  </li>
                <li>
                    <i class="fa-solid fa-file-zipper"></i>
                    <div className='xyz'>
                      <p>40 </p>
                      <p className='line2'>Mini projects</p>
                    </div>
                  </li>
                <li>
                    <i class="fa-solid fa-database"></i>
                    <div className='xyz'>
                      <p>250 Hours </p>
                      <p className='line2'>Data Structures & Algorithms</p>
                    </div>
                  </li>
                <li>
                    <i class="fa-solid fa-calculator"></i>
                    <div className='xyz'>
                      <p>80+ Hours </p>
                      <p className='line2'>Maths & Logical Reasoning</p>
                    </div>
                  </li>

                <li>
                    <i class="fa-solid fa-user-graduate"></i>
                    <div className='xyz'>
                      <p>10+ Hackathons</p>
                    </div>
                  </li>
              </ul>
          </div>
          <div className='Web--Development'>
            <h2>Web Development</h2>
                <ul id='sec1'>
                  <li>
                    <i class="fa-solid fa-chart-line"></i>
                    <div className='xyz'>
                      <p>600+ Hours</p>
                      <p>Analytical Skill Training</p>
                    </div>
                  </li>
                  <li>
                    <i class="fa-sharp fa-solid fa-chalkboard-user"></i>
                    <div className='xyz'>
                      <p>50+ Hours</p>
                      <p>Soft Skill Development</p>
                    </div>
                  </li>
                <li>
                    <i class="fa-solid fa-code"></i>
                    <div className='xyz'>
                      <p>80+ Hours</p>
                      <p>Live Technical Marathon</p>
                    </div>
                  </li>
                  <li>
                    <i class="fa-sharp fa-solid fa-business-time"></i>
                    <div className='xyz'>
                      <p>100+ Hours</p>
                      <p>Business Skill Training</p>
                    </div>
                  </li>
                  <li>
                    <i class="fa-solid fa-desktop"></i>
                    <div className='xyz'>
                      <p>150+ Hours</p>
                      <p>Live Personal Guidance</p>
                    </div>
                  </li>
                <li>
                    <i class="fa-solid fa-file-zipper"></i>
                    <div className='xyz'>
                      <p>10+</p>
                      <p>Mini Projects</p>
                    </div>
                  </li>
              </ul>
          </div>
        </div>



        <h2 id='hiring--heading'>Why Hire from AceLogic?</h2> 
        <div className='Hiring-facts'>
          <div className='box'><i class="fa-solid fa-cubes"></i><p><span>6 Months</span> <span>Intensive Learning</span></p></div>
          <div className='box'><i class="fa-solid fa-tv"></i><p id='p500'><span>500+ Hours</span> <span>of live classes</span></p></div>
          <div className='box'><i class="fa-solid fa-lightbulb" id='bulb'></i><p><span>50+ Hours of</span> <span>soft skill Development</span></p></div>
          <div className='box'><i class="fa-solid fa-cloud"></i><p>8+ capstone projects</p></div>
          <div className='box'><i class="fa-solid fa-hand-holding-dollar"></i><p id='no--cost'><span>Zero Cost</span> <span> Hiring</span></p></div>
        </div>

        <div className='Hiring--reasons--container' id='itemId'>
          <div className='Pathway'>
            <h2>Pathway to hire talents</h2>
            <ul>
              <li><i class="fa-solid fa-angles-right" id='bullet--points'></i>Fill your details in the form</li>
              <li><i class="fa-solid fa-angles-right" id='bullet--points'></i>Our placement team will contact you</li>
              <li><i class="fa-solid fa-angles-right" id='bullet--points'></i>Screen through the candidates profiles</li>
              <li><i class="fa-solid fa-angles-right" id='bullet--points'></i>Interview the desired candidates</li>
              <li><i class="fa-solid fa-angles-right" id='bullet--points'></i>Candidate joins your team</li>
            </ul>
          </div>


          <div className='Hiring__Form'>
          <form className='Hire--from--us'>
            <h2 id='become-partner'>Become AceLogic's hiring partner</h2>
            <div className='input--container'>
              <p>Name<span>*</span></p>
              <input type='text' placeholder='Enter your Name' id='hiring-input' required></input>
            </div>
            <div className='input--container'>
              <p>Designation<span>*</span></p>
              <input type='text' placeholder='Eg. Finance Manager' id='hiring-input' required></input>
            </div>
            <div className='input--container'>
              <p>Company<span>*</span></p>
              <input type='text' placeholder='Enter Company Name' id='hiring-input' required></input>
            </div>
            <div className='input--container'>
              <p>Work E-mail<span>*</span></p>
              <input type='email' placeholder='Enter email' id='hiring-input' required></input>
            </div>
            <div className='input--container'>
              <p>Phone<span>*</span></p>
              <input type='tel' placeholder='Enter phone number' id='hiring-input'></input>
            </div>
            <input type='submit' value='SUBMIT' id='Hiring--btn'></input>
          </form>
        </div>
        </div>
        <Contact />
        <Whatsapp />
    </>
  )
}

export default HiringPage