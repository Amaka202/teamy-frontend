import React, { Component} from 'react';
import Header from '../header/Header';
import { Link } from "react-router-dom";
import {checkToken} from "../checkToken"
import CommentPost from './CommentPost';
import EditPost from './EditPost';
import DeletePost from './DeletePost';
import gifIcon from "./postImgs/gifIcon.png";
import './posts.css';

const api = 'https://teamy-api.herokuapp.com/api/v1/posts';

const postData = [
    {
        profile_img: "https://robohash.org/1",
        firstname: "amaka",
        lastname:"umeh",
        title: "update",
        article:"amazingHey you are"
    },
    {
        profile_img: "https://robohash.org/2",
        firstname: "amaka",
        lastname:"umeh",
        title: "update",
        article:"amazingHey you are"
    },
    {
        profile_img: "https://robohash.org/3",
        firstname: "amaka",
        lastname:"umeh",
        title: "update",
        article:"amazingHey you are"
    },
    {
        profile_img: "https://robohash.org/3",
        firstname: "amaka",
        lastname:"umeh",
        title: "update",
        article:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas"
    },
    {
        profile_img: "https://robohash.org/4",
        firstname: "amaka",
        lastname:"umeh",
        title: "update",
        article:"amazingHey you are"
    },
    {
        profile_img: "https://robohash.org/5",
        firstname: "amaka",
        lastname:"umeh",
        title: "update",
        article:"amazingHey you are"
    },
    {
        profile_img: "https://robohash.org/6",
        firstname: "amaka",
        lastname:"umeh",
        title: "update",
        article:"amazingHey you are"
    },
    {
        profile_img: "https://robohash.org/7",
        firstname: "amaka",
        lastname:"umeh",
        title: "update",
        article:"amazingHey you are"
    }
    
]

class Posts extends Component {
    constructor(props){
        super(props)
        this.state ={
            posts: [],
            loaded: ''
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
                    posts: data.data
                })
            })
            .catch(err => err);
    }
    
    render() {

    const post = postData.map((val, index) => {

        return (<div className="post" key={index}>
        <div className="pic-name-div">
            <div className="img=flex">
                <div className="post-img-div">
                    <img src={`https://res.cloudinary.com/amaka01/image/upload/v1609578087/cg3mtemxniugidu73ewn.jpg`} alt="dp"/>
                </div>
            </div>
            <div className="name-article-div">
                <div>
                    <div className="name-div">
                        <p>{val.firstname.toUpperCase()} {val.lastname.toUpperCase()}
                            <span>8:30pm</span>
                        </p>
                    </div>
                    <div className="article">
                        <h3>{val.title}</h3>
                        <p>{val.article}</p>
                    </div>
                </div>
                <div className="del-comm-div">
                    <CommentPost />
                    <EditPost />
                    <DeletePost />                          
                </div>
            </div>
        </div>  
    </div>)
    })
    return (
        <div>
            <Header />
            <div className="make-post-div">
                <p id="make-post">
                    <Link to='/write-post' style={{ textDecoration: 'none' }}>
                     Welcome Amaka, any updates?
                    </Link>
                </p>
                <p className="gif-div">
                    <img src={gifIcon} alt="gif icon" />
                </p>
            </div>
            <div className="bg-img">
                <div className="bg-color">
                    <div className="post-container">
                        {post} 
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Posts;
