import React from 'react';
import Contact from './Contact';
import Dashboard from './Dashboard';
import Whatsapp from './Whatsapp';
import '../Styles/Fees&Pap.css';
import Faq_Section from './Faq_Section';

function FeesPap() {
  return (
    <>
      <Dashboard />
      <div className='pap-intro-container'>
        <h1 id='pap--heading'>Pay after Placement</h1>
        <p id='pap--text'>Acelogic's unique Pay After Placement model allows students to study a course of their choice with minimal upfront fees, paying only after they secure a job with a salary of over Rs 5LPA.</p>
      </div>
      <div className='about--pap--agreement'>
        <div id='pap-agreement-heading'>Pay After Placement (PAP) Agreement</div>
        <div id='separator'></div>
        <div id='pap-agreement-text'>Acelogic's PAP agreement is a unique payment model where students enroll with minimal upfront fees and only pay the full fee after securing a job with a salary of more than Rs 5LPA. This makes education more accessible and reduces financial risk. Acelogic is committed to providing job-guaranteed training programs in data science and web development.</div>
      </div>
      <div className='student--investment'>
        <div id='student--investment--heading'>OUR PAY AFTER PLACEMENT AGREEMENT IS AN INVESTMENT IN OUR STUDENTS</div>
        <div id='student--investment--text'>At Acelogic, our Pay After Placement model is a unique investment in our students. With minimal upfront fees and payment only after securing a job with a salary of more than Rs 5LPA, this model reduces financial risk and makes education accessible while ensuring our courses are practical and relevant to industry needs.</div>
      </div>
      <div className='fees-structure'>
        <h2>Course Fees</h2>
        <h1>Pay After Placement</h1>
        <table>
          <tr>
            <th>Course Name</th>
            <th>Threshold(Minimum CTC)</th>
            <th>Fees(Inclusive of Taxes)</th>
          </tr>
          <tr>
            <td>Data Science</td>
            <td>Pay After Placement of 5LPA</td>
            <td>Rs. 1,50,000/-</td>
          </tr>
          <tr>
            <td>Full Stack Web Development</td>
            <td>Pay After Placement of 5LPA</td>
            <td>Rs. 1,50,000/-</td>
          </tr>
        </table>
        <h1>Pay Upfront</h1>
        <table>
          <tr>
            <th>Course Name</th>
            <th>Threshold(Minimum CTC)</th>
            <th>Fees(Inclusive of Taxes)</th>
          </tr>
          <tr>
            <td>Data Science</td>
            <td>Pay Upfront 5LPA</td>
            <td>Rs. 1,50,000/-</td>
          </tr>
          <tr>
            <td>Full Stack Web Development</td>
            <td>Pay Upfront 5LPA</td>
            <td>Rs. 1,50,000/-</td>
          </tr>
        </table>
      </div>
      <div className='Drop-Out'>
        <h2>Drop Out Clause</h2>
        <p>If you realise that AceLogic is not for you, you may withdraw from our courses at anytime. Here is how the fee works in case you drop-out</p>
        <div id='unit'>
          <div id='unit-1'>
            <h1>Unit-1</h1>
            <h2>No Payment</h2>
          </div>
          <div id='unit-2'>
            <h1>Unit-2</h1>
            <h2>Partial Token Payment</h2>
          </div>
          <div id='unit-3'>
            <h1>Unit-3</h1>
            <h2>100% PAP Payment</h2>
          </div>
        </div>
      </div>
      <div className="Faq">
        <h2>Frequently asked Questions</h2>
        <Faq_Section label="What is the PAP Agreement and how does it work?">
          <p>The Pay After Placement Agreement is a way to pay your AceLogic course fee. PAP at AceLogic is an agreement between students and AceLogic under which you agree to pay a fixed monthly payment for 36 months or less. The payment starts only once you earn a salary above the threshold amount. The threshold amount is the minimum salary you have to earn before you start paying AceLogic your course fee.If you do not get the promised outcome, a job that pays INR 5,00,000/- (CTC) or more, you pay us nothing at all. Your education is free.</p>
        </Faq_Section>
        <Faq_Section label="What is CTC?">
          <p>CTC (Cost to Company) is defined as “Your total salary (including variable pay), compensations, and gross income and including, but not limited to, benefits such as insurance, HRA, fitness/health benefits, other benefits and allowances including, but not limited to, house rent allowance, leave travel allowance, conveyance and travelling allowance, phone allowance, vehicle allowance and other allowances provided to you from employment or pursuant to self-employment”</p>
        </Faq_Section>
        <Faq_Section label="When do my PAP repayments start and what if I get fired?">
          <p>It will come into action once you get placed with at or more than 5 LPA CTC job after completion of the course.</p>
          <p>In the event, you lose your job because</p>
          <ul>
            <li>Your employer/company you were placed in stops its business</li>
            <li>Pay-cut is introduced by your employer/ company you were placed in, across the company</li>
            <li>Lay-off by your employer/ company you were placed in, due to economic hardships.</li>
          </ul>
          <p>Your payments will automatically be paused after you’ve reported the change and produced the requisite supporting documents.</p>
        </Faq_Section>
        <Faq_Section label="What happens if I don’t get an offer for the threshold amount for my course?">
          <p>AceLogic team is always working to find you good placement opportunities. In the rare case that you don’t get a job of your threshold amount, your PAP Payment will not start. They only start if you earn 5LPA for all our courses.</p>
        </Faq_Section>
        <Faq_Section label="How do I pay my PAP amount?">
          <p>Students are required to pay the PAP amount basis their salary in equal monthly payments (equivalent to the course fee only) without any additional costs, through AceLogic’s NBFC partners.
            Upon clearing the Unit 1 evaluation, the student is required to complete this application with the respective NBFC partner.
            Our assigned NBFC partner will approve a one time zero-interest capital, which you can pay monthly for a maximum 36 months. The monthly payment would start only after the course completion if you have successfully secured an offer letter of 5LPA(CTC) or above, for our courses.</p>
        </Faq_Section>
        <Faq_Section label="Can I see a copy of the PAP Agreement?">
          <p>Yes, of course. As you go through our admission process, a copy of the same will be made available to you at the end.</p>
        </Faq_Section>
        <Faq_Section label="Do I need to submit any document post getting a job?">
          <p>As per the Pay After Placement(PAP) Agreement, you will be legally bound to furnish all the documents relevant to your income, such as your Offer Letter, Salary Slips, IT Returns, Bank statements, etc.</p>
        </Faq_Section>
        <Faq_Section label="What is the interest rate on my Pay After Placement(PAP) payments?">
          <p>PAP Agreement is NOT a loan, so there is no interest on your payment.</p>
        </Faq_Section>
        <Faq_Section label="Is there a difference in course and pay structure with different payment methods">
          <p>AceLogic does not differentiate among students on the basis of payment plan or any other criteria. Each candidate under the program will go through exactly the same course and will learn from the same Tutors &amp; Mentors. There will also be Nno difference in the referral process for the candidates.</p>
        </Faq_Section>
        <Faq_Section label="Will I get a refund if I decide to leave after sometime">
          <p>The student can leave the program within the first 7 days of joining in such case the entire fee paid will be refunded immediately without asking any questions. However, to continue after the first week students need to either pay the remaining course fee or share the signed ISA after which the fee will not be refunded.</p>
        </Faq_Section>
        <Faq_Section label="Are there Educational Loans">
          <p>EMI option is available from our financing partners for the prepaid payment plans.</p>
        </Faq_Section>
      </div>
      <Contact/>
      <Whatsapp />
    </>
  )
}

export default FeesPap