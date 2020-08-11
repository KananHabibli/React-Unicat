import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../../assets/css/MainCarousel.css'

const MainCarousel = props => {

    const [courseNames, updateCourseNames] = useState([])
    const [prices, updatePrices]   = useState([])

    useEffect(() => {
        console.log('MainCarousel rendered')
        axios.get("http://localhost:5000/courses")
            .then(res => {
                res.data.map(elem => {
                    updateCourseNames(courseNames => [...courseNames, elem.course])
                })
            })
            .catch(e => console.log(e))
        axios.get("http://localhost:5000/prizeInterval")
            .then(res => {
                updatePrices(res.data)
            })
            .catch(e => console.log(e))
        
    }, [])

    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
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
                </div>
                <div className="carousel-item">
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
                </div>
                <div className="carousel-item">
                <img src="/images/home_slider_1.jpg"  alt="..." />
                <div className="carousel-caption">
                <h5>The Premium System Education</h5>
                <p>Future Of Education Technology</p>
                <form action="#" className="home_search_form d-flex flex-lg-row flex-column align-items-center justify-content-between">
                    <div className="d-flex flex-row align-items-center justify-content-start">
                        <input type="search" className="home_search_input" placeholder="Keyword Search" required="required" />
                        <select className="dropdown_item_select home_search_input">
                            {courseNames.map((course, index) => 
                                 (<option key={index}>{course}</option>)
                            )}
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
            </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <i className="fa fa-angle-left" aria-hidden="true"></i>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <i className="fa fa-angle-right" aria-hidden="true"></i>
            </a>
        </div>
    )
}


export default MainCarousel
