import React, { Component} from 'react';
import dayjs from 'dayjs';
import Header2 from '../../header/Header2';
import { Link } from "react-router-dom";
import {checkToken} from "../../checkToken"
import EditPost from './EditPost';
import DeletePost from './DeletePost';
import '../postStyleFiles/posts.css';
import gifIcon from '../postImgs/gifIcon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

const api = 'https://teamy-api.herokuapp.com/api/v1/posts';

class Posts extends Component {
    constructor(props){
        super(props)
        this.state ={
            posts: [],
            loading: false,
            commentsNumber: 0
        }
    }

    componentDidMount(){
        this.setState({
            loading: true
        })
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
                    posts: data.data,
                    loading: false
                })
            })
            .catch(err => err);
    }
    
    render() {
    const element = <FontAwesomeIcon icon={faComment} />   
    const post = this.state.posts.map((val, index) => {

        return (<div className="post" key={index}>
        <div className="pic-name-div">
            <div className="img=flex">
                <div className="post-img-div">
                    <img src={val.profile_img ? val.profile_img : `https://res.cloudinary.com/amaka01/image/upload/v1609578087/cg3mtemxniugidu73ewn.jpg`} alt="dp"/>
                </div>
            </div>
            <div className="name-article-div">
                <div>
                    <div className="name-div">
                        <p>{val.firstname.toUpperCase()} {val.lastname.toUpperCase()}
                            <span>{dayjs(val.createdat).fromNow()}</span>
                        </p>
                    </div>
                    <div className="article">
                        <Link to={`/posts/${val.id}`} style={{ textDecoration: 'none' }}>
                            <h3>{val.title}</h3>
                            <p>{val.article}</p>
                        </Link>
                    </div>
                </div>
                <div className="del-comm-div">
                    <Link to={`/posts/${val.id}`} style={{ textDecoration: 'none' }} >
                        <p>{element}
                            {/* <sup>{this.state.commentsNumber}</sup> */}
                        </p>
                    </Link>
                    <EditPost />
                    <DeletePost />                          
                </div>
            </div>
        </div>  
    </div>)
    })
    return (
        <div>
            <Header2 />
            <div className="make-post-div">
                <p id="make-post">
                    <Link to='/write-post' style={{ textDecoration: 'none' }} className="link-class">
                        Welcome, any updates?
                    </Link>
                </p>
                <p className="gif-div">
                    <img src={gifIcon} alt="gif icon" />
                </p>
            </div>
            <div className="bg-img">
                <div className="bg-color">
                    <div className="post-container">
                        {this.state.loading ? <p className="loader"></p> : post}
                        {/* {post}  */}
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Posts;
