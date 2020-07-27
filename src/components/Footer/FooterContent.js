import React from 'react'

import '../../assets/css/FooterContent.css'

const FooterContent = props => {
    return (
        <div className="footer-content">
            <div className="row">
                <div className="col-lg-3 footer-main">
                    <div className="d-flex align-items-start justify-content-start flex-column">
                        <div className="footer-logo">
                            <a href="#" className="footer-logo">
                                <div className="footer-text">Unic<span>at</span></div>
                            </a>
                        </div>
                        <div className="footer-about">
                            <p className="text-white">
                                Lorem ipsum dolor sit ametium, consectetur adipiscing elit.
                            </p>
                        </div>
                        <div className="footer-social-list">
                            <ul>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a> 
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-google-plus-g"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="footer-about-1">
                        <ul>
                            <li>Contact Us</li>
                            <li>Email: Info.deercreative@gmail.com</li>
                            <li>Phone: +(88) 111 555 666</li>
                            <li>40 Baria Sreet 133/2 New York City, United States</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="footer-about-2">
                        <div className="links-title">Contact Us</div>
                        <ul className="footer-links">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Courses</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Events</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                            <li>
                                <a href="#">Gallery</a>
                            </li>
                            <li>
                                <a href="#">Features</a>
                            </li>
                            <li>
                                <a href="#">FAQs</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="mobile">
                        <div className="mobile-title">Mobile</div>
                        <ul className="mobile-list">
                            <li>
                                <a href="#">
                                    <img src="images/mobile_1.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="images/mobile_2.png" alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterContent