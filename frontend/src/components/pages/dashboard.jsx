import React, {useContext, useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import Navbar from '../helpers/navbar'
import JoinGroup from '../helpers/joingroup'
import CreateGroup from '../helpers/creategroup'
import ListContainer from '../helpers/listcontainer'
import Welcome from '../helpers/welcome'
import {AppContext} from '../../App'
import setAuthToken from '../../setAuthToken'
import { withRouter } from "react-router"
import { useHistory } from "react-router-dom";
import {ACTIONS} from '../../Actions'


function Dashboard() {
    const history = useHistory();
    const app = useContext(AppContext);

    useEffect(() => {
        // if(!app.state.isLoggedIn)
        //     history.push('/')

            setAuthToken(sessionStorage.getItem('jwtToken'))
    }, [])

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

export default withRouter(Dashboard)
