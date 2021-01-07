import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'


import React, { Component } from 'react'

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
