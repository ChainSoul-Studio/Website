import { SET_USER_DATA } from '../constants/index'

// Setting user data
export const setUserData = (user) => ({
    type: SET_USER_DATA,
    payload: user
})