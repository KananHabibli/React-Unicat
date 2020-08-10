import React from 'react'
import { NavLink } from 'react-router-dom'

import '../../assets/css/Login.css'

const Register = props => {
    return (
        <main className="main-login">
            <div className="register-background"></div>

            <div className="register-form">
                <div className="register-form-title">
                    Register Form
                </div>
                <form action="">
                    <div>
                        <label for="name">Full Name</label>
                        <input className="register-form-input" type="text" placeholder="John Doe"  />
                    </div>
                    <div>
                        <label for="email">Email</label>
                        <input className="register-form-input" type="email" placeholder="johndoe@gmail.com" />
                    </div>
                    <div>
                        <label for="password">Password</label>
                        <input className="register-form-input" type="password" placeholder="*******" />
                    </div>
                    <div>
                        <label for="passwordConfirm">Confirm Password</label>
                        <input className="register-form-input" type="password"  placeholder="*******" />
                    </div>
                    <div className="d-flex jsutify-content-start align-items-center">
                        <NavLink to="/register" className="register-button mx-auto">
                            <p>
                                Register
                            </p>
                        </NavLink>
                        <NavLink to="/login" className="register-button mx-auto">
                            <p>
                                Log in <i className="fas fa-arrow-right ml-4"></i>
                            </p>
                        </NavLink>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Register
