import React from 'react'

import '../../assets/css/Main.css'

import MainCarousel from './MainCarousel'
import Resources from './Resources'
import Courses from './Courses'
import Register from './Register'
import Events from './Events'
import Tutors from './Tutors'
import News from './News'
import Subscribe from './Subscribe'

const Main = props =>{
    return (
        <main>

            {/* MAIN CAROUSEL */}
            <MainCarousel />

            {/* RESOURCES */}
            <Resources />

            { /* COURSES */ }
            <Courses />

            {/* REGISTER */}
            <Register />

            { /* EVENTS */} 
            <Events />

            {/* TUTORS */}
            <Tutors />

            {/* News */} 
            <News />

            {/* SUBSCRIBE */}
            <Subscribe />
            
        </main>

    )
}


export default Main