import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Navbar from '../helpers/navbar'
import ListContainer from '../helpers/listcontainer';
import Typography from '@material-ui/core/Typography'
import API from '../../api'

function GroupDetails(props) {

    // const [groupId, setGroupId] = useState()
    const [users, setUsers] = useState([])
    const [notices, setNotices] = useState([])

    useEffect(() => {

        load_data()

        async function load_data() {
            try {                
                const temp = await API.get('groups/getUsers', { groupId: props.match.params.groupId });
                const temp2 = await API.get('notices/getNotices', { groupId: props.match.params.groupId });

                setUsers([...users, ...temp.data.users])
                setNotices([...notices, ...temp2.data.notices])
            }
            catch (err) {
                alert(err.response.data.message)
            }
        }
    }, [])

    return (
        <>
            <Navbar />
            <Grid container>
                <Grid item md={5} xs={12} >
                    <div style={{padding: '20px'}}>
                        <ListContainer type='user' users={users}/>
                    </div>                    
                </Grid>
                <Grid item md={7} xs={12} >
                    <div style={{padding: '20px'}}>
                        <ListContainer type='notices' notices={notices} groupId={props.match.params.groupId}/>
                    </div>
                    
                </Grid>
            </Grid>
        </>
    )
}

export default GroupDetails
