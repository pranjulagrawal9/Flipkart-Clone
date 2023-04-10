import React, { useEffect, useState } from 'react'
import '../navBar/NavBar.scss'
import logo from '../../assets/fk-plus_3b0baa.png'
import {BiSearch} from 'react-icons/bi'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {FaShoppingCart} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {RiCopperCoinFill} from 'react-icons/ri'
import {HiPlusCircle} from 'react-icons/hi'
import {RiFolderUploadFill} from 'react-icons/ri'
import {BsFillSuitHeartFill} from 'react-icons/bs'
import {RiCoupon2Fill} from 'react-icons/ri'
import {AiOutlineLogout, AiFillCustomerService} from 'react-icons/ai'
import {IoIosNotifications, IoMdDownload} from 'react-icons/io'
import { useRef } from 'react'

function NavBar() {

    const [isMenuHover, setIsMenuHover] = useState(false);
    const [isMoreHover, setIsMoreHover] = useState(false);
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const navbarRef = useRef(null);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    
      return () => {
        window.removeEventListener('resize', handleResize);
      }
    })

    
    function handleResize(){
        setScreenSize(window.innerWidth);
    }

  return (
    <nav>
        <div className='navbar' ref={navbarRef} >
            <div className="container">
                <div className="flipkart-logo">
                    <img src={logo} alt="flipkart logo" />
                </div>

                <div className="search-box">
                    <input type="text" placeholder='Search for products, brands and more' />
                    <button className='search-btn'>
                        <BiSearch />
                    </button>
                </div>
                
                <div className="my-account" onMouseEnter={()=> setIsMenuHover(true)} onMouseLeave={()=> setIsMenuHover(false)} >
                    <div className="name">Pranjul
                    <RiArrowDropDownLine className='drop-down' />
                    </div>
                {isMenuHover && <div className="menu-box">
                        <ul>
                            <li className="menu-item">
                                <CgProfile color='#2874F0' />
                                <span>My Profile</span>
                            </li>
                            <li className="menu-item">
                                <RiCopperCoinFill />
                                <span>SuperCoin Zone</span>
                            </li>
                            <li className="menu-item">
                                <HiPlusCircle />
                                <span>Flipkart Plus Zone</span>
                            </li>
                            <li className="menu-item">
                                <RiFolderUploadFill />
                                <span>Orders</span>
                            </li>
                            <li className="menu-item">
                                <BsFillSuitHeartFill />
                                <span>Wishlist</span>
                            </li>
                            <li className="menu-item">
                                <RiCoupon2Fill />
                                <span>Coupons</span>
                            </li>
                            <li className="menu-item">
                                <AiOutlineLogout />
                                <span>Logout</span>
                            </li>
                        </ul>
                    </div>}
                    
                </div>

                <div className="seller">Become a Seller</div>

                <div className="more" onMouseEnter={()=> setIsMoreHover(true)} onMouseLeave={()=> setIsMoreHover(false)} >
                    <div className="name">More
                    <RiArrowDropDownLine className='drop-down' />
                    </div>
                    {isMoreHover && <div className="menu-box">
                        <ul>
                            <li className="menu-item">
                                <IoIosNotifications />
                                <span>Notification Preferences</span>
                            </li>
                            <li className="menu-item">
                                <AiFillCustomerService />
                                <span>24x7 Customer Care</span>
                            </li>
                            <li className="menu-item">
                                <IoMdDownload />
                                <span>Download App</span>
                            </li>
                        </ul>
                    </div>}
 
                </div>

                <div className="cart-container">
                    <FaShoppingCart />
                    <span>Cart</span>
                </div>
            </div>
        </div>
        {screenSize<=425 && <div className="bottom-search">
            <div className="search-box">
                <input type="text" placeholder='Search for products, brands and more' />
             <button className='search-btn'>
                <BiSearch />
            </button>
            </div>
        </div>}
    </nav>
    
  )
}

export default NavBar