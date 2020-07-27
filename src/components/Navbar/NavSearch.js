import React from 'react'

import '../../assets/css/NavSearch.css'

const NavSearch = props => {
    return (
        <div className="search-box">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="d-flex flex-row align-items-center justify-content-end mt-3">
                            <form action="">
                                <input type="text" placeholder="Search" /><button><i className="fas fa-search" ></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavSearch