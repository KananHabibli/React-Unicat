import React, { useContext } from 'react'
import app from '../../firebase'
import { AuthContext } from '../../context/Auth'
import {  withRouter } from "react-router";

const Signout = ({ history }) => {
    const { dispatch } = useContext(AuthContext)
    app.auth().signOut().then(res => {
        dispatch({
            type: "LOGOUT"
        })
        window.location.reload()
        history.push('/')
    })
    .catch(e => console.log(e))
    return (
        <></>
    )
}

export default withRouter(Signout)