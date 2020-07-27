import React, { Component } from 'react'


//Components
import Tutors from '../Main/Tutors'
import Register from '../Main/Register'
import PageTail from '../Main/PageTail'
import Welcome from './Welcome'
import Reason from './Reason'
import Carousel from './Carousel'
export class About extends Component {

    // componentDidMount() {
    //     $( "#accordion" ).accordion({
    //         collapsible: true
    //     });

    //     $(".owl-carousel").owlCarousel({
    //         items:5,
    //         loop:true,
    //         margin:5,
    //         autoplay:true,
    //         autoplayTimeout:2000,
    //         autoplayHoverPause:true
    //     });
    // }

    render() {
        return (
            <main>
                {/* PAGE TAIL */}
                <PageTail />
        
                {/* WELCOME */}
                <Welcome />
        
                {/* REASON */}
                <Reason />
        
                {/* TUTORS */}
                <Tutors />
        
                {/* REGISTER */}
                <Register />
            
                {/* CAROUSEL */}
                <Carousel />
            </main>
        )
    }
}

export default About
