import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'

function Notice(props) {
    return (
        <ListItem>
            <Paper style={{padding: '10px', width: 'inherit'}} elevation={3}>
                <Typography variant='h5'>
                    {props.noticeName}
                </Typography>
                <Typography variant='p'>
                    {props.noticeDetails}
                </Typography>
            </Paper>
        </ListItem>
    )
}

export default Notice
