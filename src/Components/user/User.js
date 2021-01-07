import React from 'react'
import { Link } from "react-router-dom";
import {checkToken} from "../checkToken";
import Header from "../header/Header";
import UploadDp from './UploadDp';
import './user.css'
const api = 'https://teamy-api.herokuapp.com/api/v1/user';

export default class User extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            user: []
        }
    }

    componentDidMount(){
        fetch(api, {
            method: "GET",
            headers: {
                "content-type" : "application/json",
                Authorization: `Bearer ${checkToken()}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.data[0]);
                this.setState({
                    user: data.data[0]
                })
            })
            .catch(err => err);  

    }

    render() {
        console.log(this.state.user.email);
        const {email, firstname, lastname, gender, profile_img, jobrole, location} = this.state.user;
        return (
            <div>
                <Header />
                <div className="user-container">
                     <div className="userDp-div">
                        <img src={profile_img ? profile_img : `https://res.cloudinary.com/amaka01/image/upload/v1609578087/cg3mtemxniugidu73ewn.jpg`} alt="dp"/>
                        {!profile_img && 
                        <p>
                             <p>Upload a profile Image</p> <br />
                             <UploadDp />
                           </p>}
                     </div>
                     <div className="userName-div">
                         <p>{firstname} {lastname}</p>
                     </div>
                     <div className="email-div">
                         <p>{email}</p>
                     </div>
                     <div className="job-div">
                        <span>{jobrole}</span>
                        <span>||</span>
                        <span>{gender}</span>
                     </div>
                     <div className="location-div">
                         <p>{location}</p>
                     </div>   
                </div>
            </div>
        )
    }
}


