import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import React, { Component } from 'react'

export default class DeletePost extends Component {
    render() {
        const element = <FontAwesomeIcon icon={faTrashAlt} />
        return (
            <div>
                <p>{element}</p>                
            </div>
        )
    }
}
