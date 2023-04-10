import '../carousel/Carousel.scss'
import carouselImg1 from '../../assets/carousel1.jpg'
import carouselImg2 from '../../assets/carousel2.jpg'
import carouselImg3 from '../../assets/carousel3.jpg'
import carouselImg4 from '../../assets/carousel4.jpg'
import React, { useEffect, useRef, useState } from 'react'
import SliderButton from '../sliderButton/SliderButton'

function Carousel() {

    const [imgIndex, setImgIndex] = useState(0);
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const carouselRef = useRef(null);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    
      return () => {
        window.removeEventListener('resize', handleResize);
      }
    })

    function handleResize(){
        setScreenSize(window.innerWidth);
    }

    function handleRightArrow(){
        if(imgIndex<3)
            setImgIndex(imgIndex+1);
        else
            setImgIndex(0);
    }

    function handleLeftArrow(){
        if(imgIndex>0)
            setImgIndex(imgIndex-1);
        else
            setImgIndex(3);
    }

    useEffect(() => {
        carouselRef.current.style.transform= `translateX(-${imgIndex*100}vw)`
     
    }, [imgIndex])

    useEffect(() => {
      const interval= setInterval(() => {
       handleRightArrow();
        }, 4000);
    
      return () => {
        clearInterval(interval);
      }
    })
    
        
  return (
    <div className="main-container carousel-main">
        <div className='carousel-container' ref={carouselRef}>
            <div className="img-container">
                <img src={carouselImg1} alt="" />
            </div>
            <div className="img-container">
                <img src={carouselImg2} alt="" />
            </div>
            <div className="img-container">
                <img src={carouselImg3} alt="" />
            </div>
            <div className="img-container">
                <img src={carouselImg4} alt="" />
            </div>
        </div>

        {screenSize>425 && <>
            <SliderButton onClick={handleLeftArrow} direction="left" />

            <SliderButton onClick={handleRightArrow} direction="right" />
        </>}
        
    </div>
  )
}

export default Carousel