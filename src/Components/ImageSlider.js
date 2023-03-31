import React from 'react';
import img from '../images/Carousal_img4.jpeg';
import '../Styles/ImageSlider.css';

const ImageSlider = ({slides}) => {

    if(slides === 0){
        return (
            <>     
                <div className='carousalcontainer'>
                    <ul>
                        <li>
                            <i class="fa-solid fa-sack-dollar"></i>
                            <section id='text--container'>
                                <p>Guaranteed Salary</p>
                                <p>Rs. 5LPA - Rs. 20LPA</p>
                            </section>
                        </li>
                        <li>
                            <i class="fa-solid fa-language"></i>
                            <section id='text--container'>
                                <p>Language of Teaching</p>
                                <p>English and Hindi</p>
                            </section>
                        </li>
                        <li>
                            <i class="fa-regular fa-calendar"></i>
                            <section id='text--container'>
                                <p>Course Duration</p>
                                <p>6 Months</p>
                            </section>
                        </li>
                        <li>
                            <i class="fa-solid fa-diagram-project"></i>
                            <section id='text--container'>
                                <p>5+ Industry based</p>
                                <p>Capstone Projects</p>
                            </section>
                        </li>
                        <li>
                            <i class="fa-solid fa-clock"></i>
                            <section id='text--container'>
                                <p>Class Timings</p>
                                <p>7PM - 11PM</p>
                            </section>
                        </li>
                        <li>
                            <i class="fa-solid fa-book-bookmark"></i>
                            <section id='text--container'>
                                <p>100% Live Classes</p>
                                {/* <p>Rs. 5LPA - Rs. 20LPA</p> */}
                            </section>
                        </li>
                    </ul>
                </div>
            </>
        );
    }
    else if(slides === 1){
        return(
            <>
                <div className='carousalcontainer'>
                    <ul>
                        <li>
                            <i class="fa-solid fa-download"></i>
                            <section>
                                <p id='lighter--text'>Requirements</p>
                                <p>No technical pre-requisites</p>
                            </section>
                        </li>
                        <li>
                            <i class="fa-solid fa-laptop"></i>
                            <section>
                                <p id='lighter--text'>Hardware</p>
                                <p>Laptop</p>
                            </section>
                        </li>
                        <li>
                            <i class="fa-regular fa-id-card"></i>
                            <section>
                                <p id='lighter--text'>ID</p>
                                <p>Valid PAN Card and Aadhar Card</p>
                            </section>
                        </li>
                        <li>
                            <i class="fa-solid fa-comment"></i>
                            <section>
                                <p id='lighter--text'>Communication Skills</p>
                                <p>Basic English - speaking,reading and writing</p>
                            </section>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
    else if(slides === 2){
        return(
            <>
                <div className='carousalcontainer'>
                    <img src={img} alt='none'></img>
                </div>
            </>
        )
    }
};


export default ImageSlider