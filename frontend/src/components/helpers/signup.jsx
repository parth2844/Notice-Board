import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

function SignUp() {
    return (
        <form>
            <div>
                <TextField 
                required 
                fullWidth 
                autoFocus
                margin='dense' 
                variant='filled' 
                id='Name' label='Full Name' 
                defaultValue='' 
                type='text' 
                />
            </div>
            <div>
                <TextField 
                required 
                fullWidth 
                margin='dense' 
                variant='filled' 
                id='email' label='Email' 
                defaultValue='' 
                type='email' 
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
                defaultValue='' 
                type='password' 
                />
            </div>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
                <Button style={{backgroundColor: '#4654a3', color: 'white'}}>
                    Sign Up
                </Button>
            </div>
        </form>
    )
}

export default SignUp
