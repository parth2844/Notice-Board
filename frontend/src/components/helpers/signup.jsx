import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

function SignUp() {
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    function handleSubmit (event) {
        event.preventDefault();
        console.log(name)
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
                id='name' label='Full Name' 
                value={name} 
                type='text' 
                onChange={({target}) => setName(target.value)}
                />
            </div>
            <div>
                <TextField 
                required 
                fullWidth 
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
                <Button style={{backgroundColor: '#4654a3', color: 'white'}} type='submit' >
                    Sign Up
                </Button>
            </div>
        </form>
    )
}

export default SignUp
