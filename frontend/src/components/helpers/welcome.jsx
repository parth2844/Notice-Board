import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'

function Welcome() {
    return (
        <>
        <div style={{display: 'flex'}}>
        <Typography align='left' variant='h6'>
            Hi Parth,
        </Typography>

        
        <Button style={{backgroundColor: '#4654a3', color: 'white', marginLeft: 'auto'}} >
            <PowerSettingsNewIcon /> Logout
        </Button>
        
        </div>
        </>
    )
}

export default Welcome
