import React from 'react'

import '../../assets/css/Footer.css'

import FooterContent from './FooterContent'
import FooterTerms from './FooterTerms'
class Footer extends React.Component{
    render() {
        return(
            <footer>
                <div className="container">
                    <FooterContent />
                    <FooterTerms   />
                </div>
            </footer>
        )
    }
}

export default Footer