import React, { Component } from 'react'


//Components
import Tutors from '../Main/Tutors'
import Register from '../Main/Register'
import PageTail from '../Main/PageTail'
import Welcome from './Welcome'
import Reason from './Reason'
import Carousel from './Carousel'
const About = () => {
    return (
        <main>
            {/* PAGE TAIL */}
            <PageTail  title="About"/>
    
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

export default About
