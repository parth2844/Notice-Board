import React from 'react'
import Grid from '@material-ui/core/Grid';
import Navbar from '../helpers/navbar'
import JoinGroup from '../helpers/joingroup'
import CreateGroup from '../helpers/creategroup'

function Dashboard() {
    return (
        <>
            <Navbar />
            <Grid container>
                <Grid item md={6} xs={12} >
                    get all user's groups
                </Grid>
                <Grid item md={6} xs={12} >
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
