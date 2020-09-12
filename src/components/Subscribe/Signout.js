import React from 'react'
import app from '../../firebase'
import { Redirect } from "react-router";

const Signout = () => {
    app.auth().signOut()
    return (
        <Redirect to="/" />
    )
}

export default Signout