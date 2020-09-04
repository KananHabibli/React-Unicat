import React, { useState, useEffect } from 'react'


import fetchData from '../utils/fetchData'
import Context from './Context'
const Provider = ({ children }) => {
    const [courses, updateCourses] = useState([])

    useEffect(() => {
        (async function() {
            const data = await fetchData('courses?_start=0&_end=3')
            data.map(elem => {
                updateCourses(courses => [...courses, elem])
            })
        })()
        console.log(courses)
    }, [])

    return (
        <Context.Provider value={{data: courses}}>
            {children}
        </Context.Provider>
    )
}

export default Provider;