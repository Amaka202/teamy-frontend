import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'


import React, { Component } from 'react'

export default class CommentPost extends Component {
    render() {
        const element = <FontAwesomeIcon icon={faEdit} />
        return (
            <div>
                <p>{element}</p>
            </div>
        )
    }
}