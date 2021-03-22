import React, {useContext} from 'react'
import Grid from '@material-ui/core/Grid';
import Navbar from '../helpers/navbar'
import JoinGroup from '../helpers/joingroup'
import CreateGroup from '../helpers/creategroup'
import ListContainer from '../helpers/listcontainer'
import Welcome from '../helpers/welcome'
import {AppContext} from '../../App'


function Dashboard() {
    const app = useContext(AppContext);

    return (
        <>
            <Navbar />
            <Grid container>
                <Grid item md={6} xs={12} >
                    <div style={{padding: '20px'}}>
                        <ListContainer type='group'/>
                    </div>                    
                </Grid>
                <Grid item md={6} xs={12} >
                    <div style={{padding: '20px'}}>
                        <Welcome />
                    </div>
                    <div style={{padding: '20px'}}>
                        <JoinGroup />
                    </div>
                    <div style={{padding: '20px'}}>
                        <CreateGroup />
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default Dashboard
