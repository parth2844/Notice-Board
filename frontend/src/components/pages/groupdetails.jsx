import React from 'react'
import Grid from '@material-ui/core/Grid';
import Navbar from '../helpers/navbar'
import ListContainer from '../helpers/listcontainer';
import Typography from '@material-ui/core/Typography'

function GroupDetails() {
    return (
        <>
            <Navbar />
            <Grid container>
                <Grid item md={5} xs={12} >
                    <div style={{padding: '20px'}}>
                        <ListContainer type='user' />
                    </div>                    
                </Grid>
                <Grid item md={7} xs={12} >
                    <div style={{padding: '20px'}}>
                        <ListContainer type='notices' />
                    </div>
                    
                </Grid>
            </Grid>
        </>
    )
}

export default GroupDetails
