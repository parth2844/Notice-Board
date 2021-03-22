import React, { useState, useContext } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import API from '../../api'
import {AppContext} from '../../App'


function CreateGroup() {
    const[name, setName] = useState('')
    const app = useContext(AppContext);

    async function handleSubmit (event) {
        event.preventDefault();
        
        try {
            await API.post('groups/newGroup', 
            {
                name: name
            },
            {
                headers: {
                    'auth-token': sessionStorage.getItem('jwtToken')
                },
            }
            );
            
            alert("Group Created")
        }
        catch (err) {
            alert(err.response.data.message)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Typography variant='h5' align='center'>
                Create A New Group
            </Typography>
            <div>
                <TextField 
                required 
                fullWidth 
                margin='dense' 
                variant='filled' 
                id='groupName' label='Group Name' 
                value={name} 
                type='text' 
                onChange={({target}) => setName(target.value)}
                />
            </div>
            
            
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
                <Button style={{backgroundColor: '#4654a3', color: 'white'}} type='submit' >
                    Create Group
                </Button>
            </div>
        </form>
    )
}

export default CreateGroup
