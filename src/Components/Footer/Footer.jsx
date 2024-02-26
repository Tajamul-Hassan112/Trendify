import React from 'react'
import "./Footer.css"
import footer_logo from "../Assets/logo_big.png"
import ig_icon from "../Assets/instagram_icon.png"
import pt_icon from "../Assets/pintester_icon.png"
import wp_icon from "../Assets/whatsapp_icon.png"
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>TRENDIFY</p>
        </div>
        <ul className="footer_links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer_social_icons">
            <div className="footer_icons_conatiner">
                <img src={ig_icon} alt="" />
            </div>
            <div className="footer_icons_conatiner">
                <img src={pt_icon} alt="" />
            </div>
            <div className="footer_icons_conatiner">
                <img src={wp_icon} alt="" />
            </div>
            <div className="footer_copyright">
                <hr />
                <p>Copyright @2024 - All rights reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer