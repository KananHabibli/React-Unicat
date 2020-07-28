import React from 'react'

import '../../assets/css/Tutors.css'

import TutorCard from './TutorCard'
const Tutors = props => {
    return (
        <div className="tutors">
            <div className="container">
                <div className="tutors-title">
                    <h2 className="text-center">The Best Tutors in Town
                    </h2>
                    <div className="tutors-text text-center">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu. Vestibulum feugiat, sapien ultrices fermentum congue, quam velit venenatis sem</p>
                    </div>
                </div>
                <div className="tutors-cards">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <TutorCard  
                                src="/images/team_1.jpg" 
                                alt="Tutor 1"
                                tutor="Jacke Masito" 
                                position="Marketing & Management"/>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <TutorCard  
                            src="/images/team_2.jpg" 
                            alt="Tutor 2"
                            tutor="William James" 
                            position="Designer & Website"/>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <TutorCard  
                                src="/images/team_3.jpg" 
                                alt="Tutor 3"
                                tutor="John Tyler" 
                                position="Quantum Mechanics"/>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <TutorCard  
                            src="/images/team_4.jpg" 
                            alt="Tutor 4"
                            tutor="Veronica Vahn" 
                            position="Math & Physics"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tutors