import React, { useState, } from 'react'
import { Redirect } from 'react-router-dom';

import '../../assets/css/NavSearch.css'

const NavSearch = ({ displayStyle }) => {

    const [input, setInput] = useState('')
    const [toCourse, setToCourse] = useState(false)

    const onSubmit = () => {
        setToCourse(true)
    }

    const onChange = event => {
        setInput(event.target.value)
    }


    if(toCourse){
        return (<Redirect to={{pathname: '/courses', state : {query: input}}} />)
    } else {
        return (
            <div className={`search-box ${displayStyle}`}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="d-flex flex-row align-items-center justify-content-end mt-3">
                                <form onSubmit={onSubmit}>
                                    <input type="text" placeholder="Search" onChange={onChange}/>
                                    <button type="submit"><i className="fas fa-search" ></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavSearch