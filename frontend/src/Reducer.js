import {ACTIONS} from './Actions'

export default function reducer(state, action) {
    switch(action.type) {
      case ACTIONS.SET_USER:
        return { 
          isLoggedIn: true,
          user: action.payload.user
        }
      
      case ACTIONS.REMOVE_USER:
        return { 
          isLoggedIn: false,
          user: undefined
        }
      
      default:
        return state
    }
}