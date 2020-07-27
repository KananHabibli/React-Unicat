import React from 'react'

import '../../assets/css/News.css'

const News = props => {
    return (
        <div className="news">
            <div className="container">
                <div className="news-title">
                    <h2 className="text-center">The Best Tutors in Town
                    </h2>
                    <div className="news-text text-center">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu. Vestibulum feugiat, sapien ultrices fermentum congue, quam velit venenatis sem</p>
                    </div>
                </div>
                <div className="news-content">
                    <div className="row news_row">
                        <div className="col-lg-7">
                            <div className="card">
                                <img src="/images/news_1.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                <h5 className="card-title">
                                    <a href="#">Here’s What You Need to Know About Online Testing for the ACT and SAT</a>
                                </h5>
                                <div className="card-list">
                                    <ul>
                                        <li>
                                            <a href="#">Admin</a>
                                        </li>
                                        <li>
                                            <a href="#">November 11, 2017</a>
                                        </li>
                                    </ul>
                                </div>
                                <p className="card-text">Policy analysts generally agree on a need for reform, but not on which path policymakers should take. Can America learn anything from other nations...</p>
                                <div className="card-button">
                                    <a href="#">Read More</a>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="news-list">
                                <div className="news-item">
                                    <div className="news-item-title">
                                        <a href="#">Home-based business insurance issue (Spring 2017 - 2018)</a>
                                    </div>
                                    <div className="news-info-list">
                                        <ul>
                                            <li>
                                                <a href="#">Admin</a>
                                            </li>
                                            <li>
                                                <a href="#">November 11, 2017</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="news-item">
                                    <div className="news-item-title">
                                        <a href="#">2018 Fall Issue: Credit Card Comparison Site Survey (Summer 2018)</a>
                                    </div>
                                    <div className="news-info-list">
                                        <ul>
                                            <li>
                                                <a href="#">Admin</a>
                                            </li>
                                            <li>
                                                <a href="#">November 11, 2017</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="news-item">
                                    <div className="news-item-title">
                                        <a href="#">Cuentas de cheques gratuitas una encuesta de Consumer Action</a>
                                    </div>
                                    <div className="news-info-list">
                                        <ul>
                                            <li>
                                                <a href="#">Admin</a>
                                            </li>
                                            <li>
                                                <a href="#">November 11, 2017</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="news-item">
                                    <div className="news-item-title">
                                        <a href="#">Troubled borrowers have fewer repayment or forgiveness options</a>
                                    </div>
                                    <div className="news-info-list">
                                        <ul>
                                            <li>
                                                <a href="#">Admin</a>
                                            </li>
                                            <li>
                                                <a href="#">November 11, 2017</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News