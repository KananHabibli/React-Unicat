import React, { useState, useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from "react-router";

import '../../assets/css/Login.css'
import app from '../../firebase'
import Required from './Required';
import ValidEmail from './ValidEmail';


const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          The username must be between 3 and 20 characters.
        </div>
      );
    }
};
  
const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
      return (
        <div className="alert alert-danger" role="alert">
          The password must be between 6 and 40 characters.
        </div>
      );
    }
};

const ConfirmPassword = (value) => {
    if (value.length < 6 || value.length > 40) {
      return (
        <div className="alert alert-danger" role="alert">
          The password must be between 6 and 40 characters.
        </div>
      );
    }
};


const Register = ({ history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')

  const handleEmail = (e) => {
    console.log(e.target.value)
    setEmail(e.target.value)
  }

  const handleName = (e) => {
    console.log(e.target.value)
    setName(e.target.value)
  }

  const handlePassword = (e) => {
    console.log(e.target.value)
    setpassword(e.target.value)
  }

  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    try {
      console.log(email)
      console.log(password)
      await app
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(result => {
          return result.user.updateProfile({
            displayName: name
          })
        });
      history.push("/profile");
    } catch (error) {
      alert(error);
    }
  });

    return (
      <main className="main-login">
      <div className="register-background"></div>

      <div className="register-form">
          <div className="register-form-title">
              Register Form
          </div>
          <form onSubmit={handleSignUp}>
              <div>
                  <label htmlFor="name">Full Name</label>
                  <input className="register-form-input" name="name" type="text" placeholder="John Doe" value={name} onChange={e => handleName(e)}  />
              </div>
              <div>
                  <label htmlFor="email">Email</label>
                  <input className="register-form-input" name="email" type="email" placeholder="johndoe@gmail.com" value={email} onChange={e => handleEmail(e)}  />
              </div>
              <div>
                  <label htmlFor="password">Password</label>
                  <input className="register-form-input" name="password" type="password" placeholder="*******" onChange={handlePassword}/>
              </div>
              <div>
                  <label htmlFor="passwordConfirm">Confirm Password</label>
                  <input className="register-form-input" type="password"  placeholder="*******" />
              </div>
              <div className="d-flex jsutify-content-start align-items-center">
                  <div className="register-button mx-auto">
                    <button onClick={handleSignUp} type="submit" className="btn">
                      Register
                    </button>
                  </div>
                  <NavLink to="/login" className="register-button mx-auto">
                      <button className="btn">
                          Log in <i className="fas fa-arrow-right ml-4"></i>
                      </button>
                  </NavLink>
              </div>
          </form>
      </div>
  </main>
    )
}

export default withRouter(Register)
