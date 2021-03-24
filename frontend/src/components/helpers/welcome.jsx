import React, { useContext } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'
import {AppContext} from '../../App'

function Welcome() {
    // const app = useContext(AppContext)
    // const name = app.state.user.name
    return (
        <>
        <div style={{display: 'flex'}}>
        <Typography align='left' variant='h6'>
            Hi ,
        </Typography>

        
        <Button style={{backgroundColor: '#4654a3', color: 'white', marginLeft: 'auto'}} >
            <PowerSettingsNewIcon /> Logout
        </Button>
        
        </div>
        </>
    )
}

export default Welcome
