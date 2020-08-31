import React, { useState, useEffect} from 'react'

import '../../assets/css/Resources.css'
import ResourceCard from './ResourceCard'

import fetchData from '../../utils/fetchData'


const Resources = () => {

    const [resources, updateResources] = useState([])

    useEffect(() => {
        (async function() {
            const data = await fetchData('resources')
            updateResources(data)
        })()
    }, [])

    return (
        <div className="resources">
            <div className="container">
                <h1 className="text-center resources-title">Welcome To Unicat E-Learning</h1>
                <br />
                <p className="text-center  mx-auto resources-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu. Vestibulum feugiat, sapien ultrices fermentum congue, quam velit venenatis sem
                </p>
                <div className="row resource-cards">
                    {resources.map((resource, index) => (
                        <div className="col-lg-3" key={index}>
                            <ResourceCard 
                                src={resource.src}
                                alt={resource.alt} 
                                title={resource.title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default React.memo(Resources)