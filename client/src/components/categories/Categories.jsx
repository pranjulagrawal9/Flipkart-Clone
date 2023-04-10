import './Categories.scss'
import React from 'react'
import groceryImg from '../../assets/grocery.png'
import mobilesImg from '../../assets/smartphones.png'
import fashionimg from '../../assets/fashion.png'
import electronicsImg from '../../assets/electronics.png'
import homeImg from '../../assets/home.jpg'
import appliancesImg from '../../assets/Appliances.png'
import travelImg from '../../assets/Travel.png'
import topOffersImg from '../../assets/TopOffers.png'
import toysImg from '../../assets/Toys.png'
import twoWheelersImg from '../../assets/twoWheelers.png'
import SingleCategory from '../singleCategory/SingleCategory'

function Categories() {
  return (
    <div className='categ-container'>
        <SingleCategory categoryImg={groceryImg} categoryName="Grocery" />
        <SingleCategory categoryImg={mobilesImg} categoryName="Mobiles" />
        <SingleCategory categoryImg={fashionimg} categoryName="Fashion" />
        <SingleCategory categoryImg={electronicsImg} categoryName="Electronics" />
        <SingleCategory categoryImg={homeImg} categoryName="Home" />
        <SingleCategory categoryImg={appliancesImg} categoryName="Appliances" />
        <SingleCategory categoryImg={travelImg} categoryName="Travel" />
        <SingleCategory categoryImg={topOffersImg} categoryName="Top Offers" />
        <SingleCategory categoryImg={toysImg} categoryName="Beauty, Toys & More" />
        <SingleCategory categoryImg={twoWheelersImg} categoryName="Two Wheelers" />
    </div>
  )
}

export default Categories