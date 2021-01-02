import React from 'react';
import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

export default function Logo() {
    const element = <FontAwesomeIcon icon={faUsers} />
    return (
        <div>
            <section class="logo-container">
                <p>{element}</p>
                <p>teamy</p>
            </section>
        </div>
    )
}
