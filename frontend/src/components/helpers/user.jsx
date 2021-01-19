import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'

function User(props) {
    return (
        <ListItem>
            <Paper style={{padding: '10px', width: 'inherit'}}  outlined>
                <Typography variant='h6'>
                    {props.userName}
                </Typography>
                
            </Paper>
        </ListItem>
    )
}

export default User
