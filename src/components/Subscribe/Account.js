import React from 'react'

import "../../assets/css/Login.css"
import "../../assets/css/ProfileAccount.css"
const Account = ({email, name, city, country, date}) => (
    <div className="profile-account">
        <div className="account-item my-4">
            <label htmlFor="name" className="account-label">Your Name</label>
            <input className="register-form-input" name="email" type="text" value={name} readOnly/>
        </div>
        <div className="account-item my-4">
            <label htmlFor="email" className="account-label">Your Email</label>
            <input className="register-form-input" name="email" type="email" value={email} readOnly/>
        </div>
        <div className="account-item my-4">
            <label htmlFor="location" className="account-label">Your Location</label>
            <input className="register-form-input" name="location" type="text" value={`${country} , ${city}`} readOnly/>
        </div>
    </div>

)


export default Account