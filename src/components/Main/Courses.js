import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import '../../assets/css/Courses.css'
import CourseCard from '../Courses/CourseCard'

import Context from '../../context/Context'

const Courses = () => (
        <div className="courses">
            <div className="container">
                <h1 className="text-center courses-title">Popular Online Courses</h1>
                <br />
                <p className="text-center  mx-auto courses-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu. Vestibulum feugiat, sapien ultrices fermentum congue, quam velit venenatis sem
                </p>
                <Context.Consumer>
                    {context => {
                        return (
                        <div className="row courses-cards">
                            {Object.keys(context.data).map( index => {
                                return(
                                    <div key={index} className="col-lg-4">
                                        <Link to={{pathname: `/${context.data[index].id}/${context.data[index].course}`}}>
                                            <CourseCard
                                                src={context.data[index].src} 
                                                title={context.data[index].course} 
                                                tutor={context.data[index].tutor} 
                                                price={context.data[index].price} 
                                                discount
                                                students={context.data[index].students}
                                                rating={context.data[index].rating}/>
                                        </Link>

                                    </div>
                            )})}
                        </div>
                    )}}
                </Context.Consumer>
                <div className="courses-button">
                    <NavLink to="/courses" className="btn mx-auto text-white">View All Courses</NavLink>
                </div>
            </div>            
        </div>
    )

export default Courses