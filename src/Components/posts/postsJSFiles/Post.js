import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {checkToken} from "../../checkToken"

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
        let postId = this.props.match.params.id.split('').splice(1).join('');
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
        return (
            <div className="postid-container">
                <h1>{`${individualPost.firstname}'s post`}</h1>
                <div className="individual-post-dp">
                    <img src={`https://res.cloudinary.com/amaka01/image/upload/v1609578087/cg3mtemxniugidu73ewn.jpg`} alt="dp"/>
                </div>
                <div className="individual-post-div">
                    <p>{individualPost.title}</p>
                    <p>{individualPost.article}</p>
                </div>
            </div>
        )
    }
}

export default withRouter(Post);

