import {ACTIONS} from './Actions'

export default function reducer(state, action) {
    switch(action.type) {
      case ACTIONS.LOGIN_USER:
        return { userId: action.payload.userId }
      default:
        return state
    }
}