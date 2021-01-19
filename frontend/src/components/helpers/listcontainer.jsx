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
    if(props.type === 'group')
    return (
        <>
            <ListSubheader disableSticky>Active Groups</ListSubheader>
            <List style={{maxHeight: '70vh', overflow: 'auto'}} disablePadding >                
                <Groups groups={GroupData}/>
            </List>
        </>
    )
    else if(props.type === 'user')
    return (
        <>
            <ListSubheader disableSticky>Group Name</ListSubheader>
            <List style={{maxHeight: '70vh', overflow: 'auto'}} disablePadding >                
                <Users users={UserData}/>
            </List>
        </>
    )
    else
    return (
        <>
            <ListSubheader disableSticky>Access Code: kndndiiojj3323ccas</ListSubheader>
            <List style={{maxHeight: '70vh', overflow: 'auto'}} disablePadding >                
                <Notices notices={NoticeData}/>
            </List>
        </>
    )
}

export default ListContainer
