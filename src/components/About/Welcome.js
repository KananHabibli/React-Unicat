import React, { useState, useEffect} from 'react'

import '../../assets/css/Welcome.css'
import WelcomeCard from './WelcomeCard'

import fetchData from '../../utils/fetchData'

const Welcome = () => {

    const [about, updateAbout] = useState([])


    useEffect(() => {
        (async function() {
            const data = await fetchData('about')
            updateAbout(data)
        })()
    }, [])

    return (
        <div className="welcome">
            <div className="container">
                <div className="welcome-title text-center">
                    <h1>Welcome To Univat E-Learning</h1>
                    <div className="welcome-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu Vestibulum</p>
                    </div>
                </div>
                <div className="welcome-cards">
                    <div className="row">
                        {about.map((data, index) => (
                            <div className="col-lg-4" key={index}>
                                <WelcomeCard
                                    src={data.src}
                                    alt={data.alt}
                                    title={data.title}
                                    text={data.text}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome
