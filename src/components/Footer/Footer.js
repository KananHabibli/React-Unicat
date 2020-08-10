import React from 'react'

import '../../assets/css/Footer.css'

import FooterContent from './FooterContent'
import FooterTerms from './FooterTerms'
const Footer = props =>{
    return(
        <footer>
            <div className="container">
                <FooterContent />
                <FooterTerms   />
            </div>
        </footer>
    )
}

export default Footer