import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        
        
    <div className="footer-content-left">

            <img src={assets.logo}/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, libero. Neque aperiam dolorem quo tempore rem praesentium quam sit nulla quibusdam ullam ipsa nobis iste, amet corrupti numquam temporibus expedita.</p>

            <div className="footer-social-icons">
               
                <img src={assets.facebook_icon} alt="facebook"/>
                <img src={assets.twitter_icon} alt="twitter"/>
                <img src={assets.linkedin_icon} alt="linkedin"/>

            </div>
    </div>


        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delievery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>


        
        <div className="footer-content-right">
        <h2>GET IN TOUCH</h2>
        <ul>
            <li>+91 8957389453/54/55/8932893</li>
            <li>tomatohelpline@gmail.com</li>
        </ul>
       </div>
      </div>
      <hr/>
      <p className="footer-copyright">
        Copyright  2025 @ Tomato.com. All Rights Reserved
      </p>
    </div>
  )
}

export default Footer;
