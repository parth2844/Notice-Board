import React, { useState, useContext } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import API from '../../api'
import {AppContext} from '../../App'

function JoinGroup() {
    const[accessCode, setAccessCode] = useState('')
    const app = useContext(AppContext);

    async function handleSubmit (event) {
        event.preventDefault();

        try {
            await API.patch('groups/addUser', 
            {
                groupId: accessCode
            },
            {
                headers: {
                    'auth-token': sessionStorage.getItem('jwtToken')
                },
            }
            );
            
            alert("Group Joined")
        }
        catch (err) {
            alert(err.response.data.message)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Typography variant='h5' align='center'>
                Join A New Group
            </Typography>
            <div>
                <TextField 
                required 
                fullWidth 
                margin='dense' 
                variant='filled' 
                id='code' label='Access Code' 
                value={accessCode} 
                type='text' 
                onChange={({target}) => setAccessCode(target.value)}
                />
            </div>
            
            
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
                <Button style={{backgroundColor: '#4654a3', color: 'white'}} type='submit' >
                    Join Group
                </Button>
            </div>
        </form>
    )
}

export default JoinGroup
