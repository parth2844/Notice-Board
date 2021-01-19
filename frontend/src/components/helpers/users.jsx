import React from 'react'
import User from './user'

function Users(props) {
    return (
        <div>
            {props.users.map((user, index) =>
                <User userName={user.name} key={index}></User>
            )} 
        </div>
    )
}

export default Users
