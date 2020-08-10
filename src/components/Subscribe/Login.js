import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import '../../assets/css/Login.css'

const Login = props => {
    return (
        <main className='main-login'>
            <div className="register-background"></div>

            <div className="register-form">
                <div className="register-form-title">
                    Login Form
                </div>
                <form action="">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input className="register-form-input" type="email" placeholder="johndoe@gmail.com" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input className="register-form-input" type="password" placeholder="*******" />
                    </div>
                    <div className="d-flex jsutify-content-start align-items-center">
                        <NavLink to="/register" className="register-button mx-auto">
                            <p>
                                <i className="fas fa-arrow-left mr-lg-4 mr-2"></i>Register
                            </p>
                        </NavLink>
                        <NavLink to="/" className="register-button mx-auto">
                            <p>
                                Log in 
                            </p>
                        </NavLink>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Login
