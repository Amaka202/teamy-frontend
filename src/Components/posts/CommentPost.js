import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'

// const {id} = useParams();

export default class CommentPost extends Component {
    render() {
        const element = <FontAwesomeIcon icon={faComment} />
        return (
            <div>
                <p>{element}</p>
            </div>
        )
    }
}
