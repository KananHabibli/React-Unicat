import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import {Redirect} from 'react-router-dom';

const MainCarouselItem = ({ courseNames }) => {

    const [input, setInput] = useState('')
    const [toCourse, setToCourse] = useState(false)

    const onSubmit = () => {
        setToCourse(true)
    }

    const onChange = event => {
        setInput(event.target.value)
    }

    if(toCourse){
        let route = `/courses`
        return (<Redirect to={{pathname: route, state : {query: input}}} />)
    } else {
        return (
            <Fragment>
                <img src="images/home_slider_1.jpg"  alt="..." />
                <div className="carousel-caption">
                <h5>The Premium System Education</h5>
                <p>Future Of Education Technology</p>
                <form onSubmit={onSubmit} className="home_search_form d-flex flex-lg-row flex-column align-items-center justify-content-between">
                    <input type="search" onChange={onChange} className="home_search_input" placeholder="Keyword Search" required="required" />
                    <button type="submit" className="home_search_button">search</button>
                </form>
                </div>
            </Fragment>
        )
    }

}

export default React.memo(MainCarouselItem)

MainCarouselItem.propTypes = {
    courseNames: PropTypes.array,
    prices: PropTypes.array
}