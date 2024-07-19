import React, { useState } from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [menu, setMenu] = useState();

    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Join us at HDKStore and  we're a destination for product lovers, a place where every product is an occasion to celebrate taste, community, and the joy of good food. Experience the difference at HDKStore, where every dish is a testament to our passion for product and commitment to your satisfaction.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>
                            <Link
                                to="/"
                                onClick={() => setMenu("home")}
                                className={menu === "home" ? "active" : ""}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                onClick={() => setMenu("about")}
                                className={menu === "about" ? "active" : ""}
                            >
                                About us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/delivery"
                                onClick={() => setMenu("delivery")}
                                className={menu === "delivery" ? "active" : ""}
                            >
                                Delivery
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/privacy-policy"
                                onClick={() => setMenu("privacy")}
                                className={menu === "privacy" ? "active" : ""}
                            >
                                Privacy policy
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Get in Touch</h2>
                    <ul>
                        <li>91+1234567889</li>
                        <li>test@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">idfiohaghfghfghfjgh</p>
        </div>
    );
};

export default Footer;
