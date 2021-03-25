import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'
import { withRouter } from "react-router"
import { useHistory } from "react-router-dom";

function Group(props) {
    const history = useHistory()
    return (
        <ListItem button onClick={() => history.push('/group/'+ props.id)}>
            <Paper style={{padding: '10px', width: 'inherit'}} elevation={3}>
                <Typography variant='h5'>
                    {props.groupName}
                </Typography>
                <Typography variant='subtitle2'>
                    Number of Users : {props.userCount}
                </Typography>
            </Paper>
        </ListItem>
    )
}

export default withRouter(Group)
