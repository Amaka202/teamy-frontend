import { withRouter } from 'react-router-dom'
let postId = this.props.match.params.id;

const api = `https://teamy-api.herokuapp.com/api/v1/posts/${postId}/comment`;

const postComment = async () => {
    await fetch()
}

export default withRouter(postComment);
