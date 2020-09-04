import React, { useState, useEffect} from 'react'

import '../../assets/css/Events.css'
import EventCard from './EventCard'

import fetchData from '../../utils/fetchData'

const Events = () => {

    const [events, updateEvents] = useState([])

    useEffect(() => {
        (async function() {
            const data = await fetchData('events')
            updateEvents(data)
        })()
    }, [])

    return (
        <div className="events">
            <div className="container">
                <div className="events-title">
                    <h2 className="text-center">Upcoming Events
                    </h2>
                    <div className="events-text text-center">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu. Vestibulum feugiat, sapien ultrices fermentum congue, quam velit venenatis sem</p>
                    </div>
                </div>
                <div className="events-cards">
                    <div className="row">
                        {events.map((event, index) => (
                            <div key={index} className="col-lg-4">
                            <EventCard 
                                src={event.src} 
                                alt={event.alt}
                                day={event.day}
                                month={event.month}
                                title={event.title}
                                hours={event.time}
                                address={event.address} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events