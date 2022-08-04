import * as TYPES from '../constants/auth'

// SignIn
export const SignInStart = (payload) => {
    return {
        type: TYPES.SIGN_IN_START,
        payload
    }
}

export const SignInSuccess = (payload) => {
    return {
        type: TYPES.SIGN_IN_SUCCESS,
        payload
    }
}

export const SignInFailure = (error) => {
    return {
        type: TYPES.SIGN_IN_FAILURE,
        error: error
    }
}

export const logout = () => {
    return {
        type: TYPES.LOGOUT,
    }
}