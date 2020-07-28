import React from 'react'
import EventCard from './EventCard'

import '../../assets/css/Events.css'

const Events = props => {
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
                        <div className="col-lg-4">
                           <EventCard 
                            src="/images/event_1.jpg" 
                            alt="Event 1"
                            day="21"
                            month="Aug"
                            title="Which Country Handles Student Debt?"
                            hours="15:00 - 19:00"
                            address="25 New York City" />
                        </div>
                        <div className="col-lg-4">
                            <EventCard 
                                src="/images/event_2.jpg" 
                                alt="Event 2"
                                day="27"
                                month="Aug"
                                title="Repaying your student loans (Winter 2017-2018)"
                                hours="09.00 - 17.30"
                                address="25 Brooklyn City" />
                        </div>
                        <div className="col-lg-4">
                            <EventCard 
                            src="/images/event_3.jpg" 
                            alt="Event 3"
                            day="01"
                            month="Sep"
                            title="Which Country Handles Student Debt?"
                            hours="15:00 - 19:00"
                            address="25 Brooklyn City" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events