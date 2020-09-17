import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from "react-router";
import { isEmail } from "validator"

import '../../assets/css/Login.css'
import app from '../../firebase'
import fetchData from '../../utils/fetchData'

import ValidEmail from './ValidEmail'
import Required from './Required'
import MatchPassword from './MatchPassword'


const Register = ({ history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [countries, setCountries] = useState([])
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')

  const [error, setError] = useState('')
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [matchError, setMatchError] = useState('')

  const handleEmail = (e) => {
    setEmailError('')
    setEmail(e.target.value)
  }

  const handleName = (e) => {
    setNameError('')
    setName(e.target.value)
  }

  const handlePassword = (e) => {
    setPasswordError('')
    setPassword(e.target.value)
  }

  const handleConfirmPassword = (e) => {
    setconfirmPassword(e.target.value)
  }

  const handleSelect = (e) => {
    let arr = e.target.value.split('/')

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

    if(!name){
      setNameError(<Required />)
      setError(error => [...error, 'name'])
    }

    if(!email){
      setEmailError(<Required />)
      setError(error => [...error, 'email'])
    } else if(!isEmail(email)){
      setEmailError(<ValidEmail />)
      setError(error => [...error, 'emailValidation'])
    }

    if(!password){
      setPasswordError(<Required />)
      setError(error => [...error, 'password'])
    }

    if(password !== confirmPassword){
      setMatchError(<MatchPassword />)
      setError(error => [...error, 'matchError'])
    }

    if(!error){
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(result => {
            return result.user.updateProfile({
              displayName: `${name}/${country}/${city}`
            })
          });
        history.push("/login");
      } catch (error) {
        console.log(error)
      }
    }
  };



  useEffect(() => {
    (async function() {
      const data = await fetchData('countries')
      setCountries(data)
    })()
  }, [])

    return (
      <main className="main-login">

        <div className="register-form">
            <div className="register-form-title">
                Register Form
            </div>
            <form onSubmit={handleSignUp}>
                <div>
                    <label htmlFor="name">Full Name</label>
                    <input className="register-form-input" name="name" type="text" placeholder="John Doe" value={name} onChange={e => handleName(e)}  />
                    {nameError}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input className="register-form-input" name="email" type="email" placeholder="johndoe@gmail.com" value={email} onChange={e => handleEmail(e)}  />
                    {emailError}
                </div>
                <div>
                  <label htmlFor="country">Country</label>
                  <select onChange={handleSelect} className="register-form-select">
                    <option>Choose your country</option>
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
                    {passwordError}
                    {matchError}
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input className="register-form-input" type="password"  placeholder="*******" onChange={handleConfirmPassword} />
                    {matchError}
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
