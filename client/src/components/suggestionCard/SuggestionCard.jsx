import './SuggestionCard.scss'
import productCardImage from '../../assets/productCardImage.jpeg'

import React from 'react'
import SliderButton from '../sliderButton/SliderButton'
import { useRef } from 'react'
import SuggestionProductCard from '../suggestionProductCard/SuggestionProductCard'

function SuggestionCard() {
    const sliderRef = useRef(null);
    const mainContainerRef= useRef(null);

    function handleLeftButton(){
        let screenWidth= mainContainerRef.current.clientWidth;
        let sliderWidth= sliderRef.current.clientWidth;
        let toSlideWidth= sliderWidth-(screenWidth-230);
        console.log(toSlideWidth);
        sliderRef.current.style.transform= `translateX(-${toSlideWidth}px)`;
    }

    function handleRightButton(){
        sliderRef.current.style.transform= `translateX(0px)`;
    }

  return (
    <div className="main-container suggestion" ref={mainContainerRef} >
        <div className='suggestion-card'>
            <div className="left-card">
                <h2>Best of Electronics</h2>
                <button>View All</button>
                <SliderButton direction="left" onClick={handleRightButton} />
            </div>
            <div className="product-slider" ref={sliderRef} >
                <SuggestionProductCard productCardImage={productCardImage} productHeading="Premium PowerBanks" fromPrice="Shop Now" subHeading="Mi, realme & more" />
                <SuggestionProductCard productCardImage={productCardImage} productHeading="Premium PowerBanks" fromPrice="Shop Now" subHeading="Mi, realme & more" />
                <SuggestionProductCard productCardImage={productCardImage} productHeading="Premium PowerBanks" fromPrice="Shop Now" subHeading="Mi, realme & more" />
                <SuggestionProductCard productCardImage={productCardImage} productHeading="Premium PowerBanks" fromPrice="Shop Now" subHeading="Mi, realme & more" />
                <SuggestionProductCard productCardImage={productCardImage} productHeading="Premium PowerBanks" fromPrice="Shop Now" subHeading="Mi, realme & more" />
                <SuggestionProductCard productCardImage={productCardImage} productHeading="Premium PowerBanks" fromPrice="Shop Now" subHeading="Mi, realme & more" />
                <SuggestionProductCard productCardImage={productCardImage} productHeading="Premium PowerBanks" fromPrice="Shop Now" subHeading="Mi, realme & more" />
                <SuggestionProductCard productCardImage={productCardImage} productHeading="Premium PowerBanks" fromPrice="Shop Now" subHeading="Mi, realme & more" />
            </div>
        </div>

        <SliderButton direction="right"  onClick={handleLeftButton}/>
    </div>
  )
}

export default SuggestionCard