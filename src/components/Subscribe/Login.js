import React, { useContext, useState } from 'react';
import { withRouter, Redirect } from "react-router";
import { NavLink } from 'react-router-dom';
import { isEmail } from "validator"

import '../../assets/css/Login.css';
import app from '../../firebase'
import { AuthContext } from '../../context/Auth'

import Warning from './Warning'

const Login = ({ history }) => {

    const { dispatch } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')

    const [error, setError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const handleEmail = (e) => {
        setEmailError('')
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPasswordError('')
        setpassword(e.target.value)
    }

    const handleLogin = async event => {
        event.preventDefault();

        if(!email){
            setEmailError(<Warning message="This field is required!" />)
            setError(error => [...error, 'email'])
        } else if(!isEmail(email)){
            setEmailError(<Warning message="This is not a valid email." />)
            setError(error => [...error, 'emailValidation'])
        }

        if(!password){
            setPasswordError(<Warning message="This field is required!" />)
            setError(error => [...error, 'password'])
        }
        if(!error){
            return app
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(res => {
                    dispatch({
                        type: "LOGIN",
                        payload: {
                            user: res.user
                        }
                    })
                    history.push("/profile/info");
                })
                .catch(error => {
                    console.log('bp 5')
                    console.log(error)
                })
                
        }
    }
    const { currentUser } = useContext(AuthContext)

    if(currentUser) {
        return <Redirect to='/' />
    } else {
        console.log('lol')
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
                    {emailError}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input className="register-form-input" name="password" type="password" placeholder="*******" onChange={handlePassword}/>
                    {passwordError}
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
