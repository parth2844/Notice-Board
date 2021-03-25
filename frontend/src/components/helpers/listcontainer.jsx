import React from 'react'
import Groups from './groups'
import Users from './users'
import Notices from './notices'
import List from '@material-ui/core/List'
import GroupData from '../data/groupsdata'
import UserData from '../data/usersdata'
import NoticeData from '../data/noticesdata'
import ListSubheader from '@material-ui/core/ListSubheader'

function ListContainer(props) {

    if(props.type === 'group') {
        return (
            <>
                <ListSubheader disableSticky>Active Groups</ListSubheader>
                <List style={{maxHeight: '70vh', overflow: 'auto'}} disablePadding >                
                    <Groups groups={props.groups}/>
                </List>
            </>
        )
    }
    
    else if(props.type === 'user')
    return (
        <>
            <ListSubheader disableSticky>Group Name</ListSubheader>
            <List style={{maxHeight: '70vh', overflow: 'auto'}} disablePadding >                
                <Users users={props.users}/>
            </List>
        </>
    )
    else
    return (
        <>
            <ListSubheader disableSticky>Access Code: {props.groupId}</ListSubheader>
            <List style={{maxHeight: '70vh', overflow: 'auto'}} disablePadding >                
                <Notices notices={props.notices}/>
            </List>
        </>
    )
}

export default ListContainer
