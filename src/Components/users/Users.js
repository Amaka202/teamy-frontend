import React, { Component } from 'react'
import Header2 from '../header/Header2';
import {checkToken} from "../checkToken"
import "./users.css"

const api = 'https://teamy-api.herokuapp.com/api/v1/users';


export default class Users extends Component {
    constructor(props){
        super(props)
        this.state = {
            users: [],
            loading: true
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
                console.log(data);
                this.setState({
                    users: data.data,
                    loading: false
                })
            })
            .catch(err => err);
    }

    render() {
        console.log(this.state);
        if(this.state.loading){
            return <p className="loader"></p>
        }
        const user = this.state.users.map(val => {
            return (
                <div className="user" key={val.id}>
                    <div className="dp-div">
                        <img src={`https://res.cloudinary.com/amaka01/image/upload/v1609578087/cg3mtemxniugidu73ewn.jpg`} alt="dp"/>
                    </div>
                    <div className="biodata">
                        <p className="bio-name">{val.firstname} {val.lastname}</p>
                        <p className="bio-username">@{val.username}</p>
                        <p className="span-para">
                            <span>{val.gender}</span>
                            <span className="span-fullstop">.</span>
                            <span>{val.jobrole}</span>
                        </p>
                        <p className="bio-location">{val.location}</p>
                    </div>
                </div>
            )
        })
        return (
            <div className="members-container">
             <Header2 />
             <p id="users-heading">Team Members</p>
             <div className="users-container">
                 {user}
             </div>
            </div>
        )
    }
}


// function Users() {
//     return (
//         <div className="members-container">
//             <Header />
//             <p id="users-heading">Team Members</p>
//             <div className="users-container">
//                 <div className="user">
//                     <div className="dp-div">
//                         <img src={`https://res.cloudinary.com/amaka01/image/upload/v1609578087/cg3mtemxniugidu73ewn.jpg`} alt="dp"/>
//                     </div>
//                     <div className="biodata">
//                         <p className="bio-name">Amaka Umeh</p>
//                         <p className="bio-username">@ammy</p>
//                         <p className="span-para">
//                             <span>Female</span>
//                             <span className="span-fullstop">.</span>
//                             <span>Frontend developer</span>
//                         </p>
//                         <p className="bio-location">San Francisco</p>
//                     </div>
//                 </div>
//                 <div className="user">
//                     <div className="dp-div">
//                         <img src={`https://res.cloudinary.com/amaka01/image/upload/v1609578087/cg3mtemxniugidu73ewn.jpg`} alt="dp"/>
//                     </div>
//                     <div className="biodata">
//                         <p className="bio-name">Amaka Umeh</p>
//                         <p className="bio-username">@ammy</p>
//                         <p className="span-para">
//                             <span>Female</span>
//                             <span className="span-fullstop">.</span>
//                             <span>Frontend developer</span>
//                         </p>
//                         <p className="bio-location">San Francisco</p>
//                     </div>
//                 </div>
//                 <div className="user">
//                     <div className="dp-div">
//                         <img src={`https://res.cloudinary.com/amaka01/image/upload/v1609578087/cg3mtemxniugidu73ewn.jpg`} alt="dp"/>
//                     </div>
//                     <div className="biodata">
//                         <p className="bio-name">Amaka Umeh</p>
//                         <p className="bio-username">@ammy</p>
//                         <p className="span-para">
//                             <span>Female</span>
//                             <span className="span-fullstop">.</span>
//                             <span>Frontend developer</span>
//                         </p>
//                         <p className="bio-location">San Francisco</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Users;
