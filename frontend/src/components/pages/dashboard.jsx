import React, { useContext, useEffect, useState } from 'react'
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
import API from '../../api'

function Dashboard() {
    const history = useHistory();
    const app = useContext(AppContext);
    const user = JSON.parse(sessionStorage.getItem('user'))

    const[groups, setGroups] = useState([])

    useEffect(() => {
        
        const token = sessionStorage.getItem('jwtToken')
        
        if(!app.state.isLoggedIn) {
            if(!token) 
                history.push('/')
            
            app.dispatch({ type: ACTIONS.SET_USER, payload: { user: user } })
            setAuthToken(token)           
                
        }
           
        load_data()

        async function load_data() {
            try {
                const temp = await API.get('users/groups/');
                
                setGroups([...groups, ...temp.data])
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
                <Grid item md={6} xs={12} >
                    <div style={{padding: '20px'}}>
                        <ListContainer type='group' groups={groups}/>
                    </div>                    
                </Grid>
                <Grid item md={6} xs={12} >
                    <div style={{padding: '20px'}}>
                        <Welcome name={user.name}/>
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
