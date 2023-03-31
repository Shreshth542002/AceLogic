import React,{useState} from 'react'
import { Carousal2_data } from '../Navitems';
import '../Styles/ImageSlider2.css';

const ImageSlider = ({slides}) => {

    const [currentIndex,setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? Carousal2_data.length - 1: currentIndex - 1
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === Carousal2_data.length - 1
        const newIndex = isLastSlide ? 0: currentIndex + 1
        setCurrentIndex(newIndex)
    };
    
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    return (
        <>     
            <div className='carousalcontainernext' >
                <div className='no2'>
                    <div onClick={goToPrevious}><i class="fa-solid fa-angle-left"></i></div>
                    <div className='carousal--content'>
                            <img src={slides[currentIndex].url} id='carousal_img2'></img>
                            <section>
                                <h2>{Carousal2_data[currentIndex].title}</h2>
                                <ul>
                                    {Carousal2_data[currentIndex].points.map((next) =>{
                                        return(
                                            <li>{next}</li>
                                        )
                                    })}
                                </ul>
                            </section>
                    </div>
                    <div onClick={goToNext}><i class="fa-solid fa-angle-right"></i></div>
                </div>
                {/* <div className='dotContainer'>
                    {Carousal2_data.map((slideIndex) => (
                        <div key={slideIndex} className='dotStyles' onClick={() => goToSlide(slideIndex)}><i class="fa-sharp fa-solid fa-circle"></i></div>
                    ))}
                </div> */}
            </div>
        </>
    );
};


export default ImageSlider