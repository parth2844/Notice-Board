import React from 'react'
import Grid from '@material-ui/core/Grid';
import NavBar from '../helpers/navbar'

function Homepage() {    
    return (    
        <Grid style={{height: '80vh'}} container>
            <Grid style={myStyle.image} item md={6} xs={12} >
                <img style={{height: '100%', width: '100%'}} src={window.location.origin + '/images/NoticeBoard-logo.png'} alt="HomePage Image"  />
            </Grid>
            <Grid style={myStyle.page} item md={6} xs={12} >
                <NavBar />
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
        height: '100vh'
    }
}

export default Homepage
