import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from "react-router";

import '../../assets/css/Login.css'
import app from '../../firebase'
import Required from './Required';
import ValidEmail from './ValidEmail';
import fetchData from '../../utils/fetchData'

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
  const [password, setPassword] = useState('')
  const [countries, setCountries] = useState([])
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')

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
    setPassword(e.target.value)
  }

  const handleSelect = (e) => {
    let arr = e.target.value.split('/')
    console.log(arr)
    setCity(arr[1])
    setCountry(arr[0])
  }

  const handleCity = (e) => {
    if(e.target){
      setCity(e.target.value)
    } else {
      setCity(e)
    }
  }

  const handleSignUp = async event => {
    event.preventDefault();
    try {
      console.log(email)
      console.log(password)
      await app
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(result => {
          return result.user.updateProfile({
            displayName: name,
            country,
            city
          })
        });
      history.push("/profile/info");
    } catch (error) {
      alert(error);
    }
  };


  useEffect(() => {
    (async function() {
      const data = await fetchData('countries')
      console.log(data)
      setCountries(data)
    })()
  }, [])

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
                  <label htmlFor="country">Country</label>
                  <select onChange={handleSelect} className="register-form-select">
                    {countries.map(country => (
                      <option key={country.id} value={`${country.name}/${country.capital}`}>{country.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="city">City</label>
                  <input className="register-form-input" name="city" type="text" value={city} onChange={e => handleCity(e)}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input className="register-form-input" name="password" type="password" placeholder="*******" onChange={handlePassword}/>
                </div>
                <div>
                    <label htmlFor="passwordConfirm">Confirm Password</label>
                    <input className="register-form-input" type="password"  placeholder="*******" />
                </div>
                <div className="register-button mx-auto">
                  <button onClick={handleSignUp} type="submit" className="btn">
                    Register
                  </button>
                </div>
                <p className="text-center option">
                  Already have an account?
                  <NavLink to="/login" className="ml-2">
                      Log in
                  </NavLink>
                </p>
            </form>
        </div>
    </main>
    )
}

export default withRouter(Register)
