import React, { useState, useEffect} from 'react'
import { useParams } from "react-router-dom"

import '../../assets/css/SingleCourse.css'
import fetchData from '../../utils/fetchData'


const SingleCourse = () => {

    let { id } = useParams()
    let [course, setCourse ] = useState({})

    useEffect(() => {
        (async function() {
            const data = await fetchData(`courses/${id}`)
            setCourse(data)
        })()
    }, [])

    return (
        <div className="container">
            <div className="singleCourse">
                <div className="media">
                    <img src="/images/profilepicture.png" className="mr-3" alt="Profile"  width="50"/>
                    <div className="media-body">
                    <h5 className="mt-0">{course.tutor}</h5>
                        Mar 18, 2019 * <span className="badge badge-pill badge-info">Rating: {course.rating}</span> * <i className="fas fa-graduation-cap"></i> {course.students} students
                    </div>
                </div>
                <div className="course-image">
                    <img src={course.src} alt={course.alt}  width="400"/>
                </div>
                <div className="course-title">
                    <i className="fas fa-book-open mr-2"></i>{course.course}
                </div>
                <div className="course-body">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
                </div>
            </div>
        </div>
    )
}

export default SingleCourse