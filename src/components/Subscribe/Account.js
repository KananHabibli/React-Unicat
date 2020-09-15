import React from 'react'

import "../../assets/css/Login.css"
import "../../assets/css/ProfileAccount.css"
const Account = ({email, name, date}) => {
    console.log(date)
    return (
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
                <label htmlFor="date" className="account-label">Creation Date</label>
                <input className="register-form-input" name="date" type="text" value={date} readOnly/>
            </div>
        </div>

    )
}


export default Account