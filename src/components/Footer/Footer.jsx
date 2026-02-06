import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
           <div className="footer-top-left">
            <img src={logo} alt="" />
            <p>I'm Nikita shah, Frontend developer based in INDIA.</p>
           </div>
           <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your Email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
           </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2023 Nikita Shah. All rights reserved.</p>
             <div className="footer-bottom-right">
                <p>Term of services</p>
                <p>Privacy Policy</p>
                <p>Connect with Me</p>
             </div>
        </div>


    </div>
  )
}

export default Footer