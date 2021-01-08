import React, { Component } from 'react'
import '../postStyleFiles/commentpost.css'
import { withRouter } from 'react-router-dom'


class CommentPost extends Component {
    constructor(props){
        super(props)
        this.state = {
            comment: ""
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
        const api = `http://localhost:5001/${postId}/comment`;
        fetch(api, {
            method: "POST",
            headers: {
                "content-type" : "application/json",
            },
            body: {
                comment: this.state.comment
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => err);
    }
    render() {
        return (
            <div className="comment-container">
                <p>Comments</p>
                <div className="view-comment-div">
                    <div className="comm-img-div">
                        <img src={`https://res.cloudinary.com/amaka01/image/upload/v1609578087/cg3mtemxniugidu73ewn.jpg`} alt="dp"/>
                    </div>
                    <div>
                        <p>Umeh Nnenna</p>
                        <p>This is awesome Amaka</p>
                    </div>
                </div>
                <div className="view-comment-div">
                    <div className="comm-img-div">
                        <img src={`https://res.cloudinary.com/amaka01/image/upload/v1609578087/cg3mtemxniugidu73ewn.jpg`} alt="dp"/>
                    </div>
                    <div>
                        <p>Umeh Nnenna</p>
                        <p>This is awesome Amaka</p>
                    </div>
                </div>
                <div className="view-comment-div">
                    <div className="comm-img-div">
                        <img src={`https://res.cloudinary.com/amaka01/image/upload/v1609578087/cg3mtemxniugidu73ewn.jpg`} alt="dp"/>
                    </div>
                    <div>
                        <p>Umeh Nnenna</p>
                        <p>This is awesome Amaka</p>
                    </div>
                </div>
                <div className="view-comment-div">
                    <div className="comm-img-div">
                        <img src={`https://res.cloudinary.com/amaka01/image/upload/v1609578087/cg3mtemxniugidu73ewn.jpg`} alt="dp"/>
                    </div>
                    <div>
                        <p>Umeh Nnenna</p>
                        <p>This is awesome Amaka heyhju jshjs jcsjcjs jsjcjsjcs kjsjcjsjc kjsjcjsjcj jsjjcjsjc jsjcjsjc jsjcjscs jsjcscjs jsjcjsjcj jsjcjsjcs jcsjcjsc jsjcscs jjvifie</p>
                    </div>
                </div>
                <div className="view-comment-div">
                    <div className="comm-img-div">
                        <img src={`https://res.cloudinary.com/amaka01/image/upload/v1609578087/cg3mtemxniugidu73ewn.jpg`} alt="dp"/>
                    </div>
                    <div>
                        <p>Umeh Nnenna</p>
                        <p>This is awesome Amaka</p>
                    </div>
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
