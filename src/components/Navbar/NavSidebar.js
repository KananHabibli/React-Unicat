import React from 'react'

import '../../assets/css/NavSidebar.css'

const NavSidebar = props => {
    return (
        <div className="sidebar-menu">
            <div className="sidebar-close-container">
                <button className="sidebar-close"><i className="fas fa-times"></i></button>
            </div>
            <div className="sidebar d-flex flex-column align-items-end justify-content-start text-right">
                <form action="">
                    <input type="text" placeholder="Search" />
                    <button className="sidebar-search-button">
                        <i className="fas fa-search" ></i>
                    </button>
                </form>
                <ul className="sidebar-list">
                    <li className="sidebar-elem">
                        <a href="index.html">Home</a>
                    </li>
                    <li className="sidebar-elem">
                        <a href="about.html">About</a>
                    </li>
                    <li className="sidebar-elem">
                        <a href="courses.html">Courses</a>
                    </li>
                    <li className="sidebar-elem">
                        <a href="blog.html">Blog</a>
                    </li>
                    <li className="sidebar-elem">
                        <a href="contact.html">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavSidebar