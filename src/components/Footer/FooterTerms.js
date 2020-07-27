import React from 'react'

import '../../assets/css/FooterTerms.css'

const FooterTerms = props => {
    return (
        <div className="terms">
            <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center">
                <div className="copyright">
                    Copyright &copy;<span id="year"></span> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a style={{color: '#fff'}} href="https://colorlib.com" target="_blank">Colorlib</a>
                </div>
                <ul className="terms-list">
                    <li><a href="#">Copyright notification</a></li>
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
        </div>
    )
}

export default FooterTerms