import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../assets/css/NavInfo.css'

const NavInfo = props => {
    return (
        <div className="nav-info">
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className="d-flex align-items-center justify-content-between">
                            <ul className="nav text-white py-2">
                                <li className="nav-item">Have any questions?</li>
                                <li className="nav-item"><i className="fas fa-phone-alt mr-1"></i>001-1234-88888</li>
                                <li className="nav-item"><i className="far fa-envelope mr-1"></i>info.deercreative@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-4">
                        <NavLink to="/login" className="float-right nav-register py-2 px-4">Register or Login</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavInfo