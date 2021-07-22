import { SET_USER_DATA, CLEAR_USER_DATA } from '../constants/index'

const initialState = {
    currentUser: null,
}

// Store state and update on action execution
export const user = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                currentUser: action.payload
            }
        case CLEAR_USER_DATA:
            return {
                ...state,
                data: {
                    user: null
                }
            }
        default:
            return state;
    }
}