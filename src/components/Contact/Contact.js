import React, { Component } from 'react'

import '../../assets/css/Contact.css'

import PageTail from '../Main/PageTail'
import ContactMap from './ContactMap'
import ContactInfo from './ContactInfo'

import Subscribe from '../Main/Subscribe'
export class Contact extends Component {
    render() {
        return (
            <main>
                {/* PAGE TAIL*/}
                <PageTail title="Contact" />

                

                {/* CONTACT */}
                <div className="contact">
                    <ContactMap />
                    
                    <ContactInfo />
                </div>

                {/* SUBSCRIBE */}
                <Subscribe />
            </main>
        )
    }
}

export default Contact
