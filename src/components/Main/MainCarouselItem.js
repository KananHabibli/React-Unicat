import React, { Fragment } from 'react'
import PropTypes from 'prop-types'


const MainCarouselItem = ({courseNames, prices}) => (
    <Fragment>
        <img src="/images/home_slider_1.jpg"  alt="..." />
        <div className="carousel-caption">
        <h5>The Premium System Education</h5>
        <p>Future Of Education Technology</p>
        <form action="#" className="home_search_form d-flex flex-lg-row flex-column align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center justify-content-start">
                <input type="search" className="home_search_input" placeholder="Keyword Search" required="required" />
                <select className="dropdown_item_select home_search_input">
                    {courseNames.map((course, index) => (
                        <option key={index}>{course}</option>
                    ))}
                </select>
                <select className="dropdown_item_select home_search_input">
                    {prices.map((price, index) => (
                        <option key={index}>{price}</option>
                    ))}
                </select>
            </div>
            <button type="submit" className="home_search_button">search</button>
        </form>
        </div>
    </Fragment>
)

export default React.memo(MainCarouselItem)

MainCarouselItem.propTypes = {
    courseNames: PropTypes.array,
    prices: PropTypes.array
}