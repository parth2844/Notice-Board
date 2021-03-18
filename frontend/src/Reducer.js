import {ACTIONS} from './Actions'

export default function reducer(state, action) {
    switch(action.type) {
      case ACTIONS.LOGIN_USER:
        return { 
          token: action.payload.token.data,
          isLoggedIn: true
        }
      
      case ACTIONS.LOGOUT_USER:
        return { 
          token: null,
          isLoggedIn: false
        }
      
      default:
        return state
    }
}