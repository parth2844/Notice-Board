import React from 'react'
import Navbar from '../helpers/navbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link'

function Error() {
    return (
        <>
            <Navbar />
            <Grid style={{height: '80vh',display: 'flex',alignItems: 'center',justifyContent: 'center'}} direction='column'>
                
                <Typography variant="h4" style={{margin: '10px'}}>
                    Looks like you got the wrong page :(
                </Typography>
                
                <Button style={{backgroundColor: '#4654a3', color: 'white', margin: '10px'}} >
                    <Link href='/' underline='none' variant='inherit' color='inherit'>
                        Return to Main Page
                    </Link>                    
                </Button>
                
            </Grid>
        </>
    )
}

export default Error
