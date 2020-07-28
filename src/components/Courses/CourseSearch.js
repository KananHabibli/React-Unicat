import React from 'react'

import '../../assets/css/CoursesSearch.css'

const CourseSearch = props => {
    return (
        <div className="courses-search">
            <form className="d-flex align-items-center justify-content-start flex-row" action="">
                <input className="courses-search-input" type="text" placeholder="Search Courses" />
                <select className="courses-search-select courses-search-input">
                    <option>All Categories</option>
                    <option>Category</option>
                    <option>Category</option>
                    <option>Category</option>
                </select>
                <button className="courses-search-button ml-auto">Search Now</button>
            </form>
        </div>
    )
}

export default CourseSearch
