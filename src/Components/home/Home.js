import React from 'react'
import Header from '../header/Header'
import homeImg from "./homeImg/home.png"
import "./home.css"

function Home() {
    return (
        <div>
            <Header />
            <div className="home-body">
                <div className="home-text">
                    <h1>Team Management</h1>
                    <h1>software that</h1>
                    <h1>works for you.</h1>
                    <p>Communicate on the go with your team members</p>
                    <p>Give updates, hit dealines.</p>
                    <p>Maintain privacy, signup only your team members.</p>
                </div>
                <div className="home-image">
                    <img src={homeImg} alt="teamy-presentation"/>
                </div>
            </div>
        </div>
    )
}

export default Home
