import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

function Login() {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    function handleSubmit (event) {
        event.preventDefault();
        console.log(email)
        console.log(password)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <TextField 
                required 
                fullWidth 
                autoFocus
                margin='dense' 
                variant='filled' 
                id='email' label='Email' 
                value={email}
                type='email' 
                onChange={({target}) => setEmail(target.value)}
                />
            </div>
            <div>
                <TextField 
                required 
                fullWidth 
                margin='dense' 
                variant='filled' 
                id='password' 
                label='Password' 
                value={password}
                type='password' 
                onChange={({target}) => setPassword(target.value)}
                />
            </div>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
                <Button style={{backgroundColor: '#4654a3', color: 'white'}} type='submit'>
                    Login
                </Button>
            </div>
        </form>        
    )
}

export default Login
