import React, { useContext, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import { AuthContext } from '../../context/Auth'
import '../../assets/css/NavMenu.css'

const NavMenu = props => {

    const [profile, setProfile] = useState(null)
    const [currentUser, setCurrentUser] = useState(useContext(AuthContext))

    const checkAuth = () => {
        if(currentUser){
            setProfile(
                <li className="nav-elem">
                    <NavLink activeClassName="linkActive" to="/profile/info">My Profile</NavLink>
                </li>  )
        } else {
            setProfile(null)
        }
    }

    useEffect(() => {
        console.log('navbar rendered')
        checkAuth()
    }, [currentUser])


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
                                    {profile}
                                </ul>
                                <div className="search-button">
                                    <i className="fas fa-search" ></i>
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