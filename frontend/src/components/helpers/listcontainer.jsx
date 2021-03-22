import React, { useState, useContext, useEffect } from 'react'
import Groups from './groups'
import Users from './users'
import Notices from './notices'
import List from '@material-ui/core/List'
import GroupData from '../data/groupsdata'
import UserData from '../data/usersdata'
import NoticeData from '../data/noticesdata'
import ListSubheader from '@material-ui/core/ListSubheader'
import { AppContext } from '../../App'
import API from '../../api'
import axios from 'axios';

function ListContainer(props) {
    const app = useContext(AppContext)

    const[groups, setGroups] = useState([])

    useEffect(async () => {
        try {
            const temp = await axios.get('http://localhost:5000/users/groups/', {
                headers: {
                    'auth-token': sessionStorage.getItem('jwtToken')
                }
            });
            
            setGroups([...groups, ...temp.data], () => console.log(groups))
        }
        catch (err) {
            alert(err.response.data.message)
        }
    }, groups)


    if(props.type === 'group') {
        return (
            <>
                <ListSubheader disableSticky>Active Groups</ListSubheader>
                <List style={{maxHeight: '70vh', overflow: 'auto'}} disablePadding >                
                    <Groups groups={groups}/>
                </List>
            </>
        )
    }
    
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
