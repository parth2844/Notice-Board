import React, { useState, useContext } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {ACTIONS} from '../../Actions'
import {AppContext} from '../../App'
import API from '../../api'
import { withRouter } from "react-router"
import { useHistory } from "react-router-dom";
import setAuthToken from '../../setAuthToken'

function Login() {
    let history = useHistory();
    const app = useContext(AppContext);
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    async function handleSubmit (event) {
        event.preventDefault();

        try {
            const {data} = await API.post('users/login', {
                email: email,
                password: password
            });

            console.log(data.token)

            app.dispatch({ type: ACTIONS.SET_USER, payload: { user: data.user } })
            
            sessionStorage.setItem('user', data.user)
            sessionStorage.setItem('jwtToken', data.token)
            setAuthToken(data.token)

            history.push('/dashboard')
        }
        catch (err) {
            alert(err.response.data.message)
        }

        
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

export default withRouter(Login)
