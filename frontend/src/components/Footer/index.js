
import React from 'react';
import { Link } from 'react-router-dom';

import './index.css'

function Footer() {
    return (
        <footer className="footer-section">
            <hr className='hr'/>
            <div className="container">
                <div className="row">
                    <div className="footer-section">
                        <h6><strong>Navigation</strong></h6>
                        <a href='/'>Home</a>
                        <br />
                        <a href='/about'>About</a>
                    </div>
                    <div className="footer-section">
                        <h6><strong>Newsletter</strong></h6>
                       <a href='#' className='newsletterbutton'>Subscribe<ion-icon name="arrow-redo-outline"></ion-icon></a> 
                    </div>
                    <div className="footer-section">
                        <h6><strong>Socials</strong></h6>
                        <a href='#' className='twitter'><ion-icon name="logo-twitter"></ion-icon></a>
                        {/* <br /> */}
                        <a href='#' ><ion-icon name="logo-instagram"></ion-icon></a>
                        <br />
                        <a href='#' className='tiktok'><ion-icon name="logo-tiktok"></ion-icon></a>
                        {/* <br /> */}
                        <a href='#' ><ion-icon name="logo-youtube"></ion-icon></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;