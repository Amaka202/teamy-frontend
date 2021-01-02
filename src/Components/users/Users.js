import React from 'react'
import Header from '../header/Header';
import "./users.css"

function Users() {
    return (
        <div className="members-container">
            <Header />
            <p id="users-heading">Team Members</p>
            <div className="users-container">
                <div className="user">
                    <div className="dp-div">
                        <img src={`https://res.cloudinary.com/amaka01/image/upload/v1609578087/cg3mtemxniugidu73ewn.jpg`} alt="dp"/>
                    </div>
                    <div className="biodata">
                        <p className="bio-name">Amaka Umeh</p>
                        <p className="bio-username">@ammy</p>
                        <p className="span-para">
                            <span>Female</span>
                            <span className="span-fullstop">.</span>
                            <span>Frontend developer</span>
                        </p>
                        <p className="bio-location">San Francisco</p>
                    </div>
                </div>
                <div className="user">
                    <div className="dp-div">
                        <img src={`https://res.cloudinary.com/amaka01/image/upload/v1609578087/cg3mtemxniugidu73ewn.jpg`} alt="dp"/>
                    </div>
                    <div className="biodata">
                        <p className="bio-name">Amaka Umeh</p>
                        <p className="bio-username">@ammy</p>
                        <p className="span-para">
                            <span>Female</span>
                            <span className="span-fullstop">.</span>
                            <span>Frontend developer</span>
                        </p>
                        <p className="bio-location">San Francisco</p>
                    </div>
                </div>
                <div className="user">
                    <div className="dp-div">
                        <img src={`https://res.cloudinary.com/amaka01/image/upload/v1609578087/cg3mtemxniugidu73ewn.jpg`} alt="dp"/>
                    </div>
                    <div className="biodata">
                        <p className="bio-name">Amaka Umeh</p>
                        <p className="bio-username">@ammy</p>
                        <p className="span-para">
                            <span>Female</span>
                            <span className="span-fullstop">.</span>
                            <span>Frontend developer</span>
                        </p>
                        <p className="bio-location">San Francisco</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users;
