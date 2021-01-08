import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {checkToken} from "../../checkToken"
import '../postStyleFiles/post.css'
import CommentPost from './CommentPost';

const api = 'https://teamy-api.herokuapp.com/api/v1/posts';
// eslint-disable-next-line react-hooks/rules-of-hooks

class Post extends Component {
    constructor(props){
        super(props)
        this.state = {
            post: ""
        }
    }

    componentDidMount(){
        let postId = this.props.match.params.id;
        console.log(postId);
        fetch(api, {
            method: "GET",
            headers: {
                "content-type" : "application/json",
                Authorization: `Bearer ${checkToken()}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.data);
                let post = data.data.filter(val => val.id === postId)
                this.setState({
                    post: post[0]
                })
            })
            .catch(err => err);
    }

    render() {
        const individualPost = this.state.post;
        const { firstname, title, article, profile_img } = individualPost
        return (
            <div>
                <div className="postid-container">
                    <h1>{`${firstname}'s post`}</h1>
                    <div className="flexed-div">
                        <div className="individual-post-dp">
                            <img src={ profile_img ? profile_img : `https://res.cloudinary.com/amaka01/image/upload/v1609578087/cg3mtemxniugidu73ewn.jpg`} alt="dp"/>
                        </div>
                        <div className="individual-post-div">
                            <p>{title}</p>
                            <p>{article}</p>
                        </div>
                    </div>
                </div>
                <CommentPost />
            </div>
        )
    }
}

export default withRouter(Post);

