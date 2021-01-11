import React, { Component } from 'react'
import '../postStyleFiles/commentpost.css'
import { withRouter } from 'react-router-dom'
import {checkToken} from '../../checkToken'
import dayjs from 'dayjs';

var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)


class CommentPost extends Component {
    constructor(props){
        super(props)
        this.state = {
            comment: "",
            showComment: ""
        }
    }

    componentDidMount(){
        let postId = this.props.match.params.id;
        const api = `https://teamy-api.herokuapp.com/api/v1/posts/${postId}/comment`;

        fetch(api, {
            method: "GET",
            mode: "cors",
            headers: {
                "content-type" : "application/json",
                Authorization: `Bearer ${checkToken()}`
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    showComment: data.data
                })
            // document.location.reload();
            })
            .catch(err => console.log(err));
    }

    handleChange = (e) => {
        this.setState({
            comment: e.target.value
        })
    }

    

    handleSubmit = (e) => {
        e.preventDefault();
        let postId = this.props.match.params.id;
        const api = `https://teamy-api.herokuapp.com/api/v1/posts/${postId}/comment`;
        const commentObj = {
            comment: this.state.comment
        }
        fetch(api, {
            method: "POST",
            mode: "cors",
            headers: {
                "content-type" : "application/json",
                Authorization: `Bearer ${checkToken()}`
            },
            body: JSON.stringify(commentObj)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            document.location.reload();
            })
            .catch(err => console.log(err));
    }
    render() {
        const comment = this.state.showComment && this.state.showComment.map(val => {
            return (
                <div className="show-comment-div" key={val.id}>
                    <div className="comm-img-div">
                        <img src={val.profile_img ? val.profile_img : `https://res.cloudinary.com/amaka01/image/upload/v1609578087/cg3mtemxniugidu73ewn.jpg`} alt="dp"/>
                    </div>
                    <div className="comm-div">
                        <p>{val.firstname} {val.lastname}  <span>{dayjs(val.createdat).fromNow()}</span>
                        </p>
                        <p>{val.comment}</p>
                    </div>
                </div>
            )
        })
        return (
            <div className="comment-container">
                <p>Comments</p>
                <div>
                    {comment}
                </div>
                <div className="post-comment-div">
                    <form>
                        <label>Post a Comment
                            <span className="required-star"> *</span>
                        </label>
                        <input type="text" name="comment" value={this.state.comment} onChange={this.handleChange} />
                        <div className="btn-div">
                            <button type="submit" className="btn" onClick={this.handleSubmit}>post</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(CommentPost);
