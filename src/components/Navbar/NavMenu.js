import React from 'react'
import { NavLink } from 'react-router-dom'

import '../../assets/css/NavMenu.css'

const NavMenu = props => {
    return (
        <div className="nav-menu">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="d-flex flex-row align-items-center justify-content-start mb-2">
                            <NavLink activeClassName="" to="/" className="nav-logo">
                                <div className="nav-text">Unic<span>at</span></div>
                            </NavLink>
                            <div className="ml-auto">
                                <ul className="nav-list">
                                    <li className="nav-elem">
                                        <NavLink exact activeClassName="linkActive" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-elem">
                                        <NavLink activeClassName="linkActive" to="/about">About</NavLink>
                                    </li>
                                    <li className="nav-elem">
                                        <NavLink activeClassName="linkActive" to="/courses">Courses</NavLink>
                                    </li>
                                    <li className="nav-elem">
                                        <NavLink activeClassName="linkActive" to="/blog">Blog</NavLink>
                                    </li>
                                    <li className="nav-elem">
                                        <NavLink activeClassName="linkActive" to="/contact">Contact</NavLink>
                                    </li>
                                </ul>
                                <div className="search-button">
                                    <i className="fas fa-search" ></i>
                                </div>
                                <div className="shopping-cart">
                                    <i className="fas fa-shopping-cart"></i>
                                </div>
                                <div className="sidebar-open">
                                    <i className="fas fa-bars"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavMenu