import React from 'react'
import { NavLink } from 'react-router-dom'

import '../../assets/css/NavSidebar.css'

const NavSidebar = () => {
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
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="sidebar-elem">
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li className="sidebar-elem">
                        <NavLink to="/courses">Courses</NavLink>
                    </li>
                    <li className="sidebar-elem">
                        <NavLink to="/blog">Blog</NavLink>
                    </li>
                    <li className="sidebar-elem">
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavSidebar