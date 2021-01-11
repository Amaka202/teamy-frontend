import React from 'react'

export default function LogOut(props) {
    return (
        <div>
            {window.localStorage.removeItem('token')}
            {props.history.push('/login')}
        </div>
    )
}
