import React from 'react'
import Group from './group'

function Groups(props) {
    return (
        <div>
            {props.groups.map((group, index) =>
                <Group groupName={group.name} userCount={group.users.length} key={index}></Group>
            )} 
        </div>
    )
}

export default Groups
