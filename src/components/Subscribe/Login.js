import React, { useCallback, useContext, useState } from 'react';
import { withRouter, Redirect } from "react-router";
import { NavLink } from 'react-router-dom';
import app from '../../firebase'
import { AuthContext } from '../../context/Auth'


import Required from './Required';

import '../../assets/css/Login.css';

const Login = ({ history }) => {

    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')

    const handleEmail = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        console.log(e.target.value)
        setpassword(e.target.value)
    }

    const handleLogin = useCallback(
        async event => {
          event.preventDefault();
          console.log(email)
          console.log(password)
          try {
            await app
              .auth()
              .signInWithEmailAndPassword(email, password);
            history.push("/profile/info");
          } catch (error) {
            alert(error);
          }
        }
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
                    <input className="register-form-input" name="email" type="email" placeholder="johndoe@gmail.com" value={email} onChange={e => handleEmail(e)}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input className="register-form-input" name="password" type="password" placeholder="*******" onChange={handlePassword}/>
                </div>
                <div className="register-button mx-auto">
                    <button className="btn" onClick={handleLogin}>
                        Log in 
                    </button>
                </div>
                <p className="text-center option">
                    Don't have an account?
                    <NavLink to="/register" className="ml-2">
                        Sign Up
                    </NavLink>
                </p>
            </form>
        </div>
    </main>
    )
}

export default withRouter(Login)
