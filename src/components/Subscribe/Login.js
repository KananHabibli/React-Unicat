import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from "react-router";
import { NavLink } from 'react-router-dom';
import app from '../../firebase'
import { AuthContext } from '../../context/Auth'


import Required from './Required';

import '../../assets/css/Login.css';

const Login = ({ history }) => {

    const handleLogin = useCallback(
        async event => {
          event.preventDefault();
          const { email, password } = event.target.elements;
          try {
            await app
              .auth()
              .signInWithEmailAndPassword(email.value, password.value);
            history.push("/blogs");
          } catch (error) {
            alert(error);
          }
        },
        [history]
      );
    
      const { currentUser } = useContext(AuthContext);
    
      if (currentUser) {
        return <Redirect to="/" />;
      }


    return (
        <main className='main-login'>
        <div className="register-background"></div>

        <div className="register-form">
            <div className="register-form-title">
                Login Form
            </div>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input className="register-form-input" name="email" type="email" placeholder="johndoe@gmail.com" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input className="register-form-input" name="password" type="password" placeholder="*******" />
                </div>
                <div className="d-flex jsutify-content-start align-items-center">
                    <NavLink to="/register" className="register-button mx-auto">
                        <button className="btn">
                            <i className="fas fa-arrow-left mr-lg-4 mr-2"></i>Register
                        </button>
                    </NavLink>
                    <NavLink to="/" className="register-button mx-auto">
                        <button className="btn">
                            Log in 
                        </button>
                    </NavLink>
                </div>
            </form>
        </div>
    </main>
    )
}

export default withRouter(Login)
