import React, { useContext } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'
import { withRouter } from "react-router"
import { useHistory } from "react-router-dom";
import {AppContext} from '../../App'
import { ACTIONS } from '../../Actions'

function Welcome(props) {
    const app = useContext(AppContext)
    const history = useHistory()
    return (
        <>
        <div style={{display: 'flex'}}>
        <Typography align='left' variant='h6'>
            Hi {props.name},
        </Typography>

        
        <Button style={{backgroundColor: '#4654a3', color: 'white', marginLeft: 'auto'}} 
        onClick={() => {
                sessionStorage.removeItem('jwtToken')
                sessionStorage.removeItem('user')
                app.dispatch({ type: ACTIONS.REMOVE_USER })
                history.push('/')
            }
        }>
            <PowerSettingsNewIcon /> Logout
        </Button>
        
        </div>
        </>
    )
}

export default withRouter(Welcome)
