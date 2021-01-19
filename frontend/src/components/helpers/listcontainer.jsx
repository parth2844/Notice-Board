import React from 'react'
import Groups from './groups'
import List from '@material-ui/core/List'
import GroupData from '../data/groupsdata'
import ListSubheader from '@material-ui/core/ListSubheader'

function ListContainer() {
    return (
        <>
            <ListSubheader disableSticky>Active Groups</ListSubheader>
            <List style={{maxHeight: '70vh', overflow: 'auto'}} disablePadding >                
                <Groups groups={GroupData}/>
            </List>
        </>
    )
}

export default ListContainer
