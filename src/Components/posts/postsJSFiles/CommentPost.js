import React, { Component } from 'react'
import '../postStyleFiles/commentpost.css'
import { withRouter } from 'react-router-dom'
import {checkToken} from '../../checkToken'


class CommentPost extends Component {
    constructor(props){
        super(props)
        this.state = {
            comment: "",
            showComment: ""
        }
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
                this.setState({
                    showComment: data
                })
            })
            .catch(err => console.log(err));
    }
    render() {
        console.log(this.state.showComment);
        return (
            <div className="comment-container">
                <p>Comments</p>
                {/* {comment} */}
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
