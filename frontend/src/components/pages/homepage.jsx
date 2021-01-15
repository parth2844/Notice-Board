import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import HelpIcon from '@material-ui/icons/HelpOutline'
import Authenticator from '../helpers/authenticator'

function Homepage() {    
    return (    
        <Grid container>
            <Grid style={myStyle.image} item md={6} xs={12} >
                <img style={{height: '100%', width: '100%'}} src={window.location.origin + '/images/NoticeBoard-logo.png'} alt="HomePage Image"  />
            </Grid>
            <Grid style={myStyle.page} item md={6} xs={12} >
                {/* <Typography style={{width: '100%'}} variant='h5' align='right'>
                    <Link href='/help' underline='none' variant='inherit' color='inherit'>
                        <span>Help</span>
                        <HelpIcon fontSize='large'/> 
                    </Link>
                </Typography> */}
                <Authenticator />
            </Grid>
        </Grid>
    );
}

const myStyle = {
    image: {
        textAlign: 'center', 
        height: '100vh'
    },
    page: {
        backgroundColor: '#4654A3', 
        color: '#ffffff', 
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}

export default Homepage
