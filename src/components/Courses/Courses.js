import React from 'react'

import '../../assets/css/GeneralCourses.css'

import PageTail from '../Main/PageTail'
import CourseSearch from './CourseSearch'
import CardContainer from './CardContainer'
import Pagination from './Pagination'
import Categories from './Categories'
import LatestCourses from './LatestCourses'
import Subscribe from '../Main/Subscribe'
import Instagram from './Instagram'
import Tags from './Tags'
import Banner from './Banner'


const Courses = props => {
    return (
        <div>
            {/*PAGE TAIL*/}
            <PageTail title="Courses" />

            {/* COURSES */} 
            <div style={{padding: '100px 0', width: '100%'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <CourseSearch />
                            <CardContainer />
                            <Pagination />
                        </div>
                        <div className="col-lg-4">
                            {/* CATEGORIES */} 
                            <Categories />

                            {/* LATEST COURSES */}
                            <LatestCourses />

                            {/* INSTAGRAM */} 
                            <Instagram />
            
                            {/* TAGS */}
                            <Tags />
                            
                            {/* BANNER */}
                            <Banner />
                        </div>
                    </div>
                </div>
            </div>

            {/* SUBSCRIBE */}
            <Subscribe />
        </div>
    )
}

export default Courses
