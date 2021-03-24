import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

function Navbar() {
    return (
        
        <AppBar position='static'>
            <ToolBar>
                <Typography style={{width: '100%'}} variant='h4' align='center'>
                    <Link href='/dashboard' underline='none' variant='inherit' color='inherit'>
                        Notice Board
                    </Link>
                </Typography>
            </ToolBar>
        </AppBar>
        
    )
}

export default Navbar
