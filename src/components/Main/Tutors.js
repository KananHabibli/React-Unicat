import React, { useState, useEffect} from 'react'

import '../../assets/css/Tutors.css'

import TutorCard from './TutorCard'
import fetchData from '../../utils/fetchData'

const Tutors = () => {

    const [tutors, updateTutors] = useState([])

    useEffect(() => {
        (async function() {
            const data = await fetchData('tutors')
            updateTutors(data)
        })()
    }, [])

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
                        {tutors.map((tutor, index) => (
                            <div key={index} className="col-lg-3 col-md-6">
                                <TutorCard  
                                    src={tutor.src}
                                    alt={tutor.alt}
                                    tutor={tutor.tutor}
                                    position={tutor.position}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Tutors)